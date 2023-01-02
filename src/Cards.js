import React from "react";
import styles from "./Cards.module.css";

export const Cards = (props) => {
  return (
    <container>
      <h1>{props.name}</h1>
      <img className={styles.img} src={props.url} />
    </container>
  );
};
