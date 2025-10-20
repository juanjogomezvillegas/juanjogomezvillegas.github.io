
class Person {
    // attributes
    #name;
    #birthplace;
    #birthyear;
    #residence;
    #postalCode;
    #mobile;
    #tel;
    #mail;
    // constructor
    constructor(name, birthplace, birthyear, residence, postalCode, mobile, tel, mail) {
        this.#name = name;
        this.#birthplace = birthplace;
        this.#birthyear = birthyear;
        this.#residence = residence;
        this.#postalCode = postalCode;
        this.#mobile = mobile;
        this.#tel = tel;
        this.#mail = mail;
    }
    // methods
    getName() {
        return this.#name;
    }
    getBirth() {
        return this.#birthplace+", "+this.#birthyear;
    }
    getResidence() {
        return this.#residence+", "+this.#postalCode;
    }
    getTelephone(mobile = false) {
        if (mobile) {
            return this.#mobile;
        } else {
            return this.#tel;
        }
    }
    getMail() {
        return this.#mail;
    }
}

class Project {
    // attributes
    #title
    #body
    #linkCode
    // constructor
    // [0] => ca; [1] => es; [2] => en; [3] => fr
    constructor(title = [], body = [], linkCode = []) {
        this.#title = title;
        this.#body = body;
        this.#linkCode = linkCode;
    }
    // methods
    getCaInfo() {
        return this.#formatInfo(this.#title[0], this.#body[0], this.#linkCode[0]);
    }
    getEsInfo() {
        return this.#formatInfo(this.#title[1], this.#body[1], this.#linkCode[1]);
    }
    getEnInfo() {
        return this.#formatInfo(this.#title[2], this.#body[2], this.#linkCode[2]);
    }
    getFrInfo() {
        return this.#formatInfo(this.#title[3], this.#body[3], this.#linkCode[3]);
    }
    // private methods
    #formatInfo(title, body, linkCode) {
        return `<div class="projectCard">
            <h3>${ title }</h3>
            <p>${ body }</p>
            ${ linkCode }
        </div>`;
    }
}
