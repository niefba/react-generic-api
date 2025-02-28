import './App.css';
import {useState} from 'react';
import {FirstComponent} from './ui/first-component';
import {SecondComponent} from './ui/second-component';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './ui/dialog';


function App() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold m-2">Different generic APIs and components</h1>
      <FirstComponent />
      <SecondComponent />
      <button onClick={() => setShowDialog(true)}>
        Show modal without a portal
      </button>
      
      <Dialog modal={true} showDialog={showDialog}>
        <DialogHeader>
          <h2 className="text-xl font-bold">Dialog Header</h2>
        </DialogHeader>
        <DialogBody>
          <p>Dialog Body</p>
        </DialogBody>
        <DialogFooter onClose={() => setShowDialog(false)}>
          <p>Dialog Footer</p>
        </DialogFooter>
      </Dialog>
      
    </>
  )
}

export default App
