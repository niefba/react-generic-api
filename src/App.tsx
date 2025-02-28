
import './App.css';
import { useState } from 'react';
import { useStore } from './lib/useStore';

function App() {

  return (
    <>
      <h1>Different generic APIs and components</h1>
      <FirstComponent />
      <SecondComponent />
    </>
  )
}

function FirstComponent() {
  const [myKey, setMyKey] = useStore('myKey');
  const [value, setValue] = useState(myKey == null ? '' : myKey);
  return (
    <>
      <h2>Component that set a value in localStorage using the API</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setMyKey(value)}>
        Save
      </button>
    </>
  );
}

function SecondComponent() {
  const [myKey] = useStore('myKey');
  return (
    <>
      <h2>Component that receive any update and display it instantly</h2>
      <span>{myKey}</span>
    </>
  );
}


export default App
