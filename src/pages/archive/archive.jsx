import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = (props) => {
  const path = props.match.path;

  return (
    <>
      <Header path={path}/>
      <section className="main__wrapper">
        <Board/>
      </section>
    </>
  )
}

export default Archive;
