import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { AppRoute } from '../../const';
import { useParams } from 'react-router-dom';

const Archive = (props) => {
  const {id} = useParams();
  const render = () =>{
    return id ? `ID есть - ${id}` : 'НЕТ';
  }

  const states = {hasSorting: false, hasLoadMore: true};
  return (
    <>
      <Header mode={states}/>
      <section className="main__wrapper">
        <div>{render()}</div>
        <Board states={states} />
      </section>
    </>
  )
}

export default Archive;
