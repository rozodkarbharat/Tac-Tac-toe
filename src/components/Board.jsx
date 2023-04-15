import React, { useState } from 'react'
import Square from './square'
import "../CSS/Board.css"
const Board = () => {
    const [numvalue,setnumvalue]=useState(new Array(9).fill(null))
    const [turn, setturn] = useState('X')
    const [player1, setplayer1] = useState("Player 1")
    const [player2, setplayer2] = useState("Player 2")
    const check=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
  const handleclick=(index)=>{
    if (!numvalue[index]){ 
      numvalue[index]=turn  
      setnumvalue(numvalue)
     }
    var isWinner=checkWinner()
    console.log(isWinner,'winner')
      setturn(turn==="X"?"O":"X")
      if (isWinner){
        let message= turn==="X"? 1:2 
        alert("Winner is player " +message)
        setnumvalue(new Array(9).fill(null))
      }
     
      if (!numvalue.includes(null)){
        alert("Match is draw")
        setnumvalue(new Array(9).fill(null))
      }

  }
  const checkWinner=()=>{
    let iswinner=false
    for(var a=0;a<check.length;a++){
      var [x,y,z]=check[a]
      console.log(numvalue[x],numvalue[y],numvalue[z])
      if (numvalue[x] && numvalue[x]===numvalue[y] && numvalue[x]===numvalue[z]){
        iswinner=true
        break
      }
    }
    if (iswinner){
      return true
    }
    return false
  }

  return (
    <div className='box'>
      <div className='grid'>
        {
            numvalue.map((elem,index)=>{
                return (
                    <Square onClick={handleclick} value={index} elem={elem}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default Board
