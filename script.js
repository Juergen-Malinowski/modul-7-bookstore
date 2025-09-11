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
        <section  class="main_grafik">
            <h2> ${books[index].bookName}</h2>

            <!-- show: Book-Cover, Like-Heart, Likes ... -->

            <figure class="cover_grafik">
                <img class="img_grafik" src = "${books[index].bookCover}"  alt = "">
                <div class="row_likes_grafik">
                    <img class="heart_img_grafik" src="./assets/logo/heart-thin-icon.png" alt="">
                    <p class="likes_grafik">${books[index].likes} </p>
                </div>
                <br>
            </figure>

            <!-- // show: Book-Details ... -->

            <div class="position_book_details">

                <p class="price_details">Preis: ${books[index].price} € </p>
                <p class="book_details">Autor: ${books[index].author} </p>
                <p class="book_details">Erscheinungsjahr: ${books[index].publishedYear} </p>
                <p class="book_details">Genre: ${books[index].genre} </p>

            </div>
        </section>
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

