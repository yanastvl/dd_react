import React from "react";

const Card = () => {
return(
    <article className="card">
    <div className="card__form">
      <div className="card__inner">
        <div className="card__control">
          <button type="button" className="card__btn card__btn--edit">
            Редактировать
          </button>
          <button type="button" className="card__btn card__btn--archive">
            В архив
          </button>
          <button
            type="button"
            className="card__btn card__btn--favorites"
          >
            В избранное
          </button>
          <button
            type="button"
            className="card__btn card__btn--remove"
          >
            Удалить
          </button>
        </div>

        <div className="card__textarea-wrap">
          <p className="card__text--theme">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
          <p className="card__text--comment">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="card__settings">
          <span className="card__date">23 Сентября</span>
        </div>
      </div>
    </div>
  </article>
    )
}

export default Card;