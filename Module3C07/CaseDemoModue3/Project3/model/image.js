class Image {
    #id;
    #idPost;
    #src;

    constructor(id, idPost, src) {
        this.#id = id;
        this.#idPost = idPost;
        this.#src = src;
        this._id = id;
        this._idPost = idPost;
        this._src = src;
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

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }
}

module.exports = Image;