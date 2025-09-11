// Schreibweise: ID mit Bindestrich, Class mit Unterstrich, JS in CamelCase

// DEFINITION VARIABLE/CONST
const dialogActivity = document.getElementById("book-store");

// test-area
console.log(books[1]);
console.log(books[1].comments);
console.log(books[3].bookName + " von " + books[3].author + " aus " + books[3].publishedYear);

for (let index = 0; index < books.length; index++) {
    console.log(books[index].discription);
}

for (let index = 0; index < books.length; index++) {
    console.log("Kommentare zu 'Die Elfen' ..." + books[4].comments);
}

// End of test-area


// DIALOG-Control / open-close
function openDialog() {
    dialogActivity.showModal();
}

// Klären, welche der nachfolgenden Funktionen noch nötig sind

// function protectPopagation(event) {
//     event.stopPopagation;
// }

// function closeDialog(event) {
//     // to check rihgt Keys for close this dialog (WCAG)
//     if (event.key === " " || event.key === "Enter" || event.type === "click") {
//     dialogActivity.close();
//     event.stopPopagation;
//     } else {
//         return
//     }
// }




