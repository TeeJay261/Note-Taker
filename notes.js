const fs = require('fs')
const getNotes= () =>{
    return "Your notes are.."
}

const addNote = (title,body) => {
    const notes= loadNotes()
    // const duplicateNotes= notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=>note.title ===title)

    if(!duplicateNote){
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!');
    }else{
        console.log('Note title taken');
    }
    

    
}

const removeNote =(title)=> {
    const notes=loadNotes()
    const noteToKeep= notes.filter((note) => note.title !== title)
    if(noteToKeep.length!==notes.length){
      console.log('Note removed');
    }else{
        console.log('Note doesn\'t exist');
    }
    saveNotes(noteToKeep)    
      
}

const saveNotes = (notes)=>{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes =  () => {
    try{
     const dataBuffer = fs.readFileSync('notes.json')
     return JSON.parse(dataBuffer.toString())
    } catch(e){
        return []
    }
}

const listNotes = ()=> {
    const notes =loadNotes()
    notes.forEach(note => {
        console.log(note.title);
    });
}
module.exports={
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes: listNotes
}