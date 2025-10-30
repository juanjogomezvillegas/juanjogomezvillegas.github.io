
/*
 * Author: Juan José Gómez Villegas
 * Description: Project 1. CV, objects of javascript file
*/

/*
 * Person: Is object that contains a personal information
 *
 * instance with new Person(name, birthplace, birthyear, residence, postalCode, mobile, tel, mail)
*/
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
    // methods without any parameters or one optional parameter (by default false), that return the personal information
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

/*
 * Person: Is object that represents a project card with title, text body and a link to code in GitHub repository
 *
 * instance with new Projects(title optional, body optional, linkCode optional)
 * 
 * The title, body and linkCode they are a array with one element for each language. For exemple:
 *          - Position 0, catalan
 *          - Position 1, spanish
 *          - Position 2, english
 *          - Position 3, french
*/
class Project {
    // attributes
    #title
    #body
    #linkCode
    // constructor: [0] => ca; [1] => es; [2] => en; [3] => fr
    constructor(title = [], body = [], linkCode = []) {
        this.#title = title;
        this.#body = body;
        this.#linkCode = linkCode;
    }
    // methods without any parameters
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
    // private methods with parameters: title, body and linkCode, that buids a card with project information in a language
    #formatInfo(title, body, linkCode) {
        return `<div class="projectCard">
            <h3>${ title }</h3>
            <div>
                <p>${ body }</p>
                ${ linkCode }
            </div>
        </div>`;
    }
}
