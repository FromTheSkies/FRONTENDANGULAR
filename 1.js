const API_URLPOSTS = "https://jsonplaceholder.typicode.com/posts"
const API_URLCOMMENTS = "https://jsonplaceholder.typicode.com/comments"
const listElement = document.querySelector(".posts")
const postTemplate = document.getElementById("single-post")
const fetchPostsButton = document.querySelector('#fetch')
const head = document.querySelector('.head')

const listElementComments = document.querySelector(".comments")
const commentTemplate = document.getElementById("single-comment")


function activatePosts(){
    const li = `<div class="posthead">
    <a href="http://127.0.0.1:5500/FRONTEND/W7/index.html"><img style = "position:relative;left:610px;width: 200px;height: 90px;" class="post-logo" src="https://i.ibb.co/0h49hhC/5a4e432a2da5ad73df7efe7a.png"></a>
    <button style = "position: relative;top:-35px;" class="post-button" onclick="activatePosts()"><h style = "background-image: linear-gradient(20deg, #6b1223, #933e47, #7b4dab,#5e2c93,#260854);-webkit-background-clip: text;-moz-background-clip: text;-webkit-text-fill-color: transparent; -moz-text-fill-color: transparent;">Activate</h></button>
</div>`;

    head.innerHTML = li;

    listElementComments.innerHTML = "";
    listElement.innerHTML = "";

    fetch(API_URLPOSTS)
      .then(response => response.json())
      .then(posts => {
        for (const post of posts) {
          const postEl = document.importNode(postTemplate.content, true);

          postEl.querySelector('.title').textContent = post.title.toUpperCase();
          postEl.querySelector('.info').textContent = post.body;
          postEl.querySelector('.post-item').id = post.id;
          listElement.appendChild(postEl);
        }
    });
}

function activateComments(){
    const li = `<div class = "comhead">
    <a style = "text-decoration: none;color: black;"href = "http://127.0.0.1:5500/FRONTEND/W7/index.html">
        <h style = "position:relative;left:600px;font-size: 50px;top:20px;">C</h>
        <img style = "position:relative;left:596px;width: 30px;height: 30px;top:21px;"src = 'https://i.ibb.co/S3FwC9k/instagram-comment-icon.png'>
        <h style = "position:relative;left:595px;font-size: 50px;top:20px;">mments</h>
    </a>
    <button style = "left:0px;top:10px;position:relative;" onclick = "activatePosts()"><h style = "background-image: linear-gradient(20deg, #6b1223, #933e47, #7b4dab,#5e2c93,#260854);-webkit-background-clip: text;-moz-background-clip: text;-webkit-text-fill-color: transparent; -moz-text-fill-color: transparent;">Go Back</h></button>
</div>`

    head.innerHTML = li 

    listElement.innerHTML = ""
    listElementComments.innerHTML = ""

    document.addEventListener("click", function(event) {
        var element = event.target;
        while (element && element.getAttribute("id") === null) {
            if(element.parentNode == null){
                break
            }
            element = element.parentNode.parentNode;
        }
        var parentId = element.id;

        fetch(API_URLCOMMENTS)
        .then(response => response.json())
        .then(commentaries => {
            var i = 0;
            
            for(const com of commentaries){
                const comEl = document.importNode(commentTemplate.content,true)
                
                if(com.postId == parentId){
                    console.log(typeof com)
                    comEl.getElementById("big").textContent = com.name.toUpperCase();
                    comEl.getElementById("middle").textContent = com.email;
                    comEl.getElementById("small").textContent = com.body;
        
                    listElementComments.appendChild(comEl)
                }
            }
            console.log(listElementComments.children.length)
        });

    });


}

