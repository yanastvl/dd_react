import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import DeleteButton from "../delete-button/delete-button";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";


const Board = ({events}) => {
  const { pathname } = useLocation();
  const [step, setStep] = React.useState(2);

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 1) : setStep(events.length);
  }

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && <Sorting/>}
        <div className="board__events">
          {events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
        </div>
        <button className="load-more" type="button" onClick={handleLoadMore}>Загрузить еще</button>
      {pathname === AppRoute.ARCHIVE && <DeleteButton/>}
    </section>
  );
};

export default Board;
