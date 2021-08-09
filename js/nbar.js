/* ************************************** */
/* ****** MENU STICKY PARA NAVEGADOR **** */
/* ************************************** */ 
window.onscroll = function () { myFuntion() };

var navbar = document.getElementById("navbar");
var pegajoso = navbar.offsetTop;

function myFuntion() {
    if (window.pageYOffset >= pegajoso) {
        navbar.classList.add("pegajoso");
    } else {
        navbar.classList.remove("pegajoso");
    }
}

/* ****************************************** */
/* ******* MENU DESPLEGABLE PARA MOVIL ****** */
/* ****************************************** */
const btnCerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".enlaces-adicionales");
var abrirMenu = document.getElementById("abrir");
const body = document.querySelector("body");
var container = document.querySelectorAll(".enlaces");

abrirMenu.onclick = () => {
    menu.classList.add("show");
    body.classList.add("disabled");
    btnCerrar.classList.add("cerraria");
}

btnCerrar.onclick = () => {
    body.classList.remove("disabled");
    menu.classList.remove("show");
    btnCerrar.classList.remove("cerraria");
}

function menuClose() {
    menu.classList.remove("show");
}
 

/* EFECTO ANIMADO DE TEXTO EN container-datos-personales */
 class TextoAnimado {
     constructor(id, objetivo){
    
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras = this.texto.innerText.split("");
        /* con esto se accede a los caracteres de texto en letras */

        this.texto.innerText= ''; 

        this.letras.forEach((letra) => {
            let caracter = letra === ' ' ? '&nbsp;': letra; 
        /* se identifica espacios vacios con el condicional */
            /* se iguala el texto de html mas el caracer agregado */
            this.texto.innerHTML = this.texto.innerHTML + ` 
            <div> 
                    <span>${caracter}</span>
                    <span class="segunda-linea">${caracter}</span>
            </div>`;
        });
        
         /* desplaza los div hacia arriva con un interval de tiempo */ 
         this.objetivo.addEventListener ('mouseenter', () => {
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if (cuenta < this.texto.children.length ){
                   this. texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                } else{
                    clearInterval(intervalo);
                }
            }, 30);
        });
         
         this.objetivo.addEventListener ('mouseleave', () => {
            let cuenta = 0;
            const intervalo = setInterval(()=>{
                if (cuenta < this.texto.children.length ){
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                } else{
                    clearInterval(intervalo);
                }
            }, 50);
        });
        

     }
 }

new TextoAnimado('name', 'logotipo');


/* ************************************************* */
/* llamada a boton de cv para ejecutar ventana Modal */
/* ************************************************* */

var cerrarBtn = document.querySelectorAll(".close")[0];
var abrirBtn = document.querySelectorAll(".cta")[0];
var modal = document.querySelectorAll(".modal")[0];
var modalc = document.querySelectorAll(".contenedor-modal")[0];

abrirBtn.addEventListener("click", function(e){
    e.preventDefault();
    modalc.style.opacity ="1";
    modalc.style.visibility ="visible";
    modal.classList.toggle ("modal-close");
});

cerrarBtn.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalc.style.opacity ="0";
        modalc.style.visibility ="hidden";
    },600)
});
/* cerrar modal al tocar fuera de el contenedor modal */
window.addEventListener("click", function(e){
    console.log(e.target)
    if (e.target == modalc){
        modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalc.style.opacity ="0";
        modalc.style.visibility ="hidden";
    },600)
    }
});


/* ***********************************  */
/* ******** abrir enlace ************* */
/* ***********************************  */

function openVentana(){
    window.open("https://github.com/fernandoJosueD", "gitHub");
}

function openLinkedin(){
    window.open("https://www.linkedin.com/in/fernando-josu%C3%A9-dondiego-9457671b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FErpx5hXQ1ewesUyzj91nQ%3D%3D", "gitHub");
}
function openDomotica(){
    window.open("https://github.com/fernandoJosueD/app-Domotica", "gitHub");
}
function openDomoticaLink(){
    window.open("https://mega.nz/file/ZFtGnB4Q#nSsLs0dCNtWjqQoQepRTqvAHcWDz9YVjX5HYxvRPgpA", "gitHub");
}
function openTienda(){
    window.open("https://github.com/fernandoJosueD/paginaWebPrototipo", "gitHub");
}
function openLinkTienda(){
    window.open("https://fernandojosued.github.io/paginaWebPrototipo/", "gitHub");
}
function openAgenda(){
    window.open("https://github.com/fernandoJosueD/agendaPersonal", "gitHub");
}

function appBitacora(){
    window.open("https://mega.nz/file/8JtGGBoB#X0Gc7fhyxA7aD0NIZ3IKTd5Vu9PqTWEKeFubEUdd7Bc", "gitHub");
}

function appBitacoraGitHub(){
    window.open("https://github.com/fernandoJosueD/appBitacora", "gitHub");
}

/* **************************************** */
/* *** efecto suavizado scroll links ****** */
/* **************************************** */
window.onload = () => {
   menuClose()
    let links = document.querySelectorAll('.link')
    
    let primero = links[0]
    primero.addEventListener('click', () => {
      scrollSuave('#inicio', 800, 00)
    })
  
    let segundo = links[1]
    segundo.addEventListener('click', () => {
      scrollSuave('#perfil', 500, 20)
    })
  
    let tercero = links[2]
    tercero.addEventListener('click', () => {
      scrollSuave('#habilidades', 500, 20)
    })
    let cuarto = links[3]
    cuarto.addEventListener('click', () => {
      scrollSuave('#proyecto', 500, 40)
    })
    
    let quinto = links[4]
    quinto.addEventListener('click', () => {
      scrollSuave('#contacto', 800, 30)
    })

  }

const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }
  