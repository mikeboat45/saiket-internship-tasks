const posts = JSON.parse(localStorage.getItem("posts")) || [];

const emptyContainer = document.getElementById("empty-container");

const postsContainer = document.getElementById("posts-container");

if (emptyContainer && posts.length === 0) {
  const textDisplay = document.createElement("p");
  textDisplay.textContent =
    "No posts yet. Click 'Create New Post' to publish your first article.";

  textDisplay.style.fontStyle = "italic";
  textDisplay.style.paddingTop = "20px";
  emptyContainer.appendChild(textDisplay);
} else {
  posts.forEach((post) => {
    const cardHTML = `<div class="post-card">
                <img src="${
                  post.img || "/Task-Five-Six/assets/placeholder.png"
                }" alt="Post image" class="post-image">

                <div>
                <h3>${post.title}</h3>
                <p class="category">${post.category}</p>
                </div>
                <p><strong>${post.author}</strong> — ${post.date}</p>
                

                <p class="excerpt">${post.content.substring(0, 100)}...</p>

                <a href="read.html?id=${post.id}" class="read-btn">Read Post</a>
            </div>`;

    postsContainer.insertAdjacentHTML("afterbegin", cardHTML);
  });
}
