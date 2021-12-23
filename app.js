/*Menu y botón cambio de idioma*/
((d) => {
    //Se declaran anteponiendo el $ porque 
    //están haciendo referencia a un elemento del DOM
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $check = d.querySelector(".check");

    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active")
    });

    //Cambio de idioma
    $check.addEventListener("click", () => {
        let checkValue = $check.checked;
        checkValue 
        ? location.href="leng/index.html"
        : location.href="../index.html"
    })

})(document);

/*Owl Carousel whit JQuery*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

/*Carga previa a mostrar contenido de página*/
window.onload = function(){
    $("#preload").fadeOut();
    $("body").removeClass("hidden");
};

/*ContactForm*/
//Se declaran anteponiendo el $ porque 
//están haciendo referencia a un elemento del DOM
// ((d) => {
//     //Se declaran anteponiendo el $ porque 
//     //están haciendo referencia a un elemento del DOM
//     const $form = d.querySelector(".contact-form"),
//         $loader = d.querySelector(".contact-form-loader"),
//         $response = d.querySelector(".contact-form-response");  

//         $form.addEventListener("submit", e=> {

//             e.preventDefault();
//             $loader.classList.remove("none");
//             fetch("https://formsubmit.co/ajax/gabialberini733@gmail.com", {
//                 method: "POST",
//                 body: new FormData(e.target)
//             }).then((res)=> (res.ok ? res.json() : Promise.reject(res)))
//             .then(json =>{
//                 console.log(json)
//                 location.hash = "#gracias"
//                 $form.reset();
//             })
//             .catch(err => {
//                 console.log(err)
//                 let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
//                 $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`
//             }).finally(()=> {
//                 $loader.classList.add("none")
//                 setTimeout(() => {
//                     location.hash = "#close"
//                 }, 1500)
//             });   
//         });

// })(document)

 ((d) => {
    
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contacto-form-response");

    $form.addEventListener('submit', e=> {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/chefpeare@gmail.com")
    })

 })(document);

