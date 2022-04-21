import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { useLocation } from "react-router-dom";

const Main = ({events}) => {
  const { pathname } = useLocation();

  return(
    <>
      <Header path={pathname}/>
      <section className="main__wrapper">
        <Filter path={pathname}/>
        <Board events={events}/>
      </section>
      </>
    )
}

export default Main;
