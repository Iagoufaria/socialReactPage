import React from "react";

export default function Section1(props) {
  return (
    <section className={props.className}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <ul className="games-list">
          {/* Renderiza os children aqui */}
          {props.children}
        </ul>
      </div>
    </section>
  );
}
