
// Store my information in object juanjo of type Person
const juanjo = new Person("Juan José Gómez Villegas", "Figueres, Girona", 2001, "Figueres", 17600, "674 979 133", "972 671 123", "juanjogomvil@gmail.com");

const projects = [
    new Project(["Joc de la Vida","Juego de la Vida","Game of Life","Jeu de la Vie"], 
                ["Implementació del famós joc de la vida amb html+css+javascript+php.","Implementación del famoso juego de la vida con HTML+css+javascript+php.","Implementation of the famous game of life with html+css+javascript+php.","Prise en charge du célèbre jeu de vie avec html+css+javascript+php."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/GameOfLifeJuanjoGomezVillegas")), 
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
                ["Defineix un protocol de Xarxa, PECO, seguint un model C_S.","Define un protocolo de Red, PECO, siguiendo un modelo C_S.","Defines a Network Protocol, PECO, following a C,S model.","Définir un protocole Réseau, PECO, suivant un modèle C_S."], 
                arrayLinksSourceCode("https://github.com/juanjogomezvillegas/P1-ECO_amb_sockets_TCP-IP_Xarxes"))
];

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

/*
* return array of links in html label, in different languages
*/
function arrayLinksSourceCode(link) {
    let texts = ["enllaç al codi font","enlace al código fuente","source link","lien code source"];
    let links = new Array(4);

    for (i = 0; i < 4; i++) {
        links[i] = `<a href="${ link }">${ texts[i] }</a>`
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
