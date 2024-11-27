import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './List';
import Todoappp from './Todoappp';
import Websiteinfo from './shopping/Websiteinfo';
import Slider from './shopping/Slider';
import ModalLogin from './modal/ModalLogin';
import Mousehover from './moveelement/Mousehover';
import Textform from './Textform.jsx'
import Usestate from './Usestate.jsx'
import Propss from './Propss.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <List /> */}
    {/* <Todoappp /> */}
     <Websiteinfo />
    <Slider />
    {/* <ModalLogin /> */}
    {/* <Mousehover /> */}
    {/* <Propss name={"Dhaval"}/>
    <Usestate />
    <Textform heading={"Enter The Text Below"}/> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
