import { useState } from "react"

export default function Lottery(){
    let [ticket, setTicket] = useState(0);
    let [haswon, setHasWon] = useState(false);

    let UpdateTicket=()=>{
        let newTicket = Math.floor(Math.random() * 999) + 1;
        console.log(newTicket)
        setTicket(newTicket);
        let sum=0;
        let n = newTicket;
        while (n !== 0) {
            sum += n % 10;
            n = Math.floor(n / 10); 
        }
        sum===15?setHasWon(true):setHasWon(false)
    }
    

    return(<div>
        <h1>Lottery</h1>
        <p>Rule: if sum of digits in the ticket adds up to 15, you win!</p>
        <h4>Lottery Ticket={ticket}</h4>
        <button onClick={UpdateTicket}>Get New Ticket</button>
        <h3>{haswon && "Congratulations, you won! "}</h3>

    </div>)
}