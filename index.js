const data = [
  {
    id: 1,
    chemicalName: "Ammonium Persulfate",
    vendor: "LG Chem",
    density: 3525.92,
    viscosity: 60.63,
    packaging: "Bag",
    packSize: 100,
    unit: "kg",
    quantity: 6495.18,
  },
  {
    id: 2,
    chemicalName: "Caustic Potash",
    vendor: "Formosa",
    density: 3172.15,
    viscosity: 48.22,
    packaging: "Bag",
    packSize: 100,
    unit: "kg",
    quantity: 8751.9,
  },
  {
    id: 3,
    chemicalName: "Dimethylaminopropylamino",
    vendor: "LG Chem",
    density: 8435.37,
    viscosity: 12.62,
    packaging: "Barrel",
    packSize: 75,
    unit: "L",
    quantity: 5964.61,
  },
  {
    id: 4,
    chemicalName: "Mono Ammonium Phosphate",
    vendor: "Sinopec",
    density: 1597.65,
    viscosity: 76.51,
    packaging: "Bag",
    packSize: 105,
    unit: "kg",
    quantity: 8183.73,
  },
  {
    id: 5,
    chemicalName: "Ferric Nitrate",
    vendor: "DowDuPont",
    density: 364.04,
    viscosity: 14.9,
    packaging: "Bag",
    packSize: 105,
    unit: "kg",
    quantity: 4154.33,
  },
  {
    id: 6,
    chemicalName: "n-Pentane",
    vendor: "Sinopec",
    density: 4535.26,
    viscosity: 66.76,
    packaging: "N/A",
    packSize: 0,
    unit: "t",
    quantity: 6272.34,
  },
  {
    id: 7,
    chemicalName: "Glycol Ether PM",
    vendor: "LG Chem",
    density: 6495.18,
    viscosity: 72.12,
    packaging: "Bag",
    packSize: 250,
    unit: "kg",
    quantity: 8749.54,
  },
  {
    id: 8,
    chemicalName: "Acetic Acid",
    vendor: "BASF",
    density: 1046,
    viscosity: 0.89,
    packaging: "Drum",
    packSize: 200,
    unit: "L",
    quantity: 7890.09,
  },
  {
    id: 9,
    chemicalName: "Potassium Hydroxide",
    vendor: "Dow",
    density: 1051.61,
    viscosity: 41.67,
    packaging: "Bag",
    packSize: 25,
    unit: "kg",
    quantity: 1058.43,
  },
  {
    id: 10,
    chemicalName: "Sodium Carbonate",
    vendor: "Cargill",
    density: 2562.42,
    viscosity: 68.95,
    packaging: "Bag",
    packSize: 50,
    unit: "kg",
    quantity: 1134.56,
  },
  {
    id: 11,
    chemicalName: "Urea",
    vendor: "BASF",
    density: 1000,
    viscosity: 0.9,
    packaging: "Bag",
    packSize: 25,
    unit: "kg",
    quantity: 1900.0,
  },
  {
    id: 12,
    chemicalName: "Sodium Chloride",
    vendor: "K+S",
    density: 2170.0,
    viscosity: 0.2,
    packaging: "Bag",
    packSize: 50,
    unit: "kg",
    quantity: 5000.0,
  },
  {
    id: 13,
    chemicalName: "Calcium Carbonate",
    vendor: "Imerys",
    density: 2710.0,
    viscosity: 0.5,
    packaging: "Bag",
    packSize: 25,
    unit: "kg",
    quantity: 2500.0,
  },
  {
    id: 14,
    chemicalName: "Calcium Sulfate",
    vendor: "Lhoist",
    density: 2900.0,
    viscosity: 0.6,
    packaging: "Bag",
    packSize: 25,
    unit: "kg",
    quantity: 3000.0,
  },
  {
    id: 15,
    chemicalName: "Magnesium Hydroxide",
    vendor: "Hydrite",
    density: 2200.0,
    viscosity: 0.8,
    packaging: "Bag",
    packSize: 50,
    unit: "kg",
    quantity: 4000.0,
  },
];

let currentIndex = null;
let sortDirection = [true, true, true, true, true, true, true, true, true];

loadTableData(data);

function loadTableData(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.id}</td>
            <td class="chemical-name">${item.chemicalName}</td>
            <td>${item.vendor}</td>
            <td>${item.density}</td>
            <td>${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.packSize}</td>
            <td>${item.unit}</td>
            <td>${item.quantity}</td>
            <td class="editdelcont">
                <button class="edit-btn" onclick="editRow(${index}); event.stopPropagation();">Edit</button>
                <button class="delete-btn" onclick="deleteRow(${index}); event.stopPropagation();">Delete</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
}

function addRow() {
  const newRow = {
    id: data.length + 1,
    chemicalName: "New Chemical",
    vendor: "New Vendor",
    density: 0,
    viscosity: 0,
    packaging: "New Packaging",
    packSize: 0,
    unit: "New Unit",
    quantity: 0,
  };
  data.push(newRow);
  loadTableData(data);
}

function editRow(index) {
  currentIndex = index;
  openSidebar(index);
}

function openSidebar(index) {
  const row = data[index];
  document.getElementById("chemicalName").value = row.chemicalName;
  document.getElementById("vendor").value = row.vendor;
  document.getElementById("density").value = row.density;
  document.getElementById("viscosity").value = row.viscosity;
  document.getElementById("packaging").value = row.packaging;
  document.getElementById("packSize").value = row.packSize;
  document.getElementById("unit").value = row.unit;
  document.getElementById("quantity").value = row.quantity;

  document.getElementById("sidebar").style.right = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.right = "-300px";
}

function saveEdit() {
  if (currentIndex === null) return;

  data[currentIndex].chemicalName =
    document.getElementById("chemicalName").value;
  data[currentIndex].vendor = document.getElementById("vendor").value;
  data[currentIndex].density = parseFloat(
    document.getElementById("density").value
  );
  data[currentIndex].viscosity = parseFloat(
    document.getElementById("viscosity").value
  );
  data[currentIndex].packaging = document.getElementById("packaging").value;
  data[currentIndex].packSize = parseInt(
    document.getElementById("packSize").value
  );
  data[currentIndex].unit = document.getElementById("unit").value;
  data[currentIndex].quantity = parseFloat(
    document.getElementById("quantity").value
  );

  loadTableData(data);
  closeSidebar();
}

function deleteRow(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    data.splice(index, 1);
    loadTableData(data);
  }
}

function refreshData() {
  loadTableData(data);
}

function saveData() {
  const jsonData = JSON.stringify(data, null, 2);
  console.log("Saved data:", jsonData);
  alert("Data has been saved to console.");
}

function sortTable(colIdx) {
  const direction = sortDirection[colIdx];

  data.sort((a, b) => {
    if (a[Object.keys(a)[colIdx]] < b[Object.keys(b)[colIdx]])
      return direction ? -1 : 1;
    if (a[Object.keys(a)[colIdx]] > b[Object.keys(b)[colIdx]])
      return direction ? 1 : -1;
    return 0;
  });

  sortDirection[colIdx] = !direction;

  const headers = document.querySelectorAll("th");
  headers.forEach((header, index) => {
    const icon = document.getElementById(`sortIcon${index}`);
    if (icon) {
      icon.classList.remove("fa-arrow-up", "fa-arrow-down", "fa-sort");
      if (index === colIdx) {
        icon.classList.add(direction ? "fa-arrow-up" : "fa-arrow-down");
      } else {
        icon.classList.add("fa-sort");
      }
    }
  });

  loadTableData(data);
}

document
  .getElementById("tableBody")
  .addEventListener("click", function (event) {
    console.log(event);

    const rows = document.querySelectorAll("#tableBody tr");
    rows.forEach((row) => row.classList.remove("selected"));
    if (event.target.closest("tr")) {
      const selectedRow = event.target.closest("tr");
      selectedRow.classList.add("selected");
      currentIndex = Array.from(selectedRow.parentNode.children).indexOf(
        selectedRow
      );
      openSidebar(currentIndex);
    }
  });
