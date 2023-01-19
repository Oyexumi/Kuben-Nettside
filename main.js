console.log("bolle")


// window.onscroll = function() {
//     const windowHeight = window.height()
//     const scrollValue = window.scrollTop()
//     console.log(scrollValue)
//     console.log(windowHeight)
// }

$(document).on('scroll', function(){
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()
    console.log(scrollValue)
})

