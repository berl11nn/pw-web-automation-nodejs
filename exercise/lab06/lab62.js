const readline = require('readline-sync');
let postId = readline.question("Please input post id: ");
let inputUserId = readline.question("Please input user id: ");

const targetUrl = 'https://jsonplaceholder.typicode.com/posts';

async function PrintPostContent() {
    const response = await fetch(`${targetUrl}/${postId}`);
    const post = await response.json();
    if (post.id == postId && post.userId == inputUserId) {
        console.log("Post content:");
        console.log(post)
    } else {
        console.log("The PostId is not correct!");
    }
}

async function PrintAllPostsContent() {
    const response = await fetch(`${targetUrl}?userId=${inputUserId}`);
    const posts = await response.json();
    console.log("All Posts by User:");
    console.log(posts);
}

async function main() {
    await PrintPostContent();
    await PrintAllPostsContent();
}

main();