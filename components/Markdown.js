import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: (({ children, ...props }) => (
        <> 
          <br />
          <Typography variant='h3' gutterBottom {...props}><Link href={`#${props.id}`}>#</Link> {children}</Typography>
          <Divider />  
          <br />
        </>
      ))
    },
    h2: {
      component: (({ children, ...props }) => (
        <> 
          <br />
          <Typography variant='h4' gutterBottom {...props}><Link href={`#${props.id}`}>#</Link> {children}</Typography>
          <Divider />  
          <br />
        </>
      ))
    },
    h3: {
      component: (({ children , ...props }) => (
        <> 
          <Typography variant='h5' gutterBottom {...props}><Link href={`#${props.id}`}>#</Link> {children}</Typography>
          <br />
        </>
      ))
    },
    h4: {
      component: (({ children , ...props }) => (
        <> 
          <Typography variant='subtitle1' gutterBottom {...props}><Link href={`#${props.id}`}>#</Link> {children}</Typography>
          <Divider /> 
          <br /> 
        </>
      ))
    },
    p: { component: Typography, props: { paragraph: true, gutterBottom: true } },
    a: { component: Link },
    li: { 
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem} key={props.id}>
          <Typography component="span" {...props} />
        </li>
      )),
    }
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}