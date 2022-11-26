var button = document.getElementById('get-note');
var boxes = document.getElementsByClassName('note');


const notes = ["Hackerrank (DSA Problem Sets)", 
               "Data Structures / Algorithms study on Geeksforgeeks", 
               "Reading Quran", 
               "Reading Risale", 
               "Listen Preachings of H.efendi or Nouman Ali Khan", 
               "Learning Arabic", 
               "Siyer / life of the sahabe", 
               "Reading / Watching", 
               "Practice Violin", 
               "Learn Music Theory / Turkish Makams"];

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
