
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

// Store my information in object juanjo of type Person
const juanjo = new Person("Juan José Gómez Villegas", "Figueres, Girona", 2001, "Figueres", 17600, "674 979 133", "972 671 123", "juanjogomvil@gmail.com");

/*
* run code on load page
*/
window.onload = function() {    
    document.title = "Currículum Juan José Gómez villegas";
    catalan();

    document.getElementById("selChangeLang").addEventListener("change", selectLanguage);
}

/*
* show select value, to change language
*/
function selectLanguage() {
    const lang = document.getElementById("selChangeLang").value;

    switch (lang) {
        case "ca":
            catalan();
            break;
        case "es":
            spanish();
            break;
        case "en":
            english();
            break;
        case "fr":
            french();
            break;
        default:
            console.log("error");
    }
}

/*
* change language to catalan
*/
function catalan() {
    icon("images/img3.png");
    itemsNavAndTitles(["Informació Personal","Idiomes","Estudis","Experiència","Aficions","Habilitats","Projectes","Referències"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nom i Cognom:</b> ${ juanjo.getName() }</li>
            <li><b>Lloc i Any de Naixement:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residència i Codi Postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mòbil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Telèfon:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Correu Electrònic:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

/*
* change language to spanish
*/
function spanish() {
    icon("images/img2.png");
    itemsNavAndTitles(["Información Personal","Idiomas","Estudios","Experiencia","Aficiones","Habilidades","Proyectos","Referencias"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nombre i Apellidos:</b> ${ juanjo.getName() }</li>
            <li><b>Lugar y Año de Nacimiento:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residencia y Código Postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Móvil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Teléfono:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Correo Electrónico:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

/*
* change language to english
*/
function english() {
    icon("images/img5.png");
    itemsNavAndTitles(["Personal Information","Languages","Studies","Experience","Hobbies","Skills","Portfolio","References"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Name and Surname:</b> ${ juanjo.getName() }</li>
            <li><b>Place and Year of Birth:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residence and Postal Code:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Phone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Email:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

/*
* change language to french
*/
function french() {
    icon("images/img4.png");
    itemsNavAndTitles(["Information personnel","Langues","Études","Expérience","Loisirs","Compétences","Portefeuille","Références"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nom et prénom:</b> ${ juanjo.getName() }</li>
            <li><b>Lieu et Année de naissance:</b> ${ juanjo.getBirth() }</li>
            <li><b>Résidence et code postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Téléphone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Mail:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

/*
* change icon the page
*/
function icon(img) {
    document.getElementById("currentLanguage").href = img;
}

/*
* establish titles in navbar
*/
function itemsNavAndTitles(items) {
    let idsItemNav = document.getElementById("menu").getElementsByClassName("elementmenu");
    let idsTitles = ["personalInfo","languages","studies","experience","hobbies","skills","portfolio","references"];

    for (i = 0; i < idsItemNav.length; i++) {
        writeItemNav(items[i], idsItemNav[i].id);
    }

    for (i = 0; i < idsTitles.length; i++) {
        document.getElementById(idsTitles[i]).getElementsByTagName("article")[0].getElementsByTagName("h2")[0].textContent = items[i];
    }
}

/*
* write item the navbar
*/
function writeItemNav(item, id) {
    document.getElementById(id).textContent = item;
}

/*
* write content located in element id
*/
function writeContent(id, content) {
    document.getElementById(id).innerHTML = content;
}
