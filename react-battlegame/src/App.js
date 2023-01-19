import Button from "./Button"
import Border from "./Border"
import { useState } from "react"
import "./App.css"
import GameResult from "./GameResult"

function App (){

const [myHistory,setMyHistory]=useState([])
const [otherHistory,setOtherHistory]=useState([])
const [result,setResult]=useState('5판해서 총합이 큰 사람이 이기는 게임')


function random(n){
    return Math.ceil(Math.random()*n)
}

const ateam=myHistory.reduce((a,b)=>a+b,0)
const bteam=otherHistory.reduce((c,d)=>c+d,0)


function startClick(){
    const newNumber=random(9)
    const newNumber2=random(9)
    setMyHistory([...myHistory,newNumber])
    setOtherHistory([...otherHistory,newNumber2])    
    
    if(myHistory.length>3 && otherHistory.length>3){

        if(ateam-bteam>0){
            setResult('A팀이 이겼습니다.')
        }
        // else if(ateam-bteam===0){
        //     setResult('서로 비겼습니다')
        // }
        else if(ateam-bteam<0){
            setResult('B팀이 이겼습니다.')
        }


        alert('결과를 확인하시겠습니까?')

    }


}


function resetClick(){
setMyHistory([])
setOtherHistory([])
}




    return(
        <div id="box">
            <GameResult
            result={result}
            />
            <div id="btn">
            <Button
            onClick={startClick}
            >start
            </Button>
            <Button
            onClick={resetClick}
            >reset
            </Button>
            </div>

        <div id="container">
        <Border
        name="A팀" 
        color="red"
        gameHistory={myHistory}
        />
        <Border
        name="B팀" 
        color="blue"
        gameHistory={otherHistory}
        />
        </div>
        </div>

        )
}



export default App;