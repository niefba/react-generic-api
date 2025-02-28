import { useStore } from '../lib/useStore';

export function SecondComponent() {
    const [myKey] = useStore('myKey');
    return (
      <div className='border border-gray-400 rounded p-2 m-2'>
        <h2>Component that receive any update of 'mykey' and display it instantly</h2>
        <span className=' text-sky-700 font-bold p-2 m-2'>{myKey}</span>
      </div>
    );
  }
  