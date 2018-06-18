import React from 'react';
import MessageView from './message_view';
import Avatar from './avatar';

const FloatingButton = () => (
  <div
    style={{
      position: 'fixed',
      bottom: 50,
      right: 50,
      display: 'flex',
    }}
  >
    <MessageView onClick={() => (window.location.href = 'https://www.naver.com')}>
      Got questions? Visit the Help Center.
    </MessageView>
    <Avatar />
  </div>
);

export default FloatingButton;
