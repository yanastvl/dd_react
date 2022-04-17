import React from "react";
import Card from "../card/card"
import Sorting from "../sorting/sorting"
import LoadMore from "../load-more/load-more"
import {AppRoute} from "../../const";

const Board = ({path}) => {
  return (
    <section className="board">
      {path === AppRoute.MAIN && <Sorting/>}
        <div className="board__events">
          <Card/>
        </div>
      <LoadMore/>
    </section>
  )
}

export default Board;
