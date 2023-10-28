
var BookData = [
    // {
    //     "Book": "Book 1",
    //     "Author": "Author 1",
    //     "Publisher": "Publisher 1",
    //     "Publishing Dates": "2022-01-15"
    // },
    // {
    //     "Book": "Book 1",
    //     "Author": "Author 1",
    //     "Publisher": "Publisher 1",
    //     "Publishing Dates": "2022-01-15"
    // },
    // {
    //     "Book": "1984",
    //     "Author": "George Orwell",
    //     "Publisher": "Penguin Publishers",
    //     "Publishing Dates": "2022-01-15"
    // },
    // {
    //     "Book": "Animal Farm",
    //     "Author": "George Orwell",
    //     "Publisher": "Penguin Publisher",
    //     "Publishing Dates": "2023-03-20"
    // }
];

function loadData() {
        const storedData = localStorage.getItem('BookData');
        if (storedData) {
              tasks = JSON.parse(storedData);
            //   console.log(tasks);
            //  BookData.push(tasks)
              populateTable(tasks);
        
            }
        }
        
        loadData();
        

// Function to populate the table
function populateTable(data) {
    var tableData = document.getElementById("table-data");

    let n = 1;
    for (var i = 0; i < data.length; i++) {
        var row = tableData.insertRow(-1);
        var cellSr = row.insertCell(0);
        var cellBook = row.insertCell(1);
        var cellAuthor = row.insertCell(2);
        var cellPublisher = row.insertCell(3);
        var cellDates = row.insertCell(4);
        
        
        cellSr.innerHTML = n++;
        cellBook.innerHTML = data[i].Book;
        cellAuthor.innerHTML = data[i].Author;
        cellPublisher.innerHTML = data[i].Publisher;
        cellDates.innerHTML = data[i]["Publishing Dates"];

        let button = document.createElement("button");
        let td = row.insertCell(5);
        button.innerText = "Edit";
        button.className = "button";
        td.append(button);

        button = document.createElement("button");
        td = row.insertCell(6);
        button.innerText = "Delete";
        button.className = "button";
        td.append(button);
    }
}


function saveData() {
    localStorage.setItem('BookData', JSON.stringify(tasks));
  }

saveData();

