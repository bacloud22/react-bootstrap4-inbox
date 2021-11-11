import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import Inbox from "./components/Inbox";
import HeaderHtml from "./components/templates/HeaderHtml";

const Inbox_ = React.lazy(() => import('./components/Inbox'));

class App extends Component{
  render() {
    return (
      <div>
        <HeaderHtml />
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Inbox_/>
          </Suspense>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
