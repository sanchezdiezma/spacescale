// Gravedad en planetas

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



// Mi peso 85 * gMarte / gTierra = peso en marte (Algoritmo para sacar el peso)


// Funciones por planetas -


function calcPesoJupiter() {

    function jupiter(pesoInicial) {
        const pesoTotal = pesoInicial * gJupiter / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-jupiter');
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

    const input = document.getElementById('input-mercurio');
    const value = input.value;

    let pesoFinal = mercurio(value);
    pesoFinal = parseInt(pesoFinal);

    resultMercurio.textContent = `${pesoFinal}KG`;
}

function calcPesoMarte() {

    function marte(pesoInicial) {
        const pesoTotal = pesoInicial * gMarte / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-marte');
    const value = input.value;

    let pesoFinal = marte(value);
    pesoFinal = parseInt(pesoFinal);

    resultMarte.textContent = `${pesoFinal}KG`;
}

function calcPesoNeptuno() {

    function neptuno(pesoInicial) {
        const pesoTotal = pesoInicial * gNeptuno / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-neptuno');
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

    const input = document.getElementById('input-saturno');
    const value = input.value;

    let pesoFinal = saturno(value);
    pesoFinal = parseInt(pesoFinal);

    resultSaturno.textContent = `${pesoFinal}KG`;
}

function calcPesoUrano() {

    function urano(pesoInicial) {
        const pesoTotal = pesoInicial * gUrano / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-urano');
    const value = input.value;

    let pesoFinal = urano(value);
    pesoFinal = parseInt(pesoFinal);

    resultUrano.textContent = `${pesoFinal}KG`;
}

function calcPesoTierra() {

    function tierra(pesoInicial) {
        const pesoTotal = pesoInicial * gTierra / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-tierra');
    const value = input.value;
    

    let pesoFinal = tierra(value);
    pesoFinal = parseInt(pesoFinal);

    resultTierra.textContent = `${pesoFinal}KG`;
}

function calcPesoVenus() {

    function venus(pesoInicial) {
        const pesoTotal = pesoInicial * gVenus / gTierra;
        return pesoTotal
    }

    const input = document.getElementById('input-venus');
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

    const input = document.getElementById('input-sol');
    const value = input.value;


    let pesoFinal = sol(value);
    pesoFinal = parseInt(pesoFinal);

    resultSol.textContent = `${pesoFinal}KG`;
}

   


     
    




























