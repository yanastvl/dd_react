import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";

const Form = ({mode}) => {
    return(
        <>
      <Header mode={mode}/>
      <section className="main__wrapper">
        <Filter mode={mode}/>
        <Event mode={mode}/>
      </section>
      </>
    )
}

export default Form;
