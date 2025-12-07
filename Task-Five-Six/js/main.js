const posts = JSON.parse(localStorage.getItem("posts")) || [];

const container = document.getElementById("posts-container");

if (container && posts.length === 0) {
  const textDisplay = document.createElement("p");
  textDisplay.textContent =
    "No posts yet. Click 'Create New Post' to publish your first article.";

  textDisplay.style.fontStyle = "italic";
  textDisplay.style.paddingTop = "20px";
  container.appendChild(textDisplay);
} else {
  posts.forEach((post) => {
    const cardHTML = `<div class="post-card">
                <img src="${
                  post.img || "/Task-Five-Six/assets/placeholder.png"
                }" alt="Post image" class="post-image">

                <h2>${post.title}</h2>
                <p><strong>${post.author}</strong> — ${post.date}</p>
                <p class="category">${post.category}</p>

                <p class="excerpt">${post.content.substring(0, 100)}...</p>

                <a href="edit.html?id=${post.id}" class="edit-btn">Edit Post</a>
            </div>`;

    container.insertAdjacentHTML("afterbegin", cardHTML);
  });
}
