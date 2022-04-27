import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadMore from "../load-more/load-more";
import DeleteButton from "../delete-button/delete-button";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

const Board = ({events}) => {
  const { pathname } = useLocation();

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && <Sorting/>}
        <div className="board__events">
          {events.map(event => <Card {...event} key={event._id} />)}
        </div>
      <LoadMore/>
      {pathname === AppRoute.ARCHIVE && <DeleteButton/>}
    </section>
  );
};

export default Board;
