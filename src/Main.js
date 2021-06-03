import {useState} from "react";

function Main(props) {

    const [counter, setCounter] = useState(0)

    function plus (){
        setCounter(counter+1)
    }


    function minus (){
        setCounter(counter-1)
    }


    function reset (){
        setCounter(0)
    }


    return (
        <div className="counter-and-buttons">
           <div className="counter">
               {counter}
           </div>
            <div className="buttons">
                <button className="button-1" onClick={plus}>Увеличить</button>
                <button className="button-2" onClick={minus}>Уменьшить</button>
                <button className="button-3" onClick={reset}>Сбросить</button>
            </div>
        </div>

    );
}

export default Main;