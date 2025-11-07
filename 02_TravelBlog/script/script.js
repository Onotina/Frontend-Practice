import data from "./dummy.js";

// Select the feature card container
const featured_card_container = document.getElementById("featured_card_container");

const all_feature_card = data.map((item) => {
    return `
        <section class="featured_card">
                <a href="#">
                    <img src=${item.image}>
                    <h3 class="heading">${item.title.slice(0, 52)}...</h3>
                    <p>${item.post.slice(0, 30)}...</p>
                </a>
        </section>
    `
}).join("");

featured_card_container.innerHTML = all_feature_card;