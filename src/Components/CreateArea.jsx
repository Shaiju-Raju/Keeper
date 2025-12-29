import { useState, useEffect } from "react";

export default function CreateArea(props) {

  const [note, setNote] = useState({
    title: "" ,
    content: ""
  })

  function handleChange (event) {
    const {name, value} = event.target

    setNote (prevNote => ({
      ...prevNote,
      [name]: value
    }))
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
      <form>
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title"
        value={note.title} />

        <textarea 
        onChange={handleChange} 
        name="content" 
        placeholder="Take a note..." 
        rows="3"
        value={note.content} />

        <button type="submit" onClick={submitForm}>Add</button>
      </form>
    </div>
  );
}

