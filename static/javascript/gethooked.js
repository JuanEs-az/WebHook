function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(() => {
    $(".boton.gethooked").click(() => {
        $(".ctn-display").fadeOut()
        $(".ctn-gethookedRandom img").css("transform","rotate(1080deg)")
                                     .css("transition","all 5s")
        setTimeout(() => {
           $(".ctn-gethookedRandom img").css("transform","none") 
            let page = pages.splice(getRandomInt(0,pages.length),1)[0]
           try{
                $(".ctn-display").text("The name of this page is " + page.name + "... Enjoy!")
                $(".ctn-display").fadeIn()
                setTimeout(() => {
                    window.open(page.url)
                    if(pages.length == 0){
                        location.reload()
                    }
                },1000)
            }catch{
                console.error("No estás conectado con la base")
            }
            
        },5500)
    })

})

// www.xd.com/favicon.ico es la imagen
