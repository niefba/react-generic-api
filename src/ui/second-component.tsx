import { useStore } from '../lib/useStore';

/*
* Component that receive any update of 'mykey' and display it instantly
*/
export function SecondComponent() {
    const [myKey] = useStore('myKey');
    return (
      <div className='border border-gray-400 rounded p-2 m-2'>
        <h2>Component that receive any update of 'mykey' and display it instantly</h2>
        <div className='m-4'>
          <span className='rounded-l-lg border-2 border-sky-700 bg-sky-700 text-white p-1'>
            myKey
          </span>
          <span className='rounded-r-lg border-2 border-l-0 text-sky-700 p-1'>
            {myKey}
          </span>
        </div>
      </div>
    );
  }
  