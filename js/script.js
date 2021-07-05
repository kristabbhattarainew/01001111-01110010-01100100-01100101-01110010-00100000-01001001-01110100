const orderIt = document.getElementById('orderIt');
const eyes = document.getElementById('eyes');
const menuImg = document.getElementById('menu');
const mobNavCloser = document.getElementById('backArrow');
let mobMenu = document.getElementById('mob-menu');

let menuToggle = false;

// Menu icon display for mobile
menuImg.addEventListener('click', (e) => {
  menuToggle = true;
  mobMenu.style.position = 'absolute';
  mobMenu.style.transition = '1s ease';
  mobMenu.style.marginRight = '0%';
})

mobNavCloser.addEventListener('click', (e) => {
  menuToggle = false;
  mobMenu.style.position = 'absolute';
  mobMenu.style.transition = '1s ease';
  mobMenu.style.marginRight = '-50%';
})

// LOGO animation for different screen sizes
const tl = new TimelineMax();

let screenWidth = window.innerWidth;

if(screenWidth > 1500) {
  tl.from(orderIt, 2, {x:10000, opacity: 0, rotation: -360, ease: Back.easeOut.config(1.7), y: 0})
    .to(eyes, 2, { alpha: 0.3, repeat:-1, yoyo:true })
}

else if (screenWidth > 1000) {
  tl.from(orderIt, 2, {x:1000, opacity: 0, rotation: -360, ease: Back.easeOut.config(1.7), y: 0})
  .to(eyes, 2, { alpha: 0.3, repeat:-1, yoyo:true })
}

else {
  tl.from(orderIt, 2, {x:500, opacity: 0, rotation: -360, ease: Back.easeOut.config(1.7), y: 0})
  .to(eyes, 2, { alpha: 0.3, repeat:-1, yoyo:true })
}

function inviteBot() {
  window.open("https://discord.com/oauth2/authorize?client_id=716257964767445043&scope=bot&permissions=8")
}

function voteBot() {
  window.open("https://top.gg/bot/716257964767445043/vote")
}

function joinServer() {
  window.open("https://discord.gg/QfGMT3zphK")
}

function goCommands() {
  window.open("https://docs.orderit.ga/commands")
}

function goAbout() {
  window.open("https://docs.orderit.ga/about")
}

function goMenu() {
  window.open("https://orderit.ga/")
}

function openDocs() {
  window.open("https://docs.orderit.ga/")
}
