// Hardcoded CSV content
const csvData = `
ID,Name,Grade
101,Juan,85
102,Maria,90
103,Pedro,78
`;

// Parse CSV into array of objects
let records = csvData.trim().split("\n").slice(1).map(line => {
    const [ID, Name, Grade] = line.split(",");
    return { ID, Name, Grade };
});

const tableBody = document.querySelector("#classTable tbody");
const form = document.getElementById("addForm");

// Render function
function render() {
    tableBody.innerHTML = "";
    records.forEach((record, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${record.ID}</td>
                <td>${record.Name}</td>
                <td>${record.Grade}</td>
                <td><button onclick="deleteRecord(${index})">Delete</button></td>
            </tr>
        `;
    });
}

// Add record
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const grade = document.getElementById("grade").value;

    if(id && name && grade) {
        records.push({ ID: id, Name: name, Grade: grade });
        render();
        form.reset();
    } else {
        alert("Fill all fields!");
    }
});

// Delete record
function deleteRecord(index) {
    records.splice(index, 1);
    render();
}

// Initial render
render();
