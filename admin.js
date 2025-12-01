let fleet = [];
const $ = (id) => document.getElementById(id);

// MAIN RENDER FUNCTION
const render = () => {
    const c = $('filterCategory').value;
    const s = $('filterAvailability').value;

    // FILTER VEHICLES
    const view = fleet.filter(v =>
        (c === "All" || v.category === c) &&
        (s === "All" || (s === "Available" ? v.avail : !v.avail))
    );

    // DISPLAY VEHICLES
    $('fleetContainer').innerHTML = view.map(v => {
        const i = fleet.indexOf(v); // FIXED INDEX
        return `
        <div class="fleet-card">
            <img src="https://cdn-icons-png.flaticon.com/512/609/609803.png" />

            <div class="card-details">
                <h3>${v.reg}</h3>
                <p><strong>Category:</strong> ${v.category}</p>
                <p><strong>Driver:</strong> ${v.driver}</p>
                <p class="${v.avail ? "status-green" : "status-red"}">
                    <strong>Status:</strong> ${v.avail ? "Available" : "Unavailable"}
                </p>
            </div>

            <div class="card-actions">
                <button onclick="handle('edit', ${i})">Update Driver</button>
                <button onclick="handle('toggle', ${i})">Toggle Status</button>
                <button onclick="handle('del', ${i})">Delete</button>
            </div>
        </div>
        `;
    }).join('');
};

// UNIVERSAL HANDLER FOR ALL BUTTONS
window.handle = (type, i) => {

    if (type === "edit") {
        const name = prompt("Enter new driver name:", fleet[i].driver);
        if (name && name.trim()) {
            fleet[i].driver = name.trim();
            render();
        }
    }

    else if (type === "toggle") {
        fleet[i].avail = !fleet[i].avail;
        render();
    }

    else if (type === "del") {
        if (confirm("Delete this vehicle?")) {
            fleet.splice(i, 1);
            render();
        }
    }
};

// FORM SUBMIT – ADD VEHICLE
$('fleetForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const reg = $('regNo').value;
    const cat = $('category').value;
    const driver = $('driver').value;
    const avail = $('availability').value === "true";

    if (!reg || !cat || !driver) return alert("Please fill all fields");

    fleet.push({ reg, category: cat, driver, avail });
    $('fleetForm').reset();
    render();
});

// FILTER EVENTS
$('filterCategory').onchange = render;
$('filterAvailability').onchange = render;

// CLEAR FILTER BUTTON
$('clearFilterBtn').onclick = () => {
    $('filterCategory').value = "All";
    $('filterAvailability').value = "All";
    render();
};
