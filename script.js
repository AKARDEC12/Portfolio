$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var typed = new Typed(".typing", {
        strings: ["Iniciante em Cibersegurança", "Enxadrista", "Técnico em Elétrica"],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
    })

    var typed = new Typed(".typing2", {
        strings: ["Iniciante em Cibersegurança", "Enxadrista", "Técnico em Elétrica"],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
    })


    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    });

    $('.menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu a').toggleClass("active");
    })


    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

var button = document.getElementById("more");

button.addEventListener("click", function(){

    var ocultos = document.getElementById("ocultos");

    if(ocultos.style.display === "block"){
        ocultos.style.display = "none"
    }else{
        ocultos.style.display = "block"
    }
    
})

var button = document.getElementById("botao");

button.addEventListener("click", function(){

    var botao = document.getElementById("botao");

    if(botao.style.display === "none"){
        botao.style.display = "flex"
    }else{
        botao.style.display = "none"
    }
    
})

var button2 = document.getElementById("botao2");

button2.addEventListener("click", function(){

    var botao = document.getElementById("botao");
    var ocultos = document.getElementById("ocultos");

    if(ocultos.style.display === "none"){
        botao.style.display = "flex"
    }else{
        botao.style.display = "none"
    }
    
})



var button2 = document.getElementById("less");

button2.addEventListener("click", function(){

    var ocultos = document.getElementById("ocultos");

    if(ocultos.style.display === "block"){
        ocultos.style.display = "none"
    }else{
        ocultos.style.display = "block"
    }
    
})

var button2 = document.getElementById("botao2");

button2.addEventListener("click", function(){

    var botao2 = document.getElementById("botao2");

    if(botao2.style.display === "none"){
        botao2.style.display = "flex"
    }else{
        botao2.style.display = "none"
    }
    
})

var button = document.getElementById("botao");

button.addEventListener("click", function(){

    var botao2 = document.getElementById("botao2");
    var ocultos = document.getElementById("ocultos");

    if(ocultos.style.display === "block"){
        botao2.style.display = "flex"
    }else{
        botao2.style.display = "flex"
    }
    
})







