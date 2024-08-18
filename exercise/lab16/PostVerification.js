const { expect, assert } = require('chai');
const PostHandler = require("./PostHandler");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

describe('Test Post Content', async function(){
    const userId = 5;
    const postId = 1;

    test('Verify post for userID', async function(){
        const response = await fetch(`${BASE_URL}${SLUG}/${postId}`);
        expect(response.status, `hello`).equals(200);
        assert.equal(response.data.id, '1', `The Id is not equal ${response.data.id}`)
    });

    test('Verify post content of target userId and PostId', async function(){

    });
})