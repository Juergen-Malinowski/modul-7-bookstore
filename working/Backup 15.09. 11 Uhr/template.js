// html-code (template) in js

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
                        <span class="likes_grafik">${books[index].likes}</span>
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


function renderNotLike(index, blackHeart) {
    heart.innerHTML = ` 
        <img class="heart_img_grafik" onclick="toggleHeart(${index})" 
            src="${blackHeart}" alt="Herz-ICON">
        <p class="likes_grafik">${books[index].likes}</p>
        `
}

function renderLike(index, redHeart) {
    heart.innerHTML = `
        <img class="heart_img_grafik" onclick="toggleHeart(${index})" 
            src="${redHeart}" alt="Herz-ICON">
        <p class="likes_grafik">${books[index].likes}</p>    
        `
}