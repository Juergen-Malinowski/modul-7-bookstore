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

    let redHeart = "./assets/logo/red-heart-48px.png"
    let blackHeart = "./assets/logo/black-heart-48px.png"
    let showHeart = "";

    for (let index = 0; index < books.length; index++) {

        // check, what heart is to render
        if (books[index].liked) {
            showHeart = redHeart;
        } else {
            showHeart = blackHeart;
        }

        bookList.innerHTML += renderBooks(index, showHeart);

        for (let indexList = 0; indexList < books[index].comments.length; indexList++) {
            if (indexList == 0) {
                commentsList = document.getElementById(`comments_positon${index}`);
            }

            commentsList.innerHTML += renderComments(index, indexList);

            if (indexList == books[index].comments.length - 1) {

                commentsList.innerHTML += getComments(index, indexList);
            }
        }
    }
}


function renderBooks(index, showHeart) {
    // console.log(books[index].bookName);
    
    return `
        <section  class="main_grafik">
            <h2> ${books[index].bookName}</h2>

            <!-- show: Book-Cover, Like-Heart, Likes ... -->
            <div class="right_position">
                <figure class="cover_grafik">
                    <img class="img_grafik" src = "${books[index].bookCover}"  alt = "the book-cover">
                    <div class="row_likes_grafik">
                    <p class="comments_grafik" id="toggle_heart${index}" >
                        <img class="heart_img_grafik"  
                            onclick="toggleHeart(${index})" 
                            src="${showHeart}" alt="Herz-ICON">
                        <p class="likes_grafik">${books[index].likes}</p>
                    </p>
                    </div>
                </figure>

                <div class="position_book_details">

                    <!-- // show: Book-Details ... -->
                    <div class="main_book_details">
                        <p class="price_details">Preis: ${books[index].price} € </p>
                        <p class="book_details">Autor: ${books[index].author} </p>
                        <p class="book_details_dark">Erscheinungsjahr: ${books[index].publishedYear} </p>
                        <p class="book_details_dark">Genre: ${books[index].genre} </p><br>
                        <p class="book_details">Die Story:</p>
                        <p class="book_details_dark">${books[index].discription} </p><br>
                    </div>

                    <!-- // show: Book-Comments ... -->
                    <p class="comments_grafik_great">Kommentare:</p>
                    <div id="comments_positon${index}" class="comments_grafik">
                    </div>

                </div>
            </div>
            <a class="https_grafik" href="https://icons8.com/" target="_blank" title="icons8" class="external-link">Herz-ICONs von icons8.com</a>
        </section>
    `
}

function renderComments(index, indexList) {
    // render the comments for the book with this INDEX
    return `
        <p class="comments_grafik">${books[index].comments[indexList].name}</p>
        <p class="comments_grafik">${books[index].comments[indexList].comment}</p><br>
    `
}

function getComments(index, indexList) {
    // create Input-fields and Button for comments
    return `
        <input class="box_grafik" id="user_input${index}" type="text" placeholder="User-Name:" required>
        <input class="box_grafik" id="comment_input${index}" type="text" placeholder="Ihr Kommentar..." required>
        <p class="comments_incorrect_grafik" id="input_incorrect"></p>
        <button class="button_grafik" onclick="newComments(${index})" 
            type="submit">absenden</button>

    `
}


function newComments(index) {
    // get a new comment from the user
    let inputUser = "";
    let inputComment = "";

    let userContent = "";
    let commentContent = "";
    userContent = document.getElementById(`user_input${index}`);
    commentContent = document.getElementById(`comment_input${index}`);

    if (userContent.value != "" && commentContent.value != "") {
        // NUR, WENN ... in BEIDEN Feldern ein neuer Wert vorliegt ...
        inputUser = userContent.value;
        inputComment = commentContent.value;
        books[index].comments.unshift({ name: inputUser, comment: inputComment });
    } else if (userContent.value != "" || commentContent.value != "") {
        // NUR, WENN ... in EINEM Feld KEINE Eingabe gemacht wurde ...
        input_incorrect.innerHTML = "Bitte beide Felder füllen!";
        return;

    } else {
        // NUR, WENN ... KEIN Feld ausgefüllt wurde ...
        input_incorrect.innerHTML = "Bitte zuerst eine Eingabe machen!";
        return;
    }
    input_incorrect.innerHTML = "";

    // show comments with new comment
    for (let indexList = 0; indexList < books[index].comments.length; indexList++) {
        if (indexList == 0) {
            // clear the old comments-LIST
            commentsList = document.getElementById(`comments_positon${index}`);
            commentsList.innerHTML = "";
        }
        // render the new comments-LIST
        commentsList.innerHTML += renderComments(index, indexList);

        if (indexList == books[index].comments.length - 1) {
            // set INPUTS and the BUTTON new
            commentsList.innerHTML += getComments(index, indexList);
        }
    }
}

function toggleHeart(index) {
    let redHeart = "./assets/logo/red-heart-48px.png"
    let blackHeart = "./assets/logo/black-heart-48px.png"



    heart = document.getElementById(`toggle_heart${index}`);
    heart = "";

    if (books[index].liked) {
        console.log("bisher ein geliktes Buch: ", books[index].liked);

        books[index].liked = false;
        books[index].liked = books[index].liked--;

        console.log("JETZT geändert auf NICHT-LIKE: ", books[index].liked);
        console.log("Anzahl LIKES: ", books[index].likes);

        heart.innerHTML = `<img class="heart_img_grafik"  
                            onclick="toggleHeart(${index})" 
                            src="${blackHeart}" alt="Herz-ICON">
                        <p class="likes_grafik">${books[index].likes}</p>;
                        `


    } else {
        console.log("bisher ein NICHT geliktes Buch: ", books[index].liked);
        books[index].liked = true;
        books[index].liked = books[index].liked++;
        console.log("JETZT geändert auf LIKE: ", books[index].liked);
        console.log("Anzahl LIKES: ", books[index].likes);

        heart.innerHTML = `<img class="heart_img_grafik"  
                            onclick="toggleHeart(${index})" 
                            src="${redHeart}" alt="Herz-ICON">
                        <p class="likes_grafik">${books[index].likes}</p>;    
                    `
    }

    // allBooks = document.getElementById("book_list");
    // allBooks = "";

    // showBooks();
}

