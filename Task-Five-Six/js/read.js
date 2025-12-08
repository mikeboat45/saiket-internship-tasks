const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

const currentPost = posts.find((p) => p.id == postId);

const article = document.getElementById("post-card");

const postArticle = `<h1>${currentPost.title}</h1>
    <p><strong>${currentPost.author}</strong> — <span>${currentPost.date}</span></p>
    <p class="excerpt">${currentPost.content}</p>

`;
article.insertAdjacentHTML("afterbegin", postArticle);
