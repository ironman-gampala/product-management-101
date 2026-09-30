const form = document.getElementById("run-form");
const modeEl = document.getElementById("mode");
const rolesWrap = document.getElementById("roles-wrap");
const statusEl = document.getElementById("status");
const timelineEl = document.getElementById("timeline");
const runBtn = document.getElementById("run-btn");

function syncRolesVisibility() {
  const open = modeEl.value === "open-ended";
  rolesWrap.classList.toggle("hidden", !open);
}

modeEl.addEventListener("change", syncRolesVisibility);
syncRolesVisibility();

function renderEvents(events) {
  timelineEl.innerHTML = "";
  if (!events?.length) {
    timelineEl.innerHTML = `<p class="hint">No events yet.</p>`;
    return;
  }

  for (const ev of events) {
    const div = document.createElement("div");
    div.className = "event";
    let meta = ev.type;
    let body = "";

    if (ev.type === "agent_start") {
      div.classList.add("message");
      meta = `agent_start · ${ev.agent}`;
      body = "Loading skill and starting turn…";
    } else if (ev.type === "tool_call") {
      div.classList.add("tool");
      meta = `tool_call · ${ev.agent} · ${ev.name}`;
      body = JSON.stringify(ev.args, null, 2);
    } else if (ev.type === "tool_result") {
      div.classList.add("tool");
      meta = `tool_result · ${ev.agent} · ${ev.name}`;
      body =
        ev.result.length > 1200
          ? `${ev.result.slice(0, 1200)}\n…[truncated]`
          : ev.result;
    } else if (ev.type === "agent_message") {
      div.classList.add("message");
      meta = `agent_message · ${ev.agent}`;
      body = ev.content;
    } else if (ev.type === "error") {
      div.classList.add("error");
      meta = `error${ev.agent ? ` · ${ev.agent}` : ""}`;
      body = ev.message;
    } else {
      body = JSON.stringify(ev, null, 2);
    }

    div.innerHTML = `<div class="meta">${meta}</div><pre></pre>`;
    div.querySelector("pre").textContent = body;
    timelineEl.appendChild(div);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const mode = modeEl.value;
  const goal = document.getElementById("goal").value.trim();
  const roles = [
    document.getElementById("role1").value,
    document.getElementById("role2").value,
    document.getElementById("role3").value,
  ].filter((r) => r.trim());

  runBtn.disabled = true;
  statusEl.textContent = "Running agents (this can take a minute)…";
  timelineEl.innerHTML = "";

  try {
    const body = { mode, goal };
    if (mode === "open-ended") body.roles = roles;

    const res = await fetch("/api/runs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok && !data.events) {
      throw new Error(data.error || `HTTP ${res.status}`);
    }
    renderEvents(data.events || []);
    statusEl.textContent =
      data.status === "ok"
        ? `Done · run ${data.id}`
        : `Finished with error · ${data.error || "see timeline"}`;
  } catch (err) {
    statusEl.textContent = err.message || String(err);
    timelineEl.innerHTML = "";
  } finally {
    runBtn.disabled = false;
  }
});
