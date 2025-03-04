import { useState } from 'react';
import { useStore } from '../lib/useStore';

/*
* Component that set a value for 'myKey' in localStorage using the API
*/
export function StoreKey({name}: {name: string}) {
    const [myKey, setMyKey] = useStore(name);
    const [value, setValue] = useState('');
    return (
      <>
        <label className='p-2'>{name}</label>
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
      </>
    );
}