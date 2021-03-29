import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
      padding: theme.spacing(4, 4, 4),
    }
  }));
  

export default function SubHeader({ title, description }) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <Typography component="h1" variant="h2" gutterBottom align='center'>
                    {title}
                </Typography>

                <Typography variant="subtitle1" gutterBottom align='center'>
                    {description}
                </Typography>
            </div>

            <Divider />
        </>
    )
}