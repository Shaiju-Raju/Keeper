import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {

  const [note, setNote] = useState({
    title: "" ,
    content: ""
  })
const [isExpanded, setIsExpanded] = useState(false)

  function handleChange (event) {
    const {name, value} = event.target

    setNote (prevNote => ({
      ...prevNote,
      [name]: value
    }))
  }

  function handleClick (event) {
    setIsExpanded(true)
  }

  function submitForm (event) {
    event.preventDefault()
    props.onAdd(note)

    setNote({
      title: "",
      content: ""
    })
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
        <input
        onChange={handleChange} 
        name="title" 
        placeholder="Title"
        value={note.title} /> ): null
       }


        <textarea 
        onChange={handleChange} 
        onClick={handleClick}
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded ? "3" : "1"}
        value={note.content} />

        <Zoom in={isExpanded}>
        <Fab onClick={submitForm}><AddIcon /> </ Fab>
        </Zoom>
      </form>
    </div>
  );
}

