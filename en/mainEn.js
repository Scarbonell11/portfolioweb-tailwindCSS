//Sidebar tw function

window.addEventListener("load", () => {
    const sidenav = document.getElementById("full-screen-example");
    const sidenavInstance = te.Sidenav.getInstance(sidenav);
  
    sidenavInstance.show();
  });


 

//array de proyectos
const arrayProyectos = [
  {nombre: "Academia Fenix",
   link: "https://www.behance.net/gallery/181640649/Academia-fenix",
   descripcion: "Academy that offers courses in various areas, built with WordPress and Elementor.",
   tecnologia1: "#Wordpress",
   tecnologia2: "#Elementor",
   tecnologia3: "Template edition",
   portada: "../src/img/iniciofenix.png" 
   },
   {nombre: "Portfolio Web",
   link: "https://www.behance.net/gallery/181643897/Antiguo-protfolio-web",
   descripcion: "Final project for the Web Development course at Coderhouse.",
   tecnologia1: "#HTML",
   tecnologia2: "#BOOTSTRAP",
   tecnologia3: "#CSS",
   portada: "../src/img/port.jpeg" 
   },
   {nombre: "Colegio Fabini",
   link: "https://www.behance.net/gallery/181641233/Colegio-Fabini",
   descripcion: " Children's school, informative website",
   tecnologia1: "#Wordpress",
   tecnologia2: "#Elementor",
   tecnologia3: "Template edition",
   portada: "../src/img/iniciocolegio.png" 
   },
   {nombre: "Jardin maternal Fabini",
   link: "https://www.behance.net/gallery/181641519/Jardin-maternal-Fabini",
   descripcion: "kindergarden, informative website",
   tecnologia1: "#Wordpress",
   tecnologia2: "#Elementor",
   tecnologia3: "Template edition",
   portada: "../src/img/iniciojardin.jpeg" 
   },
   {nombre: "Products page + shopping cart",
   link: "https://www.behance.net/gallery/181645305/Pagina-de-productos",
   descripcion: "Final project for the JavaScript course at Coderhouse",
   tecnologia1: "#JavaScript",
   tecnologia2: "#HTML",
   tecnologia3: "#CSS",
   portada: "../src/img/iniciodiscos.png" 
   }
]

//Referencia a la seccion inicial con el titulo
let  divPrincipal = document.getElementById('content')

//Referencia a la seccion que contiene los proyectos
let proyectos = document.getElementById("sectionProyectos")
let listadeCards = document.getElementById("listaCards")

//Referencia a la seccion que contiene la experiencia 
let experiencia = document.getElementById("seccionExperiencia")

//Referencia a la seccion que contiene el contacto
let contacto = document.getElementById("sectionContacto")

//Referencia a la seccion que contiene "quien soy"
let soy = document.getElementById("sectionSoy")

//Display inicial de las secciones
proyectos.style.display = 'none'
listadeCards.style.display = 'none'
experiencia.style.display = 'none'
contacto.style.display = 'none'
soy.style.display = 'none'





//Mostrar proyectos
//Ciclo que muestra cada proyecto
  arrayProyectos.forEach((proyecto) =>{
    //Referencia al div contenedor de las cards
    let cards = document.getElementById('listaCards')
    //Contenido de cada card
    let proyectoMostrado = `
    <div
          class="block m-10 max-w-[18rem] rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#000000]"
        >
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg h-40 w-full"
              src=${proyecto.portada}
              alt=""
            />
          </div>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50"
            >
              ${proyecto.nombre}
            </h5>
            <p class="text-base text-[#E7DFDD] dark:text-neutral-200">
             ${proyecto.descripcion}
            </p>
          </div>
          <ul class="w-full">
            <li
              class="w-full text-white bg-[#4717F6] border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50"
            >
              ${proyecto.tecnologia1}
            </li>
            <li
              class="w-full text-white bg-[#4717F6] border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50"
            >
              ${proyecto.tecnologia2}
            </li>
            <li
              class="w-full text-white bg-[#4717F6] border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50"
            >
              ${proyecto.tecnologia3}
            </li>
          </ul>
          <div class="p-6">
            <a
              href="${proyecto.link}"
              target = "_blank"
              class=" mr-5 inline-block text-[#A239CA]   cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a> 
          </div>
        </div>
    `

    cards.innerHTML += proyectoMostrado

    document.body.append(cards)
  })
  





//Eventos




//switch de idioma

let botonEspañol = document.getElementById("español")

 botonEspañol.addEventListener('click', ()=>{
  location.href="../index.html"
 })

 
let botonIngles = document.getElementById("ingles")




//boton inicio

let botonInicio = document.getElementById('botonInicio')
botonInicio.addEventListener('click',
() =>{
  if (divPrincipal.style.display === 'none' || divPrincipal.style.display === '') {
    // Si está oculto, muéstralo.
    divPrincipal.style.display = 'flex';
    listadeCards.style.display = 'none'
    proyectos.style.display = 'none'
    experiencia.style.display = 'none'
    contacto.style.display = 'none'
    soy.style.display = 'none'
  } else {
    // Si está visible, ocúltalo.
    proyectos.style.display = 'none';
    experiencia.style.display = 'none'
    contacto.style.display = 'none'
    soy.style.display = 'none'
  }
})


//boton proyectos
let botonProyectos = document.getElementById('botonProyectos')

botonProyectos.addEventListener('click', () =>{
  if (proyectos.style.display === 'none' || proyectos.style.display === '') {
    //si esta oculto mostralo
    divPrincipal.style.display = 'none'
    experiencia.style.display = 'none'
    contacto.style.display = 'none'
    soy.style.display = 'none'
    listadeCards.style.display = 'flex'
    proyectos.style.display = 'flex'
  } else {
    //si esta visible, ocultalo
    proyectos.style.display = 'none'
    listadeCards.style.display = 'none'
    contacto.style.display = 'none'
    soy.style.display = 'none'
    divPrincipal.style.display = 'flex'
  }
})


//boton experiencia 

let botonExperiencia = document.getElementById('botonExperiencia')

botonExperiencia.addEventListener('click', () =>{
  if (experiencia.style.display === 'none' || experiencia.style.display === '') {
    //si esta oculto mostralo
    proyectos.style.display = 'none'
    listadeCards.style.display = 'none'
    contacto.style.display = 'none'
    divPrincipal.style.display = 'none'
    soy.style.display = 'none'
    experiencia.style.display = 'flex'
  } else {
    //si esta visible, ocultalo
    divPrincipal.style.display = 'flex'
    contacto.style.display = 'none'
    proyectos.style.display = 'none'
    experiencia.style.display = 'none'
    soy.style.display = 'none'
  }
})

//Boton yo soy

let botonSoy = document.getElementById('botonSoy')

botonSoy.addEventListener('click', () =>{
  if (soy.style.display === 'none' || soy.style.display === '') {
    experiencia.style.display = 'none'
    proyectos.style.display = 'none'
    divPrincipal.style.display = 'none'
    listadeCards.style.display = 'none'
    contacto.style.display = 'none'
    soy.style.display = 'flex'
  } else {
    divPrincipal.style.display = 'flex'
    contacto.style.display = 'none'
    proyectos.style.display = 'none'
    experiencia.style.display = 'none'
    soy.style.display = 'none'
  }
})

//boton contacto

let botonContacto = document.getElementById('botonContacto')

botonContacto.addEventListener('click', () =>{
  if (contacto.style.display === 'none' || contacto.style.display === '') {
    experiencia.style.display = 'none'
    proyectos.style.display = 'none'
    divPrincipal.style.display = 'none'
    listadeCards.style.display = 'none'
    soy.style.display = 'none'
    contacto.style.display = 'flex'
  } else {
    divPrincipal.style.display = 'flex'
    contacto.style.display = 'none'
    proyectos.style.display = 'none'
    experiencia.style.display = 'none'
    soy.style.display = 'none'
  }
})


//Funcionalidad del formulario

//Referencia al boton de enviar y a los campos
const btn = document.getElementById('button');
const btnNombre = document.querySelector('.campo1 input')
const btnMail = document.querySelector('.campo2 input')
const btnMensaje = document.querySelector('.campo3 textarea')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_anq5blf';

   if (btnNombre.value != "" && btnMail.value != "" && btnMensaje.value != "") {
    btn.innerText = 'Sending...';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Send';
      btnNombre.value = ""
      btnMail.value = ""
      btnMensaje.value = ""
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: 'Se ha enviado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err) => {
      btn.innerText = 'Enviar';
      alert(JSON.stringify(err));
    });
   } else{
    Swal.fire({
      position: 'bottom',
      icon: 'error',
      title: 'Revisa los campos!',
      showConfirmButton: false,
      timer: 1500
    })
   }
   
});

