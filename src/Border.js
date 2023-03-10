import Dics from "./Dics"


function Border({name,color,gameHistory}){

   const num=gameHistory[gameHistory.length-1]
    const sum=gameHistory.reduce((e,f)=>e+f,0)




    return(
        <>
        <div>        
        <figure>
        <Dics 
        color={color}
        num={num}
        />
        <figcaption>
            <dl>
                <dt>총합</dt>
                <dd>{sum}</dd>
                <dt>기록</dt>
                <dd>{gameHistory.join('/')}</dd>
            </dl>
        </figcaption>
        </figure>
        <h1>{name}</h1>
        </div>
        </>
    )
}

export default Border;