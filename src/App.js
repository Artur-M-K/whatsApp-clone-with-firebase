import SideBar from './SideBar';
import Chat from './Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <SideBar/>
        <Chat />
      </div>
    </div>
  );
}

export default App;
