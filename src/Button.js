



function Button(props){
    return(
        <button
        onClick={props.onClick}
        style={{backgroundColor:`${props.color}`}}
        >{props.btn}</button>
    )
}


export default Button;