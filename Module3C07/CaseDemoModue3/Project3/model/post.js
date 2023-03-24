class Post {
    #id;
    #userId;
    #idComment;
    #timePost;
    #likeCount;
    #accessModifier;
    #content;

    constructor(id, userId, idComment, timePost, likeCount, accessModifier, content) {
        this.#id = id;
        this.#userId = userId;
        this.#idComment = idComment;
        this.#timePost = timePost;
        this.#likeCount = likeCount;
        this.#accessModifier = accessModifier;
        this.#content = content;
        this._id = id;
        this._userId = userId;
        this._idComment = idComment;
        this._timePost = timePost;
        this._likeCount = likeCount;
        this._accessModifier = accessModifier;
        this._content = content;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get idComment() {
        return this._idComment;
    }

    set idComment(value) {
        this._idComment = value;
    }

    get timePost() {
        return this._timePost;
    }

    set timePost(value) {
        this._timePost = value;
    }

    get likeCount() {
        return this._likeCount;
    }

    set likeCount(value) {
        this._likeCount = value;
    }

    get accessModifier() {
        return this._accessModifier;
    }

    set accessModifier(value) {
        this._accessModifier = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}

module.exports = Post;