import React, { useEffect, useState } from 'react'

import './App.css'
import BingoNumbers from './components/BingoNumbers'
import BingoCard from './components/BingoCard'
import BingoResults from './components/BingoResults'

export interface BingoCardCell {
  cellNumber: number | string
  isActive: boolean
}

function App() {
  const numbers = 75
  const cardSlots = 25
  const free = 'FREE'
  const [bingoNumbersLeft, setBingoNumbersLeft] = useState<Array<number>>([])
  const [numbersDrawn, setNumbersDrawn] = useState<Array<number>>([])
  const [bingoCardCell, setBingoCardCell] = useState<Array<BingoCardCell>>([])
  const [shuffledCardNumber, setshuffledCardNumber] = useState<Array<number>>(
    [],
  )
  const [playerWon, setPlayerWon] = useState<boolean>(false)
  const [startGame, setStartGame] = useState<boolean>(false)

  useEffect(() => {
    for (let i = 1; i <= numbers; i++) {
      setBingoNumbersLeft((previous: Array<number>) => [...previous, i])
      setshuffledCardNumber((previous: Array<number>) => [...previous, i])
    }

    for (let i = 1; i <= cardSlots; i++) {
      let slot: any
      if (i === 13) {
        slot = { cellNumber: free, isActive: true }
      } else {
        slot = { cellNumber: '-', isActive: false }
      }
      setBingoCardCell((previous: Array<BingoCardCell>) => [...previous, slot])
    }
  }, [])

  const handleStartGame = () => {
    for (let i = 0; i < numbers; i++) {
      let randomNumber = Math.floor(Math.random() * (numbers - 1))
      let temp = shuffledCardNumber[randomNumber]
      shuffledCardNumber[randomNumber] = shuffledCardNumber[i]
      shuffledCardNumber[i] = temp
    }
    let newBingoCardCell = bingoCardCell.map(
      (obj: BingoCardCell, i: number) => {
        if (i === 12) {
          return { ...obj }
        } else {
          return {
            ...obj,
            cellNumber: shuffledCardNumber[i],
          }
        }
      },
    )

    setBingoCardCell(newBingoCardCell)
    setStartGame(true)
  }

  const handleDrawNumber = () => {
    let randomNumber = Math.floor(Math.random() * numbers + 1)
    if (randomNumber === 0) {
      handleDrawNumber()
    } else {
      if (numbersDrawn.includes(randomNumber)) {
        handleDrawNumber()
      } else {
        setNumbersDrawn((previous: Array<number>) => [
          ...previous,
          randomNumber,
        ])
        let newArray = bingoNumbersLeft.filter(
          (number: number) => number !== randomNumber,
        )

        setBingoNumbersLeft(newArray)
      }
      for (let key of bingoCardCell) {
        if (key.cellNumber === randomNumber) {
          key.isActive = true
        }
      }
      verifyWin()
    }
  }
  //function below will set playWon state to true if there is a BINGO match.
  const verifyWin = () => {
    for (let i = 0; i < 5; i++) {
      if (
        bingoCardCell[i].isActive &&
        bingoCardCell[i + 5].isActive &&
        bingoCardCell[i + 10].isActive &&
        bingoCardCell[i + 15].isActive &&
        bingoCardCell[i + 20].isActive
      ) {
        setPlayerWon(true)
      } else if (
        bingoCardCell[i * 5].isActive &&
        bingoCardCell[i * 5 + 1].isActive &&
        bingoCardCell[i * 5 + 2].isActive &&
        bingoCardCell[i * 5 + 3].isActive &&
        bingoCardCell[i * 5 + 4].isActive
      ) {
        setPlayerWon(true)
      } else if (
        bingoCardCell[0].isActive &&
        bingoCardCell[6].isActive &&
        bingoCardCell[12].isActive &&
        bingoCardCell[18].isActive &&
        bingoCardCell[24].isActive
      ) {
        setPlayerWon(true)
      } else if (
        bingoCardCell[4].isActive &&
        bingoCardCell[8].isActive &&
        bingoCardCell[12].isActive &&
        bingoCardCell[16].isActive &&
        bingoCardCell[20].isActive
      ) {
        setPlayerWon(true)
      }
    }
  }

  return (
    <div className="App">
      <div className="header">BINGO</div>
      <div className="layout">
        <BingoCard bingoCardCell={bingoCardCell} />
        {startGame ? (
          ''
        ) : (
          <button onClick={() => handleStartGame()} className="startGame">
            START GAME
          </button>
        )}

        {startGame ? (
          <BingoNumbers
            numbersDrawn={numbersDrawn}
            handleDrawNumber={handleDrawNumber}
          />
        ) : (
          ''
        )}
      </div>
      {startGame ? <BingoResults playerWon={playerWon} /> : ''}
    </div>
  )
}

export default App
