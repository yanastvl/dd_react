import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";

const Main = ({mode}) => {
  return(
    <>
      <Header mode={mode}/>
      <section className="main__wrapper">
        <Filter mode={mode}/>
        <Board mode={mode}/>
      </section>
      </>
    )
}

export default Main;
