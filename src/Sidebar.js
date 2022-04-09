 import React from 'react'
 import {Button} from "@material-ui/core"
 import AddIcon from '@mui/icons-material/Add';
 import './css/sidebar.css'

 function Sidebar() {
   return (
     <div className='sidebar'>
       <Button startIcon={<AddIcon/>} className='compose_btn'>Compose</Button>
     </div>
   )
 }
 
 export default Sidebar;
 