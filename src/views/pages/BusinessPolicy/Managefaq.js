import React from 'react'
import { Container } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Link } from 'react-router-dom';
const Managefaq = () => {
  return (
   <>
   <div>
   <div style={{border:'1px solid rgb(201, 198, 198)',padding:'20px',height:"30rem",overflow:'auto'}}>
      <Editor
     style={{height:'25rem',overflow:'auto',color:'black'}}
      placeholder='Type Here…. '
        
      />
     
    </div>
    <Container>
    <div  style={{position:'absolute',bottom:'0',right:'0'}}>
    
    <Link to={'/Listfaq'}>
    <button className='cssforfaqbuttonsetting'>Publish</button>
    </Link>
   
    </div>
    </Container>
   </div>
   </>
  )
}

export default Managefaq