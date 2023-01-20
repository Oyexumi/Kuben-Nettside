// Logoen som blir mindre 
$(document).on('scroll', function(){
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()
    const $logo = $('.logo')
    const $fake = $('.fake')
    // console.log(scrollValue)

    if(scrollValue > 200){
        $logo.addClass('topLogo')
        $fake.addClass('fakeMargin')
    }

    if(scrollValue < 200){
        $('.logo').removeClass('topLogo')
        // $('.fake').removeClass('fakemargin')
    }
})

// spillet 

const gameSummary = {
    number: 0,
    win: 0,
    lose: 0,
    draw: 0,
}

const gameObject = {
    playerPick: "",
    aiPick: "",
}

const hands = [...document.querySelectorAll('.select img')]
console.log(hands)

function selectedHand(){
    gameObject.playerPick = this.dataset.option
    console.log(gameObject.playerPick)
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 3px 3px #000'
}

function startGame(){
    if(gameObject.playerPick === ""){
        alert("You need to pick one option")
        return
    }

    gameObject.aiPick = computerPick()

    const gameResult = checkResult(gameObject.playerPick, gameObject.aiPick)
    console.log(gameResult)
    publicResult(gameObject.playerPick, gameObject.aiPick, gameResult)

    endGame()
}

function computerPick(){
    const aiPick = hands[Math.floor(Math.random() * 3)].dataset.option
    console.log(aiPick)
    return aiPick
}

function checkResult(player, ai){
    if(player === ai){
        return 'draw'
    } else if(player === 'Paper' && ai === 'Rock' || player === 'Rock' && ai === 'Scissors' || player === 'Scissors' && ai === 'Paper'){
        return 'win'
    } else if(player === 'Rock' && ai === 'Paper' || player === 'Scissors' && ai === 'Rock' || player === 'Paper' && ai === 'Scissors'){
        return 'lose'
    }
}

function endGame(){
    hands.forEach(hand => hand.style.boxShadow = '')
    gameObject.playerPick = ""
}

function publicResult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.number++;
    document.querySelector('.numbers span').textContent = gameSummary.number;

    if(result === 'win'){
        document.querySelector('.wins span').textContent = ++gameSummary.win;
        document.querySelector('[data-summary="who-win"]').textContent = 'you won!'
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    } else if(result === 'lose'){
        document.querySelector('.losses span').textContent = ++gameSummary.lose;
        document.querySelector('[data-summary="who-win"]').textContent = 'you lose!'
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else{
        document.querySelector('.draws span').textContent = ++gameSummary.draw;
        document.querySelector('[data-summary="who-win"]').textContent = 'its a draw!'
        document.querySelector('[data-summary="who-win"]').style.color = 'gray'
    }
}

hands.forEach(hand => hand.addEventListener('click', selectedHand))
document.querySelector('.startGame').addEventListener('click', startGame)