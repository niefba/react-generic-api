import { useStore } from '../lib/useStore';

/*
* Component that receive any update of 'mykey' and display it instantly
*/
export function ReadKey({name}: {name: string}) {
    const [myKey] = useStore(name);
    return (
      <>
        <div className='m-4'>
          <span className='rounded-l-lg border-2 border-sky-700 bg-sky-700 text-white p-1'>
            {name}
          </span>
          <span className='rounded-r-lg border-2 border-l-0 text-sky-700 p-1'>
            {myKey}
          </span>
        </div>
      </>
    );
  }
  