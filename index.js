
class Person {
    #name;
    #birthplace;
    #birthyear;
    #residence;
    #postalCode;
    #mobile;
    #tel;
    #mail;

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

const juanjo = new Person("Juan José Gómez Villegas", "Figueres, Girona", 2001, "Figueres", 17600, "674 979 133", "972 671 123", "juanjogomvil@gmail.com");

window.onload = function() {
    document.title = "Currículum, Juan José Gómez villegas";
    catalan();

    document.getElementById("changeCatalan").addEventListener("click", catalan);
    document.getElementById("changeSpanish").addEventListener("click", spanish);
    document.getElementById("changeEnglish").addEventListener("click", english);
    document.getElementById("changeFrench").addEventListener("click", french);
}

function catalan() {
    icon("images/img3.png");
    itemsNavAndTitles(["Informació Personal","Estudis","Experiència","Aficions","Habilitats","Referències","Projectes","Idiomes"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nom i Cognom:</b> ${ juanjo.getName() }</li>
            <li><b>Lloc i Any de Naixement:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residència i Codi Postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mòbil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Telèfon:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Correu Electrònic:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

function spanish() {
    icon("images/img2.png");
    itemsNavAndTitles(["Información Personal","Estudios","Experiencia","Aficiones","Habilidades","Referencias","Proyectos","Idiomas"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nombre i Apellidos:</b> ${ juanjo.getName() }</li>
            <li><b>Lugar y Año de Nacimiento:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residencia y Código Postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Móvil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Teléfono:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Correo Electrónico:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

function english() {
    icon("images/img5.png");
    itemsNavAndTitles(["Personal Information","Studies","Experience","Hobbies","Skills","References","Projects","Languages"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Name and Surname:</b> ${ juanjo.getName() }</li>
            <li><b>Place and Year of Birth:</b> ${ juanjo.getBirth() }</li>
            <li><b>Residence and Postal Code:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Phone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Email:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

function french() {
    icon("images/img4.png");
    itemsNavAndTitles(["Information personnel","Études","Expérience","Loisirs","Compétences","Références","Projets","Langues"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><b>Nom et prénom:</b> ${ juanjo.getName() }</li>
            <li><b>Lieu et Année de naissance:</b> ${ juanjo.getBirth() }</li>
            <li><b>Résidence et code postal:</b> ${ juanjo.getResidence() }</li>
            <li><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><b>Téléphone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><b>Mail:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
}

function icon(img) {
    document.getElementById("currentLanguage").href = img;
}

function itemsNavAndTitles(items) {
    let idsItemNav = document.getElementById("menu").getElementsByClassName("elementmenu");
    let idsTitles = ["personalInfo","studies","experience","hobbies","skills","references","portfolio","languages"];

    for (i = 0; i < idsItemNav.length; i++) {
        writeItemNav(items[i], idsItemNav[i].id);
    }

    for (i = 0; i < idsTitles.length; i++) {
        document.getElementById(idsTitles[i]).getElementsByTagName("article")[0].getElementsByTagName("h2")[0].textContent = items[i];
    }
}

function writeItemNav(item, id) {
    document.getElementById(id).textContent = item;
}

function writeContent(id, content) {
    document.getElementById(id).innerHTML = content;
}
