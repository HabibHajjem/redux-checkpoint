import { Modal} from 'react-bootstrap';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { edit } from '../Redux/actions';

function Task({el}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false)
    const [description, setDescription] = useState(el.description)
    
    const handleSave=()=>{
        dispatch(edit({id:el.id,description:description,isDone:isDone}));
        setShow(false);
    }


    return (
        <div >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div>
                <label>description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} ></input>
                </div>
                <div>
                    <label>isDone</label>
                    <input type="checkbox" onChange={(e)=>setIsDone(e.target.checked)}  ></input>
                </div>
            </form>
            </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close </button>
          <button  onClick={handleSave}> Save Changes </button>
        </Modal.Footer>
      </Modal>
    

             <h1>Description : <span style={{fontWeight:'normal'}}>{el.description}</span></h1>
             <h1>State : <span style={{fontWeight:'normal'}}>{el.isDone?"Done":"Not Done"}</span></h1>
             <button variant="primary" onClick={handleShow}>
        Edit
      </button>
        </div>
    )
}

export default Task
