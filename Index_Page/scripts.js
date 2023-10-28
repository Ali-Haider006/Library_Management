
var jsonData = [
    {
        "Sr": 1,
        "Book": "Book 1",
        "Author": "Author 1",
        "Publisher": "Publisher 1",
        "Publishing Dates": "2022-01-15"
    },
    {
        "Sr": 2,
        "Book": "Book 2",
        "Author": "Author 2",
        "Publisher": "Publisher 2",
        "Publishing Dates": "2023-03-20"
    }
];

// Function to populate the table
function populateTable(data) {
    var tableData = document.getElementById("table-data");

    for (var i = 0; i < data.length; i++) {
        var row = tableData.insertRow(-1);
        var cellSr = row.insertCell(0);
        var cellBook = row.insertCell(1);
        var cellAuthor = row.insertCell(2);
        var cellPublisher = row.insertCell(3);
        var cellDates = row.insertCell(4);

        cellSr.innerHTML = data[i].Sr;
        cellBook.innerHTML = data[i].Book;
        cellAuthor.innerHTML = data[i].Author;
        cellPublisher.innerHTML = data[i].Publisher;
        cellDates.innerHTML = data[i]["Publishing Dates"];
    }
}

// Call the function to populate the table with JSON data
populateTable(jsonData);