
import React, { useEffect, useState } from "react";
import './App.css';


function Counter() {
    console.log('Counter called')
    const [counter, setCounter] = useState(0)
    const [newCounter, setNewCounter] = useState(0)


  

    //case 3 when you are using a return function 
    //so useeffect is called before the component is about to delete
    useEffect(function () {
        console.log('useEffect called')

        return function () {
            console.log('useEffect called before deletion')
        }
    }, [])




    return (
        <div>
            <div className="container">
                <h1>Counter {counter} </h1>
                <button className="inbutton" onClick={() => setCounter(counter + 1)} >Increment</button>
                <button className="decbutton" onClick={() => setCounter(counter - 1)}>Decrement</button>


            </div>
            <div><h2>Done by Md Shahid ALi Reg: 12105824</h2></div>
            {/* <div>
                <h1>NewCounter {newCounter} </h1>
                <button onClick={() => setNewCounter(newCounter + 1)} >Increase newCounter</button>

            </div> */}
        </div>

    )


}

export default Counter