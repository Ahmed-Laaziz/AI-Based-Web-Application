// import axios from "axios";
import React, { useEffect,useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";


import '../App.css'
import LoadingSpinner from "../components/LoadingSpinner"
import { useSpeechSynthesis } from 'react-speech-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function Chat() {
    
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [prevAnswer, setPrevAnswer] = useState('')
    const [loading, setLoading] = useState(true);
    const { speak } = useSpeechSynthesis()  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuestion(e.target.elements.question.value);
    }
  
    useEffect(() => {
      setLoading(true);
      const getAnswer = async () => {
        let response = await fetch(`http://127.0.0.1:5000/ask?q=${question}`)
        response = await response.json()
        setAnswer(response.answers)
        setPrevAnswer(prev => prev + '\n\n\r' + answer)
        setLoading(false);
      }
      question !== '' && getAnswer()
      setQuestion('');
    }, [question]);
  
    const handleOnClick = () => {
      speak({ text: answer })
    }
  return (
    <>
    <div className='container'>
    <pre className='answer-area'>{prevAnswer}<br />
      {loading && <LoadingSpinner />}
      {answer}
    </pre>
  </div>
  <form onSubmit={handleSubmit} className="footer">
    <input name="question" type="text" />
    <input type="submit" /><FontAwesomeIcon icon={faCoffee} />
    <input type="button" value={"listen"} onClick={() => { handleOnClick() }} />
  </form>
  </>
  )
}