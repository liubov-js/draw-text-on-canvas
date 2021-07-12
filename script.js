const canvas = document.querySelector('Canvas');
const ctx = canvas.getContext('2d');

const text = 'F GRNYF';
let x = 50;
let y = 150;

function drawText() {
    const arrOfLetters = text.split('');
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    for (let i = 0; i < arrOfLetters.length; i++) {
        switch (arrOfLetters[i]) {
            case 'A':
                drawA();
                break;
            case 'B':
                drawB();
                break;
            case 'C':
                drawC();
                break;
            case 'D':
                drawD();
                break;
            case 'E':
                drawE();
                break;
            case 'F':
                drawF();
                break;
            case 'G':
                drawG();
                break;
            case 'H':
                drawH();
                break;
            case 'I':
                drawI();
                break;
            case 'J':
                drawJ();
                break;
            case 'K':
                drawK();
                break;
            case 'L':
                drawL();
                break;
            case 'M':
                drawM();
                break;
            case 'N':
                drawN();
                break;
            case 'O':
                drawO();
                break;
            case 'P':
                drawP();
                break;
            case 'Q':
                drawQ();
                break;
            case 'R':
                drawR();
                break;
            case 'S':
                drawS();
                break;
            case 'T':
                drawT();
                break;
            case 'U':
                drawU();
                break;
            case 'V':
                drawV();
                break;
            case 'W':
                drawW();
                break;
            case 'X':
                drawX();
                break;
            case 'Y':
                drawY();
                break;
            case 'Z':
                drawZ();
                break;
        }
        x = x + 100;
    }
}

function drawA() {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.moveTo(x + 25, y - 50);
    ctx.lineTo(x + 50, y - 50);
    ctx.stroke();
}

function drawB() {
    ctx.moveTo(x, y - 60);
    ctx.lineTo(x + 50, y - 60);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 40, y - 100);
    ctx.lineTo(x + 40, y - 60);
    ctx.stroke();
}

function drawC() {
    ctx.moveTo(x + 50, y - 100);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

function drawD() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y - 90);
    ctx.lineTo(x + 50, y - 10);
    ctx.closePath();
    ctx.stroke();
}

function drawE() {
    drawC();
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y - 50);
    ctx.stroke();
}

function drawF() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y - 100);
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y - 50);
    ctx.stroke();
}

function drawG() {
    drawC();
    ctx.moveTo(x + 50, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x + 30, y - 50);
    ctx.stroke();
}

function drawH() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.moveTo(x + 50, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y - 50);
    ctx.stroke();
}

function drawI() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.stroke();
}

function drawJ() {
    ctx.moveTo(x + 50, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.lineTo(x, y - 100);
    ctx.stroke();
}

function drawK() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.moveTo(x + 50, y - 100);
    ctx.lineTo(x, y - 50);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

function drawL() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

function drawM() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 40, y - 50);
    ctx.lineTo(x + 80, y - 100);
    ctx.lineTo(x + 80, y);
    ctx.stroke();
}

function drawN() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.stroke();
}

function drawO() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.closePath();
    ctx.stroke();
}

function drawP() {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x + 50, y - 100);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x, y - 50);
    ctx.stroke();
}

function drawQ() {
    drawO();
    ctx.moveTo(x + 35, y - 20);
    ctx.lineTo(x + 70, y - 5);
    ctx.stroke();
}

function drawR() {
    drawP();
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

function drawS() {
    ctx.moveTo(x + 50, y - 100);
    ctx.lineTo(x, y - 100);
    ctx.lineTo(x, y - 50);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawT() {
    ctx.moveTo(x + 25, y);
    ctx.lineTo(x + 25, y - 100);
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 50, y - 100);
    ctx.stroke();
}

function drawU() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x, y - 50);
    ctx.lineTo(x + 10, y);
    ctx.lineTo(x + 40, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x + 50, y - 100);
    ctx.stroke();
}

function drawV() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 25, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.stroke();
}

function drawW() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 10, y);
    ctx.lineTo(x + 40, y - 50);
    ctx.lineTo(x + 70, y);
    ctx.lineTo(x + 80, y - 100);
    ctx.stroke();
}

function drawX() {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y - 100);
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

function drawY() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 25, y - 50);
    ctx.lineTo(x + 50, y - 100);
    ctx.moveTo(x + 25, y - 50);
    ctx.lineTo(x + 25, y);
    ctx.stroke();
}

function drawZ() {
    ctx.moveTo(x, y - 100);
    ctx.lineTo(x + 50, y - 100);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

drawText();
