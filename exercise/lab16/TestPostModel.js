const PostHandler = require("./PostHandler");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

async function lab16() {
    const userId = 5;
    const postId = 1;

    const postHandler = new PostHandler(BASE_URL, SLUG);

    const posts = await postHandler.printAllPostsByUserId(userId);
    console.log(posts);

    const targetPost = await postHandler.printTargetPost(userId, postId);
    console.log(targetPost);
}

lab16();