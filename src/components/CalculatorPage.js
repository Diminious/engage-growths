import React, {useState, useEffect} from "react";
import UnitSelect from "./UnitSelect";
import GrowthTable from "./GrowthTable";
import "./styles/CalculatorPage.css"
import CalcFooter from "./CalcFooter";

const CalculatorPage = () => {
    const [character, setCharacter] = useState("");
    const [gameClass, setGameClass] = useState("")
    const [expertise, setExpertise] = useState(false);
    const [starsphere, setStarsphere] = useState(false);

	useEffect(() => {
		if(character && gameClass){
			document.title = `${character.name} | ${gameClass.name}`
		} else {
			document.title = "Growths Calculator FE Engage"
		}
	}, [character, gameClass])

	const viewCharacter = (newCharacter) => {
		setExpertise(newCharacter.expertise)
		setCharacter(newCharacter)
	}

	const viewClass = (newClass) => {
		setGameClass(newClass)
	}

	
    
    return (
        <main>
            <UnitSelect setCharacter={viewCharacter} setGameClass={viewClass}/>
            <GrowthTable character={character} gameClass={gameClass} expertise={expertise} starsphere={starsphere} setStarsphere={setStarsphere} setExpertise={setExpertise} />
			<CalcFooter />
        </main>
    )
}

export default CalculatorPage;