class Chat {
    #id;
    #idUser1;
    #idUser2;
    #content;
    #timeChat;

    constructor(id, idUser1, idUser2, content, timeChat) {
        this.#id = id;
        this.#idUser1 = idUser1;
        this.#idUser2 = idUser2;
        this.#content = content;
        this.#timeChat = timeChat;
        this._id = id;
        this._idUser1 = idUser1;
        this._idUser2 = idUser2;
        this._content = content;
        this._timeChat = timeChat;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get idUser1() {
        return this._idUser1;
    }

    set idUser1(value) {
        this._idUser1 = value;
    }

    get idUser2() {
        return this._idUser2;
    }

    set idUser2(value) {
        this._idUser2 = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get timeChat() {
        return this._timeChat;
    }

    set timeChat(value) {
        this._timeChat = value;
    }
}

module.exports = Chat;