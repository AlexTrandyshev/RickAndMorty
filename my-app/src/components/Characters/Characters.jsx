import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/selector/selectors";
import { loadCharacters } from "../../store/characters/thunks/load-characters";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { PaginationBasic } from "../PaginationBasic/PaginationBasic";
import styles from "./characters.module.css";

export const Characters = () => {
    const dispatch = useDispatch();
    const charList = useSelector(selectCharacters);
    const [numberPage, setNumberPage] = useState(1);

    useEffect(() => {
        dispatch(loadCharacters(numberPage));
    }, [numberPage]);

    return <main className={styles.main}>
                <div className={styles.layout}>
                    {charList ? charList.map(char => <CharacterCard key={char.id} img={char.img} name={char.name}/>) : null}
                </div>

                <PaginationBasic countPages={42} onClick={(number) => setNumberPage(number)}/>
            </main>
}