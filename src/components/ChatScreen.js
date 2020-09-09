import React from 'react';
import ChatNav from './ChatNav';
import './css/ChatScreen.css';

import Container from '@material-ui/core/Container';

export default function ChatWindow() {
   
   return (
       <Container maxWidth='sm' disableGutters>
         <ChatNav />
       </Container>
   );
}