
/*
 * Author: Juan José Gómez Villegas
 * Description: Project 1. CV, javascript code file
*/

/* GLOBAL VARIABLES AND INSTANCE OBJECTS */

// Store my information in object juanjo of type Person
const juanjo = new Person("Juan José Gómez Villegas", "Figueres, Girona", 2001, "Figueres", 17600, "674 979 133", "972 671 123", "juanjogomvil@gmail.com");

// Store a projects information in array of the objects of type Project  
const projects = [
    new Project(["Joc de la Vida","Juego de la Vida","Game of Life","Jeu de la Vie"], 
                ["Implementació del famós joc de la vida amb html+css+javascript+php.","Implementación del famoso juego de la vida con HTML+css+javascript+php.","Implementation of the famous game of life with html+css+javascript+php.","Prise en charge du célèbre jeu de vie avec html+css+javascript+php."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/GameOfLifeJuanjoGomezVillegas")), 
    new Project(["Connecta quatre","Conecta cuatro","Connect Four","Connecter quatre"], 
                ["Implementació del joc del quatre en ratlla amb html+css+javascript.","Implementación del juego del cuatro en raya con HTML+css+javascript.","Implementation of the four-in-a-row game with html+css+javascript.","Prise en charge du jeu à quatre lignes avec html+css+javascript."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/Hypermedia-project.Connect-Four")), 
    new Project(["Sistema de Vot Electrònic","Sistema de Voto Electrónico","Electronic Voting System","Application de vote électronique"], 
                ["Aplicació que permet gestionar el sistema de vot d'unes eleccions.","Aplicación que permite gestionar el sistema de voto de unas elecciones.","Application that allows you to manage the voting system of an election.","Application qui permet de gérer le système de vote d'une élection."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/Sistema-de-Vot-Electronic")), 
    new Project(["Pràctica de Prolog, GEINF, UdG","Práctica de Prolog, GEINF, UdG","Prolog Practice, GEINF, UdG","Pratique de Prolog, GEINF, UdG"], 
                ["Implementació de diversos mètodes per calcular el grau de desordre d'una llista.","Implementación de varios métodos para calcular el grado de desorden de una lista.","Implementation of several methods to calculate the degree of disorder in a list.","Prise en charge des méthodes pour calculer le degré de désordre d'une liste."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/PracticaProlog-GEINF-UdG")), 
    new Project(["Pràctica de Haskell, GEINF, UdG","Práctica de Haskell, GEINF, UdG","Haskell practice, GEINF, UdG","Pratique de Haskell, GEINF, UdG"], 
                ["És un intèrpret de lambda càlcul.","Es un intérprete de lambda cálculo.","He is a interpreter of lambda calculus.","C'est un interpréteur de lambda calcul."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/PracticaHaskell-GEINF-UdG")), 
    new Project(["Aplicació d'ECO amb Sockets TCP/IP","Aplicación de ECO con Sockets TCP/IP","Application of ECO with TCP/IP Sockets","Application ECO avec Sockets TCP/IP"], 
                ["Defineix un protocol de Xarxa, PECO, seguint un model C_S.","Define un protocolo de Red, PECO, siguiendo un modelo C_S.","Defines a Network Protocol, PECO, following a C_S model.","Définir un protocole Réseau, PECO, suivant un modèle C_S."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/P1-ECO_amb_sockets_TCP-IP_Xarxes")), 

    new Project(["Protocol UEB amb Sockets TCP/IP","Protocolo UEB con Sockets TCP/IP","UEB protocol with TCP/IP Sockets","Protocole UEB avec Sockets TCP/IP"], 
                ["Definició d'un protocol com una versió senzilla de HTTP, anomenat UEB que segueix el model C_S.","Definición de un protocolo como una versión sencilla de HTTP, denominado UEB que sigue el modelo C_S.","Definition of a protocol as a simple version of HTTP, called UEB that follows the C_S model.","Définition d'un protocole comme une version simple de HTTP, appelé UEB qui suit le modèle C_S."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/P2-UEB_amb_sockets_TCP-IP_Xarxes"))
];

let modeDisco = false;

/* PRINCIPAL EVENTS */

/*
* run code on load page
*/
window.onload = function() {    
    // establish title of tab the page
    document.title = "Currículum Juan José Gómez villegas";
    
    // generates the content of the page in language by default (catalan)
    catalan();

    // declarations events on change
    document.getElementById("selChangeLang").addEventListener("change", selectLanguage);
    document.getElementById("selChangeTheme").addEventListener("change", selectTheme);
    // declarations events on click
    document.getElementById("toggleNavbar").addEventListener("click", navbarToggle);
    document.getElementById("modeDisco").addEventListener("click", () => {
        // declaration local variables
        let body = document.body;
        let img = document.getElementById("centralImage");
        let icons = document.getElementsByTagName("i");
        let links = document.getElementsByTagName("a");

        // if modeDisco equal to false
        if (!modeDisco) {
            // active css animations and modeDisco variable
            setAnimation(body, "changeTheme", "1s", "infinite");
            setAnimation(img, "rotateElem", ".5s", "infinite");
            mapAnimation(icons, "rotateElem", ".5s", "infinite");
            mapAnimation(links, "rotateElem", ".5s", "infinite");
            modeDisco = true;
            document.getElementById("modeDisco").innerHTML = "<i class=\"fa fa-pause\"></i>";
        } else { // else if modeDisco equal to true
            // desactive css animations and modeDisco variable
            setAnimation(body);
            setAnimation(img);
            mapAnimation(icons);
            mapAnimation(links);
            modeDisco = false;
            document.getElementById("modeDisco").innerHTML = "<i class=\"fa fa-play\"></i>";
        }
    });
}

/*
* run code on scroll page
*/
window.addEventListener("scroll", () => {
    // make visible the button by go to top
    document.getElementById("goToTop").style.visibility = "visible";
});

/* FUNCTIONS */

/*
* show nav in responsive design
*/
function navbarToggle() {
    let navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("div")[0];

    // Show or stop show nav when on click to toggle button in navbar
    if (navbar.style.display == "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}

/*
* show select value to change theme of the page
*/
function selectTheme() {
    const theme = document.getElementById("selChangeTheme").value;

    switch (theme) {
        case "dark": // change to dark theme
            changeTheme("#0A0A0A", "#111111", "#515151", "#ffffff");
            document.getElementById("centralImage").src = "images/img12.jpg";
            break;
        case "light": // change to light theme (by default)
            changeTheme();
            document.getElementById("centralImage").src = "images/img1.jpg";
            break;
        case "blood": // change to blood theme
            changeTheme("#5D0000", "#841414", "#D36363", "#000000", "#844714", "#ffff00");
            document.getElementById("centralImage").src = "images/img13.jpg";
            break;
        default:
            break;
    }
}

/*
* show select value to change language
*/
function selectLanguage() {
    const lang = document.getElementById("selChangeLang").value;

    switch (lang) {
        case "ca": // render the content of the page in catalan
            catalan();
            break;
        case "es": // render the content of the page in spanish
            spanish();
            break;
        case "en": // render the content of the page in english
            english();
            break;
        case "fr": // render the content of the page in french
            french();
            break;
        default: // in other case, render the content of the page in catalan
            catalan();
    }
}

/*
* change language to catalan
*/
function catalan() {
    icon("images/img3.png");
    itemsNavAndTitles(["Informació Personal","Idiomes","Estudis","Experiència","Aficions","Habilitats","Projectes","Referències"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><span class="iconListInfo"><i class="fa fa-user"></i></span><b>Nom i Cognom:</b> ${ juanjo.getName() }</li>
            <li><span class="iconListInfo"><i class="fa fa-calendar"></i></span><b>Lloc i Any de Naixement:</b> ${ juanjo.getBirth() }</li>
            <li><span class="iconListInfo"><i class="fa fa-home"></i></span><b>Residència i Codi Postal:</b> ${ juanjo.getResidence() }</li>
            <li><span class="iconListInfo"><i class="fa fa-mobile"></i></span><b>Mòbil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-phone"></i></span><b>Telèfon:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-envelope"></i></span><b>Correu Electrònic:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);

    writeContent("contentStudies", `<dl>
            <dt><b>setembre 2004 - juny 2013</b></dt>
            <dd>Primària al col·legi C.E.I.P Joaquim Cusí i Fortunet, Figueres.</dd>
            <dt><b>setembre 2013 - juny 2017</b></dt>
            <dd>Títol d'ESO a l'institut Olivar Gran, Figueres.</dd>
            <dt><b>setembre 2017 - juny 2020</b></dt>
            <dd>Títol de CFGM de Sistemes Microinformàtics i Xarxes a l'institut Cendrassos, Figueres.</dd>
            <dt><b>setembre 2020 - juny 2022</b></dt>
            <dd>Títol de CFGS de Desenvolupament d'Aplicacions Web a l'institut Cendrassos, Figueres.</dd>
            <dt><b>juliol 2022 - ?</b></dt>
            <dd>Estudiant el grau en Enginyeria Informàtica a la Universitat de Girona.</dd>
        </dl>`);

    writeContent("contentExperience", `<dl>
            <dt><b>14/10/2019 - 20/02/2020</b></dt>
            <dd>Pràctiques de CFGM al departament d'informàtica del Consell Comarcal de l'Alt Empordà, Figueres.</dd>
            <dt><b>22/11/2021 - 20/04/2022</b></dt>
            <dd>Pràctiques de CFGS a l'empresa Apliemporda, Figueres.</dd>
        </dl>`);

    writeContent("contentHobbies", `
        <a class="badge">Ciència i Tecnologia</a>
        <a class="badge">Història</a>
        <a class="badge">Desenvolupament d'aplicacions</a>`);

    writeContent("contentPortfolio", getPortfolio("ca"));

    writeContent("contentReferences", `<ol>
            <li>Cap del Departament d'Informàtica del Consell Comarcal de l'Alt Empordà.</li>
            <li>Cap de l'empresa Apliemporda.</li>
        </ol>`);
}

/*
* change language to spanish
*/
function spanish() {
    icon("images/img2.png");
    itemsNavAndTitles(["Información Personal","Idiomas","Estudios","Experiencia","Aficiones","Habilidades","Proyectos","Referencias"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><span class="iconListInfo"><i class="fa fa-user"></i></span><b>Nombre i Apellidos:</b> ${ juanjo.getName() }</li>
            <li><span class="iconListInfo"><i class="fa fa-calendar"></i></span><b>Lugar y Año de Nacimiento:</b> ${ juanjo.getBirth() }</li>
            <li><span class="iconListInfo"><i class="fa fa-home"></i></span><b>Residencia y Código Postal:</b> ${ juanjo.getResidence() }</li>
            <li><span class="iconListInfo"><i class="fa fa-mobile"></i></span><b>Móvil:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-phone"></i></span><b>Teléfono:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-envelope"></i></span><b>Correo Electrónico:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);

    writeContent("contentStudies", `<dl>
            <dt><b>septiembre 2004 - junio 2013</b></dt>
            <dd>Primaria en el colegio C.E.I.P Joaquim Cusí i Fortunet, Figueres.</dd>
            <dt><b>septiembre 2013 - junio 2017</b></dt>
            <dd>Título de la ESO en el instituto Olivar Gran, Figueres.</dd>
            <dt><b>septiembre 2017 - junio 2020</b></dt>
            <dd>Título de CFGM de Sistemas Microinformáticos y Redes en el instituto Cendrassos, Figueres.</dd>
            <dt><b>septiembre 2020 - junio 2022</b></dt>
            <dd>Título de CFGS de Desarrollo de Aplicaciones Web en el instituto Cendrassos, Figueres.</dd>
            <dt><b>julio 2022 - ?</b></dt>
            <dd>Estudiando el grado en Ingeniería Informática en la Universitat de Girona.</dd>
        </dl>`);
    
    writeContent("contentExperience", `<dl>
            <dt><b>14/10/2019 - 20/02/2020</b></dt>
            <dd>Prácticas de CFGM al departamento de informática del Consejo Comarcal del Alt Empordà, Figueres.</dd>
            <dt><b>22/11/2021 - 20/04/2022</b></dt>
            <dd>Prácticas de CFGS a la empresa Apliemporda, Figueres.</dd>
        </dl>`);
    
    writeContent("contentHobbies", `
        <a class="badge">Ciencia y tecnología</a>
        <a class="badge">Historia</a>
        <a class="badge">Desarrollo de aplicaciones</a>`);
    
    writeContent("contentPortfolio", getPortfolio("es"));

    writeContent("contentReferences", `<ol>
            <li>Jefe del Departamento de Informática del Consejo Comarcal del Alt Empordà.</li>
            <li>Jefe de la empresa Apliemporda.</li>
        </ol>`);
}

/*
* change language to english
*/
function english() {
    icon("images/img5.png");
    itemsNavAndTitles(["Personal Information","Languages","Studies","Experience","Hobbies","Skills","Portfolio","References"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><span class="iconListInfo"><i class="fa fa-user"></i></span><b>Name and Surname:</b> ${ juanjo.getName() }</li>
            <li><span class="iconListInfo"><i class="fa fa-calendar"></i></span><b>Place and Year of Birth:</b> ${ juanjo.getBirth() }</li>
            <li><span class="iconListInfo"><i class="fa fa-home"></i></span><b>Residence and Postal Code:</b> ${ juanjo.getResidence() }</li>
            <li><span class="iconListInfo"><i class="fa fa-mobile"></i></span><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-phone"></i></span><b>Phone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-envelope"></i></span><b>Email:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
    
    writeContent("contentStudies", `<dl>
            <dt><b>september 2004 - june 2013</b></dt>
            <dd>Primary school C.E.I.P Joaquim Cusí i Fortunet, Figueres.</dd>
            <dt><b>september 2013 - june 2017</b></dt>
            <dd>Secondary school degree in the Olivar Gran high school, Figueres.</dd>
            <dt><b>september 2017 - june 2020</b></dt>
            <dd>CFGM degree in Microinformatics Systems and Networks at the Cendrassos high school, Figueres.</dd>
            <dt><b>september 2020 - june 2022</b></dt>
            <dd>CFGS degree in Development of Web Applications at the Cendrassos high school, Figueres</dd>
            <dt><b>july 2022 - ?</b></dt>
            <dd>Studying the degree in Computer science engineering at the University of Girona.</dd>
        </dl>`);
    
    writeContent("contentExperience", `<dl>
            <dt><b>2019-10-14 - 2020-02-20</b></dt>
            <dd>Internships of CFGM at the IT department of the Regional Council of Alt Empordà, Figueres.</dd>
            <dt><b>2021-11-22 - 2022-04-20</b></dt>
            <dd>Internships of CFGS at the company Apliemporda, Figueres.</dd>
        </dl>`);
    
    writeContent("contentHobbies", `
        <a class="badge">Science and technology</a>
        <a class="badge">History</a>
        <a class="badge">Application development</a>`);
    
    writeContent("contentPortfolio", getPortfolio("en"));

    writeContent("contentReferences", `<ol>
            <li>Head of the IT Department of the Alt Empordà Regional Council.</li>
            <li>Head of the Apliemporda company.</li>
        </ol>`);
}

/*
* change language to french
*/
function french() {
    icon("images/img4.png");
    itemsNavAndTitles(["Information personnel","Langues","Études","Expérience","Loisirs","Compétences","Portefeuille","Références"]);

    writeContent("contentPersonalInfo", `<ul>
            <li><span class="iconListInfo"><i class="fa fa-user"></i></span><b>Nom et prénom:</b> ${ juanjo.getName() }</li>
            <li><span class="iconListInfo"><i class="fa fa-calendar"></i></span><b>Lieu et Année de naissance:</b> ${ juanjo.getBirth() }</li>
            <li><span class="iconListInfo"><i class="fa fa-home"></i></span><b>Résidence et code postal:</b> ${ juanjo.getResidence() }</li>
            <li><span class="iconListInfo"><i class="fa fa-mobile"></i></span><b>Mobile:</b> <a href=\"tel:${ juanjo.getTelephone(true) }\">${ juanjo.getTelephone(true) }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-phone"></i></span><b>Téléphone:</b> <a href=\"tel:${ juanjo.getTelephone() }\">${ juanjo.getTelephone() }</a></li>
            <li><span class="iconListInfo"><i class="fa fa-envelope"></i></span><b>Mail:</b> <a href=\"mailto:${ juanjo.getMail() }\">${ juanjo.getMail() }</a></li>
        </ul>`);
    
    writeContent("contentStudies", `<dl>
            <dt><b>septembre 2004 - juin 2013</b></dt>
            <dd>Primaire au collège C.E.I.P Joaquim Cusí i Fortunet, Figueres.</dd>
            <dt><b>septembre 2013 - juin 2017</b></dt>
            <dd>Titre de secondaire à l'institut Olivar Gran, Figueres.</dd>
            <dt><b>septembre 2017 - juin 2020</b></dt>
            <dd>Titre de CFGM de systèmes micro-informatiques et réseaux à l'institut Cendrassos, Figueres.</dd>
            <dt><b>septembre 2020 - juin 2022</b></dt>
            <dd>Titre de CFGS Développement d'Applications Web à l'Institut Cendrassos, Figueres.</dd>
            <dt><b>juillet 2022 - ?</b></dt>
            <dd>Étudiant le diplôme en génie informatique à l'Université de Girona.</dd>
        </dl>`);

    writeContent("contentExperience", `<dl>
            <dt><b>2019-10-14 - 2020-02-20</b></dt>
            <dd>Pratiques de CFGM dans le département informatique du Conseil Régional de l'Alt Empordà, Figueres.</dd>
            <dt><b>2021-11-22 - 2022-04-20</b></dt>
            <dd>Pratiques de CFGS à l'entreprise Apliemporda, Figueres.</dd>
        </dl>`);
    
    writeContent("contentHobbies", `
        <a class="badge">Science et technologie</a>
        <a class="badge">Histoire</a>
        <a class="badge">Développement d'applications</a>`);
    
    writeContent("contentPortfolio", getPortfolio("fr"));

    writeContent("contentReferences", `<ol>
            <li>Chef du Département de l'Informatique du Conseil Régional de l'Alt Empordà.</li>
            <li>Chef de l'entreprise Apliemporda.</li>
        </ol>`);
}

/*
* change icon the tab of the page
*/
function icon(img) {
    document.getElementById("currentLanguage").href = img;
}

/*
* establish titles and items navbar
*/
function itemsNavAndTitles(items) {
    // obtains a ids of items navbar and ids of titles
    let idsItemNav = document.getElementById("menu").getElementsByClassName("elementmenu");
    let idsTitles = ["personalInfo","languages","studies","experience","hobbies","skills","portfolio","references"];

    // render the text content items navbar
    for (i = 0; i < idsItemNav.length; i++) {
        document.getElementById(idsItemNav[i].id).textContent = items[i];
    }

    // render the text content titles
    for (i = 0; i < idsTitles.length; i++) {
        document.getElementById(idsTitles[i]).getElementsByTagName("article")[0].getElementsByTagName("h2")[0].textContent = items[i];
    }
}

/*
* write content located in element id
*/
function writeContent(id, content) {
    document.getElementById(id).innerHTML = content;
}

/*
* return array of links in html tag <a></a> in different languages
*/
function arrayLinksSourceCode(link) {
    let texts = ["enllaç al codi font","enlace al código fuente","source link","lien code source"];
    let links = new Array(4);
    
    for (i = 0; i < 4; i++) {
        links[i] = `<a href="${ link }" target="_blank">${ texts[i] }</a>`;
    }

    return links;
}

/*
* return the personal projects in portfolio
*/
function getPortfolio(lang) {
    let contentProjects = "";
    
    for (i = 0; i < projects.length; i++) {
        if (lang == "ca") {
            contentProjects += projects[i].getCaInfo();
        } else if (lang == "es") {
            contentProjects += projects[i].getEsInfo();
        } else if (lang == "en") {
            contentProjects += projects[i].getEnInfo();
        } else if (lang == "fr") {
            contentProjects += projects[i].getFrInfo();
        }
    }

    return contentProjects;
}

/*
* change values of css variables
*/
function changeTheme(colorPrimary = "#00206F", colorSecondary = "#0132AE", colorBackgroundBody = "#ffffff", colorTextBody = "#000000", colorGray = "#898989", colorRed = "#EC0000") {
    document.documentElement.style.setProperty("--colorPrimary", colorPrimary);
    document.documentElement.style.setProperty("--colorSecondary", colorSecondary);
    document.documentElement.style.setProperty("--colorBackgroundBody", colorBackgroundBody);
    document.documentElement.style.setProperty("--colorTextBody", colorTextBody);
    document.documentElement.style.setProperty("--gray", colorGray);
    document.documentElement.style.setProperty("--red", colorRed);
}

/*
* set animation by all elements to array
*/
function mapAnimation(array, animationName = "", animationDuration = "", animationIterCount = "") {
    for (i = 0; i < array.length; i++) {
        setAnimation(array[i], animationName, animationDuration, animationIterCount);
    }
}

/*
* set animation with name, duration and iteration count on the element elem
*/
function setAnimation(elem, animationName = "", animationDuration = "", animationIterCount = "") {
    elem.style.animationName = animationName;
    elem.style.animationDuration = animationDuration;
    elem.style.animationIterationCount = animationIterCount;
}
