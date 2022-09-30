
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';

import React, { useState } from 'react'

function App(){

  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = e => {
   setText(e.target.value)
  }

  const handleAdd = () => {
    if(text !== ''){
      const item = [...items, text];
      setItems(item);
    }
  }

  const handleDelete = id => {
    const olditems = [...items]
    const item = olditems.filter((elm, i)=>{
      return i !== id
    })
    setItems(item);
  }

    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto text-white shadow-lg p-3">
            <h2 className='text-center'>To-do List</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='enter activity' onChange={handleChange} value={text} />
              </div>
              <div className="col-2">
                <button style={{backgroundColor:'limegreen'}} className='btn px-3 fw-bold' onClick={handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5'>
                  {
                     items.map((item,index)=>{
                      return <Plan key={index} id={index} value={item} sendData={handleDelete}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default App
