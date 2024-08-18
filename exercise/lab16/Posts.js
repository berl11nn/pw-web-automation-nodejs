class Posts {

    constructor(userId, postId, title, body) {
        this._validateUserId(userId);
        this._validatePostId(postId);
        this._userId = userId;
        this._postId = postId;
        this._title = title;
        this._body = body;
    }


    _validateUserId(userId) {
        if (userId === Number.NaN) {
            throw new Error("UserId is not a number!!!");
        }
    }

    _validatePostId(postId) {
        if (postId === Number.NaN) {
            throw new Error("postId is not a number!!!");
        }
    }

}

module.exports = Posts;