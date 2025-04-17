import "./style.css"

function InputText({value, onChange}) {

    function handleChange (e) {
        onChange(e.target.value)
    }

    return (
        <input 
            type="text"
            placeholder="task for today ?? "
            value={value}
            onChange={handleChange}>
        </input>
    )
}

export default InputText
