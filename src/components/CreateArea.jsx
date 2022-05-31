import React, {useState} from "react";
import axios from "axios";

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
        const handleClick = async ()=>{
          console.log(newNote);
          const myData = {
            title: newNote.title, 
            content: newNote.content
          }
          const result = await fetch("http://localhost:3001/",{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
          })
          const resultJson = await result.json()
          console.log(resultJson);
    }
    

    // const handleClick = async (event)=>{
    //     event.preventDefault()
        
    //     try {
    //       console.log(newNote);
    //         await axios.post("/", {
    //            title:"newNote.title", 
    //             content:"newNote.content" })
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    function expand() {
      setIsExpanded(true)
    }

  return (
    <div>
      <form method="POST" className="create-note">
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
