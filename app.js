var button = document.getElementById('get-note');
var boxes = document.getElementsByClassName('note');


const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

console.log(boxes)
button.addEventListener('click', () => {
  
    for(box of boxes) {
        box.innerText = getRandomNote(notes) 
    }
})



const getRandomNote = (notes) => {
    return notes[Math.floor(Math.random()*notes.length)]
}