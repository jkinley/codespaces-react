import './index.css';
import Autogrid from './components/autogrid';
import Card from './components/card';

function App() {
  return (
    <div className="App">

      {/* You can pass Autogrid a gap value and an ideal width for your grid items. If you don't pass any arguments, the values default to 1rem and 250px respectfully.*/}

      <Autogrid gap="1rem" width="150px">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Autogrid>
    </div>
  );
}

export default App;
