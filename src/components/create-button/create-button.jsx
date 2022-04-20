import React from "react";
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

const createButton = () => {
    return (
      <Link to={AppRoute.ADD} button name="control" className="btn-add">Создать</Link>
    )
}
export default createButton;
