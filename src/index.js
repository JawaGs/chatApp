import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ChatRoom from "./components/ChatRoom";

class App extends React.Component {
  render() {
    return <div >
      <nav className='navbar navbar-light bg-primary'>
        <a className='navbar-brand text-white'>Chat React</a>
      </nav>
      <div className='container p-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <ChatRoom />
          </div>
        </div>
      </div>
    </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);