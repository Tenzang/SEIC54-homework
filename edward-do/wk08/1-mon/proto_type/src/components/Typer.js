import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Typer = () => {

    const [quote, setQuote] = useState('');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [style, setStyle] = useState('');
    const [time, setTime] = useState(0);
    const [chars, setChars] = useState(0); // sets total amount of characters a user has typed
    const [wpm, setWpm] = useState(0); // wpm = (chars / 5) * 60 / time
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        } else if (!running) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);


    const calculateWPM = () => {
        setWpm(Math.floor((chars / 5) * 60 / time) || 0);
    }

    const fetchQuote = () => {
        axios("https://api.kanye.rest/").then((response) => {
            setQuote(response.data.quote.toLowerCase());
            console.log(quote);
        });
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        setRunning(false);
        if (input === quote) {
            setScore(score + quote.length)
        } else {
            setScore(score)
        }
        setInput('');
        fetchQuote();
    }

    const _handleInput = (e) => {
        // console.log(e.target.value);
        setRunning(true);
        setInput(e.target.value);
        const quoteByChar = quote.split('').slice(0, input.length).join('')
        if (input === quoteByChar) {
            setResult('nice')
            setStyle('green')
        } else {
            setResult('nahh')
            setStyle('red')
        }
        setChars(chars + 1);
        calculateWPM();
    }

    const reset = () => {
        fetchQuote();
        setInput('');
        setResult('');
        setScore(0);
        setStyle('');
        setTime(0);
        setChars(0);
        setWpm(0);
        setRunning(false);
    }

    useEffect(fetchQuote, []);

    return (
        <div>
            <h3 className={ style }>{quote}</h3>
            <div className="stats">
                <h3>time (seconds): { time }</h3>
                <h3>wpm: { wpm }</h3>
                <h3>score: { score }</h3>
            </div>
            {/* <button onClick={ fetchQuote }>agane</button> */}
            <form onSubmit={ _handleSubmit }>
                <input type="text" required autoFocus onChange={ _handleInput } value={ input } />
                {/* <input type="submit" value="go" /> */}
            </form>
            <h3>{ result }</h3>
            <button onClick={ reset }>reset</button>
        </div>
    );
};

export default Typer;