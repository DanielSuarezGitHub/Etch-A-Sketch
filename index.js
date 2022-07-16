const slider = document.querySelector('.size')
const colormode = document.querySelector('.colormode')
const sizeofgrid = document.querySelector('.sizeofGrid')
const rainbow = document.querySelector('.rainbow')
const clear  = document.querySelector('.clear')
const gridcontainer = document.querySelector('.gridcontainer')
const colorselector = document.querySelector('.colorselector')
const body = document.querySelector('body')
let currentColor = "#000000"
griddySize = 16
let isRainbow = false
let click = false

body.addEventListener('click', () => click = !click)

createGrid(16)


//change color function
//setup grid function
//clear grid function
//update size value
//change size function
colormode.addEventListener('click', () => {
  isRainbow = false
})

rainbow.addEventListener('click', () => {
  isRainbow = !isRainbow
})


function createGrid (gridNumber) {
  gridcontainer.innerHTML = "" 
  let gridArea = gridNumber * gridNumber;
  for (let i = 1; i <= gridArea; i++) {
      let gridItem = document.createElement('div');
      gridcontainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
      gridcontainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
      gridcontainer.insertAdjacentElement('beforeend', gridItem);
      gridItem.addEventListener('mouseover', () => {
        if(isRainbow == false && click == true) {
          gridItem.style.backgroundColor = `${currentColor}`
        } else if (isRainbow == true && click == true) {
          let r = Math.floor(Math.random() * 256)
          let g = Math.floor(Math.random() * 256)
          let b = Math.floor(Math.random() * 256)
          gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        }

      }) 
    } 
}

// gets the selected size
slider.addEventListener('input', (e) => { 
  createGrid(e.target.value)
  sizeofgrid.textContent = `${e.target.value} x ${e.target.value} `
  griddySize = e.target.value
})

colorselector.addEventListener('input', (e) => currentColor = e.target.value)


clear.addEventListener('click', () => {
   gridcontainer.innerHTML = ""
   createGrid(griddySize)
})
