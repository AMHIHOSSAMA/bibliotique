
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
    }

    if (authorValue === '') {
        setErrorFor(author, 'le nom d\'author ne peu etre pas vide');
    } else if (authorValue > 20) {
        setErrorFor(author, 'le nom d\'author ne peu etre pas plus de 20 lettres');
    } else if (authorValue < "4") {
        setErrorFor(author, 'le nom d\'author ne peu etre pas moin de 4 lettre');
    } else {
        setSuccessFor(author);
    }



    if (priceValue === '') {
        setErrorFor(price, 'Ajouter le prix de livre');
    } else {
        setSuccessFor(price)
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




function onFormSubmit() {
    if (validate()) {
        var formElements = lesElements();
        if (variables == null)
            insertNewRecord(formElements);
        else
            updateRecord(formElements);
        resetForm();
    }
}

function lesElements() {
    var formElements = {};
    formElements["title"] = document.getElementById("title").value;
    formElements["author"] = document.getElementById("author").value;
    formElements["price"] = document.getElementById("price").value;
    formElements["date"] = document.getElementById("date").value;
    formElements["language"] = document.getElementById("language").value;
    return formElements;
}
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = lesElements();
    choice.forEach(r => {
        if (r.checked) {

            data.bookType = r.value;
        }
    })
    booksList.push({ ...data, id: Math.ceil(Math.random() * 12 + Date.now()) });
    console.log(data);
    const markup = `
    ${booksList.map(item => {
        return `<tr>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.price}</td>
        <td>${item.date}</td>
        <td>${item.language}</td>
        <td>${item.bookType}</td>
        <td><button type="button" onEdit(this) >Edit</button><button type="button" onclick=deletElements()>Delete</button></td>
        </tr>`

    }).join('')
        }`;

    list.innerHTML = ''
    list.insertAdjacentHTML('afterbegin', markup);
});


