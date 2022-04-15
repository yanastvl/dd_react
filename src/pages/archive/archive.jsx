import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = ({mode}) => {
  return (
    <>
      <Header mode={mode}/>
      <section className="main__wrapper">
        <Board mode={mode} />
      </section>
    </>
  )
}

export default Archive;
