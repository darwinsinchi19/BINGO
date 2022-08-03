import React from 'react'

function BingoAlgoAnswer() {
  function checkForBingo(bingoCard: Array<any>, drawnNumbers: Array<number>) {
    let newBoard = []
    for (let i = 0, len = bingoCard.length; i < len; i++) {
      if (drawnNumbers.includes(bingoCard[i])) {
        newBoard.push({ numbers: bingoCard[i], isActive: true })
      } else if (bingoCard[i] === 'FREE') {
        newBoard.push({ numbers: bingoCard[i], isActive: true })
      } else {
        newBoard.push({ numbers: bingoCard[i], isActive: false })
      }
    }
    for (let i = 0; i < 5; i++) {
      if (
        newBoard[i].isActive &&
        newBoard[i + 5].isActive &&
        newBoard[i + 10].isActive &&
        newBoard[i + 15].isActive &&
        newBoard[i + 20].isActive
      ) {
        return true
      } else if (
        newBoard[i * 5].isActive &&
        newBoard[i * 5 + 1].isActive &&
        newBoard[i * 5 + 2].isActive &&
        newBoard[i * 5 + 3].isActive &&
        newBoard[i * 5 + 4].isActive
      ) {
        return true
      } else if (
        newBoard[0].isActive &&
        newBoard[6].isActive &&
        newBoard[12].isActive &&
        newBoard[18].isActive &&
        newBoard[24].isActive
      ) {
        return true
      } else if (
        newBoard[4].isActive &&
        newBoard[8].isActive &&
        newBoard[12].isActive &&
        newBoard[16].isActive &&
        newBoard[20].isActive
      ) {
        return true
      } else {
        return false
      }
    }

    return newBoard
  }

  console.log(
    checkForBingo(
      [
        8,
        29,
        35,
        54,
        65,
        13,
        24,
        44,
        48,
        67,
        9,
        21,
        'FREE',
        59,
        63,
        7,
        19,
        34,
        53,
        61,
        1,
        20,
        33,
        46,
        72,
      ],
      [1, 33, 53, 65, 29, 75],
    ),
  )

  // here are some samples

  // this should return true with diagonal + free
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [8, 24, 53, 72],
  )
  checkForBingo(
    [
      8,
      29,
      35,
      54,
      65,
      13,
      24,
      44,
      48,
      67,
      9,
      21,
      'FREE',
      59,
      63,
      7,
      19,
      34,
      53,
      61,
      1,
      20,
      33,
      46,
      72,
    ],
    [1, 33, 53, 65, 29, 75],
  )
  return <div></div>
}

export default BingoAlgoAnswer
