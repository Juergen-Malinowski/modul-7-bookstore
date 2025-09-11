// test-area
// console.log(books[1]);
// console.log(books[1].comments);
// console.log(books[3].bookName + " von " + books[3].author + " aus " + books[3].publishedYear);

// for (let index = 0; index < books.length; index++) {
//     console.log(books[index].discription);
// }

// for (let index = 0; index < books.length; index++) {
//     console.log("Kommentare zu 'Die Elfen' ..." + books[4].comments);
// }

// End of test-area





// START script-JS


// DEFINITION VARIABLE/CONST
let theBook = document.getElementById("book-list");

function showBooks() {
    book_list.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        book_list.innerHTML += renderBooks(index);
    }
}

function renderBooks(index) {
    // console.log(books[index].bookName);
    return `
        <h2> ${ books[index].bookName }</h2>
        <img class="img_grafik" src = "${books[index].bookCover}"  alt = "">
    `
}

// function renderMyImg(index) {
//     // onkeyup and onclick for User-Action
//     return `
//         <img onclick="showBigImg(${index}, event)" 
//         onkeyup="showBigImg(${index}, event)"
//         class="img_size" src="./assets/img/${myImg[index]}" tabindex="0" 
//         aria-label="./assets/img/${myDiscribtion[index]}" 
//         alt="./assets/img/${myDiscribtion[index]}">
//         `
// }

