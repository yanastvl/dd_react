import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { useParams } from 'react-router-dom';

const Form = (props) => {
  const {id} = useParams();
  const path = props.match.path;

  return(
      <>
    <Header path={path}/>
    <section className="main__wrapper">
      <Filter path={path}/>
      <Event id={id}/>
    </section>
    </>
  )
}

export default Form;
