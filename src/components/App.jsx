import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import About from "./About";



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
      <Router>
        <Routes>

          <Route exact path="/">
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
          </Route>

          <Route path="/about">
            <About />  
          </Route>

        </Routes>
      </Router>
    

      <Footer />
    </div>
  );
}

export default App;
