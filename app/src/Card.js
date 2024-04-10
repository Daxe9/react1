import { useState } from "react";

function Card({nome}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Ciao sono {nome} e ho {count} anni</p>
            <button onClick={() => {
                setCount(count+1);
            }}>Clicca qui per la magia</button>
        </div>
    );

}

export default Card;