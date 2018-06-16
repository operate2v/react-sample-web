import React from 'react';
import Typography from '@material-ui/core/Typography';
import IsScale from '../../utils/is-scale';

const style = {
  width: IsScale ? 520 : 200,
  marginBottom: IsScale ? 10 : 4,
};

const DownloadDescription = () => (
  <div style={style}>
    <Typography variant={IsScale ? 'display2' : 'body1'}>
      Connecting the world <br />through chat.
    </Typography>
    <Typography style={{ marginTop: IsScale ? 30 : 8 }} variant={IsScale ? 'headline' : 'caption'}>
      Enter your phone number to download the app.
    </Typography>
  </div>
);

export default DownloadDescription;
