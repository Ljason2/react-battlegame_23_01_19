import Button from "./Button"
import Border from "./Border"
import { useState } from "react"
import "./App.css"
import GameResult from "./GameResult"
import { isDisabled } from "@testing-library/user-event/dist/utils"

function App (){
    <h1 id="minigame">&lt;미니게임&gt;</h1>
const [myHistory,setMyHistory]=useState([])
const [otherHistory,setOtherHistory]=useState([])
const [result,setResult]=useState('5판해서 총합이 큰 사람이 이기는 게임')
const [start,setStart]=useState('start')
const [count,setCount]=useState(1)
const [color,setColor]=useState("orange")
const [color2,setColor2]=useState("brown")
function random(n){
    return Math.ceil(Math.random()*n)
}


const ateam=myHistory.reduce((a,b)=>a+b,0)
const bteam=otherHistory.reduce((c,d)=>c+d,0)



function startClick(){
    setCount(count+1)

    if(count===5){
        setStart('결과보기')
        setColor('rgb(189, 169, 145)')
    }
    if(count===6){
        setColor2('rgb(189, 169, 145)')

    }

    const newNumber=random(9)
    const newNumber2=random(9)
    if(myHistory.length <6){
    setMyHistory([...myHistory,newNumber])
    setOtherHistory([...otherHistory,newNumber2])
    
    

    if(myHistory.length===5){
        setMyHistory([...myHistory])
    }
    if(otherHistory.length===5){
        setOtherHistory([...otherHistory])
    }


    if(myHistory.length===5 && ateam-bteam>0){
        setResult('A팀이 이겼습니다.')
    }
    else if(myHistory.length===5 && ateam-bteam===0){
        setResult('서로 비겼습니다.')
    }
    else if(myHistory.length===5 && ateam-bteam<0){
        setResult('B팀이 이겼습니다.')
    }

    }
    
}



function resetClick(){
setMyHistory([])
setOtherHistory([])
setResult('5판해서 총합이 큰 사람이 이기는 게임')
setStart('start')
setCount(1)
setColor('orange')
setColor2('brown')
}



    return(
        <>
        <h1 id="minigame">&lt;미니게임&gt;</h1>
        <div id="box">
            <GameResult
            result={result}
            color={color2}
            />
            <div id="btn">
            <Button 
            onClick={startClick}
            color={color}
            btn={start}
            />       
            <Button 
            onClick={resetClick}
            btn="reset"
            />
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
        </>
        )
}



export default App;


// length만 쓰면 구현을 할 수 없으므로 count라는 state를 만들어서
// 그걸 이용해 start가 결과보기로 변하게 만든 것이 신의한수였다.
// count를 만들어서 잘 이용하자.