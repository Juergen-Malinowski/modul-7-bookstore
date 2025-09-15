
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


function newComments(index) {
    // get a new comment from the user
    let inputUser = "";
    let inputComment = "";
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
    // toggle color of Heart and change nummers of Likes
    let redHeart = "./assets/logo/red-heart-48px.png"
    let blackHeart = "./assets/logo/black-heart-48px.png"

    heart = document.getElementById(`toggle_heart${index}`);
    heart.innerHTML = "";

    if (books[index].liked) {
        // Liked change to NOT Liked
        books[index].liked = false;
        books[index].likes = books[index].likes - 1;
        renderNotLike(index, blackHeart);
    } else {
        // NOT Liked change to Liked
        books[index].liked = true;
        books[index].likes = books[index].likes + 1;
        renderLike(index, redHeart);
    }
}

