var comments = [];
var parent;
var currPostID;

document.querySelector("#createComment").addEventListener('click', function() {
    console.log("clicked");
    if(currUser){
        createComment();
    }else{
        alert("Please sign in to use this feature!");
    }
    
})

document.querySelector("#goBack").addEventListener('click', function() {
    var refresh = window.location.href.split('&')[0];
    window.history.pushState({ path: refresh }, '', refresh);
    activePost = undefined;
    removeComments();
})

function createComment() {
    var content = document.getElementById("commentForm").value;

    ref.collection('posts').doc(currPostID).collection('comments').add({
        content: content,
        owner: currUser.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((comment) => {
        alert("Comment successful! Thank you for your contribution to the DIVOC Forum!");

        ref.collection('posts').doc(activePost).update({
            numOfComments: firebase.firestore.FieldValue.increment(1)
        })
        .then(() => {   
            db.collection("users").doc(currUser.uid).update({
                comments: firebase.firestore.FieldValue.arrayUnion(comment)
            })
            .then(() => {
                location.reload();
            })
        });
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.log(error);
    })
}

function getComments(elem) {
    var postID = elem.parentNode.parentNode.parentNode.parentNode.id;
    currPostID = postID;
    console.log(postID);
    if(!activePost) {
        var refresh = window.location.href + '&post='+postID;
        window.history.pushState({ path: refresh }, '', refresh);
        activePost = postID;
    }
    else {
        currPostID = activePost;
    }
    ref.collection('posts').doc(currPostID).collection('comments').get()
        .then((commentSnap) => {
            commentSnap.forEach((comment) => {
                comments.push(comment);
            })
            renderPost();
        })
        .catch((error) => {
            console.log("No comments found.", error)
        })
}

function renderPost() {
    ref.collection("posts").doc(currPostID).get()
        .then((doc) => {
            parent = doc;
            renderComments(currPostID);
        })
}

function renderComments(currPostID) {
    const data = parent.data();
    console.log(currPostID);
    var commentElem = document.getElementsByClassName("comment")[0]
    var parentElem = document.getElementById("parentComment");
    parentElem.id = currPostID;
    var cardTitle = document.getElementById("parentTitle");
    var cardText = document.getElementById("parentText");
    var cardUser = document.getElementById("parentUser");
    var cardTime = document.getElementById("parentTime");
    var cardPic = document.getElementById("parentUserImage");

        cardPic.className = "mr-3 rounded-circle profIcon";
        console.log(data.ownerPic);
        if(data.ownerPic == "" || data.ownerPic == undefined){
            cardPic.classList.add("fa-user");
        }else{
            cardPic.classList.add(data.ownerPic);
        }
        cardPic.classList.add("fa");
        cardPic.classList.add("fa-2x");
        cardTitle.innerHTML = data.title;
        cardText.innerHTML = data.text;
        cardUser.innerHTML = data.owner;
        cardTime.innerHTML = timeSince(data.createdAt.toDate());
    
    commentElem.before(parentElem);

    comments.forEach((comment) => {
        const data = comment.data();
        var cloneCommentElem = commentElem.cloneNode(true);
        cloneCommentElem.id = comment.id;

        var cardUsername = document.getElementById("username");
        var cardContent = document.getElementById("content");
        var cardTime = document.getElementById("commentTime");
        document.getElementsByClassName("comment")[0].classList.add("commentClone");
        cardUsername.innerHTML = data.owner;
        cardContent.innerHTML = data.content;
        commentElem.after(cloneCommentElem);
        commentElem.id = comment.id;
        cardTime.innerHTML = timeSince(data.createdAt.toDate());
        commentElem.classList.add("commentClone");
        commentElem.style.display = "block";
    })
}

function removeComments() {
    var elements = document.getElementsByClassName("commentClone")
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    comments = [];
}