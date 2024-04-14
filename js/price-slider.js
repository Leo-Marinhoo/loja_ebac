

const slider = document.querySelector("#price-slider")
const sliderValue = document.querySelector("#slider-value")

let tempSliderValue = slider.value;

sliderValue.textContent = "R$0   -   R$" + tempSliderValue;

let progress = (tempSliderValue / slider.max) * 100;

slider.style.background = `linear-gradient(to right, var(--red-bg) ${progress}%, #ccc ${progress}%)`;
slider.addEventListener("input", (event) => {
    tempSliderValue = Number(event.target.value);

    sliderValue.textContent = "R$0   -   R$" + tempSliderValue;

    progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, var(--red-bg) ${progress}%, #ccc ${progress}%)`;

})
