// Menu.js
import React from "react";
import { usePracticeContext } from "./PracticeContext";

export default function Menu() {
  const { practiceSelected, setPracticeSelected } = usePracticeContext();

  const onClickOptionHandler = (event) => {
    event.preventDefault();
    setPracticeSelected(event.target.hash);
  };

  return (
    <div>
      <h1>Curso React - IZO - Práctica</h1>
      <div className="menu">
        <a href="#practica_1" onClick={onClickOptionHandler}>
          Práctica 1
        </a>
        <a href="#practica_2" onClick={onClickOptionHandler}>
          Práctica 2
        </a>
        <a href="#practica_3" onClick={onClickOptionHandler}>
          Práctica 3
        </a>
        <a href="#practica_4" onClick={onClickOptionHandler}>
          Práctica 4
        </a>
      </div>
    </div>
  );
}
