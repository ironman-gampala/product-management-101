# Product Center AI Architecture

Status: Proposed

Date: 2026-08-05

## Decision

Product Center AI supports embedded service and agent harness modes. Embedded mode provides guided AI in Product Center with the current user, page, form, and service context. Agent harness mode supports interactive and autonomous work outside the UI. It also supports faster skill development and evaluation. Both modes use the same Product Center skills, named tool contracts, and service operations to keep workflows and controls consistent.

In both modes, the model interprets intent, selects the next skill step and named operation, and explains results. Product Center Service limits the available skills and operations. It loads authoritative data, validates data and product rules, computes changes and approved impact formulas, verifies sources, checks revisions and approvals, and writes approved changes.

### High-level architecture

```text
             Product Center UI                     User or autonomous task
            |                |                                |
      Product Center   Product Center                   Agent harness
        REST APIs          AI API                             |
            |             AiModule                  Product Center Skills
            |                |                                |
            |      Agent Runtime interface         REST tool implementation
            |                |                                |
            |      Provider agent runtime        Product Center REST API call
            |         |               |                       |
            |   Product Center  Function call                 |
            |       Skill             |                       |
            |                 Registered Node.js              |
            |                   function tools                |
            |                         |                       |
            +-------------------------+-----------------------+
                                      |
                      Product Center operation handlers
```

### Product Center UI

Product Center V2 owns the shared chat interface. It sends page identifiers, the active section, and the current draft revision. It renders structured messages, proposals, warnings, citations, and progress. It shows a concise result first and details on demand. Users can accept, edit, skip, or reject each field, change, finding, or assumption. Product Center Service owns prompts, skills, response formats, product rules, and YAML merges. Product rules use named clients for external services. Product Center schemas and operation handlers do not depend on UI form code.

The UI saves manual edits through Product Center APIs. Each AI operation reloads the authoritative schema, product data, revisions, and allowed choices. A manual form edit cancels a conflicting pending proposal. The UI renders model output as text or approved structured components. Voice input uses the same API after conversion to text. Product Center forms and normal workflows remain available during an AI outage.

### Product Center skills

Each version-controlled skill contains a name, description, workflow, required named operations, and optional references or templates. Skills contain no product logic, access checks, or write controls. The provider loads the full instructions through its native skill mechanism when the model invokes the skill. Product Center schemas and named operations provide defaults and allowed choices.

Each skill defines its task context, allowed operations, confirmation points, and handoff data. Task context contains identifiers, revisions, and confirmed workflow state. Embedded mode derives it from the page, active section, and form revision. Agent harness mode derives it from user input and named read operations. The AI API validates context and access at run start or resume. Harness REST APIs validate both on every request. UI navigation applies only to embedded mode. A harness handoff selects the next skill and returns the next task step.

All skills reside in one package. The release process uploads each approved bundle and records its provider identifier and version. Each skill version is paired with an exact named tool contract version. Deployment configuration selects a compatible provider deployment and version pair. Harness mode installs the same skill content with a matching tool implementation. Embedded tools call operation handlers in process. Harness tools call versioned REST APIs. Both implementations use the same inputs, results, errors, approvals, and write behavior.

### Agent Runtime Interface

The Agent Runtime interface connects `AiModule` to model provider implementations. `AiModule` sends the run request, selected skill, and available tools. The selected provider returns streamed events. The interface contains no Product Center logic or agent loop. `src/ai/runtime` contains the interface and provider implementations without NestJS or Product Center dependencies. It becomes a shared package when another service adopts it.

### Embedded service mode

`AiModule` wires the AI API, request authentication, Redis, the selected provider, function tools, and operation handlers. The provider configures the selected skill and allowed tools. For OpenAI, the Responses request attaches the skill to a hosted shell environment. A Product Center function call returns to the registered Node.js handler. The handler uses the authenticated run context, calls the operation handler, and returns a structured result. The provider then continues the run.

Deployment configuration sets maximum agent turns, run duration, function-tool timeout, and output tokens per response. `AiModule` passes these limits through the Agent Runtime interface. The provider uses native SDK controls and disables parallel function-tool calls. Product Center Service records request and token usage.

The AI API creates a run identifier and streams short work. A worker can continue self-contained document parsing and computations over stored inputs. Work that needs caller access waits for an authenticated request. Redis stores session state, the provider run reference, work status, temporary proposals, approvals, and request keys. After a restart, Product Center Service reloads the stored state. An authenticated resume request supplies the caller context and reloads authoritative data. GitDB and Product Center change requests remain the records for product changes and approvals.

#### Agent runtime providers

```text
AiModule
   |-- Product Center skills
   |-- Product Center function tools
   |-- Redis session implementation
   |
   +-- Agent Runtime interface
                 |
                 +---------------------------------------+
                 |                                       |
       OpenAI implementation            Future provider implementation
                 |
        OpenAI Agents SDK
                 |
            Azure OpenAI
        /openai/v1/responses
                 |
        Responses API tools
          |-- Shell tool: container_auto + skill reference
          `-- Product Center function tools
```

The runtime affects model output and performance. The OpenAI implementation therefore uses the [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents#agents-sdk-vs-responses-api) and native skill runtime. It uses an [Azure OpenAI hosted environment and skill reference](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/skills), registers application-executed function tools, continues runs, and creates traces. The Azure deployment must support the Responses API, shell tool, and skills.

### Agent harness mode

The agent harness owns its run, session, conversation, isolated environment, model and tool calls, and approvals. It supports interactive, supervised, and autonomous runs. Installed skills use the same named tool contracts as embedded mode. The harness tool implementation calls versioned Product Center REST APIs. A document operation receives an explicit file reference through its tool contract.

### Document processing

```text
                     Product document
                            |
     Product Center AI API or Product Center REST API
                            |
        Allowed type and size checks, malware scan
                            |
                 Temporary object storage
                            |
                    Document processor
                            |
Values and source references mapped to the product schema
                            |
     Proposal -> user confirmation -> form operation
```

The document processor extracts text, tables, and source locations. The model proposes mappings to product schema fields. An operation handler checks the mappings and creates structured proposals. Product Center Service uses a named object-storage client. Redis stores document status and references. Encrypted temporary storage holds files under the Product Center retention policy. Product Center Service keeps untrusted document text separate from model and skill instructions. The session reports progress.

### Verification and evidence

GitDB artifacts and history, Product Center change requests, provisioned state, pending release data, and approved business data remain authoritative. UI or harness context selects the required reads.

Each result that can affect a product includes the baseline or current fact, proposed change or claim, sources, assumptions, checks, and unresolved items. Product Center Service assigns a status of verified, needs review, conflicting, or not verified. The model explains the status. This follows a [verification-first product design](https://hamel.dev/blog/posts/eval-smell/).

Answers, document mappings, proposals, comparisons, and impact statements carry source references to a GitDB revision and field, document location, or named service result. The model receives only required source fields and excerpts. Product Center Service computes structural and numeric results. The model explains them and identifies missing required data. Product Center change requests store section summaries, validation reports, and impact statements as durable records.

### Security and access

Product Center APIs authenticate the caller and create a request context with tenant and permissions. The model and skills can select only named operations and supply schema-defined arguments. In embedded mode, the AI API binds this context to the run and exposes permitted tools. Each function handler checks the context before it calls an operation handler. In harness mode, the tool implementation sends its configured caller authentication to the REST API. The API authenticates and authorizes each request. Operation handlers validate inputs and product rules. Tool implementations map results and errors to defined schemas.

Dependent-service clients pass caller authentication when supported. Service-authenticated calls record the caller in audit data. The provider-hosted container has no network access. It receives the selected skill files and minimum data for the current step. Authentication data stays outside model and skill context. Embedded credentials remain in service memory. Harness mode uses the authentication context configured for its tool implementation.

Redis uses tenant separation, encryption, access control, persistence, backup, and retention rules. Logs contain approved metadata only. Each session and document belongs to one tenant and an allowed user set. Model calls use an approved deployment and region.

Writes require an immutable proposal, explicit approval, validation at write time, a matching source revision, and a unique request key. The human-controlled release process performs production deployment.

### Tracing

Product Center Service propagates W3C trace context and sends traces through OpenTelemetry to Jaeger. A custom Agents SDK [trace processor](https://openai.github.io/openai-agents-js/openai/agents/functions/settraceprocessors/) is the only agent export path. It converts agent, model, and tool events to OpenTelemetry records. Request work uses the request trace. Later work starts a worker trace linked by run and session identifiers. The API span closes with the request.

Tracing exports approved fields only: provider, model, deployment, operation, tool, status, duration, token counts, request identifier, and session identifier. It excludes prompts, messages, documents, YAML, tool data, credentials, authentication data, and model reasoning. Agent harnesses own model tracing. Product Center Service traces their REST calls.

### Evaluation and improvement

Each skill has test conversations based on its requirements, including Prodigy routing and journey cases. Tests evaluate routing, authoritative retrieval, field or document mapping, source support, schema and product-rule checks, comparisons, impact calculations, explanations, and approved writes separately. Harness evaluations use the same model, skill version, tool contracts, and test data as embedded mode where possible. Release evaluation uses the embedded provider implementation to cover runtime-specific behavior.

Product Center Service records acceptance without change, edits, rejection reasons, unresolved evidence, validation failures, returned change requests, review time, duration, and token use. Evaluation combines these fields with verified evidence and deterministic checks. Evaluation sets contain approved fields only.

A separate process uses approved, redacted cases to compare changes to skills, tools, models, and deployment settings before release. Reviewed production artifacts become test cases after approval and redaction. Skill and instruction changes follow this reviewed release process.
