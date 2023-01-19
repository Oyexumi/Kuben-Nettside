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
    const $logo = $('.logo')
    const $fake = $('.fake')
    console.log(scrollValue)

    if(scrollValue > 200){
        $logo.addClass('topLogo')
        $fake.addClass('fakeMargin')
    }

    if(scrollValue < 200){
        $('.logo').removeClass('topLogo')
        // $('.fake').removeClass('fakemargin')
    }
})

