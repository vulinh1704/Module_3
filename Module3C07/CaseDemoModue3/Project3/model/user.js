class User {
    #id;
    #username;
    #password;
    #name;
    #dateOfBirth;
    #sex;
    #email;
    #image;
    #createDate;
    #roleId;
    #status;

    constructor(id, username, password, name, dateOfBirth, sex, email, image, createDate, roleId, status) {
        this.#id = id;
        this.#username = username;
        this.#password = password;
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
        this.#sex = sex;
        this.#email = email;
        this.#image = image;
        this.#createDate = createDate;
        this.#roleId = roleId;
        this.#status = status;
        this._id = id;
        this._username = username;
        this._password = password;
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._sex = sex;
        this._mail = mail;
        this._image = image;
        this._createDate = createDate;
        this._roleId = roleId;
        this._status = status;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }

    get sex() {
        return this._sex;
    }

    set sex(value) {
        this._sex = value;
    }

    get email() {
        return this._mail;
    }

    set email(value) {
        this._email = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get createDate() {
        return this._createDate;
    }

    set createDate(value) {
        this._createDate = value;
    }

    get roleId() {
        return this._roleId;
    }

    set roleId(value) {
        this._roleId = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}

module.exports = User;