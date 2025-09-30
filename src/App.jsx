import React, {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import Alert from './component/Alert';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);


    const showAlert = (message, type) => {
        setAlert({msg: message, type: type})
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    


    // whether dark mode is enabled or not
    const togglemode = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success")

        } else {
            setMode('dark')
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success")
        }
    }
    return (
        <>
            <Navbar name="worknape"
                mode={mode}
                togglemode={togglemode}/>

            <Alert alert={alert}
                />

            <div className="container my-3">
                <TextForm heading="This is props heading"
                    mode={mode}  alert={alert} showAlert={showAlert}/> {/* <About mode={mode} /> */} </div>
        </>
    );
}

export default App;
