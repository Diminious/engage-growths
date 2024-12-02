import React, { useEffect, useState } from "react";
import "./styles/GrowthTable.css";

const GrowthTable = ({
    character,
    gameClass,
    expertise,
    starsphere,
    setStarsphere,
    setExpertise
}) => {
    const [starsphereToggled, setStarsphereToggled] = useState(starsphere)
    const [expertiseToggled, setExpertiseToggled] = useState(expertise)

    useEffect(() => {
        setExpertiseToggled(expertise)
    }, [expertise])

    const toggleStarsphere = () => {
		setStarsphere(!starsphere);
        setStarsphereToggled(!starsphereToggled)
	}

	const toggleExpertise = () => {
		setExpertise(!expertise)
        setExpertiseToggled(!expertiseToggled)
	}

    const starsphereGrowths = starsphere? 15 : 0;

    const expertiseGrowths = {
        hp: expertise? gameClass.hp : 0,
        str: expertise? gameClass.str : 0,
        mag: expertise? gameClass.mag : 0,
        dex: expertise? gameClass.dex : 0,
        spd: expertise? gameClass.spd : 0,
        def: expertise? gameClass.def : 0,
        res: expertise? gameClass.res : 0,
        lck: expertise? gameClass.lck : 0,
        bld: expertise? gameClass.bld : 0,
    }

    const growthTotals = {
        hp: character.hp + gameClass.hp + starsphereGrowths + expertiseGrowths.hp,
        str: character.str + gameClass.str + starsphereGrowths + expertiseGrowths.str,
        mag: character.mag + gameClass.mag + starsphereGrowths + expertiseGrowths.mag,
        dex: character.dex + gameClass.dex + starsphereGrowths + expertiseGrowths.dex,
        spd: character.spd + gameClass.spd + starsphereGrowths + expertiseGrowths.spd,
        def: character.def + gameClass.def + starsphereGrowths + expertiseGrowths.def,
        res: character.res + gameClass.res + starsphereGrowths + expertiseGrowths.res,
        lck: character.lck + gameClass.lck + starsphereGrowths + expertiseGrowths.lck,
        bld: character.bld + gameClass.bld + starsphereGrowths + expertiseGrowths.bld,
    }

    return (
            <table>
                <thead>
                    <tr className="smallCharacterRow">
                        <th colSpan={2}>Character</th>
                        <th colSpan={2}>{character.name}</th>
                        <th colSpan={3}>{gameClass.name}</th>
                    </tr>
                    <tr>
                        <th className="characterCol">Character</th>
                        <th>Stats</th>
                        <th>Base</th>
                        <th>Class</th>
                        <th className={starsphereToggled? "toggle toggleOn":"toggle"} onClick={() => toggleStarsphere()}><button>Star<span className="fullText">sphere</span></button></th>
                        <th className={expertiseToggled? "toggle toggleOn":"toggle"} onClick={() => toggleExpertise()}><button>Exp<span className="fullText">ertise</span></button></th>
                        <th>TOTAL</th>
                        <th><span className="fullText">Stat </span>Caps</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hpRow">
                        <th rowSpan={5} className="characterCol characterDetail"><span className="characterSpan">{character.name}</span></th>
                        <th className="statName">HP</th>
                        <td>{character.hp}</td>
                        <td>{gameClass.hp}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.hp}</td>
                        <td className="totals">{growthTotals.hp}</td>
                        <td className="last">{gameClass.hpCap}</td>
                    </tr>
                    <tr className="strRow">
                        <th className="statName">STR</th>
                        <td>{character.str}</td>
                        <td>{gameClass.str}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.str}</td>
                        <td className="totals">{growthTotals.str}</td>
                        <td className="last">{character.strCap + gameClass.strCap}</td>
                    </tr>
                    <tr className="magRow">
                        <th className="statName">MAG</th>
                        <td>{character.mag}</td>
                        <td>{gameClass.mag}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.mag}</td>
                        <td className="totals">{growthTotals.mag}</td>
                        <td className="last">{character.magCap + gameClass.magCap}</td>
                    </tr>
                    <tr className="dexRow">
                        <th className="statName">DEX</th>
                        <td>{character.dex}</td>
                        <td>{gameClass.dex}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.dex}</td>
                        <td className="totals">{growthTotals.dex}</td>
                        <td className="last">{character.dexCap + gameClass.dexCap}</td>
                    </tr>
                    <tr className="spdRow">
                        <th className="statName">SPD</th>
                        <td>{character.spd}</td>
                        <td>{gameClass.spd}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.spd}</td>
                        <td className="totals">{growthTotals.spd}</td>
                        <td className="last">{character.spdCap + gameClass.spdCap}</td>
                    </tr>
                    <tr className="defRow">
                        <th rowSpan={4} className="characterCol characterDetail"><span className="classSpan">{gameClass.name}</span></th>
                        <th className="statName">DEF</th>
                        <td>{character.def}</td>
                        <td>{gameClass.def}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.def}</td>
                        <td className="totals">{growthTotals.def}</td>
                        <td className="last">{character.defCap + gameClass.defCap}</td>
                    </tr>
                    <tr className="resRow">
                        <th className="statName">RES</th>
                        <td>{character.res}</td>
                        <td>{gameClass.res}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.res}</td>
                        <td className="totals">{growthTotals.res}</td>
                        <td className="last">{character.resCap + gameClass.resCap}</td>
                    </tr>
                    <tr className="lckRow">
                        <th className="statName">LCK</th>
                        <td>{character.lck}</td>
                        <td>{gameClass.lck}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.lck}</td>
                        <td className="totals">{growthTotals.lck}</td>
                        <td className="last">{character.lckCap + gameClass.lckCap}</td>
                    </tr>
                    <tr className="bldRow">
                        <th className="statName">BLD</th>
                        <td>{character.bld}</td>
                        <td>{gameClass.bld}</td>
                        <td>{starsphereGrowths}</td>
                        <td>{expertiseGrowths.bld}</td>
                        <td className="totals">{growthTotals.bld}</td>
                        <td className="last">{gameClass.bldCap}</td>
                    </tr>
                </tbody>
                
            </table>
    )
}

export default GrowthTable;