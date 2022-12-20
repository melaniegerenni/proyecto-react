import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const suma = () => {
        setCounter(counter + 1);
    }

    const resta = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    }

  return (
    <div className='divCounter'>
        <button onClick={resta} className="btnCounter">-</button>
        <p>{counter}</p>
        <button onClick={suma} className="btnCounter">+</button>
    </div>
  )
}

export default Counter