// import { useEffect, useState } from 'react'
import './App.css'
// import LoadingSpinner from "./components/LoadingSpinner"
// import { useSpeechSynthesis } from 'react-speech-kit'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

import Chat from "./pages/Chat"
import Img from "./pages/Text_to_img"
import Img2img from './pages/Img_to_img';
import Students from "./pages/StudentsHome";
import AllStudents from "./pages/AllStudents";
import OneStudent from './pages/OneStudent';
import Options from './pages/TriOptions';
import IsicStudents from "./pages/IsicStudents";
import IiteStudents from './pages/IiteStudents';
import Recommendation from './pages/Recommendation';
function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/img" element={<Img />}/>
      <Route path="/img2img/:name" element={<Img2img/>}/>
      <Route path="/names" element={<Students />}/>
      <Route path="/all" element={<AllStudents />}/>
      <Route path="/one/:fname/:lname" element={<OneStudent />}/>
      <Route path="/options" element={<Options/>}/>
      <Route path="/isic" element={<IsicStudents/>}/>
      <Route path="/iite" element={<IiteStudents/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;