import './App.css';
import React, { useState } from 'react';






const Calculator = () => {
    const [result, setresult] = useState("");

    const clickHandler = (event) => {
        setresult(result.concat(event.target.value))

    }
    const clear = () => {
        setresult("");
    }
    const del = () => {
        setresult(result.slice(0, -1));
    }
    const Calculate = () => {
        try {
            setresult(eval(result).toString());
        }
        catch (err) {
            setresult("Error")
        }
    }
    return (
        <>
            <div className='container'>
                <form>
                    <input type="text" id="text" placeholder="0" value={result} />
                </form>
                <div className='keypad'>


                    <input type="button" value="C" className="button" id='clear' onClick={clear} />
                    <input type="button" value="del" className="button" id='del' onClick={del} />
                    <input type="button" value="/" className="button" id='btn' onClick={clickHandler} />
                    <input type="button" value="7" className="button" onClick={clickHandler} />
                    <input type="button" value="8" className="button" onClick={clickHandler} />
                    <input type="button" value="9" className="button" onClick={clickHandler} />
                    <input type="button" value="*" className="button" id='btn' onClick={clickHandler} />
                    <input type="button" value="4" className="button" onClick={clickHandler} />
                    <input type="button" value="5" className="button" onClick={clickHandler} />
                    <input type="button" value="6" className="button" onClick={clickHandler} />
                    <input type="button" value="-" className="button" id='btn' onClick={clickHandler} />
                    <input type="button" value="1" className="button" onClick={clickHandler} />
                    <input type="button" value="2" className="button" onClick={clickHandler} />
                    <input type="button" value="3" className="button" onClick={clickHandler} />
                    <input type="button" value="+" className="button" id='btn' onClick={clickHandler} />
                    <input type="button" value="." className="button" onClick={clickHandler} />
                    <input type="button" value="0" className="button" onClick={clickHandler} />
                    <input type="button" value="=" className="button" id='equal' onClick={Calculate} />





                </div>
            </div>

        </>


    );
}
export default Calculator;
