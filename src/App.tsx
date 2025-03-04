import './App.css';
import {useState} from 'react';
import {FirstComponent} from './ui/first-component';
import {SecondComponent} from './ui/second-component';
import { Dialog } from './ui/dialog';
import { InputAutoFilter } from './ui/input-auto-filter';
import data from './test/data.json';



function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      
      <h1 className="text-3xl font-bold m-2">Different generic APIs and components</h1>
      
      <FirstComponent />
      <SecondComponent />

      <button className='rounded-2xl bg-gray-600 mx-2 px-4 text-white not-disabled:cursor-pointer disabled:bg-gray-400'
        onClick={() => setShowDialog(!showDialog)}>
        Show regular dialog
      </button>
      <button className='rounded-2xl bg-gray-600 mx-2 px-4 text-white not-disabled:cursor-pointer disabled:bg-gray-400'
        onClick={() => setShowDialogModal(true)}>
        Show modal dialog
      </button>
      
      <Dialog modal={false} isOpen={showDialog} header={<strong>Regular Dialog Header</strong>} footer={<i>Dialog Footer</i>} onClose={() => setShowDialog(false)}>
          <FirstComponent />
      </Dialog>
      
      <Dialog modal={true} isOpen={showDialogModal} header={<strong>Modal Dialog Header</strong>} footer={<i>Dialog Footer</i>} onClose={() => setShowDialogModal(false)}>
          <FirstComponent />
      </Dialog>

      <p>
        { name.length > 0 && <p>Selected name: <strong>{name}</strong></p> }
        <InputAutoFilter data={data} property='name' valueChange={setName} value={name}/>
      </p>

      <p>
        { phone.length > 0 && <p>Selected phone: <strong>{phone}</strong></p> }
        <InputAutoFilter data={data} property='phone' valueChange={setPhone} value={phone}/>
      </p>

    </div>
  )
}

export default App
