import React from 'react'
import './BingoResults.css'

interface BingoResultsProps {
  playerWon: boolean
}

function BingoResults({ playerWon }: BingoResultsProps) {
  return (
    <div className="results">
      {playerWon ? <div>BINGO, You Won</div> : <div>No BINGO Yet</div>}
    </div>
  )
}

export default BingoResults
