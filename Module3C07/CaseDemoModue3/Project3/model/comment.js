class Comment {
    #id;
    #idPost;
    #idUser;
    #timeComment;
    #content;

    constructor(id, idPost, idUser, timeComment, content) {
        this.#id = id;
        this.#idPost = idPost;
        this.#idUser = idUser;
        this.#timeComment = timeComment;
        this.#content = content;
        this._id = id;
        this._idPost = idPost;
        this._idUser = idUser;
        this._timeComment = timeComment;
        this._content = content;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get idPost() {
        return this._idPost;
    }

    set idPost(value) {
        this._idPost = value;
    }

    get idUser() {
        return this._idUser;
    }

    set idUser(value) {
        this._idUser = value;
    }

    get timeComment() {
        return this._timeComment;
    }

    set timeComment(value) {
        this._timeComment = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}

module.exports = Comment;