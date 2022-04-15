import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { AppRoute } from "../../const";

const Form = () => {
    return(
        <>
      <Header mode={AppRoute.EVENT}/>
      <section className="main__wrapper">
        <Filter/>
        <Event/>
      </section>
      </>
    )
}

export default Form;