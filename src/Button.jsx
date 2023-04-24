const Button = ({
    text,
    onClick,
    bgColor = "red",
    txtColor = "black"
}) => {
    return <button
        style={{
            backgroundColor: bgColor,
            color: txtColor
        }}

        onClick={onClick}>
        {text}
    </button>
}

export default Button;
