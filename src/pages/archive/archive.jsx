import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { AppRoute } from '../../const';

const Archive = () => {
  const states = {hasSorting: false, hasLoadMore: true};
  return (
    <>
      <Header mode={AppRoute.ARCHIVE}/>
      <section className="main__wrapper">
        <Board states={states} />
      </section>
    </>
  )
}

export default Archive;