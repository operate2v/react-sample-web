import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import sample from '../../assets/images/kiksample.png';
import Avatars from './avatar';

const styles = {
  title: {
    fontWeight: '900',
    color: '#444',
    fontSize: 41,
    width: 460,
  },
  body: {
    flex: 1,
    color: '#444',
    width: 460,
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 1.4,
    marginTop: 42,
  },
};

class HomeDescription extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          alignContents: 'center',
          paddingLeft: window.innerWidth * (1 / 6),
          height: window.innerHeight,
          alignItems: 'flex-start',
          backgroundColor: 'white',
        }}
      >
        <div style={{ paddingTop: 210, display: 'flex' }}>
          <div>
            <img src={sample} style={{ width: 300, height: 440 }} alt="siavln" />
          </div>

          <div style={{marginLeft: 140, marginTop: 80}}>
            <Typography button variant="display1" gutterBottom className={classes.title}>
              A simple interface that lets you do the talking.
            </Typography>
            <Typography button variant="body2" className={classes.body}>
              Our new design is easy on the eyes, and even easier to use. We're here to help you
              communicate and be yourself!
            </Typography>
            <Avatars/>
          </div>
        </div>
      </div>
    );
  }
}

HomeDescription.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeDescription);
