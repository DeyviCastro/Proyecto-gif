import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        //evitamos de que haya espacios vacios y que este vacio el input
        if(inputValue.trim().length <= 1) return


        //Se hace al llamado a un callback sobre al que se esta modificando
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory( inputValue.trim() )
        setInputValue("")
    }




    return (
        <>
            <form onSubmit={ onSubmit }>
                <input type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange} />

            </form>
        </>
    )
}
