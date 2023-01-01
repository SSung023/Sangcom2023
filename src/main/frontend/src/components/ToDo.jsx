import React, {Component, useState} from "react";
import TODOS from '../mock/todo.json';
import CardButton from "./CardButton";
import styles from './Dailycard.module.css';

export default function ToDo(props){
        const [todos, setTodos] = useState(Object.values(TODOS));
        return(
                <div className={styles.todo}>
                    <div className={styles.todaytitle}>{props.title}</div>
                        <div className={`{${styles.cardcontent} ${styles.todo}}`}>
                            {todos[0].map((todo)=>(
                                <ul className={styles.Listul}>
                                    <li>{`${todo.title}`}</li>
                                </ul>
                            ))}
                        </div>
                    <CardButton title = {props.button}/>
                </div>
        );
}
