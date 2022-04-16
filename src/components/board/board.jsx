import React from "react";
import Card from "../card/card"
import Sorting from "../sorting/sorting"
import LoadMore from "../load-more/load-more"
import Event from "../event/event";
import {AppRoute} from "../../const";

const Board = ({mode}) => {
  return (
    <section className="board">
      {mode === AppRoute.MAIN && <Sorting/>}
      {mode !== AppRoute.EVENT && (
        <div className="board__events">
          <Card/>
        </div>
      )}
      {mode === AppRoute.EVENT && <Event/>}
      {mode !== AppRoute.EVENT && <LoadMore/>}
    </section>
  )
}

export default Board;
