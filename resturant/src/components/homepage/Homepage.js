import React, { useState } from 'react'
import './Homepage.css'
import Menu from './MenuAPI'
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqList =
    [...new Set(Menu.map((curElem) => {
        return curElem.category;
    })
    ),
        "All",
    ]

console.log(uniqList)


const Homepage = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqList);


    const filterItem = (category) => {
        if(category === "All")
        {
            setmenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setmenuData(updatedList)
    }

    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}
export default Homepage;