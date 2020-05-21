let cRed = '0';
let cGreen = '0';
let cBlue = '0';

window.addEventListener('load', () => {
  let red = document.querySelector('#red');
  red.addEventListener('input', getRedValue);

  let green = document.querySelector('#green');
  green.addEventListener('input', getGreenValue);

  let blue = document.querySelector('#blue');
  blue.addEventListener('input', getBlueValue);

  renderColorPanel(cRed, cGreen, cBlue);
});

function getRedValue(event) {
  let valueRed = document.querySelector('#valueRed');
  valueRed.value = event.target.value;
  cRed = event.target.value;
  renderColorPanel(cRed, cGreen, cBlue);
}

function getGreenValue(event) {
  let valueGreen = document.querySelector('#valueGreen');
  valueGreen.value = event.target.value;
  cGreen = event.target.value;
  renderColorPanel(cRed, cGreen, cBlue);
}

function getBlueValue(event) {
  let valueBlue = document.querySelector('#valueBlue');
  valueBlue.value = event.target.value;
  cBlue = event.target.value;
  renderColorPanel(cRed, cGreen, cBlue);
}

function renderColorPanel(cRed, cGreen, cBlue) {
  let colorPanel = document.querySelector('#colorPanel');
  rgb = `rgb(${cRed},${cGreen},${cBlue})`;
  colorPanel.style.backgroundColor = rgb;
}
