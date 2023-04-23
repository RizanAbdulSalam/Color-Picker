/*  JavaScript  */
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function makeRandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const hex = rgbToHex(r, g, b);
    return [
        [r, g, b], hex
    ];

}

const button = document.querySelector('#colorChanger');

const colorInfoRGB = document.querySelector('#rgb')
const colorInfoHEX = document.querySelector('#hex')

button.addEventListener('click', () => {

    let colorInfo = makeRandColor();
    let newColor = `#${colorInfo[1]}`;
    document.body.style.backgroundColor = newColor;

    console.log(`Changed the color to: #${colorInfo[1].toUpperCase()}`);



    colorInfoRGB.innerText = `RGB:(${colorInfo[0][0]}, ${colorInfo[0][1]}, ${colorInfo[0][2]})`;

    colorInfoHEX.innerText = `#${colorInfo[1]}`.toUpperCase();



}); 
