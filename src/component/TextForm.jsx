import React, { useState } from "react";

function TextForm(props) {
  const [text, settext] = useState("Enter text here");
  const handleclick = () => {
    let upper = text.toUpperCase();
    settext(upper);
    props.showAlert("converted to uppercase", "success");
  };
  const handlechange = (e) => {
    settext(e.target.value);
  };

  const handloonsecondclick = () => {
    let lower = text.toLowerCase();
    settext(lower);
    props.showAlert("converted to lowercase", "success");
  };

  const handleclear = () => {
    let clear = "";
    settext(clear);
    props.showAlert("Text cleared", "success")
  };
  const handspeak = () => {
    let speak = new SpeechSynthesisUtterance();
    speak.text = text;
    window.speechSynthesis.speak(speak);
    props.showAlert("Speaking", "success")
  };

  const handstop = () => {
    window.speechSynthesis.cancel();
    props.showAlert("Speaking stopped", "success")
  };
  return (
    <>
      <div className="cntainer">

        <h1 className="text-center"
           style={{
            color: props.mode === 'dark' ? 'white' : 'black'
           }}
        >{props.heading}</h1>

        <div className="mb-3">
          <textarea
          style={{
            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
            className="form-control "
            name="text"
            id="text"
            rows="10"
            value={text}
            onChange={handlechange}></textarea>
        </div>

       
        <button
          className="btn btn-primary"
          onClick={handleclick}
          disabled={text.length === 0}
          
          >
          Convert to uppercase
         
        </button>

        <button
          className="btn btn-primary mx-4"
          onClick={handloonsecondclick}
          disabled={text.length === 0}>
          Convert to lowercase
        </button>

        <button
          className="btn btn-primary mx-4"
          onClick={handleclear}
          disabled={text.length === 0}>
          Clear
        </button>

        <button
          className="btn btn-primary mx-4"
          onClick={handspeak}
          disabled={text.length === 0}>
          Speak
        </button>

        <button
          className="btn btn-primary mx-4"
          onClick={handstop}
          disabled={text.length === 0}>
          Stop-speak
        </button>
      </div>

      <div className="container my-3 "
      style={{
        // backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
      }}>
        <h2>your text summary</h2>
        <p>
          {" "}
          words = {text.split(" ").filter(function(element){return element.length!==0}).length} and character = {text.length}
        </p>
        <p>time to read = {0.008 * text.split(" ").filter(function(element){return element.length!==0}).length} minutes</p>

        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
