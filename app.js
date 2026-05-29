/* ══════════════════════════════════════════════
   Passport Stamp Tracker — app.js
   ══════════════════════════════════════════════ */

// ── Country Data ──────────────────────────────
const COUNTRIES = [
  {name:"Afghanistan",code:"AF",flag:"🇦🇫"},{name:"Albania",code:"AL",flag:"🇦🇱"},
  {name:"Algeria",code:"DZ",flag:"🇩🇿"},{name:"Andorra",code:"AD",flag:"🇦🇩"},
  {name:"Angola",code:"AO",flag:"🇦🇴"},{name:"Antigua and Barbuda",code:"AG",flag:"🇦🇬"},
  {name:"Argentina",code:"AR",flag:"🇦🇷"},{name:"Armenia",code:"AM",flag:"🇦🇲"},
  {name:"Australia",code:"AU",flag:"🇦🇺"},{name:"Austria",code:"AT",flag:"🇦🇹"},
  {name:"Azerbaijan",code:"AZ",flag:"🇦🇿"},{name:"Bahamas",code:"BS",flag:"🇧🇸"},
  {name:"Bahrain",code:"BH",flag:"🇧🇭"},{name:"Bangladesh",code:"BD",flag:"🇧🇩"},
  {name:"Barbados",code:"BB",flag:"🇧🇧"},{name:"Belarus",code:"BY",flag:"🇧🇾"},
  {name:"Belgium",code:"BE",flag:"🇧🇪"},{name:"Belize",code:"BZ",flag:"🇧🇿"},
  {name:"Benin",code:"BJ",flag:"🇧🇯"},{name:"Bhutan",code:"BT",flag:"🇧🇹"},
  {name:"Bolivia",code:"BO",flag:"🇧🇴"},{name:"Bosnia and Herzegovina",code:"BA",flag:"🇧🇦"},
  {name:"Botswana",code:"BW",flag:"🇧🇼"},{name:"Brazil",code:"BR",flag:"🇧🇷"},
  {name:"Brunei",code:"BN",flag:"🇧🇳"},{name:"Bulgaria",code:"BG",flag:"🇧🇬"},
  {name:"Burkina Faso",code:"BF",flag:"🇧🇫"},{name:"Burundi",code:"BI",flag:"🇧🇮"},
  {name:"Cambodia",code:"KH",flag:"🇰🇭"},{name:"Cameroon",code:"CM",flag:"🇨🇲"},
  {name:"Canada",code:"CA",flag:"🇨🇦"},{name:"Cape Verde",code:"CV",flag:"🇨🇻"},
  {name:"Central African Republic",code:"CF",flag:"🇨🇫"},{name:"Chad",code:"TD",flag:"🇹🇩"},
  {name:"Chile",code:"CL",flag:"🇨🇱"},{name:"China",code:"CN",flag:"🇨🇳"},
  {name:"Colombia",code:"CO",flag:"🇨🇴"},{name:"Comoros",code:"KM",flag:"🇰🇲"},
  {name:"Congo",code:"CG",flag:"🇨🇬"},{name:"Costa Rica",code:"CR",flag:"🇨🇷"},
  {name:"Croatia",code:"HR",flag:"🇭🇷"},{name:"Cuba",code:"CU",flag:"🇨🇺"},
  {name:"Cyprus",code:"CY",flag:"🇨🇾"},{name:"Czech Republic",code:"CZ",flag:"🇨🇿"},
  {name:"Denmark",code:"DK",flag:"🇩🇰"},{name:"Djibouti",code:"DJ",flag:"🇩🇯"},
  {name:"Dominican Republic",code:"DO",flag:"🇩🇴"},{name:"Ecuador",code:"EC",flag:"🇪🇨"},
  {name:"Egypt",code:"EG",flag:"🇪🇬"},{name:"El Salvador",code:"SV",flag:"🇸🇻"},
  {name:"Estonia",code:"EE",flag:"🇪🇪"},{name:"Ethiopia",code:"ET",flag:"🇪🇹"},
  {name:"Fiji",code:"FJ",flag:"🇫🇯"},{name:"Finland",code:"FI",flag:"🇫🇮"},
  {name:"France",code:"FR",flag:"🇫🇷"},{name:"Gabon",code:"GA",flag:"🇬🇦"},
  {name:"Gambia",code:"GM",flag:"🇬🇲"},{name:"Georgia",code:"GE",flag:"🇬🇪"},
  {name:"Germany",code:"DE",flag:"🇩🇪"},{name:"Ghana",code:"GH",flag:"🇬🇭"},
  {name:"Greece",code:"GR",flag:"🇬🇷"},{name:"Guatemala",code:"GT",flag:"🇬🇹"},
  {name:"Guinea",code:"GN",flag:"🇬🇳"},{name:"Haiti",code:"HT",flag:"🇭🇹"},
  {name:"Honduras",code:"HN",flag:"🇭🇳"},{name:"Hong Kong",code:"HK",flag:"🇭🇰"},
  {name:"Hungary",code:"HU",flag:"🇭🇺"},{name:"Iceland",code:"IS",flag:"🇮🇸"},
  {name:"India",code:"IN",flag:"🇮🇳"},{name:"Indonesia",code:"ID",flag:"🇮🇩"},
  {name:"Iran",code:"IR",flag:"🇮🇷"},{name:"Iraq",code:"IQ",flag:"🇮🇶"},
  {name:"Ireland",code:"IE",flag:"🇮🇪"},{name:"Israel",code:"IL",flag:"🇮🇱"},
  {name:"Italy",code:"IT",flag:"🇮🇹"},{name:"Jamaica",code:"JM",flag:"🇯🇲"},
  {name:"Japan",code:"JP",flag:"🇯🇵"},{name:"Jordan",code:"JO",flag:"🇯🇴"},
  {name:"Kazakhstan",code:"KZ",flag:"🇰🇿"},{name:"Kenya",code:"KE",flag:"🇰🇪"},
  {name:"Kuwait",code:"KW",flag:"🇰🇼"},{name:"Kyrgyzstan",code:"KG",flag:"🇰🇬"},
  {name:"Laos",code:"LA",flag:"🇱🇦"},{name:"Latvia",code:"LV",flag:"🇱🇻"},
  {name:"Lebanon",code:"LB",flag:"🇱🇧"},{name:"Lesotho",code:"LS",flag:"🇱🇸"},
  {name:"Libya",code:"LY",flag:"🇱🇾"},{name:"Liechtenstein",code:"LI",flag:"🇱🇮"},
  {name:"Lithuania",code:"LT",flag:"🇱🇹"},{name:"Luxembourg",code:"LU",flag:"🇱🇺"},
  {name:"Macau",code:"MO",flag:"🇲🇴"},{name:"Madagascar",code:"MG",flag:"🇲🇬"},
  {name:"Malawi",code:"MW",flag:"🇲🇼"},{name:"Malaysia",code:"MY",flag:"🇲🇾"},
  {name:"Maldives",code:"MV",flag:"🇲🇻"},{name:"Mali",code:"ML",flag:"🇲🇱"},
  {name:"Malta",code:"MT",flag:"🇲🇹"},{name:"Mauritius",code:"MU",flag:"🇲🇺"},
  {name:"Mexico",code:"MX",flag:"🇲🇽"},{name:"Moldova",code:"MD",flag:"🇲🇩"},
  {name:"Monaco",code:"MC",flag:"🇲🇨"},{name:"Mongolia",code:"MN",flag:"🇲🇳"},
  {name:"Montenegro",code:"ME",flag:"🇲🇪"},{name:"Morocco",code:"MA",flag:"🇲🇦"},
  {name:"Mozambique",code:"MZ",flag:"🇲🇿"},{name:"Myanmar",code:"MM",flag:"🇲🇲"},
  {name:"Namibia",code:"NA",flag:"🇳🇦"},{name:"Nepal",code:"NP",flag:"🇳🇵"},
  {name:"Netherlands",code:"NL",flag:"🇳🇱"},{name:"New Zealand",code:"NZ",flag:"🇳🇿"},
  {name:"Nicaragua",code:"NI",flag:"🇳🇮"},{name:"Nigeria",code:"NG",flag:"🇳🇬"},
  {name:"North Macedonia",code:"MK",flag:"🇲🇰"},{name:"Norway",code:"NO",flag:"🇳🇴"},
  {name:"Oman",code:"OM",flag:"🇴🇲"},{name:"Pakistan",code:"PK",flag:"🇵🇰"},
  {name:"Palestine",code:"PS",flag:"🇵🇸"},{name:"Panama",code:"PA",flag:"🇵🇦"},
  {name:"Papua New Guinea",code:"PG",flag:"🇵🇬"},{name:"Paraguay",code:"PY",flag:"🇵🇾"},
  {name:"Peru",code:"PE",flag:"🇵🇪"},{name:"Philippines",code:"PH",flag:"🇵🇭"},
  {name:"Poland",code:"PL",flag:"🇵🇱"},{name:"Portugal",code:"PT",flag:"🇵🇹"},
  {name:"Qatar",code:"QA",flag:"🇶🇦"},{name:"Romania",code:"RO",flag:"🇷🇴"},
  {name:"Russia",code:"RU",flag:"🇷🇺"},{name:"Rwanda",code:"RW",flag:"🇷🇼"},
  {name:"Saudi Arabia",code:"SA",flag:"🇸🇦"},{name:"Senegal",code:"SN",flag:"🇸🇳"},
  {name:"Serbia",code:"RS",flag:"🇷🇸"},{name:"Singapore",code:"SG",flag:"🇸🇬"},
  {name:"Slovakia",code:"SK",flag:"🇸🇰"},{name:"Slovenia",code:"SI",flag:"🇸🇮"},
  {name:"South Africa",code:"ZA",flag:"🇿🇦"},{name:"South Korea",code:"KR",flag:"🇰🇷"},
  {name:"Spain",code:"ES",flag:"🇪🇸"},{name:"Sri Lanka",code:"LK",flag:"🇱🇰"},
  {name:"Sweden",code:"SE",flag:"🇸🇪"},{name:"Switzerland",code:"CH",flag:"🇨🇭"},
  {name:"Taiwan",code:"TW",flag:"🇹🇼"},{name:"Tajikistan",code:"TJ",flag:"🇹🇯"},
  {name:"Tanzania",code:"TZ",flag:"🇹🇿"},{name:"Thailand",code:"TH",flag:"🇹🇭"},
  {name:"Togo",code:"TG",flag:"🇹🇬"},{name:"Trinidad and Tobago",code:"TT",flag:"🇹🇹"},
  {name:"Tunisia",code:"TN",flag:"🇹🇳"},{name:"Turkey",code:"TR",flag:"🇹🇷"},
  {name:"Turkmenistan",code:"TM",flag:"🇹🇲"},{name:"Uganda",code:"UG",flag:"🇺🇬"},
  {name:"Ukraine",code:"UA",flag:"🇺🇦"},{name:"United Arab Emirates",code:"AE",flag:"🇦🇪"},
  {name:"United Kingdom",code:"GB",flag:"🇬🇧"},{name:"United States",code:"US",flag:"🇺🇸"},
  {name:"Uruguay",code:"UY",flag:"🇺🇾"},{name:"Uzbekistan",code:"UZ",flag:"🇺🇿"},
  {name:"Venezuela",code:"VE",flag:"🇻🇪"},{name:"Vietnam",code:"VN",flag:"🇻🇳"},
  {name:"Yemen",code:"YE",flag:"🇾🇪"},{name:"Zambia",code:"ZM",flag:"🇿🇲"},
  {name:"Zimbabwe",code:"ZW",flag:"🇿🇼"}
];

const COLORS = [
  "#4f46e5","#0891b2","#059669","#d97706","#dc2626",
  "#7c3aed","#db2777","#ea580c","#65a30d","#0284c7"
];

function getFlag(code) {
  return COUNTRIES.find(c => c.code === code)?.flag || "🌍";
}
function getCountryName(code) {
  return COUNTRIES.find(c => c.code === code)?.name || code;
}
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
function fmt(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function initials(name) {
  return name.split(" ").map(p => p[0]).join("").slice(0,2).toUpperCase();
}

// ── Storage ───────────────────────────────────
const STORAGE_KEY = "passport_tracker_v1";

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return defaultData();
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function defaultData() {
  return {
    travelers: [
      { id: "monisha", name: "Monisha", relation: "Self",    color: COLORS[0], presence_start_date: "" },
      { id: "shiva",   name: "Shiva",   relation: "Husband", color: COLORS[1], presence_start_date: "" }
    ],
    entries: []
  };
}

// ── State ─────────────────────────────────────
let data = loadData();
let activeTravelerId = data.travelers[0]?.id || null;
let activeView = "timeline"; // timeline | countries | dashboard
let activeYear = "all";
let editingEntryId = null; // null=none, "__new__"=new row, uuid=editing existing
let selectedColor = COLORS[0];

// ── Render ────────────────────────────────────
function render() {
  renderTravelerTabs();
  renderViewTabs();
  if (activeView === "timeline")  renderTimeline();
  if (activeView === "countries") renderCountries();
  if (activeView === "dashboard") renderDashboard();
}

// ── Traveler Tabs ─────────────────────────────
function renderTravelerTabs() {
  const wrap = document.getElementById("traveler-tabs");
  wrap.innerHTML = data.travelers.map(t => `
    <div class="traveler-tab ${t.id === activeTravelerId ? "active" : ""}"
         style="--traveler-color:${t.color}"
         onclick="selectTraveler('${t.id}')">
      <div class="avatar" style="background:${t.color}">${initials(t.name)}</div>
      ${t.name}
    </div>
  `).join("") + `
    <button class="traveler-tab-add" onclick="openTravelersModal()">+ Manage</button>
  `;
}

function selectTraveler(id) {
  activeTravelerId = id;
  activeYear = "all";
  render();
}

// ── View Tabs ─────────────────────────────────
function renderViewTabs() {
  document.querySelectorAll(".view-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.view === activeView);
  });
}

// ── Timeline — inline table ───────────────────
function renderTimeline() {
  const main = document.getElementById("main-content");
  const traveler = data.travelers.find(t => t.id === activeTravelerId);
  if (!traveler) { main.innerHTML = ""; return; }

  let entries = data.entries.filter(e => e.traveler_id === activeTravelerId);
  entries.sort((a,b) => {
    const da = b.entry_date || b.us_departure_date || "";
    const db = a.entry_date || a.us_departure_date || "";
    return da.localeCompare(db);
  });

  const years = [...new Set(entries.map(e => e.entry_date?.slice(0,4)).filter(Boolean))].sort((a,b)=>b-a);
  const filtered = activeYear === "all" ? entries : entries.filter(e => e.entry_date?.startsWith(activeYear));
  const isAdding  = editingEntryId === "__new__";
  const isEditing = !!editingEntryId;

  main.innerHTML = `
    <div class="timeline-header">
      <h2>${traveler.name}'s Travel History</h2>
      <div class="year-filter">
        <div class="year-pill ${activeYear==="all"?"active":""}" onclick="setYear('all')">All</div>
        ${years.map(y=>`<div class="year-pill ${activeYear===y?"active":""}" onclick="setYear('${y}')">${y}</div>`).join("")}
      </div>
    </div>

    ${isEditing ? `
      <div class="edit-action-bar">
        <div>
          <span>${isAdding ? "✚ New trip" : "✏️ Editing trip"}</span>
          <span class="bar-hint">&nbsp;— fill in the highlighted row, then save</span>
        </div>
        <div class="bar-btns">
          <button class="bar-cancel" onclick="cancelEdit()">✕ Cancel</button>
          <button class="bar-save"   onclick="saveRow()">✓ Save</button>
        </div>
      </div>` : ""}

    <div class="table-wrap">
      <table class="trip-table">
        <thead>
          <tr class="col-group-row">
            <th class="cg-blank" colspan="1"></th>
            <th class="cg-us"      colspan="1">🇺🇸 US</th>
            <th class="cg-country" colspan="3">Entry into Country</th>
            <th class="cg-country" colspan="3" style="border-left:1px solid #c7d2fe">Exit from Country</th>
            <th class="cg-us"      colspan="1">🇺🇸 US</th>
            <th class="cg-blank"   colspan="2"></th>
          </tr>
          <tr class="col-head-row">
            <th>Country</th>
            <th class="us-col">Departed US</th>
            <th class="entry-col">Date</th>
            <th class="entry-col">Port</th>
            <th class="entry-col">Stamp</th>
            <th class="exit-col" style="border-left:1px solid #e9d8fd">Date</th>
            <th class="exit-col">Port</th>
            <th class="exit-col">Stamp</th>
            <th class="us-col">Returned US</th>
            <th>Notes</th>
            <th style="width:72px"></th>
          </tr>
        </thead>
        <tbody>
          ${isAdding ? renderEditRow(null) : ""}
          ${filtered.length === 0 && !isAdding ? `
            <tr><td colspan="11" class="empty-cell">
              <div class="empty-icon">🛂</div>
              <div>No trips yet — click <strong>+ Add Trip</strong> to begin</div>
            </td></tr>
          ` : filtered.map(e =>
              e.id === editingEntryId ? renderEditRow(e) : renderViewRow(e)
          ).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function daysBetween(d1, d2) {
  if (!d1 || !d2) return null;
  return Math.round((new Date(d2+"T00:00:00") - new Date(d1+"T00:00:00")) / 86400000);
}

// ── View Row ──────────────────────────────────
function renderViewRow(e) {
  const flag    = getFlag(e.country_code);
  const country = e.country_name || getCountryName(e.country_code);

  function stampCell(stamped) {
    if (stamped === true)  return `<span class="stamp-badge stamped">✔ Yes</span>`;
    if (stamped === false) return `<span class="stamp-badge nostamp">○ No</span>`;
    return `<span style="color:var(--muted)">—</span>`;
  }

  return `
    <tr class="trip-row" ondblclick="startEdit('${e.id}')">
      <td class="td-country">
        <div style="display:flex;align-items:center;gap:7px">
          <span class="flag-emoji">${flag}</span>
          <div>
            <div class="country-name">${country}</div>
          </div>
        </div>
      </td>
      <td class="td-date" style="color:var(--muted)">${e.us_departure_date ? fmt(e.us_departure_date) : "—"}</td>
      <td class="td-date">${e.entry_date ? fmt(e.entry_date) : "—"}</td>
      <td class="td-port">${e.entry_port || "—"}</td>
      <td class="td-stamp">${stampCell(e.entry_stamped)}</td>
      <td class="td-date" style="border-left:1px solid var(--border)">${e.exit_date ? fmt(e.exit_date) : "—"}</td>
      <td class="td-port">${e.exit_port || "—"}</td>
      <td class="td-stamp">${stampCell(e.exit_stamped)}</td>
      <td class="td-date" style="color:var(--muted)">${e.us_arrival_date ? fmt(e.us_arrival_date) : "—"}</td>
      <td class="td-notes" title="${e.notes || e.visa_type || ""}">${(() => { const n = e.notes || e.visa_type || ""; return n ? n.slice(0,32)+(n.length>32?"…":"") : "—"; })()}</td>
      <td class="td-actions">
        <button class="icon-btn" onclick="startEdit('${e.id}')" title="Edit">✏️</button>
        <button class="icon-btn danger" onclick="deleteEntry('${e.id}')" title="Delete">🗑</button>
      </td>
    </tr>`;
}

// ── Edit Row ──────────────────────────────────
function renderEditRow(e) {
  const isNew = !e;
  const sv = (field, fallback="") => e ? (e[field] ?? fallback) : fallback;
  const stampSel = (id, val) => `
    <select id="${id}">
      <option value=""  ${val==null?"selected":""}>—</option>
      <option value="true"  ${val===true?"selected":""}>✔ Yes</option>
      <option value="false" ${val===false?"selected":""}>○ No</option>
    </select>`;

  const otherTravelers = data.travelers.filter(t => t.id !== activeTravelerId);
  const appliesToHtml = isNew && otherTravelers.length > 0 ? `
    <div class="edit-applies-to" style="margin-top:5px">
      <span class="at-label">Also for:</span>
      ${otherTravelers.map(t=>`
        <label>
          <input type="checkbox" class="applies-cb" value="${t.id}">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t.color};margin-right:2px"></span>${t.name}
        </label>`).join("")}
    </div>` : "";

  return `
    <tr class="trip-row edit-row" id="edit-row">
      <td class="td-country" style="min-width:160px">
        <input type="text" id="er-country" list="countries-datalist"
          placeholder="Type country…" value="${sv("country_name")}" autocomplete="off" />
        ${appliesToHtml}
      </td>
      <td><input type="date" id="er-us-dep" value="${sv("us_departure_date")}" /></td>
      <td><input type="date" id="er-entry-date" value="${sv("entry_date")}" /></td>
      <td><input type="text" id="er-entry-port" placeholder="Port…" value="${sv("entry_port")}" /></td>
      <td>${stampSel("er-entry-stamp", sv("entry_stamped", null))}</td>
      <td style="border-left:1px solid #c7d2fe"><input type="date" id="er-exit-date" value="${sv("exit_date")}" /></td>
      <td><input type="text" id="er-exit-port" placeholder="Port…" value="${sv("exit_port")}" /></td>
      <td>${stampSel("er-exit-stamp", sv("exit_stamped", null))}</td>
      <td><input type="date" id="er-us-arr" value="${sv("us_arrival_date")}" /></td>
      <td><input type="text" id="er-notes" placeholder="Notes…" value="${sv("notes") || sv("visa_type")}" /></td>
      <td class="td-actions" style="vertical-align:top;padding-top:8px">
        <button class="row-save-btn" onclick="saveRow()">✓ Save</button>
        <button class="row-cancel-btn" onclick="cancelEdit()">✕</button>
        ${!isNew ? `<button class="row-del-btn" onclick="deleteEntry('${e.id}')">🗑 delete</button>` : ""}
      </td>
    </tr>`;
}

// ── Inline entry CRUD ─────────────────────────
function openAddEntry() {
  if (activeView !== "timeline") activeView = "timeline";
  editingEntryId = "__new__";
  render();
  setTimeout(() => document.getElementById("edit-row")?.scrollIntoView({behavior:"smooth",block:"nearest"}), 60);
  setTimeout(() => document.getElementById("er-country")?.focus(), 120);
}

function startEdit(id) {
  editingEntryId = id;
  render();
  setTimeout(() => document.getElementById("edit-row")?.scrollIntoView({behavior:"smooth",block:"nearest"}), 60);
}

function cancelEdit() {
  editingEntryId = null;
  render();
}

function saveRow() {
  const countryInput = document.getElementById("er-country").value.trim();
  const country = COUNTRIES.find(c => c.name.toLowerCase() === countryInput.toLowerCase())
                || COUNTRIES.find(c => c.name.toLowerCase().startsWith(countryInput.toLowerCase()));
  if (!country) { toast("Select a valid country from the list"); return; }

  const entryDate = document.getElementById("er-entry-date").value;
  if (!entryDate) { toast("Entry date is required"); return; }

  function stampVal(id) {
    const v = document.getElementById(id).value;
    return v === "true" ? true : v === "false" ? false : null;
  }

  const base = {
    country_code:      country.code,
    country_name:      country.name,
    us_departure_date: document.getElementById("er-us-dep").value    || null,
    entry_date:        entryDate,
    entry_port:        document.getElementById("er-entry-port").value.trim(),
    entry_stamped:     stampVal("er-entry-stamp"),
    exit_date:         document.getElementById("er-exit-date").value  || null,
    exit_port:         document.getElementById("er-exit-port").value.trim(),
    exit_stamped:      stampVal("er-exit-stamp"),
    us_arrival_date:   document.getElementById("er-us-arr").value     || null,
    notes:             document.getElementById("er-notes").value.trim(),
  };

  const wasNew = editingEntryId === "__new__";

  if (wasNew) {
    const extras = [...document.querySelectorAll(".applies-cb:checked")].map(cb => cb.value);
    [activeTravelerId, ...extras].forEach(tid => {
      data.entries.push({ id: uuid(), traveler_id: tid, ...base });
    });
    toast(extras.length ? `Trip added for ${extras.length+1} travelers` : `Trip added for ${data.travelers.find(t=>t.id===activeTravelerId)?.name}`);
  } else {
    const idx = data.entries.findIndex(e => e.id === editingEntryId);
    if (idx >= 0) data.entries[idx] = { ...data.entries[idx], ...base };
    toast("Trip updated");
  }

  editingEntryId = null;
  saveData(data);
  render();
}

function deleteEntry(id) {
  if (!confirm("Delete this trip entry?")) return;
  data.entries = data.entries.filter(e => e.id !== id);
  editingEntryId = null;
  saveData(data);
  render();
  toast("Trip deleted");
}

// ── Country datalist ──────────────────────────
function setupCountryDatalist() {
  if (document.getElementById("countries-datalist")) return;
  const dl = document.createElement("datalist");
  dl.id = "countries-datalist";
  COUNTRIES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    dl.appendChild(opt);
  });
  document.body.appendChild(dl);
}

function setYear(y) { activeYear = y; render(); }

// ── Countries View ────────────────────────────
function renderCountries() {
  const main = document.getElementById("main-content");
  const traveler = data.travelers.find(t => t.id === activeTravelerId);
  if (!traveler) return;

  const entries = data.entries.filter(e => e.traveler_id === activeTravelerId);
  const byCountry = {};
  entries.forEach(e => {
    if (!byCountry[e.country_code]) byCountry[e.country_code] = { count: 0, name: e.country_name || getCountryName(e.country_code), travelers: {} };
    byCountry[e.country_code].count++;
  });

  // For each country also show which family members visited
  data.entries.forEach(e => {
    if (!byCountry[e.country_code]) return;
    byCountry[e.country_code].travelers[e.traveler_id] = true;
  });

  const sorted = Object.entries(byCountry).sort((a,b)=>a[1].name.localeCompare(b[1].name));

  main.innerHTML = `
    <div class="timeline-header" style="margin-bottom:16px">
      <h2>${traveler.name} — ${sorted.length} ${sorted.length===1?"Country":"Countries"} Visited</h2>
    </div>
    ${sorted.length === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">🗺️</div>
        <p>No countries yet</p><small>Add trips to see coverage</small>
      </div>
    ` : `<div class="country-grid">` + sorted.map(([code, info]) => `
      <div class="country-card">
        <div class="cflag">${getFlag(code)}</div>
        <div>
          <div class="cname">${info.name}</div>
          <div class="cvisits">${info.count} visit${info.count>1?"s":""}</div>
          <div class="traveler-dots">
            ${data.travelers.filter(t=>info.travelers[t.id]).map(t=>`
              <div class="traveler-dot" style="background:${t.color}" title="${t.name}"></div>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("") + `</div>`}
  `;
}

// ── Dashboard ─────────────────────────────────
function calcPresence(entries, presenceStartDate) {
  // Collect ALL departure and arrival dates independently across all trips,
  // sort each list, then pair chronologically (dep[0]→arr[0], etc.).
  // This handles multi-leg journeys where departure is on one trip record
  // and return is on a different record.
  //
  // presenceStartDate: if set, only days ON OR AFTER that date count.
  //   - Absences entirely before it are ignored.
  //   - Absences straddling it are clipped to start from it.
  //   - totalSpan is anchored to presenceStartDate rather than first departure.

  const today = new Date().toISOString().slice(0,10);
  const ref   = presenceStartDate || null; // reference / anchor date

  const departures = entries.map(e => e.us_departure_date).filter(Boolean).sort();
  const arrivals   = entries.map(e => e.us_arrival_date).filter(Boolean).sort();

  // Anchor: tracking starts from ref date (or first departure if no ref)
  const trackFrom = ref || departures[0] || null;

  if (!trackFrom) {
    return { daysOutside: 0, daysInUS: null, trackFrom: null, absences: [], totalSpan: null };
  }

  const absences = [];
  let daysOutside = 0;

  for (let i = 0; i < departures.length; i++) {
    const dep = departures[i];
    const arr = (i < arrivals.length) ? arrivals[i] : null;
    const end = arr || today;

    // Absence is entirely before the reference date — skip
    if (ref && end <= ref) continue;

    // Clip the start of the absence if it began before the reference date
    const clipped    = !!(ref && dep < ref);
    const effectiveDep = clipped ? ref : dep;

    const days = daysBetween(effectiveDep, end);
    if (days !== null && days >= 0) {
      daysOutside += days;
      absences.push({ dep, arr, effectiveDep, days, ongoing: !arr, clipped });
    }
  }

  const totalSpan = daysBetween(trackFrom, today);
  const daysInUS  = totalSpan !== null ? totalSpan - daysOutside : null;

  return { daysOutside, daysInUS, trackFrom, absences, totalSpan };
}

function breakdownByYear(absences, trackFrom, today) {
  // Split each absence across calendar-year boundaries, then compute
  // total trackable days and days-in-US per year.
  if (!trackFrom) return [];

  const stats = {};

  function ensure(y) {
    if (!stats[y]) stats[y] = { year: y, daysOutside: 0, totalDays: 0, daysInUS: 0 };
  }

  // Distribute absence days into each year they touch
  absences.forEach(a => {
    let cur = new Date(a.effectiveDep + 'T00:00:00');
    const end = new Date((a.arr || today) + 'T00:00:00');
    while (cur < end) {
      const y = cur.getFullYear();
      const nextYearStart = new Date(y + 1, 0, 1);
      const seg = nextYearStart < end ? nextYearStart : end;
      ensure(y);
      stats[y].daysOutside += Math.round((seg - cur) / 86400000);
      cur = nextYearStart;
    }
  });

  // Total trackable days per year (clamped to trackFrom … today)
  const startYear = new Date(trackFrom + 'T00:00:00').getFullYear();
  const endYear   = new Date(today      + 'T00:00:00').getFullYear();
  const tStart = new Date(trackFrom + 'T00:00:00');
  const tEnd   = new Date(today     + 'T00:00:00');

  for (let y = startYear; y <= endYear; y++) {
    ensure(y);
    const yStart   = new Date(y, 0, 1);
    const yEnd     = new Date(y + 1, 0, 1);
    const effStart = tStart > yStart ? tStart : yStart;
    const effEnd   = tEnd   < yEnd   ? tEnd   : yEnd;
    stats[y].totalDays = effStart < effEnd
      ? Math.round((effEnd - effStart) / 86400000)
      : 0;
    stats[y].daysInUS = Math.max(0, stats[y].totalDays - stats[y].daysOutside);
  }

  return Object.values(stats).sort((a, b) => b.year - a.year); // newest first
}

function renderDashboard() {
  const main = document.getElementById("main-content");

  const cards = data.travelers.map(t => {
    const mine = data.entries.filter(e => e.traveler_id === t.id);
    const countries = new Set(mine.map(e=>e.country_code)).size;
    const latest = [...mine].sort((a,b)=>(b.entry_date||"").localeCompare(a.entry_date||""))[0];
    const presence = calcPresence(mine, t.presence_start_date || null);
    return { t, trips: mine.length, countries, latest, presence };
  });

  const allCountries = new Set(data.entries.map(e=>e.country_code)).size;
  const allTrips = data.entries.length;

  main.innerHTML = `
    <div class="section-label" style="margin-bottom:12px">Family Overview</div>
    <div class="stat-grid" style="margin-bottom:32px">
      <div class="stat-card">
        <div class="stat-num">${allCountries}</div>
        <div class="stat-label">Countries visited (family total)</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${allTrips}</div>
        <div class="stat-label">Total trip records</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${data.travelers.length}</div>
        <div class="stat-label">Travelers tracked</div>
      </div>
    </div>

    <div class="section-label" style="margin-bottom:6px">US Physical Presence — Per Traveler</div>
    <div style="font-size:11px;color:var(--muted);margin-bottom:16px;line-height:1.6">
      Departure and return dates are paired globally across all trip records, then split by calendar year.
      Days in US per year = days in that year within the tracking window − days abroad that year.
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;margin-bottom:32px">
      ${cards.map(c => {
        const p = c.presence;
        const today = new Date().toISOString().slice(0,10);
        const yearRows = breakdownByYear(p.absences, p.trackFrom, today);
        const hasData = p.trackFrom !== null;
        return `
        <div class="stat-card" style="border-top:3px solid ${c.t.color}">

          <!-- Traveler header -->
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
            <div style="width:28px;height:28px;border-radius:50%;background:${c.t.color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700">${initials(c.t.name)}</div>
            <div>
              <div style="font-weight:700">${c.t.name}</div>
              <div style="font-size:11px;color:var(--muted)">${c.t.relation||""}</div>
            </div>
          </div>

          <!-- Tracking anchor banner -->
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:8px 12px;background:${c.t.presence_start_date?"var(--accent-light)":"var(--yellow-bg)"};border-radius:7px;font-size:12px">
            ${c.t.presence_start_date
              ? `<span style="color:var(--accent)">📅 Tracking from <strong>${fmt(c.t.presence_start_date)}</strong></span>`
              : `<span style="color:var(--yellow)">⚠️ No start date set — using first recorded departure as anchor. <button onclick="openTravelersModal()" style="background:none;border:none;color:var(--accent);cursor:pointer;font-weight:600;font-size:12px;padding:0;text-decoration:underline">Set it →</button></span>`
            }
          </div>

          ${hasData ? `
            <!-- Totals row -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
              <div>
                <div class="stat-num" style="font-size:26px;color:#16a34a">${p.daysInUS !== null ? p.daysInUS.toLocaleString() : "—"}</div>
                <div class="stat-label">Total days in US 🇺🇸</div>
              </div>
              <div>
                <div class="stat-num" style="font-size:26px;color:#d97706">${p.daysOutside.toLocaleString()}</div>
                <div class="stat-label">Total days outside ✈️</div>
              </div>
              <div>
                <div class="stat-num" style="font-size:26px;color:var(--muted)">${p.totalSpan !== null ? p.totalSpan.toLocaleString() : "—"}</div>
                <div class="stat-label">Total days tracked</div>
              </div>
            </div>

            <!-- Year-by-year breakdown -->
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:8px">By Year</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${yearRows.map(y => {
                const inPct  = y.totalDays > 0 ? Math.round((y.daysInUS  / y.totalDays) * 100) : 0;
                const outPct = y.totalDays > 0 ? Math.round((y.daysOutside / y.totalDays) * 100) : 0;
                const isPartial = y.totalDays < 365; // incomplete year (current year or first year)
                return `
                <div style="background:var(--bg);border-radius:8px;padding:10px 12px">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                    <span style="font-weight:700;font-size:14px">${y.year}${isPartial ? `<span style="font-size:10px;font-weight:400;color:var(--muted);margin-left:6px">(${y.totalDays} days tracked)</span>` : ""}</span>
                    <span style="font-size:12px;display:flex;gap:14px">
                      <span style="color:#16a34a;font-weight:600">🇺🇸 ${y.daysInUS.toLocaleString()} days in US</span>
                      <span style="color:#d97706;font-weight:600">✈️ ${y.daysOutside.toLocaleString()} days outside</span>
                    </span>
                  </div>
                  <!-- Bar -->
                  <div style="height:8px;border-radius:4px;background:#e2e8f0;overflow:hidden;display:flex">
                    <div style="width:${inPct}%;background:#16a34a;transition:width .3s"></div>
                    <div style="width:${outPct}%;background:#d97706"></div>
                  </div>
                </div>`;
              }).join("")}
            </div>

            <!-- Absence list (compact, for verification) -->
            ${p.absences.length > 0 ? `
              <details style="margin-top:14px">
                <summary style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);cursor:pointer;user-select:none">
                  Absence records (${p.absences.length}) — click to expand
                </summary>
                <div style="display:flex;flex-direction:column;gap:4px;margin-top:8px">
                  ${p.absences.map((a,i) => `
                    <div style="display:flex;align-items:center;gap:10px;font-size:12px;padding:5px 8px;background:var(--bg);border-radius:6px;flex-wrap:wrap">
                      <span style="color:var(--muted);min-width:18px">#${i+1}</span>
                      <span>🛫 ${fmt(a.dep)}${a.clipped ? `<span style="font-size:10px;color:var(--accent);margin-left:4px">(clipped → ${fmt(a.effectiveDep)})</span>` : ""}</span>
                      <span style="color:var(--muted)">→</span>
                      <span>${a.ongoing ? '<em style="color:#d97706">still abroad</em>' : "🛬 " + fmt(a.arr)}</span>
                      <span style="margin-left:auto;font-weight:700;color:${a.ongoing?"#d97706":"var(--text)"}">
                        ${a.days} day${a.days!==1?"s":""}${a.ongoing?" (so far)":""}
                      </span>
                    </div>
                  `).join("")}
                </div>
              </details>
            ` : ""}

          ` : `
            <div style="font-size:12px;color:var(--muted);padding:8px 0">
              No US departure/arrival dates recorded yet. Add these dates to any trip to start tracking.
            </div>
          `}
        </div>`;
      }).join("")}
    </div>

    <div class="section-label" style="margin-bottom:12px">Travel Summary — Per Traveler</div>
    <div class="stat-grid">
      ${cards.map(c=>`
        <div class="stat-card">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <div style="width:22px;height:22px;border-radius:50%;background:${c.t.color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${initials(c.t.name)}</div>
            <strong>${c.t.name}</strong>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div><div class="stat-num" style="font-size:22px">${c.countries}</div><div class="stat-label">Countries</div></div>
            <div><div class="stat-num" style="font-size:22px">${c.trips}</div><div class="stat-label">Trips</div></div>
          </div>
          ${c.latest ? `<div style="margin-top:10px;font-size:11px;color:var(--muted)">Latest: ${getFlag(c.latest.country_code)} ${c.latest.country_name||getCountryName(c.latest.country_code)}</div>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}


// ── Travelers Modal ───────────────────────────
function openTravelersModal() {
  renderTravelersList();
  document.getElementById("new-traveler-name").value = "";
  document.getElementById("new-traveler-relation").value = "";
  selectedColor = COLORS.find(c => !data.travelers.map(t=>t.color).includes(c)) || COLORS[0];
  renderColorSwatches();
  openModal("travelers-modal");
}

function renderTravelersList() {
  const list = document.getElementById("travelers-list");
  list.innerHTML = data.travelers.map(t => `
    <div class="traveler-item" style="flex-direction:column;align-items:stretch;gap:10px">
      <div style="display:flex;align-items:center;gap:12px">
        <div class="t-avatar" style="background:${t.color}">${initials(t.name)}</div>
        <div style="flex:1">
          <div class="t-name">${t.name}</div>
          <div class="t-rel">${t.relation || ""}</div>
        </div>
        <button class="t-del" onclick="deleteTraveler('${t.id}')" title="Remove">✕</button>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg);border-radius:7px;flex-wrap:wrap">
        <label style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;white-space:nowrap">
          📅 Track presence from
        </label>
        <input type="date"
          value="${t.presence_start_date || ""}"
          onchange="setPresenceStartDate('${t.id}', this.value)"
          style="border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:13px;font-family:inherit;flex:1;min-width:140px"
        />
        ${t.presence_start_date
          ? `<span style="font-size:11px;color:var(--green);font-weight:600">✔ Set</span>`
          : `<span style="font-size:11px;color:var(--yellow)">Not set</span>`
        }
      </div>
    </div>
  `).join("");
}

function setPresenceStartDate(travelerId, dateVal) {
  const t = data.travelers.find(x => x.id === travelerId);
  if (!t) return;
  t.presence_start_date = dateVal || "";
  saveData(data);
  renderTravelersList();
  render();
  toast(`Tracking start date ${dateVal ? "set to " + fmt(dateVal) : "cleared"} for ${t.name}`);
}

function renderColorSwatches() {
  const wrap = document.getElementById("color-swatches");
  wrap.innerHTML = COLORS.map(c => `
    <div class="color-swatch ${c===selectedColor?"selected":""}"
         style="background:${c}"
         onclick="pickColor('${c}')"></div>
  `).join("");
}

function pickColor(c) { selectedColor = c; renderColorSwatches(); }

function addTraveler() {
  const name = document.getElementById("new-traveler-name").value.trim();
  if (!name) { toast("Enter a name"); return; }
  const rel  = document.getElementById("new-traveler-relation").value.trim();
  data.travelers.push({ id: uuid(), name, relation: rel, color: selectedColor, presence_start_date: "" });
  saveData(data);
  renderTravelersList();
  document.getElementById("new-traveler-name").value = "";
  document.getElementById("new-traveler-relation").value = "";
  toast(`${name} added`);
  render();
}

function deleteTraveler(id) {
  const t = data.travelers.find(x=>x.id===id);
  const tripCount = data.entries.filter(e=>e.traveler_id===id).length;
  const msg = tripCount > 0
    ? `Remove ${t?.name}? This will also delete their ${tripCount} trip record(s).`
    : `Remove ${t?.name}?`;
  if (!confirm(msg)) return;
  data.travelers = data.travelers.filter(x=>x.id!==id);
  data.entries   = data.entries.filter(e=>e.traveler_id!==id);
  if (activeTravelerId === id) activeTravelerId = data.travelers[0]?.id || null;
  saveData(data);
  renderTravelersList();
  render();
  toast(`${t?.name} removed`);
}

// ── Export / Import ───────────────────────────
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "passport_data.json";
  a.click();
  URL.revokeObjectURL(url);
  toast("Data exported as passport_data.json");
}

function importData() {
  const input = document.createElement("input");
  input.type  = "file";
  input.accept = ".json";
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!parsed.travelers || !parsed.entries) throw new Error("Invalid format");
        if (!confirm(`Import will merge ${parsed.travelers.length} travelers and ${parsed.entries.length} entries. Duplicates (same ID) will be skipped. Continue?`)) return;
        // Merge travelers
        parsed.travelers.forEach(t => {
          if (!data.travelers.find(x=>x.id===t.id)) data.travelers.push(t);
        });
        // Merge entries
        parsed.entries.forEach(e => {
          if (!data.entries.find(x=>x.id===e.id)) data.entries.push(e);
        });
        saveData(data);
        render();
        toast("Data imported successfully");
      } catch(err) {
        alert("Failed to parse file: " + err.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ── Modal Helpers ─────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

// Close on overlay click
document.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// ── Toast ─────────────────────────────────────
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>el.classList.remove("show"), 2800);
}

// ── Init ──────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setupCountryDatalist();
  render();
});
