import {useState, useEffect } from 'react';
import {StoreKey} from './ui/store-key';
import {ReadKey} from './ui/read-key';
import { Dialog } from './ui/dialog';
import { InputAutoFilter } from './ui/input-auto-filter';
import data from './test/data.json';



function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const footerModal = (
    <div className="flex justify-center mt-2">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => setShowDialogModal(false)}>
          Close
      </button>
    </div>
  )

  // API call to get the list of categories
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => {
        if (data.trivia_categories) {
            setCategories(data.trivia_categories);
        }
    })
    .catch(error => {
        console.log('Failed to retrieve categories: ' + error);
    });
  }, [])

  return (
    <div>
      
      <h1 className="text-3xl font-bold">EXERCISE #1</h1>
      <h2 className="text-2xl mb-4">Create a generic localStorage handler usable by React function component</h2>
      
      <div className='border border-gray-400 rounded p-2 m-2'>
        <h2>Component that set a value for 'mykey' in localStorage using the API</h2>
        <StoreKey name='myKey' />
      </div>

      <div className='border border-gray-400 rounded p-2 m-2'>
        <h2>Component that receive any update of 'mykey' and display it instantly</h2>
        <ReadKey name='myKey' />
      </div>

      <h1 className="text-3xl font-bold mt-4">EXERCISE #2</h1>
      <h2 className="text-2xl mb-4">Create a generic dialog component that can be customized with any content</h2>

      <button className='rounded-2xl bg-gray-600 mx-2 px-4 text-white not-disabled:cursor-pointer disabled:bg-gray-400'
        onClick={() => setShowDialog(!showDialog)}>
        Show regular dialog
      </button>
      <button className='rounded-2xl bg-gray-600 mx-2 px-4 text-white not-disabled:cursor-pointer disabled:bg-gray-400'
        onClick={() => setShowDialogModal(true)}>
        Show modal dialog
      </button>
      
      <Dialog modal={false} isOpen={showDialog} header={<strong>Regular Dialog Header</strong>} footer={<i>Dialog Footer</i>} onClose={() => setShowDialog(false)}>
          <ReadKey name='myKey' />
      </Dialog>
      
      <Dialog modal={true} isOpen={showDialogModal} header={<strong>Modal Dialog Header</strong>} footer={footerModal} onClose={() => setShowDialogModal(false)}>
          <StoreKey name='myKey' />
      </Dialog>

      <h1 className="text-3xl font-bold mt-4">EXERCISE #3</h1>
      <h2 className="text-2xl mb-4">Create a generic auto-filter dropdown component to filter any kind of data</h2>

      <div>
        <InputAutoFilter data={data} property='name' valueChange={setName} value={name}/>
        { name.length > 0 && <p>Selected name: <strong>{name}</strong></p> }
      </div>

      <div>
        <InputAutoFilter data={data} property='phone' valueChange={setPhone} value={phone}/>
        { phone.length > 0 && <p>Selected phone: <strong>{phone}</strong></p> }
      </div>

      <div>
        <InputAutoFilter data={categories} property='name' valueChange={setCategory} value={category}/>
        { category.length > 0 && <p>Selected category: <strong>{category}</strong></p> }
      </div>

    </div>
  )
}

export default App
