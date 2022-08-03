import React from 'react'
import './BingoNumbers.css'

interface BingoNumbersProps {
  numbersDrawn: Array<number>
  handleDrawNumber: () => void
}

function BingoNumbers({ numbersDrawn, handleDrawNumber }: BingoNumbersProps) {
  return (
    <div className="bingoNumbers">
      <button className="drawButton" onClick={() => handleDrawNumber()}>
        Get Next Number
      </button>
      <div>
        <div className="container">
          {numbersDrawn.map((number: number, index: number) => (
            <div key={index} className="numberDrawn">
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BingoNumbers
