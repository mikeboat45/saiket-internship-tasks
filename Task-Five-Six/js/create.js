// select the form
// form submit event
//collect form data
// create a new post object
// get existing post from localStorage
// add new post to array
// save updated post array to localStorage
// return to homepage

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
    date: new Date().toLocaleDateString(),
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));
  console.log("new post added successfuly");

  window.location.href = "index.html";
});
