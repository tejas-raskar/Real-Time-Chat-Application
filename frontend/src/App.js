import { connect, sendMsg } from './api';
import './App.css';

function App() {
  connect();

  return (
    <div>
      <button onClick={send}>Send</button>
    </div>
  );
}

function send() {
  console.log("Hello!")
  sendMsg("Hello!")
}
export default App;
