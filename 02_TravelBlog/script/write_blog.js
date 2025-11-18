import { v4 as uuidv4 } from "https://cdn.jsdelivr.net/npm/uuid@latest/+esm";

/*-- Get Inputs --*/
const title = document.getElementById("blog_title");
const blog_content = document.getElementById("blog_content");
const category = document.getElementById("category");
const publish_btn = document.getElementById("publish");

/* */
const data = localStorage.getItem("travel_blog");

const stringData = data === null ? [] : JSON.parse(data);
console.log("stringData", stringData);

let blog_title = "";
let blog_body = "";
let blog_category = "";

// Add Event Listener to when it is clicked
title.addEventListener("input", (e) => {
    blog_title = e.target.value;
})
blog_content.addEventListener("input", (e) => {
    blog_body = e.target.value;
})
category.addEventListener("change", (e) => {
    blog_category = e.target.value;
})


const save_data = (e) => {
    e.preventDefault();

    if(blog_title.trim().length < 3) {
        alert("Please enter a title for your blog");
        console.log("title", blog_title);
        return
    }

    if(blog_body.trim().length < 10) {
        alert("Please enter a blog post for your blog");
        console.log("title", blog_body);
        return
    }

    if(blog_title.trim().length < 1) {
        alert("Please select a category for your blog");
        console.log("title", blog_category);
        return
    }

    const blog_data = {
        id: uuidv4(),
        title: blog_title,
        post: blog_body,
        category: blog_category,
        image: "../assets/patagonian_sunset.jpg",
        meta: {
        author: "",
        date: "",
        time: "",
        },
        comments: []
    };
    console.log("blog data", blog_data);
    stringData.push(blog_data);
    localStorage.setItem("travel_blog", JSON.stringify(stringData));

    title.value = "";
    blog_content.value = "";
    category.value = "";
};

publish_btn.addEventListener("click", (e) => {
    save_data(e);
})