const posts = JSON.parse(localStorage.getItem("posts")) || [];

const emptyContainer = document.getElementById("empty-container");

const postsContainer = document.getElementById("posts-container");

if (emptyContainer && posts.length === 0) {
  const textDisplay = document.createElement("p");
  textDisplay.textContent =
    "No posts yet. Click 'Write New Article' to publish your first article.";

  textDisplay.style.fontStyle = "italic";
  textDisplay.style.paddingTop = "20px";
  emptyContainer.appendChild(textDisplay);
} else {
  posts.forEach((post) => {
    const excerpt = post.content.split(" ").slice(0, 20).join(" ") + "...";

    const cardHTML = `<article class="post-card">
                <img src="${
                  post.img || "/Task-Five-Six/assets/placeholder.png"
                }" alt="Post image" class="post-image">

                <div class="card-info"><div class="card-top">
                <h3>${post.title}</h3>
                <p class="category">${post.category}</p>
                </div>
                <p><strong>${post.author}</strong> — <span>${
      post.date
    }</span></p>
                

                <p class="excerpt">${excerpt}</p>

                <a href="read.html?id=${
                  post.id
                }" class="read-btn"><i class="fa-solid fa-link"></i> Read Post</a></div>
            </article>`;

    postsContainer.insertAdjacentHTML("afterbegin", cardHTML);
  });
}
