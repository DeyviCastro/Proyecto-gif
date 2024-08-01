import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch'])



    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>GiffApp</h1>

            {/* INPUT */}
            <AddCategory
                // setCategories = { setCategories } 
                onNewCategory={event => onAddCategory(event)}
            />


            {categories.map((item) => (
                <GifGrid key={item} category={item} />
            )
            )}


        </>
    )
}
