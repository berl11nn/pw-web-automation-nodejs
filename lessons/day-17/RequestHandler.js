class RequestHandler {

    constructor(baseUrl, slug) {
        //Re-use, dùng lại để các hàm dưới dùng lại khi cần 
        //Khi các method cần để gọi đi gọi lại
        this.baseUrl = `${baseUrl}${slug}`;
    }

    slug(slug) {
        this._slug = slug;
    }

    async getAllPostsByUserId(userId) {

    }

    async getPostByUserIdAndPostID(userId, id) {

    }
}



module.exports = RequestHandler;