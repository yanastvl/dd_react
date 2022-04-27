import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { useLocation } from "react-router-dom";
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Main = observer(() => {
  const { pathname } = useLocation();
  const { notArchiveData } = events;

  return(
    <>
      <Header path={pathname}/>
      <section className="main__wrapper">
        <Filter path={pathname}/>
        <Board events={notArchiveData}/>
      </section>
      </>
    )
})

export default Main;
