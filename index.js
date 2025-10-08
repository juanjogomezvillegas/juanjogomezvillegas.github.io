
window.onload = function() {
    document.title = "Currículum: Juan José Gómez villegas";
    catalan();

    document.getElementById("changeCatalan").addEventListener("click", catalan);
    document.getElementById("changeSpanish").addEventListener("click", spanish);
    document.getElementById("changeEnglish").addEventListener("click", english);
    document.getElementById("changeFrench").addEventListener("click", french);
}

function catalan() {
    icon("images/img3.png");
    itemsNavAndTitles(["Informació Personal","Idiomes","Estudis","Experiència","Aficions","Habilitats","Referències"]);
}

function spanish() {
    icon("images/img2.png");
    itemsNavAndTitles(["Información Personal","Idiomas","Estudios","Experiencia","Aficiones","Habilidades","Referencias"]);
}

function english() {
    icon("images/img5.png");
    itemsNavAndTitles(["Personal Information","Languages","Studies","Experience","Hobbies","Skills","References"]);
}

function french() {
    icon("images/img4.png");
    itemsNavAndTitles(["Informations personnelles","Langues","Études","Expérience","Loisirs","Compétences","Références"]);
}

function icon(img) {
    document.getElementById("currentLanguage").href = img;
}

function itemsNavAndTitles(items) {
    let idsItemNav = document.getElementById("menu").getElementsByClassName("elementmenu");
    let idsTitles = ["personalInfo","languages","studies","experience","hobbies","skills","references"];

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
