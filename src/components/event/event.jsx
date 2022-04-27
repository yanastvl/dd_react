import React from "react";
import { useState } from "react";
import moment from "moment";

const Event = ({event}) => {

  const [form, setForm] = useState({
    theme: event? event.theme : '',
    comment: event? event.comment : '',
    date: event? moment(event.date).format('yyyy-MM-DDThh:mm') : '',
  })

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

    return(
        <section className="board">
          <form className="board__form" onSubmit={handleSubmit}>
            <h2 className="board__title">
              {event ? 'Редактирование' : 'Добавление'} события
            </h2>
            <fieldset className="board__field board__field--theme">
              <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
              <textarea
                type="text"
                className="board__input board__input--theme"
                onChange={handleFieldChange}
                name="theme"
                value={form.theme}
                required
              ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
              <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
              <textarea
                type="text"
                className="board__input board__input--comment"
                onChange={handleFieldChange}
                name="comment"
                value={form.comment}
                required
              ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
              <label htmlFor="date" className="board__label board__label--date">Дата:</label>
              <input
                type="datetime-local"
                className="board__input board__input--date"
                onChange={handleFieldChange}
                name="date"
                value={form.date}
              />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">
                {event ? 'Сохранить' : 'Добавить'}
              </button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
          </form>
        </section>
    )
}

export default Event;