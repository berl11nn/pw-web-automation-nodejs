const readline = require('readline-sync');
const targetUrl = (`https://jsonplaceholder.typicode.com/posts`);

const postId = readline.question('Input your Post ID: ')
const inputUserId = readline.question('Input your User ID: ')

fetch(`${targetUrl}/${postId}`)
    .then(response => response.json())
    .then(post => {
        if (post.id == postId && post.userId == inputUserId) {
            console.log("Post content:");
            console.log(post)
        } else {
            console.log("The PostId is not correct!");
        }
    })
    .then(userId => fetch(`${targetUrl}?userId=${inputUserId}`))
    .then(response => response.json())
    .then(posts => {
        console.log("All Posts by User:");
        console.log(posts);
    });