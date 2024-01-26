"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./pokemon.module.css";

function Pokemon() {
    const [poke, setPoke] = useState("/vercel.svg")
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [type, setType] = useState("")
    const [type1, setType1] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState(0)
    const [ability, setAbility] = useState("")
    const [ability1, setAbility1] = useState("")
    const [ability2, setAbility2] = useState("")
    const [hp, setHp] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [speed, setSpeed] = useState("")
    const [line, setLine] = useState('../icons/line.svg')
    const url = "https://pokeapi.co/api/v2/pokemon/95"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setName(data.name),
                    setId(data.id),
                    setPoke(data.sprites.front_default),
                    setType(data.types[0].type.name),
                    setType1(data.types[1].type.name),
                    setHeight(data.height),
                    setWeight(data.weight),
                    setAbility(data.abilities[0].ability.name),
                    setAbility1(data.abilities[1].ability.name),
                    setAbility2(data.abilities[2].ability.name),
                    setHp(data.stats[0].base_stat),
                    setAttack(data.stats[1].base_stat),
                    setDefense(data.stats[2].base_stat),
                    setSpeed(data.stats[5].base_stat)
            })
    }, [])

    return (
        
        <div className={style.box}>
            
            <h1 className={style.title}>My Pokemon</h1>
            <h1 className={style.name}>{name}</h1>
            <div className={style.id}>#0{id}</div>
            <div className={style.sprites}>
                <Image src={poke} width={325} height={325} />
                <div className={style.info}>
                    
                    <div className={style.aboutBox}>
                        <p className={style.descname} >About</p>

                    </div>
                    <div className={style.About}>
                        <div className={style.subtitle}>
                            <p className={style.desc}>Type</p>
                            <p className={style.desc}>Height</p>
                            <p className={style.desc}>Weight</p>
                            <p className={style.desc}>Abilities</p>
                        </div>
                        <div className={style.statsValue}>
                            <p className={style.descStats}>{type}, {type1}</p>
                            <p className={style.descStatsN}>{height/10} m</p>
                            <p className={style.descStatsN}>{weight/10} kg</p>
                            <p className={style.descStats}>{ability}, {ability1}, {ability2} </p>
                        </div>
                    </div>
                    <div className={style.aboutBox}>
                        <p className={style.descname} >Stats</p>
                    </div>
                    <div className={style.Stats}>
                        <div className={style.subtitle}>
                            <p className={style.desc}>HP</p>
                            <p className={style.desc}>Attack</p>
                            <p className={style.desc}>Defense</p>
                            <p className={style.desc}>Speed</p>
                        </div>
                        <div className={style.statsValue}>
                            <p className={style.descStats}>{hp} </p>
                            <p className={style.descStats}>{attack} </p>
                            <p className={style.descStats}>{defense} </p>
                            <p className={style.descStats}>{speed} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pokemon;