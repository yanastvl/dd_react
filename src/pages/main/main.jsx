import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Main = () => {
  const states = {hasSorting: true, hasLoadMore: true};
  return(
    <>
      <Header mode={AppRoute.MAIN}/>
      <section className="main__wrapper">
        <Filter/>
        <Board states={states}/>
      </section>
      </>
    )
}

export default Main;