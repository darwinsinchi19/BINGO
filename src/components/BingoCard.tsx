import React from 'react'
import './BingoCard.css'
import { BingoCardCell } from '../App'

interface BingoCardProps {
  bingoCardCell: any
}
function BingoCard({ bingoCardCell }: BingoCardProps) {
  return (
    <div>
      <div className="board">
        {bingoCardCell.map((slot: BingoCardCell, index: number) => (
          <div className="boardSlots" key={index}>
            <div className={slot.isActive ? 'active' : 'notActive'} key={index}>
              {slot.cellNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// className={slot.isActive ? 'active' : 'notActive'} key={index}

export default BingoCard
