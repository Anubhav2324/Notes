import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

  const [noteList, setNoteList] = useState([]);

  function addNote(newNote){
    setNoteList((prevNotes)=>{
        return [...prevNotes, newNote];
    });
    console.log(newNote)
  }

  function deleteNote(id){
    setNoteList((prevNotes)=>{
      return prevNotes.filter((value,index)=>{
        return (index !==id)
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>

      {noteList.map((noteValue,index)=>(
        <Note 
          key={index}
          title={noteValue.title}
          content={noteValue.content}
          id={index}
          deleteNote={deleteNote}
        />
    ))}
      <Footer />
    </div>
  );
}

export default App;
