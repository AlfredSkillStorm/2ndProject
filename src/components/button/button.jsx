function Button(props){
    return <div>
        <button style={props.theStyle}>
            {props.text}
        </button>
    </div>
}

export default Button;