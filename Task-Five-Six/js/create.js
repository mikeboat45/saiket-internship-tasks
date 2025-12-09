const form = document.getElementById("create-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const img = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  const newPost = {
    id: Date.now(),
    title,
    author,
    category,
    img,
    content,
    date: new Date().toLocaleString(),
  };

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));
  console.log(posts);

  setTimeout(function () {
    window.location.href = "index.html";
  }, 3000);
});
