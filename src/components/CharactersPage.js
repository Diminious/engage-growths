import React, {useEffect} from "react";
import characters from "../json/Characters.json"
import "./styles/ReferencesPage.css"
import { Link } from "react-router-dom";

const CharactersPage = () => {

    useEffect(() => {
        document.title = "FE Engage Character Growths";
    }, [])

    const headerRow = () => {
        return (
            <tr>
                <th>Character</th>
                <th>HP</th>
                <th>STR</th>
                <th>MAG</th>
                <th>DEX</th>
                <th>SPD</th>
                <th>DEF</th>
                <th>RES</th>
                <th>LCK</th>
                <th>BLD</th>
            </tr>
        )
    }
    return (
        <main className="referenceMain">
            <h2>Character Reference</h2>
            <table className="referenceList">
                <thead>
                    {headerRow()}
                </thead>
                <tbody>
                    {characters.map((character, index) => {
                        return (
                            <>
                                {index % 20 === 0 && index !== 0 ? headerRow(): ""}
                                <tr>
                                    <th>{character.name}</th>
                                    <td>{character.hp}</td>
                                    <td>{character.str}</td>
                                    <td>{character.mag}</td>
                                    <td>{character.lck}</td>
                                    <td>{character.dex}</td>
                                    <td>{character.spd}</td>
                                    <td>{character.def}</td>
                                    <td>{character.res}</td>
                                    <td>{character.bld}</td>
                                </tr>
                            </>
                            
                        )
                    })}
                </tbody>
            </table>
            <p>This page is for general referencing only. Go to <Link to="/calculator">Calculator</Link> for calculations.</p>
        </main>
    )
}

export default CharactersPage