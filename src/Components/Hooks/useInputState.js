import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value , setvalue] = useState(defaultValue)

    const handleChange = e => {
        setvalue(e.target.value)

    }

    return [value , handleChange]
}

export default useInputState;