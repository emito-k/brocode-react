
function Button () {
    const styles = {
        backgroundColor: "rgb(29, 94, 133)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
    };

    return (
        <button type="button" style={styles}>Click me</button>
    );
}

export default Button;