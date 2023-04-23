import React, {useState} from 'react';
import '../contact.css';
import Content from './contactContent';
import { Button } from '@material-ui/core';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Projects(props)
{
    const [content] = useState([
        {
          id: 1,
          title: 'Call',
          icon: <CallIcon/>,
          n: 'tel: 9080896606',
        },
        {
          id: 2,
          title: 'WhatsApp',
          icon: <WhatsAppIcon /> ,
          n: "https://wa.me/9080896606",
        },
        {
          id: 3,
          title: 'Mail',
          icon: <EmailIcon /> ,
          n: 'mailto:vmadhesh422@mail.com',
        },
      ]);
    
    return(
        <div id='contact'>
            <h1>Contacts</h1>
            <div id='display' style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
              {content.map((content) => (
              <div key={content.id} style={{ margin: 10 }}>
              <Content content={content} />
              </div>
              ))}
            </div>
            <Button size="small" color="primary"><a href="/request"> Request for Project</a> </Button>
        </div>
    );
}

export default Projects;