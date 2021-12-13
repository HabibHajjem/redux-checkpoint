import './App.css'; 
import AddTask from './Components/AddTask';
import Filter from './Components/Filter';
import ListTask from './Components/ListTask';


function App() {
  return (
    <div className="App">
      <div className="content">
        <div style={{paddingTop:'20px'}}>
          <AddTask/>
          <Filter/>
        </div>
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
