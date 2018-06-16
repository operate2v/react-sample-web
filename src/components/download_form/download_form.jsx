import React from 'react';
import SendInput from '../send_input';
import DownloadButton from '../download_button';
import IsScale from '../../utils/is-scale';

const style = {
  display: 'flex',
};

const DownloadForm = () => (
  <div style={style}>
    <SendInput />
    <DownloadButton>
      <div
        style={{
          fontSize: IsScale ? 21 : 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: IsScale ? 100 : 35,
          height: IsScale ? 60 : 22,
        }}
      >
        Send
      </div>
    </DownloadButton>
  </div>
);

export default DownloadForm;
