import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { useLocation } from "react-router-dom";

const Archive = ({events}) => {
  const { pathname } = useLocation();
  const archiveEvents = events.filter(x => x.archive);

  return (
    <>
      <Header path={pathname}/>
      <section className="main__wrapper">
        <Board events={archiveEvents}/>
      </section>
    </>
  )
}

export default Archive;
