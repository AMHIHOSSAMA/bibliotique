
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const petSelect = document.getElementById('pet-select');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    ckeckInput();
});

function ckeckInput() {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const priceValue = price.value.trim();
    const dateValue = date.value.trim();
    const petSelectValue = petSelect.value.trim();

    if (titleValue === '') {
        setErrorFor(title, 'le titre ne peu etre pas vide');
    } else {
        setSuccessFor(title)
    }
    if (title.value.length > 20) {
        setErrorFor(title, 'le titre ne peu etre pas plus de 20 lettres')
    }else if(title.value.length < 4){
        setErrorFor(title, 'le titre ne peu etre pas moin de 4 lettres')
    }else {
        setSuccessFor(title)
    }

    if (authorValue === '') {
        setErrorFor(author, 'le nom d\'author ne peu etre pas vide');
    } else if (author.value.length > 20) {
        setErrorFor(author, 'le nom d\'author ne peu etre pas plus de 20 lettres');
    } else if (author.value.length < "4") {
        setErrorFor(author, 'le nom d\'author ne peu etre pas moin de 4 lettre');
    } else {
        setSuccessFor(author);
    }



    if (priceValue === '') {
        setErrorFor(price, 'Ajouter le prix de livre');
    } else if(price.value.length <= 0){
        setErrorFor(price, 'le prix ne peu etre pas moin de 0 `${price.value.length}`');
    }else if(price.value.length > 500){
        setErrorFor(price, 'le prix ne peu etre pas moin de 500 dh ');
    }

    if (dateValue === '') {
        setErrorFor(date, 'Remplir la date de publication');
    } else {
        setSuccessFor(date)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}




var variables = null
const submitForm = document.getElementById('form');
let booksList = [];
const list = document.getElementById('book-list');
const choice = document.getElementsByName('narratif');



var selectedRow = null;

function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewRecord(formData);
    }else{

    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["author"] = document.getElementById("author").value;
    formData["price"] = document.getElementById("price").value;
    formData["date"] = document.getElementById("date").value;
    formData["language"] = document.getElementById("pet-select").value;
    formData["booktpes"] = document.getElementsByClassName(".booktpes").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("testings").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.title;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.author;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.price;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.date;
     var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.language;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.booktpes;
    var cell6 = newRow.insertCell(6);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}