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
        <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#001220"></rect><path d="M0 427L21.5 426.8C43 426.7 86 426.3 128.8 428.5C171.7 430.7 214.3 435.3 257.2 434.5C300 433.7 343 427.3 385.8 421.5C428.7 415.7 471.3 410.3 514.2 408.5C557 406.7 600 408.3 642.8 415.8C685.7 423.3 728.3 436.7 771.2 429.3C814 422 857 394 878.5 380L900 366L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#c62368"></path><path d="M0 447L21.5 446.2C43 445.3 86 443.7 128.8 446C171.7 448.3 214.3 454.7 257.2 465.3C300 476 343 491 385.8 499.2C428.7 507.3 471.3 508.7 514.2 499.5C557 490.3 600 470.7 642.8 456.7C685.7 442.7 728.3 434.3 771.2 439C814 443.7 857 461.3 878.5 470.2L900 479L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#e34c67"></path><path d="M0 528L21.5 526.5C43 525 86 522 128.8 520.8C171.7 519.7 214.3 520.3 257.2 516.5C300 512.7 343 504.3 385.8 509.7C428.7 515 471.3 534 514.2 540C557 546 600 539 642.8 532C685.7 525 728.3 518 771.2 522.3C814 526.7 857 542.3 878.5 550.2L900 558L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#fa7268"></path></svg>
      </Layout>
    </>
  );
}
