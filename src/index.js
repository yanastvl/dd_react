import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import { events } from './mocks';

ReactDOM.render(<App events={events}/>, document.querySelector('#root'))



