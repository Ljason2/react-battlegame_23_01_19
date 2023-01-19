function GameResult(props){
    
    return(
        <p id="result"
        style={{backgroundColor:`${props.color}`}}
        >{props.result}</p>
    )
}


export default GameResult;