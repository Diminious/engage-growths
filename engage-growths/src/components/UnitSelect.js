import React, { useEffect } from "react";
import characters from "../json/Characters.json"
import classes from "../json/Classes.json"
import "./styles/UnitSelect.css"

const UnitSelect = ({
    setCharacter,
    setGameClass
}) => {

    useEffect(() => {
        setCharacter(characters[0])
        setGameClass(classes[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onCharacterChange = (e) => {
        if(e.target.value >= 0)
            setCharacter(characters[e.target.value])
    }

    const onClassChange = (e) => {
        if(e.target.value >= 0)
            setGameClass(classes[e.target.value])
    }

    return (
        <div className="unitSelect">
            <select defaultValue={0} onChange={onCharacterChange} >
                {characters.map((character, index) => {
                    return (
                        <option key={index} value={index}>{character.name}</option>
                    )
                })}
            </select>
            <select defaultValue={0} onChange={onClassChange}>
                {classes.map((gameClass, index) => {
                    return (
                        <option key={index} value={index}>{gameClass.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default UnitSelect;