//-------------Dark and Light Mode----------------
const container = document.querySelector('.container')
const main = document.querySelector('.main')
const night = document.querySelector('.night')
const day = document.querySelector('.day')

// Remove Light Mode
function removeLight(){
    container.classList.remove("light");
    main.classList.remove("light");
    day.classList.remove("active");
}
// Remove Dark Mode
function removeDark() {
    container.classList.remove("dark");
    main.classList.remove("dark");
    night.classList.remove("active");
}

// Toggle Dark Mode
function nightMode() {
    if (container.classList.contains("dark")) {
        body.style.background = `linear-gradient(to bottom right, ${selector_l.value}, ${selector_r.value})`
        color.innerHTML = `(to bottom right, ${selector_l.value}, ${selector_r.value})`
        removeDark();
    }
    else {
        body.style.background = ``
        container.classList.add("dark");
        main.classList.add("dark");
        night.classList.add("active");
        color.innerHTML = `(Dark Mode)`
        removeLight();
    }
}

// Toggle Light Mode
function lightMode() {
    if (container.classList.contains("light")) {
        body.style.background = `linear-gradient(to bottom right, ${selector_l.value}, ${selector_r.value})`
        color.innerHTML = `(to bottom right, ${selector_l.value}, ${selector_r.value})`
        removeLight();
    }
    else {
        body.style.background = ``
        container.classList.add("light");
        main.classList.add("light");
        day.classList.add("active");
        color.innerHTML = `(Light Mode)`
        removeDark();
    }
}

night.addEventListener('click', nightMode)
day.addEventListener('click', lightMode)


//-----------Background Color-----------------
const selector_r = document.querySelector('.color-selector-r')
const selector_l = document.querySelector('.color-selector-l')
const body = document.querySelector('.container')
const color = document.querySelector('.color')
const random = document.querySelector('.random')
color.innerHTML = `(to bottom right, ${selector_l.value}, ${selector_r.value})`

// Set Background Color from color selector
function setBackgroundColor() {
    removeLight();
    removeDark();

    body.style.background = `linear-gradient(to bottom right, ${selector_l.value}, ${selector_r.value})`
    color.innerHTML = `(to bottom right, ${selector_l.value}, ${selector_r.value})`
}

// Create a Random Background
function randomize() {
    removeDark();
    removeLight();
    const maxVal = 0xFFFFFF;
    let leftColor = '#' + Math.floor(Math.random() * maxVal).toString(16).padStart(6,0);
    let rightColor = '#' + Math.floor(Math.random() * maxVal).toString(16).padStart(6,0);

    selector_l.value = `${leftColor}`
    selector_r.value = `${rightColor}`
    body.style.background = `linear-gradient(to bottom right, ${leftColor}, ${rightColor})`
    color.innerHTML = `(to bottom right, ${leftColor}, ${rightColor})`
}

selector_l.addEventListener('input', setBackgroundColor)
selector_r.addEventListener('input', setBackgroundColor)
random.addEventListener('click', randomize)


