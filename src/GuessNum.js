import React, {useEffect, useState} from 'react';

const GuessNum = () => {
  const [number, setNumber] = useState(Math.round(Math.random() * 10))
  const [guessNumber, setGuessNumber] = useState("")
  const [attempt, setAttempt] = useState(3)
  const [message, setMessage] = useState("")
  const [score, setScore] = useState(0)

  const changeInput = (e) => {
    setGuessNumber(e.target.value)
  }

  const check = () => {
      if (attempt){
        setAttempt(attempt -1)
      }
  }

  useEffect(() => {
    if (number === +guessNumber) {
      setMessage('Вы угадали!')
      setScore(score + 1)
    }
    if (attempt === 0) {
      setMessage('Вы не угадали!')
    }
  },[attempt])

  const newGame = () => {
    setAttempt(3)
    setGuessNumber("")
    setMessage("")
    setNumber(Math.round(Math.random()* 10))
  }

  return (
    <div>
      <h1>Угадай число с 3-х попыток</h1>
      <form>
        <label htmlFor="number">Введите число </label>
        <input type="number" value={guessNumber} id={"number"} onChange={changeInput}/>
      </form>
      <div>
        <button onClick={check} disabled={!guessNumber}>Chek</button>
        <button onClick={newGame}>Restart</button>
        {
          message.length === 0 &&
          <div>
            <p>У вас осталось {attempt} {attempt === 1 ? 'попытка' : 'попытки'}</p>
          </div>
        }
        <div>
          <h2>{message}</h2>
          <h3>Ваш счет: {score}</h3>
        </div>
      </div>
    </div>
  );
};

export default GuessNum;
