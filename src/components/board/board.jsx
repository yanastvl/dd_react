import React from "react";
import Card from "../card/card"
import Sorting from "../sorting/sorting"
import LoadMore from "../load-more/load-more"

const Board = (props) => {
    const hasSorting = props.states.hasSorting;
    const hasLoadMore = props.states.hasLoadMore;
    return(
    <section className="board">
        {hasSorting ? <Sorting /> : null}
        <div className="board__events">
            <Card />
            </div>
            {hasLoadMore ? <LoadMore /> : null}
            </section>
            )
        }

export default Board;