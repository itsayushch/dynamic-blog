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
  '@global': {
    'h3 .MuiTypography-root span, h4 .MuiTypography-root span, h5 .MuiTypography-root span': {
      visibility: 'hidden'
    },
    'h3:hover .MuiTypography-root span, h4:hover .MuiTypography-root span, h5:hover .MuiTypography-root span, h3 .MuiTypography-root:focus span, h4 .MuiTypography-root:focus span, h5 .MuiTypography-root:focus span': {
      visibility: 'visible'
    }
  }
});

const options = {
  overrides: {
    h1: {
      component: (({ children, ...props }) => (
        <>
          <br />
          <Typography variant='h3' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <Divider />
        </>
      ))
    },
    h2: {
      component: (({ children, ...props }) => (
        <>
          <br />
          <Typography variant='h4' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <Divider />
        </>
      ))
    },
    h3: {
      component: (({ children, ...props }) => (
        <>
          <Typography variant='h5' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <br />
        </>
      ))
    },
    h4: {
      component: (({ children, ...props }) => (
        <>
          <Typography variant='subtitle1' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <Divider />
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