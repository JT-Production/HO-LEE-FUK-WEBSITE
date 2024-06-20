const cookieImage = document.getElementById('cookie-image');
const fortuneMessage = document.getElementById('fortune-message');

const fortunes = [
 "Buy $FUK now and watch your fortune rise like the moon.",
"Ho Lee Fuk! Your crypto journey will bring generational wealth.",
"Investing in $FUK today means pumping your future tomorrow.",
"Fortune favors those who hold $FUK. HODL tight!",
"The moon is closer than you think. Buy $FUK and see!",
"Ho Lee Fuk! A crypto pump is in your near future.",
"Generational wealth starts with a single $FUK.",
"Your wallet will thank you for buying $FUK. Fortune smiles upon you.",
"In the world of crypto, $FUK is your golden ticket to the moon.",
"Ho Lee Fuk! Great investing brings great fortune. $FUK is the way!",
"Your future shines bright with $FUK in your wallet.",
"Buy $FUK today and laugh all the way to the bank tomorrow.",
"Ho Lee Fuk! You're about to hit the crypto jackpot.",
"The path to the moon is paved with $FUK.",
"Your $FUK investment will bring endless fortune.",
"Ho Lee Fuk! The crypto pump is real and it's coming your way.",
"Buy $FUK now and watch your dreams take flight.",
"A wise investment in $FUK brings lifelong fortune.",
"The moon awaits those who believe in $FUK.",
"Fortune smiles on those who trust $FUK.",
"Ho Lee Fuk! Your crypto future is looking bright.",
"Investing in $FUK today, enjoying the moon tomorrow.",
"Generational wealth begins with $FUK in hand.",
"The $FUK pump will lift your spirits and your wallet.",
"Ho Lee Fuk! A small investment now, a huge fortune later.",
"The key to the moon is $FUK in your portfolio.",
"Fortune comes to those who hold $FUK dearly.",
"Ho Lee Fuk! Your crypto adventure is about to get exciting.",
"Invest in $FUK and watch your fortune soar.",
"The moon is just the beginning with $FUK.",
"Ho Lee Fuk! Your wallet will thank you for buying $FUK.",
"The $FUK pump will be legendary.",
"Fortune favors the brave who buy $FUK.",
"Ho Lee Fuk! Your crypto journey will be epic.",
"Invest in $FUK and ride the wave to the moon.",
"The $FUK pump is just around the corner.",
"Ho Lee Fuk! Your crypto fortune is within reach.",
"Buy $FUK now, thank yourself later.",
"Generational wealth begins with a single $FUK.",
"Fortune is smiling on your $FUK investment.",
"The moon is the limit with $FUK.",
"Ho Lee Fuk! Your crypto dreams are coming true.",
"Buy $FUK and prepare for liftoff.",
"Fortune favors the bold who invest in $FUK.",
"Ho Lee Fuk! Your wallet is about to get a lot happier.",
"The $FUK pump will take you to new heights.",
"Invest in $FUK and see your fortune grow.",
"The moon is calling, and $FUK will take you there.",
"Generational wealth starts with a smart $FUK.",
"Ho Lee Fuk! A crypto pump is in your near future.",
"Buy $FUK and watch your dreams come true.",
"Fortune awaits those who invest in $FUK.",
"The moon is just the beginning with $FUK.",
"Ho Lee Fuk! Your crypto journey is about to get exciting.",
"Invest in $FUK and ride the wave to wealth.",
"Generational wealth is within your grasp with $FUK.",
"The $FUK pump will make you say, 'Ho Lee Fuk!'",
"Fortune favors those who believe in $FUK.",
"Buy $FUK and prepare for a wild ride.",
"The moon is closer than ever with $FUK.",
"Ho Lee Fuk! The pump is real, and it's coming your way.",
"Fortune is smiling on your $FUK investment.",
"Invest in $FUK and watch your future unfold.",
"Generational wealth is one $FUK away.",
"Ho Lee Fuk! Your crypto dreams are coming true.",
"Buy $FUK and prepare for liftoff.",
"Fortune favors the bold who invest in $FUK.",
"Ho Lee Fuk! Your wallet is about to get a lot happier.",
"The $FUK pump will take you to new heights.",
"Invest in $FUK and see your fortune grow.",
"The moon is calling, and $FUK will take you there.",
"Generational wealth starts with a smart $FUK.",
"Ho Lee Fuk! A crypto pump is in your near future.",
"Buy $FUK and watch your dreams come true.",
"Fortune awaits those who invest in $FUK.",
"The moon is just the beginning with $FUK.",
"Ho Lee Fuk! Your crypto journey is about to get exciting.",
"Invest in $FUK and ride the wave to wealth.",
"Generational wealth is within your grasp with $FUK.",
"The $FUK pump will make you say, 'Ho Lee Fuk!'",
"Fortune favors those who believe in $FUK.",
"Ho Lee Fuk! Your crypto fortune is within reach.",
"Buy $FUK now, thank yourself later.",
"The moon is closer than you think with $FUK.",
"Generational wealth begins with $FUK in hand.",
"Ho Lee Fuk! Your crypto future is looking bright.",
"Investing in $FUK today, enjoying the moon tomorrow.",
"Fortune smiles on those who trust $FUK.",
"Buy $FUK now and watch your dreams take flight.",
"Ho Lee Fuk! Great investing brings great fortune.",
"The path to the moon is paved with $FUK.",
"Ho Lee Fuk! You're about to hit the crypto jackpot.",
"Buy $FUK today and laugh all the way to the bank tomorrow.",
"Your future shines bright with $FUK in your wallet.",
"Ho Lee Fuk! Great fortune awaits with $FUK.",
"The moon is closer than you think with $FUK.",
"Buy $FUK and unlock your crypto fortune.",
"Ho Lee Fuk! Your wallet is about to get a big surprise.",
"Fortune awaits those who believe in $FUK.",
"Ho Lee Fuk! The best crypto journey starts with $FUK.",

];

let isBroken = false;

cookieImage.addEventListener('click', () => {

  if (isBroken) {
    // Change back to unbroken cookie
    cookieImage.src = 'assets/images/cookies.png';
    fortuneMessage.textContent = '';
    fortuneMessage.style.display = 'none'
  } else {
    // Change to broken cookie and show message
    cookieImage.src = 'assets/images/broken cookies.png';
    fortuneMessage.style.display = 'block'
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneMessage.textContent = randomFortune;
  }
  isBroken = !isBroken;
});




/* Back To Top*/
let calcStrollValue = () => {
  let scrollUpTop  = document.getElementById("Top");
  let UpTopvalue = document.getElementById("Top-value");
  let pos = document.documentElement.scrollTop;
  // console.log(pos);

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // console.log(calcHeight);

  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue);
  if (pos > 100) {
      scrollUpTop.style.display = "grid";
  } else {
      scrollUpTop.style.display = "none";
  }

  scrollUpTop.addEventListener("click" , () => {
      document.documentElement.scrollTop = 0;
  });

  scrollUpTop.style.background = `conic-gradient(#BD3537 ${scrollValue}%, #1E1E1F ${scrollValue}%)`;
}

window.onscroll = calcStrollValue;
window.onload = calcStrollValue;










/* Loader*/

var spinnerwrapper = document.querySelector('.spinner-wrapper');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    spinnerwrapper.style.opacity = '0';

    setTimeout(() =>{
        spinnerwrapper.style.display = 'none';
    },500)
})
