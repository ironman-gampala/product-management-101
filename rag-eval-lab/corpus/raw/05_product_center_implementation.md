# Product Center — Complete Implementation Reference for Cursor AI

> **Purpose:** Comprehensive implementation context for introducing agentic capabilities in Product Center.
> **Generated:** July 2026 from internal Confluence documentation.

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Core Domain Concepts](#2-core-domain-concepts)
3. [Architecture Overview](#3-architecture-overview)
4. [Repository Map](#4-repository-map)
5. [Tech Stack](#5-tech-stack)
6. [Frontend (Product Center v2)](#6-frontend-product-center-v2)
7. [Backend Services](#7-backend-services)
8. [Bundle Hub — Runtime System of Record](#8-bundle-hub)
9. [Aether Operator — Provisioning Plane](#9-aether-operator)
10. [Blueprint System](#10-blueprint-system)
11. [End-to-End Flows](#11-end-to-end-flows)
12. [API Reference](#12-api-reference)
13. [Data Model](#13-data-model)
14. [Configuration & Deployment](#14-configuration-and-deployment)
15. [Source Code Pointers](#15-source-code-pointers)
16. [Agentic Capability Opportunities](#16-agentic-capability-opportunities)

---

## 1. System Overview

**Product Center** is a Hercules-based workbench that lets bank operators **create, view, configure, and manage product bundles** across their lifecycle on the Zeta Tachyon platform.

A **Product Bundle** is a structured financial offering that combines multiple products (e.g., a credit card + UPI on credit + associated policies). Product Center is the operator-facing UI; **bundle-hub** is the system of record for bundle runtime state; **aether-operator** provisions backend resources when configurations are deployed.

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         BANK OPERATOR                                    │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
                    ┌─────────────▼─────────────┐
                    │     Product Center UI      │  ← Hercules micro-frontend
                    │   (v1 legacy / v2 current) │
                    └─────────────┬─────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
   ┌──────▼──────┐        ┌───────▼───────┐      ┌───────▼────────┐
   │   GitDB /    │        │  bundle-hub   │      │ product-center │
   │  Elenchos    │        │  (runtime SoR)│      │    -service    │
   │ (config SoR) │        │               │      │   (BFF/edge)   │
   └──────┬───────┘        └───────────────┘      └────────────────┘
          │ deploy
          ▼
   ┌──────────────┐     ┌────────────────────────────────────────────┐
   │ Subscription │────►│  aether-operator → god-controllers,       │
   │ Orchestrator │     │  bundle-hub, aether (provisioning plane)   │
   └──────────────┘     └────────────────────────────────────────────┘
```

### Three-Plane Architecture

| Plane | Responsibility | Key Systems |
|-------|---------------|-------------|
| **Configuration Plane** | YAML-based config authoring, change management | GitDB/Elenchos, Angelos forms, Product Center UI |
| **Provisioning Plane** | Deploying configs as K8s CRDs, reconciling into live resources | Subscription Orchestrator, aether-operator, God Controllers |
| **Runtime Plane** | Runtime bundle lifecycle, issuance, state management | bundle-hub, aether, harmonix, artefact-gateway |

---

## 2. Core Domain Concepts

| Concept | Description |
|---------|-------------|
| **Product Bundle** | A named, versioned package of products and policies offered to customers (e.g., `PBUSZZ0001`). Stored as YAML in GitDB and registered in bundle-hub. |
| **Bundle** | A runtime instance of a product bundle issued to a customer. Has a lifecycle (activate, block, close, move, etc.) managed by bundle-hub state machines. |
| **Blueprint** | A reusable template defining the structure of a product bundle. Blueprints live in GitDB under `blueprints/` or legacy `bundle-blueprints/`. |
| **Bundle Provider** | Entity that owns/manages bundles (e.g., Credit `BPRINZZ0001`). |
| **Artefact** | A component within a bundle (card, account, wallet, etc.) with its own lifecycle. |
| **GitDB / Elenchos** | Git-backed configuration store. Product bundle YAML, blueprints, changesets, and deployment labels live here. |
| **Angelos** | Dynamic form framework. Entity configs in `angelos-entities.base` drive product/policy edit forms. |
| **Factory** | v2 workflow for reviewing, deploying, and promoting bundle configuration changes via changesets. |
| **Bundle Explorer** | Federated micro-frontend component for browsing and managing bundle contents. |
| **RRSD** | Resource Requirement Service Descriptor — Kubernetes CRD format (`rrsd.zetaapps.in/v1alpha1`) used to declare product bundles, composite products, blueprints. |
| **Subscription Orchestrator (SO)** | Elenchos service that drives SaaS provisioning. On Factory deploy with `provisionType: PRODUCT_CONFIGURED`, SO creates RRSD CRDs. |
| **Aether Operator** | K8s operator in olympus-aether cluster that watches RRSD CRDs and reconciles them into live backend resources. |
| **God Controller** | Per-module provisioning service (e.g., `ruby-god-controller`, `athena-god-controller`) triggered by aether-operator during deploy. |
| **Component Product Type** | Component type entry inside a blueprint — declares required/allowed component categories. |
| **Component Product** | Runtime-resolved component under a product bundle — materializes concrete product details. |
| **Orchestration / Orchestration Mapping** | Event→workflow mappings for bundle providers, controlling which orchestration runs for which business event. |

### Lifecycle Hierarchy

```
Bundle Provider → Product Bundle Blueprint → Product Bundle → Bundle → Artefact
     (catalog)        (template)              (offering)     (runtime)  (component)
```

---

## 3. Architecture Overview

### Full System Architecture

```
UI Layer (Hercules):
  ├── Product Center v2 (Vue 3, Pinia, @hercules/app-core)
  ├── @zeta-business/bundle-hub (federated components)
  ├── Bundle Explorer (per-blueprint federated module)
  ├── @zeta-business/gitdb-ui (changeset management)
  └── Blueprint Gallery

Edge/BFF:
  └── product-center-service (NestJS 11, tRPC, TypeORM)

Configuration Layer:
  ├── GitDB / Elenchos (config store)
  ├── angelos-entities.base (form definitions)
  └── Subscription Orchestrator

Provisioning Plane (olympus-aether cluster):
  ├── K8s RRSD CRDs (ProductBundle, PaymentProduct, etc.)
  ├── aether-operator (Java Operator SDK)
  └── God Controllers (Ruby, Athena, Acropolis, Emerald)

Runtime Layer:
  ├── bundle-hub (Spring Boot, PostgreSQL — runtime SoR)
  ├── aether (legacy bundle runtime APIs)
  ├── harmonix (issuance orchestration)
  └── artefact-gateway (artefact lifecycle)

Product Domain Services:
  ├── ruby / ruby-god-controller (credit accounts, policies)
  ├── athena / athena-god-controller (payment products)
  ├── acropolis / acropolis-god-controller (card products)
  ├── emerald / emerald-god-controller (loan products)
  ├── aura / aura-coa (chart of accounts, ledger)
  └── prepaidcore / pearl (DDA products)

Analytics:
  └── Redshift (fusion.bh_*) via product-center-service
```

### Key Insight
Product Center talks to GitDB, bundle-hub, and aether **directly** for reads and runtime actions. **Aether Operator** is invisible to the UI — it only runs on the **deploy/provisioning path** after Subscription Orchestrator creates RRSD CRDs.

---

## 4. Repository Map

### Primary Repositories

| Repository | Role | Tech Stack |
|-----------|------|------------|
| `hercules-apps.product-center-v2` | v2 frontend — main Product Center UI | Vue 3, Pinia, `@hercules/app-core`, module federation |
| `product-center-service` | BFF / edge service — analytics, AI, proxies | NestJS 11, tRPC, TypeORM, TypeScript |
| `bundle-hub` | System of record for bundles, product bundles, artefacts | Spring Boot, Java 17, JPA, Flyway |
| `hercules-components.bundle-hub` | Federated UI components (`@zeta-business/bundle-hub`) | Vue, Lerna monorepo |
| `angelos-entities.base` | Angelos form/view configs for products, bundles, policies | YAML entity definitions |
| `cluster_spec.product-centre-resource-requirements` | Cluster deployment spec | Helm, cluster_spec v2.3.1 |
| `product-center-service-chart` | Helm chart for product-center-service | Helm |

### Supporting / Federated Component Repos

| Repository | Role |
|-----------|------|
| `hercules-components.bundle-explorer` | Bundle Explorer federated module loaded per blueprint |
| `hercules-components.gitdb-ui` | GitDB file viewer, changeset management |
| `hercules-components.product-bundle-blueprints-gallary` | Blueprint gallery UI |
| `hercules-tenant-config.<zone>` | Per-tenant hostname, attributes, OAuth, CSP |

### Backend Repositories (Aether Cluster & Provisioning)

| Repository | Role |
|-----------|------|
| `aether-operator` | Provisioning bridge — watches RRSD CRDs, registers in bundle-hub/god-controllers |
| `aether` | Bundle runtime service — legacy runtime APIs |
| `harmonix` | Bundle issuance orchestration |
| `artefact-gateway` | Artefact processing — card/account lifecycle |
| `vbo-center` | VBO (Value Bundle Offering) management |
| `cluster_spec.olympus-aether` | Helm cluster spec deploying entire aether plane |

### Configuration & Entity Repos (angelos-entities.base)

Key `product-center-configs.*` entities:

| Entity | Purpose |
|--------|---------|
| `product_bundle` | Product bundle create/edit form |
| `bundle` | Individual bundle form |
| `product` | Product definition form |
| `composite_product` | Composite product structure |
| `policy_interest`, `policy_fee`, `policy_delinquency`, `policy_mad`, `policy_spend_limit` | Policy forms |
| `pc-be.*` | Backend entity forms (loan, payment, channel, notification) |

---

## 5. Tech Stack

### Frontend
- **Framework:** Vue 3 with Composition API
- **State Management:** Pinia
- **Build:** Vite + Module Federation (Hercules shell)
- **UI Components:** Hercules design system (`@hercules/app-core`)
- **Template Engine:** EJS (for blueprint rendering)
- **Node:** v20 required

### BFF / Edge Service (product-center-service)
- **Runtime:** NestJS 11
- **RPC:** tRPC
- **ORM:** TypeORM
- **Language:** TypeScript
- **AI:** Azure OpenAI integration
- **Cache:** Redis
- **Analytics DB:** Amazon Redshift

### Bundle Hub (Runtime SoR)
- **Framework:** Spring Boot
- **Language:** Java 17
- **ORM:** JPA/Hibernate
- **Migration:** Flyway (disabled at runtime; DDL scripts managed manually)
- **Database:** PostgreSQL
- **Cache:** Redis (optional, Jedis)
- **State Machine:** Squirrel Foundation
- **Resilience:** Resilience4j + Spring Retry
- **HTTP Client:** Retrofit/OkHttp
- **Events:** Atropos (event bus)
- **Concurrency:** CompletableFuture with dedicated thread pools

### Aether Operator
- **Framework:** Java Operator SDK
- **Language:** Java
- **Target:** Kubernetes RRSD CRDs

### Configuration Store
- **GitDB / Elenchos:** Git-backed configuration
- **Format:** YAML (RRSD CRD format)
- **Template Syntax:** ERB (`<%= path.to.value %>`)

---

## 6. Frontend (Product Center v2)

### Route Map

| Route | Component | Purpose |
|-------|-----------|---------|
| `/product-bundles` | `ProductBundleList` | Searchable bundle list with compare |
| `/product-bundle/:code/:tab?/:id?` | `ProductBundle` | Tabbed bundle detail |
| `/product-bundle/:code/:tab/changesets/:changeset?` | `Factory` | Review deployment / promotion |
| `/blueprints` | `BlueprintsListView` | Blueprint gallery |
| `/blueprint-details/:blueprintId` | `BlueprintDetails` | Blueprint detail |
| `/change-management` | `ChangeRequestsTab` | Cross-bundle change requests |
| `/change-management/:id` | `ChangeRequestsTab` | Change request detail |

### Tabs (within Product Bundle detail)

| Tab | Component | Backend |
|-----|-----------|---------|
| **Bundle Explorer** | Federated `zwe-*` explorer (per blueprint) | aether, aura, ruby, emerald, prepaidcore, acropolis, athena |
| **Factory** | GitDB changeset workflow | GitDB / Elenchos |
| **Change Requests** | `@zeta-business/gitdb-ui` | GitDB |
| **Deployments** | Deployment history | GitDB labels |
| **Metrics** | `zwe-bundle-analytics` | product-center-service `/bundlehub/analytics` |

### Key Frontend Features (v2)
- **Blueprints** — reusable product bundle templates with per-blueprint Bundle Explorer config
- **Factory** — structured review → deploy → promote workflow via GitDB changesets
- **Change Management** — cross-bundle change request tracking
- **Bundle comparison** — AI-assisted diff of bundle configs
- **Blueprint-specific explorers** — `blueprintConfigurations` map blueprint codes to explorer module/scope/version
- **Tenant-specific blueprint structure** — `enableTenantSpecificBlueprintStructure` flag

### Key Source Files

```
src/components/CreateBundleButton.vue
src/services/http.ts
src/services/transform.ts
src/composables/useBundleSubscription.ts
src/views/ProductBundleList.vue
src/views/ProductBundle.vue
src/views/BundleFileViewerTab.vue
src/components/ReviewDeployment.vue
src/views/DeploymentsTab.vue
src/views/BundleExplorerTab.vue
src/services/gitdb-file-viewer-service/index.ts
src/common/constants.ts
src/common/blueprintConfigurations.ts
src/router/index.ts
```

---

## 7. Backend Services

### Services Called Directly by Product Center UI (v2)

| Service | Config Key | Purpose |
|---------|-----------|---------|
| GitDB / Elenchos | `BASE_URL.GIT_DB` | Read/write bundle YAML, changesets, labels, blueprints |
| Subscription Orchestrator | `BASE_URL.SO` | SaaS product subscriptions |
| Aether | `BASE_URL.AETHER` | Bundle runtime data, harmonix |
| bundle-hub | `BASE_URL.BUNDLE_HUB` | Product bundle search/get, registration |
| product-center-service | `BASE_URL.PRODUCT_CENTER_SERVICE` | Analytics, AI, proxies |
| Aura / COA | `coaAuraUrl` | Chart of accounts |
| Athena Manager | `athenaManagerV2Url` | Programs, account management |
| Ruby | `rubyUrl` | Credit account policies |
| Emerald | `emeraldUrl` | Loan products |
| Acropolis | `acropolisServiceUrl` | Card embossing |
| Angelos | `angelosBaseUrl` | Dynamic form rendering |

### product-center-service Endpoints

| Route | Method | Purpose | Upstream |
|-------|--------|---------|----------|
| `/bundlehub/analytics/:tenantId/product-bundles` | GET | Product bundle counts | Redshift `fusion.bh_product_bundle` |
| `/bundlehub/analytics/:tenantId/states` | GET | Bundle state distribution | Redshift `fusion.bh_bundle` |
| `/bundlehub/analytics/:tenantId/trends` | GET | Daily bundle trends | Redshift |
| `/aura/coa` | GET | Chart of accounts | Aura COA API |
| `/athena-manager/programs` | GET | Programs list | Athena Manager v2 |
| `/ai/generate` | POST | AI text generation | Azure OpenAI |
| `/ai/chat` | POST | AI chat | Azure OpenAI |
| `/ai/session` | POST/PATCH/GET/DELETE | AI session management | Redis |
| `/health` | GET | Health check | — |
| tRPC `execute` | POST | Generic HAR→fetch proxy | Configurable upstream |

---

## 8. Bundle Hub

Bundle Hub is a Spring Boot service that manages **bundle lifecycle orchestration** for IFI-scoped entities.

### API Surface

Base path: `/api/v1/ifis/{ifiID}/`

| Resource | Key Endpoints | Used By |
|----------|--------------|---------|
| `productBundles` | `POST` register, `GET /{code}`, `POST /search`, `PATCH /{code}` | PC v2 list/detail, deploy |
| `productBundleBlueprints` | register, get, search, patch | Blueprint registration |
| `bundles` | register, search, lifecycle actions (activate, close, move, block...) | Bundle Explorer, ops consoles |
| `bundleProviders` | register, get, search | Provider management |
| `artefacts` | register, activate, close, move, deactivate, retain | Artefact lifecycle |
| `orchestrations` | CRUD + mapping to bundle providers | Orchestration config |
| `artefactProviders` | register, get by code | Provider configuration |
| `tags` / `vectors` | Per-object tagging and metadata | Metadata |

### Bundle Lifecycle States

```
ACTIVE -> CLOSURE_INITIATED -> CLOSURE_IN_PROGRESS -> CLOSED
ACTIVE -> BLOCKED -> ACTIVE (unblock)
ACTIVE -> MOVE_INITIATED -> MOVE_IN_PROGRESS -> ACTIVE (moved)
```

States managed by `BundleStateMachineBuilder` (Squirrel Foundation FSM).

### Key Architecture

- **Controllers:** `/api/v1/ifis/{ifiID}/...` pattern
- **Orchestrator services:** `*OrchestratorServiceImpl` — cross-entity workflow orchestration
- **Domain services:** `*ServiceImpl` — single-entity logic
- **Persistence:** `TransactionalPersistenceServiceImpl` — atomic multi-entity writes
- **State machines:** `BundleStateMachineBuilder`, `ArtefactStateMachineBuilder`
- **Events:** `AtroposEventPublisherService` publishes lifecycle events
- **External clients:** Aether, Artefact Gateway, Delta/Crux IAM
- **Concurrency:** `CompletableFuture` with DB_READ, DB_WRITE, REDIS executors

### Data Stores

| Store | Purpose |
|-------|---------|
| PostgreSQL (`bundle_hub` schema) | Runtime SoR — bundles, product bundles, artefacts |
| Redis | Optional cache for provider/product bundle/blueprint responses |
| Redshift (`fusion.bh_*`) | Analytics (via Metis CDC replication) |

---

## 9. Aether Operator

### What It Does
Aether Operator is a Kubernetes operator (Java Operator SDK) deployed in the olympus-aether cluster. It watches RRSD CRDs created by Subscription Orchestrator and reconciles them into live backend resources.

> **Important:** Product Center UI never calls aether-operator directly. It only runs on the deploy/provisioning path.

### Reconcilers

| Reconciler | Watches RRSD Kind | Downstream Action |
|-----------|-------------------|-------------------|
| `ProductBundleReconciler` | `ProductBundle` | Fetches blueprint → waits for dependent CRs → `POST /productBundles` to bundle-hub |
| `ProductBundleBlueprintReconciler` | `ProductBundleBlueprint` | `POST /productBundleBlueprints` to bundle-hub |
| `ProductBundleBlueprintFileSetReconciler` | `ProductBundleBlueprintFileSet` | Reads blueprint from bundle-hub, writes files to GitDB |
| `PaymentProductReconciler` | `PaymentProduct` | Triggers Athena god-controller |
| `TransactionAccountProductReconciler` | `TransactionAccountProduct` | Triggers Ruby god-controller |
| `LoanAccountProductReconciler` | `LoanAccountProduct` | Triggers Emerald god-controller |
| `BundleProviderReconciler` | `BundleProvider` | `POST /bundleProviders` on bundle-hub |
| `ArtefactProviderReconciler` | `ArtefactProvider` | `POST /artefactProviders` on bundle-hub |
| `OrchestrationReconciler` | `Orchestration` | `PUT /orchestrations` on bundle-hub |
| `BundleStatusPolicyReconciler` | `BundleStatusPolicy` | Pushes policy to aether |
| `VboReconciler` | `Vbo` | Provisions in vbo-center |

### ProductBundle Provisioning Logic

1. Resolve optional fields on the ProductBundle spec
2. Fetch blueprint from bundle-hub (`GET /productBundleBlueprints/{code}`)
3. Wait for dependent composite-product CRs (PaymentProduct, TransactionAccountProduct, etc.) to reach `PROVISIONED`
4. Build `RegisterProductBundleRequest` from spec + blueprint
5. POST to bundle-hub `/api/v1/ifis/{tenantId}/productBundles`
6. Update CR status to `PROVISIONED` (or `FAILED`)

---

## 10. Blueprint System

### Blueprint Structure in SaaS Spec

```
helm-chart/blueprints/<BLUEPRINT_CODE>/
├── blueprint.yaml              # Blueprint entity spec (component product types)
├── files.yaml                  # Manifest of initial files (CR payloads, UI, rules)
├── dependent-templates/        # Child CR templates (Ruby, Athena, Acropolis, etc.)
└── payloads/
    ├── product-bundle/         # ERB-templated composite product YAMLs
    ├── view-configs/           # UI view configs for Product Centre V2
    └── rules/                  # Compliance rules
```

### Blueprint Onboarding Flow

```
saas_spec.tachyon-credit-saas (authoring)
  → Helm deploy → ProductBundleBlueprint CR + ProductBundleBlueprintFileSet CRs (K8s)
  → aether-operator:
      → Register blueprint in bundle-hub
      → Publish dependent templates to Delta
      → Emit view configs + initial YAMLs to god.blueprint (GitDB)
```

### Blueprint Entity Example

```json
{
  "ifiID": 600309,
  "code": "PBBUS001001",
  "bundleProviderCode": "BPRINZZ0001",
  "productBundleFamilyCode": "PBFINZZ0002",
  "name": "US retail credit product bundle blueprint",
  "componentProductTypeResponse": [
    {
      "alias": "RUBY-TXN_ACCOUNT",
      "artefactProviderCode": "APRINZZ0001",
      "productType": { "code": "PRTINZZ0001", "artefactType": "REVOLVING_CREDIT" },
      "isIssuanceMandatory": true,
      "issuancePriorityOrder": 1
    },
    {
      "alias": "RUBY_PAP-PAYMENT_ACCOUNT",
      "artefactProviderCode": "APRINZZ0002",
      "productType": { "code": "PRTINZZ0002", "artefactType": "PAYMENT_ACCOUNT" },
      "isIssuanceMandatory": true,
      "issuancePriorityOrder": 2
    },
    {
      "alias": "PORUS-RESOURCE",
      "artefactProviderCode": "APRINZZ0003",
      "productType": { "code": "PRTINZZ0003", "artefactType": "RESOURCE" },
      "isIssuanceMandatory": true,
      "issuancePriorityOrder": 3
    },
    {
      "alias": "PRIMARY_CARD_1",
      "artefactProviderCode": "APRINZZ0008",
      "productType": { "code": "PRTINZZ0009", "artefactType": "CARD" },
      "isIssuanceMandatory": false,
      "issuancePriorityOrder": 4
    }
  ]
}
```

### Component Product Types in a Typical Credit Blueprint

| Alias | Product Type | Artefact Provider |
|-------|-------------|-------------------|
| `RUBY-TXN_ACCOUNT` | Transaction Account Product | Ruby |
| `RUBY_PAP-PAYMENT_ACCOUNT` | Payment Account Product | Athena |
| `PORUS-RESOURCE` | Resource Product | Athena |
| `PRIMARY_CARD_1` | Primary card form factor | Acropolis |
| `CARDHOLDER_PROFILE` | Cardholder profile | Acropolis |
| `LOAN_ACCOUNT_1` | Loan account (optional) | Emerald |
| `RECEIVER_PROFILE` | Notification receiver profile | Luminos |

---

## 11. End-to-End Flows

### Flow 1: Create Product Bundle from Blueprint

```
Operator → /blueprints → select blueprint
  │
  ├─→ GitDB: read blueprints/{tenantId}/{code}/ (all YAML/JSON/CSS files)
  │
  ├─→ SO v2: resolve subscription and SaaS product
  │
  ├─→ Template rendering (EJS): inject productCode, tenantId, tenantCode, subscription
  │
  ├─→ GitDB: write rendered files to product_configurations/product_<code>/
  │
  ├─→ GitDB: create label + changeset (create-<productCode>)
  │
  └─→ Redirect to Factory tab for editing
```

### Flow 2: Edit & Deploy Bundle Configuration

```
Operator edits config in Factory (Angelos forms / YAML editor)
  │
  ▼
GitDB: save changes to changeset
  │
  ▼
Create change request → Review → Approve → Merge to master
  │
  ▼
Review Deployment (compare last deployed commit vs latest master)
  │
  ▼
Deploy (provisionType: PRODUCT_CONFIGURED, tags: [PRODUCT_CONFIGURED, tags://product/<code>])
  │
  ▼
Subscription Orchestrator: aggregate data, schedule provisioning
  │
  ▼
Subscription Provisioner/Jenkins: apply K8s RRSD CRDs
  │
  ▼
aether-operator reconcilers:
  ├── TransactionAccountProductReconciler → Ruby god-controller
  ├── PaymentProductReconciler → Athena/Acropolis god-controllers
  ├── ProductBundleReconciler → bundle-hub POST /productBundles
  └── OrchestrationReconciler → bundle-hub PUT /orchestrations
  │
  ▼
CR status → PROVISIONED
  │
  ▼
Product Center polls SO for status → shows in Deployments tab
```

### Flow 3: Bundle Listing

```
Operator → /product-bundles
  │
  ├─→ GitDB: list files under product_configurations/
  │
  └─→ bundle-hub: POST /productBundles/search
  │
  ▼
Merge results → display bundle cards (PROVISIONED if bundle-hub state = ACTIVE)
```

### Flow 4: Bundle Lifecycle (Runtime)

```
Operator → Bundle Explorer
  │
  ▼
bundle-hub: POST /bundles (register runtime bundle instance)
  │
  ▼
harmonix orchestrates issuance:
  → aether runtime → artefact-gateway (card creation) → acropolis (embossing)
  │
  ▼
Bundle state transitions via state machine:
  activateIssuance → blockIssuance → initiateClosure → close
  │
  ▼
Events published to Atropos → downstream consumers
```

### SO Provision Stage Flow

```
REQUESTED → INITIATED → PROVISIONING_CONFIGURATIONS → EXECUTING_GOD_CONTROLLERS → COMPLETED
                                    │                           │
                                    └── FAILED                  └── FAILED
```

---

## 12. API Reference

### GitDB APIs Used by Product Center

| Purpose | Endpoint |
|---------|----------|
| List folder | `GET {GIT_DB}/tenants/{tenantId}/db/{dbId}/changesets/{changeset}/documents-ls?path={folder}` |
| Load document | `GET {GIT_DB}/tenants/{tenantId}/db/{dbId}/changesets/{changeset}/document-content/?path={path}` |
| Save documents | `POST {GIT_DB}/tenants/{tenantId}/db/{dbId}/changesets/{changeset}/multi-documents-v2` |
| Create label | `POST {GIT_DB}/tenants/{tenantId}/db/{dbId}/labels/` |
| Create changeset | `POST {GIT_DB}/tenants/{tenantId}/db/{dbId}/changesets/` |
| Create PR | `POST {GIT_DB}/tenants/{tenantId}/db/{dbId}/pullRequests` |
| List PRs | `GET {GIT_DB}/tenants/{tenantId}/db/{dbId}/pullRequests-v2?labels=...` |
| Approve/Merge/Reject PR | `POST {GIT_DB}/tenants/{tenantId}/db/{dbId}/pullRequests/{id}/action/{ACTION}` |

### Bundle Hub APIs

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/ifis/{ifiID}/productBundles` | POST | Register product bundle |
| `/api/v1/ifis/{ifiID}/productBundles/search` | POST | Search product bundles |
| `/api/v1/ifis/{ifiID}/productBundles/{code}` | GET | Get product bundle by code |
| `/api/v1/ifis/{ifiID}/productBundles/{code}` | PATCH | Update product bundle |
| `/api/v1/ifis/{ifiID}/productBundleBlueprints` | POST | Register blueprint |
| `/api/v1/ifis/{ifiID}/productBundleBlueprints/search` | POST | Search blueprints |
| `/api/v1/ifis/{ifiID}/bundles` | POST | Register bundle (issuance) |
| `/api/v1/ifis/{ifiID}/bundles/search` | POST | Search bundles |
| `/api/v1/ifis/{ifiID}/bundles/{id}/blockIssuance` | POST | Block bundle |
| `/api/v1/ifis/{ifiID}/bundles/{id}/initiateClosure` | POST | Initiate closure |
| `/api/v1/ifis/{ifiID}/artefacts/register` | POST | Register artefact |
| `/api/v1/ifis/{ifiID}/artefacts/activate` | POST | Activate artefact |
| `/api/v1/ifis/{ifiID}/orchestrations` | PUT | Register orchestration |
| `/api/v1/ifis/{ifiID}/bundleProviders` | POST | Register bundle provider |
| `/api/v1/ifis/{ifiID}/artefactProviders` | POST | Register artefact provider |

### SO Status APIs

| Purpose | Endpoint |
|---------|----------|
| Deployment snapshot | `GET {SO}/tenants/{tenantId}/subscriptions/{subId}/deployment-snapshot/provisionType/PRODUCT_CONFIGURED?productCode={code}` |
| Last completed provision | `GET {SO}/tenants/{tenantId}/subscriptions/{subId}/deployment-last-complete/provisionType/PRODUCT_CONFIGURED?productCode={code}` |
| Provision detail | `GET {SO}/tenants/{tenantId}/subscriptions/{subId}/provisions/{provisionId}/status-v2?detailed=true` |
| Provision history | `GET {SO}/tenants/{tenantId}/subscriptions/{subId}/provisions?provisionType=PRODUCT_CONFIGURED&productCode={code}` |
| Initiate provision | `POST {SO}/tenants/{tenantId}/subscriptions/{subId}/provisions/{provisionId}/events/PRODUCT_CONFIGURED` |

### Provision Initiation Body

```json
{
  "saasProductId": "<resolved>",
  "tags": ["PRODUCT_CONFIGURED", "tags://product/<productCode>"]
}
```

---

## 13. Data Model

### Bundle Hub Database Tables

| Table | Entity | Key Constraints |
|-------|--------|----------------|
| `bh_bundle_provider` | BundleProvider | Composite PK `(code, ifi_id)` |
| `bh_product_bundle_blueprint` | ProductBundleBlueprint | Composite PK `(code, ifi_id)` |
| `bh_product_bundle` | ProductBundle | Unique `(ifi_id, code)` |
| `bh_bundle` | Bundle | Unique `(issuance_request_id, ifi_id)` |
| `bh_artefact` | Artefact | Partial unique indexes for active combinations |
| `bh_component_product_type` | ComponentProductType | FK to blueprint/product type |
| `bh_component_product` | ComponentProduct | FK to product and product_bundle |
| `bh_policy` | Policy | JSON value + policy state |
| `bh_orchestration` | Orchestration | Named orchestration definition |
| `bh_orchestration_mapping` | OrchestrationMapping | Unique index for event/product/orchestration/IFI |
| `bh_tags` | Tags | Object metadata labels |
| `bh_vectors` | Vectors | Structured metadata records |
| `bh_*_history` | History tables | Trigger-maintained audit history |
| `bundles.status_change_event_metadata` | StatusChangeEvent | Partitioned by month, 12-month retention |

### GitDB Structure

```
tenant_configuration.<zone>.<tenantCode>/
  └── product_configurations/
      └── product_<productCode>/
          ├── product-bundle.yaml          (ProductBundle CR)
          ├── transaction-account-product.yaml  (TransactionAccountProduct CR)
          ├── payment-product.yaml         (PaymentProduct CR)
          ├── loan-account-product.yaml    (LoanAccountProduct CR - optional)
          └── external-component-products.yaml
```

---

## 14. Configuration and Deployment

### Tenant Configuration

Per-tenant overrides in `hercules-tenant-config.zone/product-center/{hostname}.json`:
- OAuth realm, sandbox, clientId
- All `BASE_URL.*` service endpoints
- Feature flags (`enableBlueprints`, `enableFeedback`, etc.)
- `policyMapping` — maps policy types to Angelos entity IDs
- `blueprintConfigurations` — per-blueprint explorer module/scope/version
- CSP rules

### Important Tenant Attributes

| Attribute | Purpose |
|-----------|---------|
| `tenantId` | IFI ID (e.g., 600309) |
| `system.tenantName` | Tenant code (e.g., `lsg`) |
| `system.tenantConfigRepo` | GitDB repo identifier |
| `BASE_URL.GIT_DB` | GitDB API base |
| `BASE_URL.SO` | Subscription Orchestrator API base |
| `BASE_URL.BUNDLE_HUB` | Bundle Hub API base |
| `BASE_URL.PRODUCT_CENTER_SERVICE` | BFF service base |
| `enableTenantSpecificBlueprintStructure` | Controls blueprint path resolution |
| `provisionType` | Usually `PRODUCT_CONFIGURED` |

### Template Rendering Context

When rendering blueprint files, Product Center provides:

```json
{
  "tcm": {
    "productCode": "<generatedSuffix>",
    "tenantId": 600309,
    "tenantCode": "lsg",
    "subscriptionId": "<resolved>",
    "saasProductId": "<resolved>",
    "productBundle": { "name": "<input>", "description": "<input>" }
  },
  "metadata": { "productCode": "...", "tenantId": "..." },
  "subscription": { "subscriptionId": "...", "saasProductId": "...", "moduleName": "..." },
  "productBundle": { "name": "...", "description": "..." }
}
```

### Local Development

```bash
# Frontend
cd hercules-apps.product-center-v2
npm install          # Node 20 required
npm run serve        # local dev server

# BFF Service
cd product-center-service
pnpm install
pnpm run start:dev   # port 3000 (app) + 9100 (metrics)

# Bundle Hub
cd bundle-hub
mvn clean install
# Run application module with local Postgres
```

---

## 15. Source Code Pointers

### Product Center v2

```
src/components/CreateBundleButton.vue     — Bundle creation from blueprint
src/services/http.ts                      — HTTP client utilities
src/services/transform.ts                 — Data transformation
src/composables/useBundleSubscription.ts  — Subscription resolution
src/views/ProductBundleList.vue           — Bundle list view
src/views/ProductBundle.vue               — Bundle detail shell
src/views/BundleFileViewerTab.vue         — Factory/edit tab
src/components/ReviewDeployment.vue       — Deployment review
src/views/DeploymentsTab.vue              — Deployment history
src/views/BundleExplorerTab.vue           — Runtime explorer
src/common/constants.ts                   — Constants and config
src/common/blueprintConfigurations.ts     — Blueprint-to-explorer mapping
src/router/index.ts                       — Route definitions
```

### Bundle Hub

```
controllers/*Controller.java              — REST API layer
service/*OrchestratorServiceImpl.java     — Workflow orchestration
service/persistence/TransactionalPersistenceServiceImpl.java — Atomic writes
statemachines/bundle/*                    — Bundle lifecycle FSM
statemachines/artefact/*                  — Artefact lifecycle FSM
repository/*Repository.java              — JPA data access
commons/models/*                          — Domain models
commons/dtos/*                            — Request/response DTOs
commons/enums/*                           — Enums (states, events, types)
```

### Subscription Orchestrator

```
controllers/ProvisionController.java
states/aggregation/ProductDataAggregationState.java
states/configurationprovision/ProductConfigurationProvisionState.java
states/godcontrollerexecution/GodControllerExecutionState.java
states/provisioncompletion/CompletionState.java
util/StateHandler.java
```

### GitDB UI Components

```
packages/gitdb-ui/src/gitdb-file-viewer/GitdbFileViewer.vue
packages/gitdb-ui/src/gitdb-provision-status/GitdbProvisionStatus.vue
packages/gitdb-ui/src/gitdb-review-deployment/GitdbReviewDeployment.vue
packages/gitdb-ui/src/gitdb-provision-status-list/GitdbProvisionStatusList.vue
```

---

## 16. Agentic Capability Opportunities

Based on the implementation details above, here are the key areas where agentic capabilities can be introduced in Product Center:

### 1. Blueprint-Driven Bundle Creation Agent
- **Current:** Manual blueprint selection → template rendering → manual YAML editing
- **Agentic:** Natural language input ("Create a credit card bundle with 18% interest, zero annual fee, virtual + physical card") → agent selects blueprint, fills template values, configures policies
- **Touch points:** `CreateBundleButton.vue`, `blueprintToBundle()`, GitDB write APIs

### 2. Policy Configuration Agent
- **Current:** Manual YAML editing of interest, fee, delinquency, MAD, spend limit policies
- **Agentic:** Agent validates policy combinations, suggests defaults, catches conflicts
- **Touch points:** `angelos-entities.base` policy configs, Factory tab, Ruby/Athena APIs

### 3. Bundle Comparison & Analysis Agent
- **Current:** AI-assisted diff via Azure OpenAI (already partially implemented)
- **Agentic:** Expand to explain differences, suggest optimizations, detect configuration drift
- **Touch points:** `product-center-service /ai/chat`, `BUNDLE_SPHERE_API_BASE_URL`

### 4. Deployment & Provisioning Agent
- **Current:** Manual deploy trigger → polling for status
- **Agentic:** Pre-deployment validation, auto-remediation on failures, intelligent retry
- **Touch points:** SO provision APIs, aether-operator reconcilers, god-controller callbacks

### 5. Bundle Lifecycle Management Agent
- **Current:** Manual lifecycle transitions (activate, block, close)
- **Agentic:** Automated lifecycle workflows, batch operations, schedule-based transitions
- **Touch points:** bundle-hub lifecycle APIs, state machine transitions

### 6. Observability & Debugging Agent
- **Current:** Manual log inspection, status polling
- **Agentic:** Auto-diagnosis of provisioning failures, trace correlation, suggested fixes
- **Touch points:** SO status APIs, K8s CR status, god-controller logs, Redshift analytics

### 7. Dynamic Resource Extension Agent
- **Current:** Manual YAML upload for extending blueprint resources (SPI-21177)
- **Agentic:** Agent generates extension YAML based on natural language, validates against CRD schemas, merges with blueprint defaults
- **Touch points:** Resource Validation Service, Dynamic Resource Manager, Merge Engine

### Key Integration Points for Agentic Layer

| System | Integration Method | What Agent Can Do |
|--------|-------------------|-------------------|
| GitDB | REST API | Read/write YAML configs, manage changesets, create PRs |
| bundle-hub | REST API | Query bundles, register products, manage lifecycle |
| Angelos | YAML configs | Generate/validate form schemas for policies |
| SO | REST API | Trigger deployments, monitor status, handle failures |
| product-center-service | tRPC/REST | Leverage existing AI endpoints, analytics |
| Ruby/Athena/Acropolis | REST API | Validate policy configs against module constraints |

---

*Document compiled from: [Product Center — End-to-End Architecture Guide](https://zeta-tm.atlassian.net/wiki/spaces/TN/pages/5190025890), [Product Centre V2 with Blueprints](https://zeta-tm.atlassian.net/wiki/spaces/AET/pages/5122359411), [Day 1 Bundle Provisioning Journey](https://zeta-tm.atlassian.net/wiki/spaces/TN/pages/5050597574), [Bundle Hub KT](https://zeta-tm.atlassian.net/wiki/pages/viewpageattachments.action?pageId=5203264036), [Product Center SSOT](https://zeta-tm.atlassian.net/wiki/spaces/TN/pages/3440116369).*
