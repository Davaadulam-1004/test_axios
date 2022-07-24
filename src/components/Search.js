import { useState } from "react"

export const Search = ({onChange}) => {

    const [value, setValue] = useState("");

    const onSearch = async (e) => {
          e.preventDefault();
          onChange(value);
    }
    return (
        <form onSubmit={onSearch}>
             <input
             type="text"
             placeholder = " enter city name"
             value = {value}
             onChange = {(e) => setValue(e.target.value)}
             />
             <button>button</button>
        </form>
    )
}