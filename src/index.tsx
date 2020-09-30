import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/room';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import AssetHelper from './helpers/avatar.helper';

function Chat() {
  return <Room />;
}
ReactDOM.render(
  <Chat />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
