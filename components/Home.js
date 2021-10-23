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
        <svg width="1440" height="320" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 83.0638L34.4 82.7915C68.8 82.6553 137.6 82.1106 206.08 85.1064C274.72 88.1021 342.88 94.3659 411.52 93.2766C480 92.1872 548.8 83.4723 617.28 75.5745C685.92 67.6766 754.08 60.3234 822.72 57.8723C891.2 55.4213 960 57.6 1028.48 67.8127C1097.12 78.0255 1165.28 96.2723 1233.92 86.1957C1302.4 76.2553 1371.2 38.1277 1405.6 19.0638L1440 0V320H1405.6C1371.2 320 1302.4 320 1233.92 320C1165.28 320 1097.12 320 1028.48 320C960 320 891.2 320 822.72 320C754.08 320 685.92 320 617.28 320C548.8 320 480 320 411.52 320C342.88 320 274.72 320 206.08 320C137.6 320 68.8 320 34.4 320H0V83.0638Z" fill="#C62368" />
          <path d="M0 110.298L34.4 109.209C68.8 107.983 137.6 105.804 206.08 108.936C274.72 112.068 342.88 120.783 411.52 135.217C480 149.787 548.8 170.213 617.28 181.379C685.92 192.409 754.08 194.315 822.72 181.787C891.2 169.26 960 142.57 1028.48 123.506C1097.12 104.443 1165.28 93.0043 1233.92 99.4043C1302.4 105.804 1371.2 129.77 1405.6 141.889L1440 153.872V320H1405.6C1371.2 320 1302.4 320 1233.92 320C1165.28 320 1097.12 320 1028.48 320C960 320 891.2 320 822.72 320C754.08 320 685.92 320 617.28 320C548.8 320 480 320 411.52 320C342.88 320 274.72 320 206.08 320C137.6 320 68.8 320 34.4 320H0V110.298Z" fill="#E34C67" />
          <path d="M0 220.596L34.4 218.553C68.8 216.511 137.6 212.426 206.08 210.791C274.72 209.294 342.88 210.111 411.52 204.936C480 199.762 548.8 188.323 617.28 195.677C685.92 202.894 754.08 228.766 822.72 236.936C891.2 245.106 960 235.574 1028.48 226.043C1097.12 216.511 1165.28 206.979 1233.92 212.834C1302.4 218.826 1371.2 240.068 1405.6 250.826L1440 261.447V320H1405.6C1371.2 320 1302.4 320 1233.92 320C1165.28 320 1097.12 320 1028.48 320C960 320 891.2 320 822.72 320C754.08 320 685.92 320 617.28 320C548.8 320 480 320 411.52 320C342.88 320 274.72 320 206.08 320C137.6 320 68.8 320 34.4 320H0V220.596Z" fill="#FA7268" />
        </svg>
      </Layout>
    </>
  );
}
