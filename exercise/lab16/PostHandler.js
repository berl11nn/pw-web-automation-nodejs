const Posts = require("./Posts");

class PostHandler {

    constructor(baseUrl, slug) {
        this.url = `${baseUrl}${slug}`
    }

    async printTargetPost(userId, postId) {
        const allPostsByUserId = await this.printAllPostsByUserId(userId);
        return allPostsByUserId.find(function (post){
            return (post._postId == postId);
        });
    }

    async printAllPostsByUserId(userId) {
        const allPosts = await this._getAllPosts();
        return allPosts.filter(function (post) {
            return (post._userId == userId);
        })
    }

    //Support method
    async _getAllPosts() {
        const response = await fetch(this.url);
        const responseJson = await response.json();
        return responseJson.map(function (postContent) {
            const { userId, id, title, body } = postContent;
            return new Posts(userId, id, title, body);
        });
    }
}

module.exports = PostHandler;