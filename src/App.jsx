import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateArea from './Components/CreateArea'
import Note from './Components/Note'



function App() {

  const [notes, setNotes] = useState([])
  
  function addNote (note) {
    setNotes(prevNotes => (
      [...prevNotes, note]
    ))


  }

  function deleteToDo (id) {
    setNotes(prevNotes => (
      prevNotes.filter((item, index) => index !== id)
    ))

  }

  useEffect(() => {
  console.log(notes);
  }, [notes]);




 
  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />

        {notes.map((note, index) => (
        <Note 
          id={index}
          key={index} 
          title={note.title} 
          content= {note.content}
          onDelete={deleteToDo}
           />
        ))}
        
        <Footer />
    </div>
    </>
  )
}

export default App
