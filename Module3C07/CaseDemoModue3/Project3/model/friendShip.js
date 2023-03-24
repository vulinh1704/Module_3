class FriendShip {
    #id;
    #idUser1;
    #idUser2;
    #status;

    constructor(id, idUser1, idUser2, status) {
        this.#id = id;
        this.#idUser1 = idUser1;
        this.#idUser2 = idUser2;
        this.#status = status;
        this._id = id;
        this._idUser1 = idUser1;
        this._idUser2 = idUser2;
        this._status = status;
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

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

module.exports = FriendShip;