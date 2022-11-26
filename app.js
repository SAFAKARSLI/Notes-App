var button = document.getElementById('get-note');
var boxes = document.getElementsByClassName('note');


const notes = ["CARDINAL", 
               "DSA", 
               "MENTAL RENEWAL", 
               "LANGUAGE", 
               "MUSIC", 
               "ASTROPHYSICS"];

console.log(boxes)
button.addEventListener('click', () => {
  
  var topic = boxes[0].innerText = getRandomNote(notes)
  var hour = boxes[1].innerText = Math.floor(Math.random()*2) + 1

//    for(box of boxes) {
//        box.innerText = getRandomNote(notes) 
//    }
})



const getRandomNote = (notes) => {
    return notes[Math.floor(Math.random()*notes.length)]
}
