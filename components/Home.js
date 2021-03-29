import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Layout from './Layout';
import Router from 'next/router';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    margin: 0,
    minHeight: '100vh',
    background: theme.palette.secondary.main,
    paddingBottom: 0,
    marginBottom: 0
  },
  heroTypo: {
    padding: theme.spacing(20, 5, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  svg: {
    padding: theme.spacing(0, 0, 0),
    margin: theme.spacing(0, 0, 0),
    width: '100%',
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Layout>
        <div>
          <div className={classes.heroTypo}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} className={classes.image}>
                <center>
                  <Image
                    src={'https://i.imgur.com/mZQma37.png'}
                    width={200}
                    height={200}
                  />
                </center>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                  Ayush CH
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph>
                  Hi, I am Ayush Chowdhury. This is my personal blog built with NEXT JS.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => Router.push('/article')}>
                  Explore Articles
              </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={theme.palette.primary.main} fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,117.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </Layout>
    </>
  );
}