import { useState } from "react"




export const  AddCategory = ({onNewCategory}) =>{


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value); //para poder escribir en un input un nuevo valor
    }


    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
       // setCategories(categories => [inputValue, ...categories]);
       onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="buscar gifts"
                value={inputValue}
                onChange={onInputChange}> 
            </input>

        </form>
     
    )
}