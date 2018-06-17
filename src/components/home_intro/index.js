import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DownloadButton from '../../components/download_button';
import { colors } from '../../constants';

const styles = {
  title: {
    fontWeight: '900',
    color: 'white',
    fontSize: 41,
  },
  body: {
    flex: 1,
    color: 'white',
    width: 460,
    fontWeight: '300',
    fontSize: 21,
    lineHeight: 1.4,
    marginTop: 42,
  },
};

class HomeIntro extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          alignContents: 'center',
          paddingLeft: window.innerWidth * (1 / 6),
          height: window.innerHeight - 100,
          alignItems: 'flex-start',
          backgroundColor: colors.mainColor,
        }}
      >
        <div style={{ paddingTop: 80 }}>
          <Typography button variant="display1" gutterBottom className={classes.title}>
            Be with your people.
          </Typography>
          <Typography button variant="body2" className={classes.body}>
            Stay in touch with all of your friends on Kik, no matter who you are or what device
            you're using. Chat one-on-one, with your whole group, or with a bot!
          </Typography>
          <DownloadButton style={{ width: 170, height: 60, marginTop: 31 }}>
            Download Now
          </DownloadButton>
        </div>
      </div>
    );
  }
}

HomeIntro.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeIntro);
