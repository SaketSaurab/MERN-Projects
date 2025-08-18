import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState("");
  const[notes,setNotes]=useState([]);
  const addNote=()=>{
    if(!text.trim()) return;
    setNotes([...notes,{id:Date.now(),text}]);
    setText("");
  }

  const deleteNote=()=>{
    setNotes(notes.filter((note)=>note.id !==id));
  };


  return (
    <>
     <div className='main-div'>
     <div id='app-title'>Note Taking App</div>
     <textarea className='text-area' value={text} onChange={(e)=>{
      setText(e.target.value);
     }
     }

      placeholder='Write note ....'
     />
     <div className='button'>
      <button onClick={addNote}>Add</button>
      <button onClick={deleteNote}>Delete</button>

     {notes.map((note)=>(
      <div key={note.id}>
      <p>{note.text}</p>
      <button onClick={()=>deleteNote(note.id)}>Delete</button>
      </div>
     ))}


     </div>
     </div>
    </>
  )
}

export default App
