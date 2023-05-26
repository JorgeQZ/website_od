function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

$(document).ready(function () {

    $('.slider-cont').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        items: 1
    })

    //Pop up de socios
    $('.arrow').on('click', function (e) {
        console.log($(this));
    });

    // Configuración de Pop Up
    let popup = $('.popup-cont');
    let button_close = $('.box-cont .close');

    if (button_close) {
        $(button_close).on('click', function (e) {
            $(popup).removeClass('active');
        });
    }

    if ($('.members-cont .arrow')) {
        $('.arrow').on('click', function (e) {
            $(popup).addClass('active');
        });
    }

    let socios = [
        {
            "nombre": "Antonio R. O’Farrill González",
            "puesto": "Socio Fundador",
            "resumen": [
                "Recibió su título de Licenciado en Ciencias Jurídicas por parte de la Facultad de Derecho y Ciencias Sociales, de la Universidad Autónoma de Nuevo León. Desde ese mismo año fundo su propio despacho, atendiendo principalmente todo tipo de Juicios Civiles y Mercantiles, asi como el asesoramiento a sus distintos clientes en materia Societaria.",

                "A particpado como miembro de los Consejos de Administración de empresas como Banpais, S.A., Grupo Financiero Mexival, S.A. de C.V., Afirme Grupo Financiero, S.A. y sus subsidiarias Banco Afirme, S.A. Arrendadora Afirme, S.A de C.V., Factoraje Afirme, S.A. de C.V., Seguros Afirme, S.A. de C.V. y Almacenadora Afirme, S.A. de C.V., Consejero Independiente de Aceros Lozano, S.A. de C.V., Costec, S.A. de C.V., Construcciones y Fincas, S.A. de C.V., Dustin, S.A. de C.V., Grupo Harmes, S.A. de C.V. y sus subsidiarias, Inmobiliaria Parking, S.A. de C.V., Operadora de Restaurantes del Valle, S.A. de C.V., Sistesol, S.A. de C.V.,Tecnofor, S.A. de C.V., Tecnología de Metales, S.A. de C.V., y sus subsidiarias, Grupo Perfimexsa, S.A. de C.V. y sus subsidiarias. Desde su fundación hasta la fecha.",

                "Adicionalmente, ha sido Maestro adjunto de la cátedra de sociedades mercantiles, en el Sexto Semestre. Facultad de Derecho y Ciencias Sociales, de la Universidad Autónoma de Nuevo León y Catedrático en el Instituto Tecnológico y de Estudios Superiores de Monterrey (I.T.E.S.M.), impartiendo Historia Social de México."],
            "experiencia": [
                "Litigio Civil y Mercantil",
                "Concursos Mercantiles",
                "Derecho Corporativo",
                "Patrimonial",
                "Constitución de Fideicomisos"],

            "credenciales": [
                "Curso de pre-especialización en derecho laboral, Facultad de Derecho y Ciencias Sociales, Universidad Autónoma de Nuevo León.",
                "Curso de Especialización. Sociedades Mercantiles. Facultad de Derecho y Ciencias Sociales Universidad Autónoma de Nuevo León.",
                "Diplomado. Quiebras y Suspensiones de Pagos. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de México."],
            "idiomas": ['Español'],
            "contacto": "aofarrill@oyd.mx"
        },
        {
            "nombre": "Alejandro G. Dingler Delgado",
            "puesto": "Socio Fundador",
            "resumen": [
                "Recibió su título de Licenciado en Ciencias Jurídica por la Facultad de Derecho y Ciencias Sociales de la Universidad Autónoma de Nuevo León. Desde su graduación comenzo a trabajar con el licenciado Antonio O’Farrill Gonzalez, de quien se hizo socio, fundando el despacho O’Farrill & Dingler, Abogados.",

                "A participado directamente en distintos Juicios Civiles, Mercantiles, Administrativos y Amparo, defendiendo los intereses de clientes como, Motomex, S.A. de C.V., HSBC, PLC., Deshidratados Alimenticios, S.A. de C.V., BanBajio, Plastank, S.A. de C.V., Pequeño Caesarmex, S.A.P.I. de C.V. [Little Caesar Pizza], Grupo Ramos. Ha participado también en procedimientos de Quiebras y Suspensiones de Pagos.",

                "El Licenciado Alejandro G. Dingler Delgado, ha participado también y diversos Consejos de Administración de sus respectivos clientes, a quienes asesora corporativamente para el debido funcionamiento de las empresas."],
            "experiencia": [
                "Litigio Civil y Mercantil",
                "Derecho Inmobiliario",
                "Derecho Corporativo",
                "Patrimonial",
                "Constitución de Fideicomisos"],

            "credenciales": [
                "Licenciado en Ciencias Jurídica. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de Nuevo León.",
                "Curso de Pre-especialización en Amparo. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de Nuevo León.",
                "Maestría en Derecho Mercantil. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de Nuevo León.",
                "Maestría en Derecho de los Negocios. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de Nuevo León.", "Actualización en Derecho de Daños por la Universidad de Salamanca, EspañaUniversidad de Salamanca, España.",
                "Seminario “La Nueva Ley de Amparo” por la Suprema Corte de Justicia de la Nación.",
                "Seminario Mecanismos Alternos de Solución de Controversias por la Suprema Corte de Justicia de la Nación.",
                "Curso HLS2X: Contract Law: From Trust to Promise to Contract por HarvardX",
                "Curso La Hipoteca Multidivisa por el Ilustre Colegio de Abogados de Madrid, España.",
                "Curso Avanzado de Derecho Inmobiliario por el Colegio de Notario de Nuevo León y Tecnológico de Monterrey.",
                "Curso El Recurso de Casación por el Ilustre Colegio de Abogados de Madrid, España.",
                "Curso de Ingles en Derecho Comercial. Dublin, Irlanda.",
                "Curso Anticorrupción, TRACE.",
                "Diplomado en Planeación Patrimonial por la Academia de Derecho Fiscal de Nuevo León."

            ],
            "idiomas": ["Inglés", "Español"],
            "contacto": "adingler@oyd.mx"
        },
        {
            "nombre": "Ernesto Dingler Delgado",
            "puesto": "Socio Fundador",
            "resumen": [
                "Recibió su título de Licenciado en Ciencias Jurídica por la Facultad de Derecho y Ciencias Sociales de la Universidad Autónoma de Nuevo León. Desde el año 2003 comenzo a trabajar con los licenciados Antonio R. O’Farrill Gonzalez y Alejandro G. Dingler Delgado de quienes posteriormente se hizo socio, fundando el despacho O’Farrill-Dingler & Cervantes, Abogados.",

                "En sus inicios, prestó sus servicios en el Juzgado Quinto Civil así como en el Juzgado Tercero Penal, ambos del primer Distrito Judicial en el estado de Nuevo León. Posteriormente se unió a la firma, participando activamente en incontables asesorías y representaciones tanto de personas físicas como de personas morales,  de manera extrajudicial como judicialmente ante Juzgados Estatales o Federales en las materias mercantil, civil, administrativa y constitucional. También es asesor en cuestiones corporativas, constitución de sociedades, asambleas de accionistas, modificación de objeto social, compraventa de acciones y/o cesión de partes sociales, aumentos y reducciones de capital, elaboración de contratos, convenios, compromisos.",

                "El Licenciado Ernesto Dingler Delgado es Asesor corporativo (Constitución de Sociedades, Asociaciones, Asambleas ordinarias, extraordinarias y especiales, sesiones de consejo, modificación de objeto social, compraventa de acciones y/o cesión de partes sociales, aumentos y reducciones de capital, otorgamiento de poderes, contratos societarios, fusiones y escisiones, disoluciones y liquidaciones de empresas, concursos mercantiles, entre otros). Asesoría y realización de contratos y convenios (Contratos de Compraventa, Donaciones, Permutas, Mutuos, Arrendamientos, Comodatos, Mandatos, Hipotecas, entre otros). La defensa o representación en asuntos judiciales o extrajudiciales, a estatales o nacionales, relacionados con el derecho corporativo, civil, mercantil, administrativo y constitucional (Elaboración y presentación  de Demandas, Contestaciones, Ofrecimiento y desahogo de Pruebas, Alegatos, Medios de impugnación, Juicios Constitucionales, entre otros)."],
            "experiencia": [
                "Litigio Civil y Mercantil",
                "Amparo",
                "Derecho Corporativo",
                "Elaboración de todo tipo de contratos Civiles y Mercantiles",],

            "credenciales": [
                "Licenciado en Ciencias Jurídica. Facultad de Derecho y Ciencias Sociales. Universidad Autónoma de Nuevo León.", "Maestría en Amparo por Facultad de Derecho y Ciencias Sociales de la Universidad Autónoma de Nuevo León.",
                "Curso de Derecho Internacional Privado"],
            "idiomas": ["Inglés", "Español"],
            "contacto": "edingler@oyd.mx"
        },
        {
            "nombre": "Mauricio Alberto O’Farrill Escamilla",
            "puesto": "Socio Fundador",
            "resumen": [
                "Recibió su título de Licenciado en Licenciado en Derecho, Derecho Corporativo e Internacinal y Entorno Politico NacionalLicenciado en Derecho, Derecho Corporativo e Internacinal y Entorno Politico Nacional, por la Universidad de Monterrey (UDEM). Desde el año 2010 comenzo a trabajar con los licenciados Antonio R. O’Farrill Gonzalez y Alejandro G. Dingler Delgado de quienes en el año 2021 se hizo socio, fundando el despacho O’Farrill-Dingler & Cervantes, Abogados.",

                "Es abogado Litigante, participando en innumerables Juicios Civiles, Mercantiles, Administrativos, Penales y Amparo, asi como en diversas operaciones comerciales, negociando y defendiendo los intereses de empresas como Impercaucho y sus subsidiarias, PapeSell de México, S.A. de C.V., Grupo Mostacho, Little Caesar Pizza, Transportes Monyor, Inmobiliaria Hogar Futuro, SYSCAP, Weship, LABEN, Polopay, Afirme, Grupo Villacero entre otros.",

                "El Licenciado Mauricio A. O’Farrill Escamilla ha participado en procedimientos ante la Corte Interamericana de Comercio, defendiendo los intereses de sus representados con éxito."],
            "experiencia": [
                "Litigio Civil y Mercantil",
                "Amparo",
                "Derecho Corporativo",
                "Elaboración de todo tipo de contratos Civiles y Mercantiles",
                "Marcas"],

            "credenciales": [
                "Licenciado en Derecho por la Universidad de Monterrey.", "Curso de Tecnicas de Negociacion para Abogados por el Centro de Estudios Juridicos Carbonel, A.C.",
                "Taller en linea de Redacción para Abogados por el Centro de Estudios Juridicos Carbonel, A.C.",
                "Master Online en Derecho Internacional de la Empresa por la OBS Business School.",
                "Fundamentos de Derecho Mercantil Internacional, curso Online por AnahuacX."],
            "idiomas": ["Inglés", "Español"],
            "contacto": "mofarrill@oyd.mx"
        },
        {
            "nombre": "Jorge Andrés Cervantes Aguirre",
            "puesto": "Socio Fundador",
            "resumen": [
                "Jorge Cervantes es Licenciado en Derecho por la Universidad de Monterrey (UDEM), cuenta con estudios de Maestría en Derecho Corporativo por la Universidad Anáhuac México y Administración de Empresas por la Universidad Francisco de Vitoria en Madrid España. Además, cuenta con estudios de especialidad en Auditoría Corporativa, Marketing y Dirección Comercial, y certificaciones avanzadas en Cumplimiento Normativo por la International Compliance Association (ICA).",

                "En el área de desempeño profesional, Jorge se especializa en Derecho Corporativo, Contratos y Marcas, en las que ha asesorado a diversas empresas en sus distintas etapas, desde su creación hasta su consolidación. De igual forma, es asesor jurídico de grupos industriales nacionales y extranjeros, en áreas de derecho societario, transaccional y contractual. ",

                "Jorge, fue Presidente de la Comisión de Empresarios Jóvenes de CAINTRA para el periodo 2021-2023; y además es Maestro de Derecho (Sociedades Mercantiles y Marco Jurídico de las Corporaciones ) en la Universidad de Monterrey."],
            "experiencia": [
                "Derecho Corporativo",
                "Emprendimientos [Startups]",
                "Transaccional",
                "Contratos civiles y mercantiles",
                "Registro de Marcas"],

            "credenciales": [
                "Licenciado en Derecho por la Universidad de Monterrey.", "Maestro en Derecho Corporativo por la Universidad Anáhuac.",
                "Maestro en Administración de Empresas (MBA) por la Universidad Francisco de Vitoria."],
            "idiomas": ["Inglés", "Español"],
            "contacto": "jcervantes@oyd.mx"
        },
        {
            "nombre": "Emilio Cárdenas Serna",
            "puesto": "Asociado",
            "resumen": [
                "Recibió su título de Licenciado en Derecho por la Facultad Libre de Derecho de Monterrey en el año 2019.",

                "Posteriormente en 2022 recibió el título de Maestro en Derecho Corporativo por la Universidad Autónoma de Nuevo León. ",

                "Actualente se encuentra cursando la Maestría en Derecho de los Negocios en la Universidad Autónoma de Nuevo León.",

                "Es abogado corporativo, teniendo experiencia en despachos internacionales así como en operaciones de alto nivel como financiamientos y desarrollos inmobiliarios de plazas comerciales, fideicomisos de garantía y patrimoniales, procedimientos contra reversión de créditos fiscales, y negociaciones, adquisiciones y fusiones con empresas internacionales"],
            "experiencia": [
                "Derecho Corporativo",
                "Emprendimientos ",
                "Derecho Societario",
                "Elaboración de todo tipo de contratos Civiles y Mercantiles.",
                "Derecho Fiscal",
                "Procedimientos Administrativos",
                "Litigio Mercantil",
                "Amparo"],
            "credenciales": [
                "Licenciado en Derecho por la Facultad Libre de Derecho de Monterrey.",
                "Maestro en Derecho Corporativo por la Universidad Autónoma de Nuevo León",
                "Maestro en Derecho de los Negocios por la Universidad Autónoma de Nuevo león",
                "Certificación de estudios políticos-sociales y de comercio internacional por el Colegio de México.",
                "Miembro de la Sociedad Phi Delta Phi"],
            "idiomas": ["Inglés", "Español"],
            "contacto": "ccardenas@oyd.mx"
        },
        {
            "nombre": "Abelardo Díaz Fernández",
            "puesto": "Pasante",
            "resumen": [
                "Recibió su título de Licenciado en Licenciado en Derecho, por la Facultad Libre de Derecho de Monterrey (FLDM) en el año 2022. En el año 2019 inició sus practicas en el Centro Juridico Gratutito FLDM, asi como en la Notaria Pública 66 de Torreón, Coahuila. Actualmente ocupa el cargo de Pasante para el area de Derecho Corporativo en O´Farril-Dingler y Cervantes Asociados",

                "Es abogado corporativista, participando en diversas operaciones comerciales, negociando y asisitiendo los asuntos legales de empresas como SYSCAP, Polopay, Dalinn, Plastank centro, entre otros."],
            "experiencia": [
                "Derecho Corporativo",
                "Emprendimientos [Startups]",
                "Derecho Societario",
                "Marcas y Patentes",
                "Elaboración de todo tipo de contratos Civiles y Mercantiles."],
            "credenciales": [
                "Licenciado en Derecho por la Facultad Libre de Derecho de Monterrey."],
            "idiomas": ["Ingles", "Español", "Frances"],
            "contacto": "adiaz@oyd.mx "
        },
        {
            "nombre": "Camilo Ramos Ledezma",
            "puesto": "Asociado",
            "resumen": [
                "Recibió su título de Licenciado en Ciencias Jurídicas por parte de la Facultad de Derecho y Ciencias Sociales, de la Universidad Autónoma de Nuevo León. Desde su incursion en el Despacho se ha desempeñado en las labores y atencion de asuntos de carácter Penal y Laboral, defendiendo tanto los intereses de sus clientes como Victimas y como Imputados o investigados.",

                "El Licenciado Camilo participa como Coordinador de Servicios Generales, Automercados, S.A. de C.V., Administrador de Riesgos Corporativo Grupo Gigante, S.A. de C.V., Subadministrador de obligaciones IMSS, INFONAVIT, SAR (AFORES), Corporativo Grupo Gigante, S.A. de C.V."],
            "experiencia": [
                "Litigio Civil y Mercantil",
                "Derecho Penal",
                "Derecho Laboral",
                "Derecho Familiar"],
            "credenciales": [
                "Curso de Diplomado UANL nuevo Sistema Penal Acusatorio",
                "Taller de Oratoria Forense",
                "Diplomado Nuevo Sistema de Justicia Laboral",
                "Curso actualización nueva ley de amparo"],
            "idiomas": ["Inglés", "Español"],
            "contacto": "cramos@oyd.mx"
        },
        {
            "nombre": "Maria Mercedes Espinosa Salas",
            "puesto": "Asociado",
            "resumen": [
                "Recibió su título de Licenciado en Ciencias Jurídicas por parte de la Facultad de Derecho y Ciencias Sociales, de la Universidad Autónoma de Nuevo León.Desde su incursion en el Despacho se ha desempeñado en las labores y atencion de asuntos de carácter Familiar y Laboral.",

                "Cuenta con especialidad en la rama Familiar, atendiendo todos los asuntos relacionados en el área familiar tales como: Juicios de Divorcios Incausados, Voluntarios y administrativos, Liquidación de sociedad conyugal y separación de bienes, juicios compensatorios, de Alimentos, de Convivencias, Pérdidas de la patria potestad, adopciones, juicios sucesorios de intestado y testamentarios, informaciones Ad Perpetuam; Rectificación y corrección de Actas del Estado Civil, estados de interdicción, etc."],
            "experiencia": [
                "Derecho Laboral",
                "Derecho Familiar"],
            "credenciales": [
                "Diplomado en Juicio Oral Familiar",
                "Taller Derecho Familiar",
                "Diplomado Derecho Familiar"],
            "idiomas": ["Español"],
            "contacto": "mespinosa@oyd.mx"
        },
        {
            "nombre": "María Fernanda Morán Valenzuela",
            "puesto": "Practicante",
            "resumen": [
                "Estudiante de Derecho por la Facultad Libre de Derecho de Monterrey (FLDM) hasta el año actual. A partir de Febrero de 2023 empezó a trabajar con los Licenciados Mauricio Alberto O’Farrill Escamilla y Jorge Andrés Cervantes Aguirre en el despacho O’Farrill-Dingler & Cervantes, Abogados. ",

                "▪	Estudiante de derecho con experiencia derivada de la participación en  Organizaciones No Gubernamentales, la Comisión Internacional de Derechos Humanos, el Centro Jurídico Gratuito de la Facultad Libre de Derecho, y diferentes despachos. "],
            "experiencia": [
                "Derecho Laboral",
                "Derecho Familiar"],
            "credenciales": [
                "Diplomado en Juicio Oral Familiar",
                "Taller Derecho Familiar",
                "Diplomado Derecho Familiar"],
            "idiomas": ["Español"],
            "contacto": "mespinosa@oyd.mx"
        }

    ];

    console.log(socios);
});