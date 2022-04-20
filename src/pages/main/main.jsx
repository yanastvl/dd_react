import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";

const Main = (props) => {
  const path = props.match.path;

  return(
    <>
      <Header path={path}/>
      <section className="main__wrapper">
        <Filter path={path}/>
        <Board path={path}/>
      </section>
      </>
    )
}

export default Main;
