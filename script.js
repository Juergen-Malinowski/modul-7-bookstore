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
            if (indexList == 0) {
                commentsList = document.getElementById(`comments_positon${index}`);
            }

            commentsList.innerHTML += renderComments(index, indexList);

            if (indexList == books[index].comments.length-1) {
                console.log(indexList);
                
                commentsList.innerHTML += getComments(index, indexList);
            }
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

                <div class="position_book_details">
                    <!-- // show: Book-Details ... -->
                    <div class="main_book_details">
                        <p class="price_details">Preis: ${books[index].price} € </p>
                        <p class="book_details">Autor: ${books[index].author} </p>
                        <p class="book_details_dark">Erscheinungsjahr: ${books[index].publishedYear} </p>
                        <p class="book_details_dark">Genre: ${books[index].genre} </p><br>
                    </div>

                    <!-- // show: Book-Comments ... -->
                    <p class="comments_grafik_great">Kommentare:</p>
                    <div id="comments_positon${index}" class="comments_grafik">
                    </div>
                </div>
            </div>
        </section>

    `
}


function renderComments(index, indexList) {
    return `
        <p class="comments_grafik">${books[index].comments[indexList].name}</p>
        <p class="comments_grafik">${books[index].comments[indexList].comment}</p><br>
    `
}


function getComments(index, indexList) {
    return `
        <input class="box_grafik" id="user_input" type="text" placeholder="User-Name:" required>
        <input class="box_grafik" id="comment_input" type="text" placeholder="Ihr Kommentar..." required>

        <button id="button_comments" class="button_grafik"
            onclick="newComments(index, indexList)" type="submit">
                Neuer Kommentar</button>

    `
}

function newComments(index, indexList) {
    
}

