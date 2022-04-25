import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { AppRoute } from "../../const";
import { useParams } from 'react-router-dom';
import { events } from "../../store/index";
import { observer } from 'mobx-react-lite';

const Form = observer(() => {
  const { id } = useParams();
  const event = events.data.find(event => event._id === id);

  return(
      <>
    <Header path={AppRoute.EVENT}/>
    <section className="main__wrapper">
      <Filter />
      <Event event={event}/>
    </section>
    </>
  )
})

export default Form;
