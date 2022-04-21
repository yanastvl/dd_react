import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { AppRoute } from "../../const";
import { useParams } from 'react-router-dom';

const Form = ({events}) => {
  const { id } = useParams();
  const event = events.find(x => x._id === id);

  return(
      <>
    <Header path={AppRoute.EVENT}/>
    <section className="main__wrapper">
      <Filter />
      <Event event={event}/>
    </section>
    </>
  )
}

export default Form;
