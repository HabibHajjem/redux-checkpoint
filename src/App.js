import './App.css'; 
import AddTask from './Components/AddTask';
import Filter from './Components/Filter';
import ListTask from './Components/ListTask';
import { FILTER } from './Redux/types';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', gap:'50px'}}>
    <AddTask/>
    <Filter/>
    </div>
    <ListTask/>
    </div>
  );
}

export default App;
