const API_URLPOSTS = "https://jsonplaceholder.typicode.com/posts"
const API_URLCOMMENTS = "https://jsonplaceholder.typicode.com/comments"
const listElement = document.querySelector(".posts")
const postTemplate = document.getElementById("single-post")
const fetchPostsButton = document.querySelector('#fetch')
const head = document.querySelector('.head')

const listElementComments = document.querySelector(".comments")
const commentTemplate = document.getElementById("single-comment")


function activatePosts(){
    console.log(1)
    const li = `<div class = "posthead">
    <a href = "http://127.0.0.1:5500/FRONTEND/W7/index.html"><img style = "position:relative;left:610px;width: 200px;height: 90px;"src = 'https://i.ibb.co/0h49hhC/5a4e432a2da5ad73df7efe7a.png'></a>
    <button style = "position: relative;top:-35px;" onclick="activatePosts()"><h style = "background-image: linear-gradient(20deg, #6b1223, #933e47, #7b4dab,#5e2c93,#260854);-webkit-background-clip: text;-moz-background-clip: text;-webkit-text-fill-color: transparent; -moz-text-fill-color: transparent;">Activate</h></button>
</div>`

    head.innerHTML = li

    listElementComments.innerHTML = ""

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET',API_URLPOSTS)

    xhr.responseType = 'json'

    let posts = []

    xhr.onload = () => {
        const posts = xhr.response
        for (const post of posts) {
            // console.log(1)
            const postEl = document.importNode(postTemplate.content, true);

            postEl.querySelector('.title').textContent = post.title.toUpperCase();
            postEl.querySelector('.info').textContent = post.body;
            postEl.querySelector('.post-item').id = post.id;
            listElement.appendChild(postEl);
        }
    }

    xhr.send()
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

    document.addEventListener("click", function(event) {
        var element = event.target;
        while (element && element.getAttribute("id") === null) {
                element = element.parentNode;
            
        }
        element = element.parentNode
        var parentId = element.id;

        

        listElement.innerHTML = ""

        const xhr = new XMLHttpRequest();
    
        xhr.open('GET',API_URLCOMMENTS)
    
        xhr.responseType = 'json'
    
        let commentaries = []
        // console.log(1)
    
        xhr.onload = () => {
            commentaries = xhr.response
            for(const com of commentaries){
                const comEl = document.importNode(commentTemplate.content,true)
                
                if(com.id == parentId){
                    comEl.getElementById("big").textContent = com.name.toUpperCase();
                    comEl.getElementById("middle").textContent = com.email;
                    comEl.getElementById("small").textContent = com.body;
        
                    listElementComments.appendChild(comEl)
                }
            }
        }

        xhr.send()
    });


}

