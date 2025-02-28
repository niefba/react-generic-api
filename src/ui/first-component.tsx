import { useState } from 'react';
import { useStore } from '../lib/useStore';

/*
* Component that set a value for 'myKey' in localStorage using the API
*/
export function FirstComponent() {
    const [myKey, setMyKey] = useStore('myKey');
    const [value, setValue] = useState('');
    return (
      <div className='border border-gray-400 rounded p-2 m-2'>
        <h2>Component that set a value for 'mykey' in localStorage using the API</h2>
        <label className='p-2'>myKey</label>
        <input
          className='rounded border border-gray-400 px-2'
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button className='rounded-2xl bg-gray-600 mx-2 px-4 text-white not-disabled:cursor-pointer disabled:bg-gray-400'
          disabled={value === myKey}
          onClick={() => {
            setMyKey(value)
            setValue('')
          }}>
          Apply
        </button>
      </div>
    );
}