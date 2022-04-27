import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { useLocation } from "react-router-dom";
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Archive = observer(() => {
  const { archiveData } = events;
  const { pathname } = useLocation();

  return (
    <>
      <Header path={pathname}/>
      <section className="main__wrapper">
        <Board events={archiveData}/>
      </section>
    </>
  )
})

export default Archive;
