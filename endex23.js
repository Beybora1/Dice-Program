//

let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let paragraf = document.getElementById("total");

images = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
];

function roll() {
    let element1 = Math.floor(Math.random() * 6);
    let element2 = Math.floor(Math.random() * 6);
    //console.log(element1 + 1);
    //console.log(element2 + 1);
    die1.setAttribute("src", images[element1]);
    die2.setAttribute("src", images[element2]);

    let toplam = ((element1 + 1) + (element2 + 1));
    paragraf.textContent = `Toplam: ${toplam}`; 
}