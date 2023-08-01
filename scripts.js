
const gravityEarth = 9.8;
const gravityMercury = 3.7;
const gravityVenus = 8.87;
const gravityMars = 3.711;
const gravityJupiter = 28.4;
const gravitySaturn = 10.44;
const gravityUranus = 8.7;
const gravityNeptune = 11.15;
const gravityPluto = 0.62;
const gravitySun = 274;

// Jupiter function

const btnJupiter = document.querySelector('.btn-jpt');
btnJupiter.addEventListener('click', calcWeightJupiter);

function calcWeightJupiter() {

    function jupiter(initialWeight) {
        const totalWeight = initialWeight * gravityJupiter / gravityEarth;
        return totalWeight;
    }

    const input = document.querySelector('.input-jupiter');
    const value = input.value;
    let result = jupiter(value);

    result = parseInt(result);
    resultJupiter.textContent = `${result}KG`;
}

const inputJupiter = document.querySelector('.input-jupiter');
const placeholderJupiter = inputJupiter.getAttribute('placeholder');


inputJupiter.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputJupiter.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});


// Mercury function

const btnMercury = document.querySelector('.btn-mer');
btnMercury.addEventListener('click', calcWeightMercury);

function calcWeightMercury() {

    function mercury(initialWeight) {
        const totalWeight = initialWeight * gravityMercury / gravityEarth;
        return totalWeight;
    }

    const input = document.querySelector('.input-mercury');
    const value = input.value;
    let result = mercury(value);

    result = parseInt(result);
    resultMercury.textContent = `${result}KG`;
}

const inputMercury = document.querySelector('.input-mercury');
const placeholderMercury = inputMercury.getAttribute('placeholder');


inputMercury.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputMercury.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});


// Neptune function

const btnNeptune = document.querySelector('.btn-nep');
btnNeptune.addEventListener('click', calcWeightNeptune);

function calcWeightNeptune() {

    function neptune(initialWeight) {
        const totalWeight = initialWeight * gravityNeptune / gravityEarth;
        return totalWeight
    }

    const input = document.querySelector('.input-neptune');
    const value = input.value;
    let result = neptune(value);

    result = parseInt(result);
    resultNeptune.textContent = `${result}KG`;
}

const inputNeptune = document.querySelector('.input-neptune');
const placeholderNeptune = inputNeptune.getAttribute('placeholder');


inputNeptune.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputNeptune.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});

// Saturn function

const btnSaturn = document.querySelector('.btn-sat');
btnSaturn.addEventListener('click', calcWeightSaturn);


function calcWeightSaturn() {

    function saturn(initialWeight) {
        const totalWeight = initialWeight * gravitySaturn / gravityEarth;
        return totalWeight;
    }

    const input = document.querySelector('.input-saturn');
    const value = input.value;
    let result = saturn(value);

    result = parseInt(result);
    resultSaturn.textContent = `${result}KG`;
}

const inputSaturn = document.querySelector('.input-saturn');
const placeholderSaturn = inputNeptune.getAttribute('placeholder');


inputSaturn.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputSaturn.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});

// Mars function
const btnMars = document.querySelector('.btn-mart');
btnMars.addEventListener('click', calcWeightMars);


function calcWeightMars() {

    function mars(initialWeight) {
        const totalWeight = initialWeight * gravityMars / gravityEarth;
        return totalWeight;
    }

    const input = document.querySelector('.input-mars');
    const value = input.value;
    let result = mars(value);

    result = parseInt(result);
    resultMars.textContent = `${result}KG`;
}

const inputMars = document.querySelector('.input-mars');
const placeholderMars = inputNeptune.getAttribute('placeholder');


inputMars.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputMars.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});

// Uranus Function
const btnUranus = document.querySelector('.btn-ura');
btnUranus.addEventListener('click', calcWeightUranus);


function calcWeightUranus() {

    function uranus(initialWeight) {
        const totalWeight = initialWeight * gravityUranus / gravityEarth;
        return totalWeight;
    }

    const input = document.querySelector('.input-uranus');
    const value = input.value;
    let result = uranus(value);

    result = parseInt(result);
    resultUranus.textContent = `${result}KG`;
}

const inputUranus = document.querySelector('.input-uranus');
const placeholderUranus = inputNeptune.getAttribute('placeholder');


inputUranus.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputUranus.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});

// Venus Function
const btnVenus = document.querySelector('.btn-ven');
btnVenus.addEventListener('click', calcWeightVenus);


function calcWeightVenus() {

    function venus(initialWeight) {
        const totalWeight = initialWeight * gravityVenus / gravityEarth;
        return totalWeight
    }

    const input = document.querySelector('.input-venus');
    const value = input.value;
    let result = venus(value);

    result = parseInt(result);
    resultVenus.textContent = `${result}KG`;
}

const inputVenus = document.querySelector('.input-venus');
const placeholderVenus = inputVenus.getAttribute('placeholder');


inputVenus.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputVenus.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});

// Sun Function
const btnSun = document.querySelector('.btn-sun');
btnSun.addEventListener('click', calcWeightsun);

function calcWeightsun() {

    function sol(initialWeight) {
        const totalWeight = initialWeight * gravitySun / gravityEarth;
        return totalWeight
    }

    const input = document.querySelector('.input-sun');
    const value = input.value;
    let result = sol(value);

    result = parseInt(result);
    resultSun.textContent = `${result}KG`;
}

const inputSun = document.querySelector('.input-sun');
const placeholderSun = inputVenus.getAttribute('placeholder');


inputSun.addEventListener('input', function (event) {
    // Eliminar cualquier carácter no numérico del valor ingresado
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    // Limitar el valor a una longitud máxima de 4 dígitos
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0, 4);
    }
});

inputSun.addEventListener('focus', function (event) {
    // Cuando el campo de entrada obtiene el enfoque, se borra el placeholder
    event.target.removeAttribute('placeholder');
});































