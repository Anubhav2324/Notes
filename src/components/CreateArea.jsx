import React, {useState} from "react";

function CreateArea(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""});
   
    function handleChange(event){
        const {name, value} = event.target
        setNewNote((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleClick(event){
        newNote.title.length > 0 ? props.addNote(newNote): alert("Enter Title");
        setNewNote({title: "", content: ""});
        event.preventDefault();
    }

    function expand() {
      setIsExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input 
            name="title" 
            placeholder="Title" 
            onChange={handleChange} 
            value={newNote.title}
        />)}
        <textarea 
            name="content"
            onClick={expand} 
            placeholder="Take a note..." 
            rows={isExpanded? 3: 1}
            onChange={handleChange}
            value={newNote.content}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
