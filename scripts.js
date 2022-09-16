// Gravedad en planetas
//  Peso Usuario * gMarte / gTierra = peso en marte 

const gTierra = 9.8;
const gMercurio = 3.7;
const gVenus = 8.87;
const gMarte = 3.711;
const gJupiter = 28.4;
const gSaturno = 10.44;
const gUrano = 8.7;
const gNeptuno = 11.15;
const gPluton = 0.62;
const gSol = 274;



const btnJup = document.querySelector('.btn-jpt');
btnJup.addEventListener('click', calcPesoJupiter);

const btnMer = document.querySelector('.btn-mer');
btnMer.addEventListener('click', calcPesoMercurio);

const btnNep = document.querySelector('.btn-nep');
btnNep.addEventListener('click', calcPesoNeptuno);

const btnSat = document.querySelector('.btn-sat');
btnSat.addEventListener('click', calcPesoSaturno);

const btnMart = document.querySelector('.btn-mart');
btnMart.addEventListener('click', calcPesoMarte);

const btnUra = document.querySelector('.btn-ura');
btnUra.addEventListener('click', calcPesoUrano);

const btnVen = document.querySelector('.btn-ven');
btnVen.addEventListener('click', calcPesoVenus);

const btnSun = document.querySelector('.btn-sun');
btnSun.addEventListener('click', calcPesoSol);



// Funciones por planetas -




function calcPesoJupiter() {
    
    function jupiter(pesoInicial) {
        const pesoTotal = pesoInicial * gJupiter / gTierra;
        return pesoTotal
    }
    
    const input = document.querySelector('.input-jupiter');
    const value = input.value;

    let pesoFinal = jupiter(value);
    pesoFinal = parseInt(pesoFinal);

    resultJupiter.textContent = `${pesoFinal}KG`;
    
}



    
    


function calcPesoMercurio() {

    function mercurio(pesoInicial) {
        const pesoTotal = pesoInicial * gMercurio / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-mercurio');
    const value = input.value;

    let pesoFinal = mercurio(value);
    pesoFinal = parseInt(pesoFinal);

    resultMercurio.textContent = `${pesoFinal}KG`;
}

function calcPesoNeptuno() {

    function neptuno(pesoInicial) {
        const pesoTotal = pesoInicial * gNeptuno / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-neptuno');
    const value = input.value;

    let pesoFinal = neptuno(value);
    pesoFinal = parseInt(pesoFinal);

    resultNeptuno.textContent = `${pesoFinal}KG`;
}

function calcPesoSaturno() {

    function saturno(pesoInicial) {
        const pesoTotal = pesoInicial * gSaturno / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-saturno');
    const value = input.value;

    let pesoFinal = saturno(value);
    pesoFinal = parseInt(pesoFinal);

    resultSaturno.textContent = `${pesoFinal}KG`;
}

function calcPesoMarte() {

    function marte(pesoInicial) {
        const pesoTotal = pesoInicial * gMarte / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-marte');
    const value = input.value;

    let pesoFinal = marte(value);
    pesoFinal = parseInt(pesoFinal);

    resultMarte.textContent = `${pesoFinal}KG`;
}





function calcPesoUrano() {

    function urano(pesoInicial) {
        const pesoTotal = pesoInicial * gUrano / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-urano');
    const value = input.value;

    let pesoFinal = urano(value);
    pesoFinal = parseInt(pesoFinal);

    resultUrano.textContent = `${pesoFinal}KG`;
}

function calcPesoVenus() {

    function venus(pesoInicial) {
        const pesoTotal = pesoInicial * gVenus / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-venus');
    const value = input.value;


    let pesoFinal = venus(value);
    pesoFinal = parseInt(pesoFinal);

    resultVenus.textContent = `${pesoFinal}KG`;
}





function calcPesoSol() {

    function sol(pesoInicial) {
        const pesoTotal = pesoInicial * gSol / gTierra;
        return pesoTotal
    }

    const input = document.querySelector('.input-sol');
    const value = input.value;


    let pesoFinal = sol(value);
    pesoFinal = parseInt(pesoFinal);

    resultSol.textContent = `${pesoFinal}KG`;
}



   


     
    




























