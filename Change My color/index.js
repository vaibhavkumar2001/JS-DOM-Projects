const changeColor = document.getElementById('changeMe');
const changered = document.getElementById('changeRed');
const changegreen = document.getElementById('changeGreen');
const changeblue = document.getElementById('changeBlue');
const changepurple = document.getElementById('changePurple');
const changereset = document.getElementById('changeReset');





changered.addEventListener('click', () => {
    changeColor.style.color = '#e24234'
})

changegreen.addEventListener('click', () => {
    changeColor.style.color = '#2ac366'
})

changeblue.addEventListener('click', () => {
    changeColor.style.color = '#2f8dd5'
})

changepurple.addEventListener('click', () => {
    changeColor.style.color = '#934ea6'
})

changereset.addEventListener('click', () => {
    changeColor.style.color = null
})