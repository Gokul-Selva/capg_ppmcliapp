import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';

function App() {
  return (
   <Dashboard/>
   <div>
  <HeaderComponent/>
  <Dashboard/>
  </div>
  );
}

export default App;
