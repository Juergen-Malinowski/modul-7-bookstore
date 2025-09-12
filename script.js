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


function showBooks() {
    bookList = document.getElementById("book_list");

    for (let index = 0; index < books.length; index++) {
        bookList.innerHTML += renderBooks(index);

        for (let indexList = 0; indexList < books[index].comments.length; indexList++) {
            bookList.innerHTML += renderComments(index, indexList);
            // console.log(books[index].comments[indexList].name);
            // console.log(books[index].comments[indexList].comment);

        }
    }
}


function renderBooks(index) {
    // console.log(books[index].bookName);
    return `
        <section  class="main_grafik">
            <h2> ${books[index].bookName}</h2>

            <!-- show: Book-Cover, Like-Heart, Likes ... -->
            <div class="right_position">
                <figure class="cover_grafik">
                    <img class="img_grafik" src = "${books[index].bookCover}"  alt = "">
                    <div class="row_likes_grafik">
                        <img class="heart_img_grafik" src="./assets/logo/heart-thin-icon.png" alt="">
                        <p class="likes_grafik">${books[index].likes} </p>
                    </div>
                </figure>

                <!-- // show: Book-Details ... -->
                <div class="position_book_details">
                    <p class="price_details">Preis: ${books[index].price} € </p>
                    <p class="book_details">Autor: ${books[index].author} </p>
                    <p class="book_details_dark">Erscheinungsjahr: ${books[index].publishedYear} </p>
                    <p class="book_details_dark">Genre: ${books[index].genre} </p><br>
                    <p class="book_details_content">Story: </p>
                    <p class="book_details_mini">${books[index].discription} </p>
                </div>
            </div>
        </section>

    `
}

// function showComments(index) {
//     for (let indexList = 0; indexList < books[index].comments.length; indexList++) {
//         bookList.innerHTML += renderComments(index, indexList);
//         console.log(books[index].comments[indexList].name);
//         console.log(books[index].comments[indexList].comment);

//     }
// }

function renderComments(index, indexList) {
    return `
        <p class="comment_grafik">${books[index].comments[indexList].name}</p>
        <p class="comment_grafik">${books[index].comments[indexList].comment}</p><br>
    `
}



// für Mobile
// function renderBooks(index) {
//     // console.log(books[index].bookName);
//     return `
//         <section  class="main_grafik">
//             <h2> ${books[index].bookName}</h2>

//             <!-- show: Book-Cover, Like-Heart, Likes ... -->

//             <figure class="cover_grafik">
//                 <img class="img_grafik" src = "${books[index].bookCover}"  alt = "">
//                 <div class="row_likes_grafik">
//                     <img class="heart_img_grafik" src="./assets/logo/heart-thin-icon.png" alt="">
//                     <p class="likes_grafik">${books[index].likes} </p>
//                 </div>
//                 <br>
//             </figure>

//             <!-- // show: Book-Details ... -->

//             <div class="position_book_details">

//                 <p class="price_details">Preis: ${books[index].price} € </p>
//                 <p class="book_details">Autor: ${books[index].author} </p>
//                 <p class="book_details">Erscheinungsjahr: ${books[index].publishedYear} </p>
//                 <p class="book_details">Genre: ${books[index].genre} </p>

//             </div>
//         </section>
//     `
// }
