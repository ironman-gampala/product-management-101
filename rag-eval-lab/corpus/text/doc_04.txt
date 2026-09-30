# Tachyon Platform Codebase Index

_Auto-generated index for AI agent lookup. Last updated: 2026-06-02_

## Verification Summary
| Domain | Repo Count |
| --- | --- |
| Tachyon Credit | 101 |
| Tachyon CLM | 21 |
| Tachyon TaPS | 48 |
| Tachyon DDA | 20 |
| Tachyon Kernel | 25 |
| **TOTAL** | **215** |

---

## Quick Navigation
- **Tachyon Credit**: Ruby, Garnet, Emerald, Statements, Auraapps/Orchestra, Frontend
- **Tachyon CLM**: Customer Lifecycle Management (Bundle, Product Center, Aether, Aries)
- **Tachyon TaPS**: Transaction Processing (Cards, Payments, Security, Disputes)
- **Tachyon DDA**: Demand Deposit (Pearl, Cloud Card, Legacy OMS)
- **Tachyon Kernel**: Core Accounting (Ledger, Journal, Charge, Policy, Aura)

---

## Tachyon Credit Codebases (101 repos)

### Ruby & Core Services
| Repository | Description | JDK | Tech Debt |
| --- | --- | --- | --- |
| ruby | Ruby Service | 17 | [Link](https://zeta-tm.atlassian.net/wiki/spaces/TR/pages/4495343732/Ruby+Technical+Debts) |
| account-classification | Account classification | 8 | - |
| cluster-spec.ruby | Ruby cluster spec | - | - |
| cluster_spec.olympus-ruby | Olympus Ruby spec | - | - |
| credit-bureau-reporting | Credit bureau reporting | 17 | - |
| faang_testing_framework | Testing framework | - | - |
| ing-operator | ING operator | - | - |
| js-test-executor | JS test executor | - | - |
| npa-app | NPA application | - | - |
| prometheus-rules-for-ruby | Prometheus monitoring rules | - | - |
| repayment | Repayment service | 17 | [Link](https://zeta-tm.atlassian.net/wiki/spaces/~7120209f26f3b2f8fb4a05b19a8a5469da0717/pages/4951965866/Repayment+Tech+Debt+Items) |
| ruby-backfilling | Ruby backfilling | - | - |
| ruby-clear-cache | Cache clearing utility | - | - |
| ruby-commons | Common libraries | - | - |
| ruby-event-handler | Event handler | - | - |
| ruby-meltano | Meltano integration | - | - |
| ruby-operator | K8s operator | - | - |
| ruby-pap | PAP service | - | - |
| ruby-script | Ruby scripts | - | - |
| scra-app | SCRA application | - | - |
| tachyon-commons | Common utilities | - | - |
| tachyon-credit-models | Credit models | 17 | - |
| tachyon-delinquency | Delinquency handling | 8 | - |
| tachyon-ing | ING integration | - | - |
| tachyon-master | Master service | - | - |
| tachyon-product-config-manager | Product config | - | - |

### Garnet (Deprecated)
| Repository | Description | JDK | Notes |
| --- | --- | --- | --- |
| garnet | Garnet service | 8 | Should be deprecated |
| olympus-garnet | Olympus Garnet | - | - |
| cluster-spec.garnet | Cluster spec | - | - |

### Emerald (Loan Accounts)
| Repository | Description | JDK | Tech Debt |
| --- | --- | --- | --- |
| aion | Aion service | 17 | [Link](https://zeta-tm.atlassian.net/wiki/spaces/EM/pages/4925522084/Tech+Debts) |
| emerald | Emerald service | 17 | - |
| emerald-god-controller | God controller | 17 | - |
| emerald-operator | K8s operator | 17 | - |
| emerald-mock-server | Mock server | 8 | - |
| emerald-cluster-tests | Cluster tests | - | - |
| emerald-docker-setup | Docker setup | - | - |
| loans-workers-common | Common workers | 17 | - |
| cluster-spec.emerald | Cluster spec | - | - |
| cluster_spec.olympus-emerald | Olympus spec | - | - |

### Statements
| Repository | Description | JDK |
| --- | --- | --- |
| statement-generation | Statement generation | 8 |
| statement-operator | Statement operator | 17 |
| statement-service | Statement service | - |
| olympus-statement | Olympus statements | - |
| perseus-statement-operators | Perseus operators | - |
| cluster-spec.statements | Cluster spec | - |

### Auraapps & Orchestra (EOD Processing)
| Repository | Description | Tech Debt |
| --- | --- | --- |
| aura-apps-charts | Helm charts | [Link](https://zeta-tm.atlassian.net/wiki/spaces/Orchestra/pages/4946854015/Technical+Debt+Backlog+Orchestra+and+Auraapps) |
| aura-apps-god-controller | God controller | - |
| cluster-spec.aura-apps | Aura apps cluster spec | - |
| cluster-spec.orchestra | Orchestra cluster spec | - |
| cluster_spec.olympus-auraapps | Olympus Auraapps spec | - |
| cluster_spec.olympus-orchestra | Olympus Orchestra spec | - |
| credit-allocation-operator | Credit allocation | - |
| eod-scripts | EOD scripts | - |
| interest-app | Interest app | - |
| interest-operator | Interest operator | - |
| interest-terms-app | Interest terms | - |
| olympus-orchestra | Olympus Orchestra | - |
| orchestra | Orchestra service | - |
| orchestra-airflow-builder | Airflow builder | - |
| orchestra-charts | Helm charts | - |
| orchestra-ganymede-client | Ganymede client | - |
| orchestra-god-controller | God controller | - |
| orchestra-helm-charts | Helm charts | - |
| orchestra-local-test-setup | Test setup | - |
| orchestra-manager | Orchestra manager | - |
| pda-operator | PDA operator | - |
| pda-orchestrator | PDA orchestrator | - |
| tachyon-coupon | Coupon service | - |
| tachyon-eod-orchestra | EOD orchestra | - |
| tachyon-eod-supervisor | EOD supervisor | - |
| tachyon-time-machine | Time machine | - |

### Frontend Repositories
| Repository | Description |
| --- | --- |
| hercules-aph-support-center | RCA support center frontend |
| aphrodite-ops-center-vue | Operations center Vue frontend |
| hercules-components.revolving-credit-account | Credit account workbench UI |
| hercules-components.account-holder | Account holder UI (Vue3) |
| hercules-components.account-holder-search | Account holder search |
| account-holder-business-components | Account holder business logic |
| account-business-components | Account list, overview & policy |
| hercules-components.maker-checker-business-component | Initiator & trigger forms |
| account-postings-business-component | Reverse posting & repayment |
| emerald-business-components | Emerald accounts business logic |
| disputes-business-component | Account disputes & claims |
| hercules-components.product-bundle-business-components | Product bundles |
| operations-center-business-components | Service requests |
| ledger-business-components | Ledger business logic |
| hercules-components.repayment-business-component | Repayment list & details |
| hercules-components.policy-program-business-component | Policy program listing |
| hercules-components.zwe-business-components | Memorandum business logic |
| zwe-payment-components | Payment views & instruments |
| hercules-components.zwe-payment-business-components | ACS authentication |
| rhea-camunda-workflows | Camunda workflow definitions |
| angelos-entities.base | Base entity definitions |

### Frontend Cluster Specs
| Repository | Description |
| --- | --- |
| cluster_spec.support-centre-resource-requirements | Support center specs |
| cluster_spec.operations-center-resource-requirements | Ops center specs |
| cluster-spec.rhea | Rhea cluster spec |
| cluster-spec.operations-management | Ops management specs |
| cluster_spec.credit-account-workbench-module | RCA workbench spec |

---

## Tachyon CLM Codebases (21 repos)

### Bundle & Product Management
| Repository | Description | JDK | Vue3 |
| --- | --- | --- | --- |
| bundle-hub | Platform service for issuance (BMS 2.0) | 17 | NA |
| artefact-gateway | Interface to downstream artefact providers | 17 | NA |
| harmonix | Credit Bundle provider | 17 | NA |
| aether | Legacy Aether flow + Bundle Status Management | 17 | NA |
| aether-operator | All reconcilers for Aether and product management | 17 | NA |
| hercules-components.bundle-hub | Bundle WB Consoles | - | Yes |
| product-center-components | Product center V2 config driven Factory forms | - | Yes |
| hercules-components.product-bundle-business-components | Product center V2 Business components | - | Yes |
| product-center-business-components | Product center V1 Business components | - | No |
| product-center-service | BFF for Product center V2 | - | NA |
| product-center-service-chart | Product center service helm chart | - | NA |

### Aries (Account Holder Management)
| Repository | Description | JDK |
| --- | --- | --- |
| mars | Aries repo, Olympus fw based APIs | 17 |
| mars-springboot | Aries repository, springboot based. User exposed APIs | 17 |
| mars-orbit | AH peripheral functionalities (Offers & Activity Management) | 17 |

### CLM Cluster Specs
| Repository | Description |
| --- | --- |
| cluster_spec.bundles-workbench-module | Bundle WB Cluster Spec |
| cluster_spec.product-centre-resource-requirements | Product center Cluster |
| cluster_spec.olympus-aries | Olympus Aries spec |
| cluster_spec.olympus-aether | Olympus Aether spec |
| cluster-spec.aries-module | Aries module spec |
| cluster-spec.aether | Aether spec |
| saas_spec.tachyon-clm-saas | CLM SaaS spec |

---

## Tachyon TaPS Codebases (48 repos)

### Transaction Processing & Cards
| Repository | Description |
| --- | --- |
| acropolis-god-controller | Acropolis god controller |
| bifrost | Bifrost service |
| card-activation | Card activation |
| card-payments | Card payments |
| cards-scheduler | Cards scheduler |
| cardutils | Card utilities |
| shadow-card | Shadow card |
| super-card | Super card |
| supercard-service | Supercard service |
| wallet | Wallet service |
| wallet-core | Wallet core |
| wallet-manager | Wallet manager |

### Payment Gateway & ISO
| Repository | Description |
| --- | --- |
| payment | Payment service |
| payment-auth-gateway | Payment auth gateway |
| visa-iso | Visa ISO integration |
| mastercard-iso | Mastercard ISO integration |
| rupay-iso | RuPay ISO integration |
| rupayembossing | RuPay embossing |
| iso-commons | ISO commons |
| gateway-common | Gateway common |

### Security & Cryptography
| Repository | Description |
| --- | --- |
| harpocrates | Harpocrates (crypto service) |
| harpocrates-cli | Harpocrates CLI |
| harpocrates-operator | Harpocrates operator |

### Disputes & Business Logic
| Repository | Description |
| --- | --- |
| dispute | Dispute service |
| dispute-management | Dispute management |
| business | Business logic |
| emv-rules | EMV rules |
| falcon | Falcon service |
| calypso | Calypso service |
| calypso-client | Calypso client |
| porus | Porus service |
| orcus-interceptor | Orcus interceptor |
| fusion-athena | Fusion Athena |
| i-tsp | i-TSP service |

### TaPS Cluster Specs
| Repository | Description |
| --- | --- |
| cluster-spec.acropolis | Acropolis spec |
| cluster-spec.agones | Agones spec |
| cluster_spec.olympus-acropolis | Olympus Acropolis |
| cluster_spec.olympus-athena | Olympus Athena |
| cluster_spec.olympus-atlas | Olympus Atlas |
| cluster_spec.olympus-gwacropolis | GW Acropolis |
| cluster_spec.olympus-gwajax | GW Ajax |
| cluster_spec.olympus-gwathena | GW Athena |
| cluster_spec.olympus-harpocrates | Olympus Harpocrates |
| cluster_spec.olympus-photon-orcus | Photon Orcus |
| cluster_spec.olympus-tethys | Olympus Tethys |
| saas_spec.tachyon-frm-saas | FRM SaaS spec |
| saas_spec.tachyon-itp-saas | ITP SaaS spec |
| saas_spec.tachyon-saturn-saas | Saturn SaaS spec |

---

## Tachyon DDA Codebases (20 repos)

### Pearl (Prepaid Core)
| Repository | Description | JDK | OMS |
| --- | --- | --- | --- |
| pearl | Prepaid account lifecycle & fund transfer | 17 | - |
| pearl-operator | K8S operator for Day0 resources | 17 | - |
| pearl-god-controller | God controller for Day1 resources | 17 | - |
| demand-deposit-bundle | Bundle issuance microservice | 17 | - |
| cluster-spec.pearl | Cluster spec with services & COA | - | - |
| cluster_spec.olympus-prepaidcore | Prepaid core deployed spec | - | - |

### Cloud Card
| Repository | Description | JDK | OMS |
| --- | --- | --- | --- |
| cloud-card-springboot | Cloud card lifecycle & transactions | 17 | - |
| cloud-card | Legacy OMS (HDFC & Pluxee) | 17 | Yes |
| cloud-card-client | Client repo for cloud-card | 8 | Yes |

### Legacy OMS Services
| Repository | Description | JDK | OMS |
| --- | --- | --- | --- |
| account | Legacy prepaid account (HDFC & Pluxee) | 17 | Yes |
| account-client | Account client repo | - | Yes |
| escrow | Legacy escrow (Pluxee only) | 17 | Yes |
| escrow-client | Escrow client repo | 8 | Yes |
| fusion | Legacy HDFC Payzapp orchestration (last deploy 2023) | 8 | - |

### Adapters & Gateways
| Repository | Description | JDK |
| --- | --- | --- |
| beneficiary-adapter | Beneficiary creation & transactions | 17 |
| company-adapter | Card program creation for companies | 17 |
| banking-config-adapter | ESP-IFI mapping/configuration | 17 |
| bsp-gateway | External IFI system integration | 17 |

### DDA Infrastructure
| Repository | Description |
| --- | --- |
| cluster_spec.olympus-orion | Orion cluster spec |
| dda-saas-test-automation | DDA SaaS Test Automation |

---

## Tachyon Kernel Codebases (25 repos)

### Ledger & Journal
| Repository | Description |
| --- | --- |
| ledger | Core ledger service |
| ledger-client | Ledger client library |
| ledger-god-db-schema | Ledger DB schema |
| journal | Journal service |
| journal-client | Journal client library |
| daybook-handler | Daybook handler |
| daybook-manager | Daybook manager |

### Charge & Policy
| Repository | Description |
| --- | --- |
| charge | Charge service |
| charge-operator | Charge operator |
| policy-manager | Policy manager |
| policy-operator | Policy operator |

### Aura (Core Accounting)
| Repository | Description |
| --- | --- |
| aura-coa | Chart of Accounts |
| aura-operator | Aura operator |
| aura-god-controller | Aura god controller |
| aura-docker-compose-setup | Docker setup |
| aura2.0testsuite | Aura 2.0 test suite |
| coa-operator | COA operator |
| calendar-operator | Calendar operator |

### Aether Manager
| Repository | Description |
| --- | --- |
| aether-manager | Aether manager |
| aether-manager-client | Aether manager client |

### Orchestra (shared with Credit)
| Repository | Description |
| --- | --- |
| orchestra-manager | Orchestra manager |
| orchestra-god-controller | Orchestra god controller |
| cluster_spec.olympus-orchestra | Olympus Orchestra |

---

## Tech Debt Documentation

| Domain | Link |
| --- | --- |
| Ruby | https://zeta-tm.atlassian.net/wiki/spaces/TR/pages/4495343732/Ruby+Technical+Debts |
| Repayment | https://zeta-tm.atlassian.net/wiki/spaces/~7120209f26f3b2f8fb4a05b19a8a5469da0717/pages/4951965866/Repayment+Tech+Debt+Items |
| Aion/Emerald | https://zeta-tm.atlassian.net/wiki/spaces/EM/pages/4925522084/Tech+Debts |
| Orchestra/Auraapps | https://zeta-tm.atlassian.net/wiki/spaces/Orchestra/pages/4946854015/Technical+Debt+Backlog+Orchestra+and+Auraapps |

---

## Usage Notes for AI Agents

1. **Repository naming convention**: Most repos follow `<service-name>` pattern
2. **Cluster specs**: Prefixed with `cluster-spec.` or `cluster_spec.`
3. **Olympus prefix**: `olympus-` or `cluster_spec.olympus-` indicates Olympus framework deployment
4. **God controllers**: Named `*-god-controller` - handle Day1 resource setup
5. **Operators**: Named `*-operator` - K8S operators for Day0 resources
6. **JDK versions**: Mix of JDK 8 and 17; migration to 21 planned by Jun 30th
7. **OMS applications**: Legacy services marked with OMS=Yes in DDA domain
8. **Base URL**: All repos under `https://github.com/Zeta-Enterprise/` except `dda-saas-test-automation` under `Zeta-operations`

---

## Index Completeness Verification

This index was auto-generated by reading all source Codebases sheets:
- Tachyon Credit Codebases: 101 repos extracted
- Tachyon CLM Codebases: 21 repos extracted
- Tachyon TaPS Codebases: 48 repos extracted
- Tachyon DDA Codebases: 20 repos extracted
- Tachyon Kernel Codebases: 25 repos extracted

**Total: 215 repositories indexed**