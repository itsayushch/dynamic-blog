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
    'h3 .header-link-class span, h4 .header-link-class span, h5 .header-link-class span': {
      visibility: 'hidden'
    },
    'h3:hover .header-link-class span, h4:hover .header-link-class span, h5:hover .header-link-class span, h3 .header-link-class:focus span, h4 .header-link-class:focus span, h5 .header-link-class:focus span': {
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
          <Typography variant='h3' className='header-link-class' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <Divider />
        </>
      ))
    },
    h2: {
      component: (({ children, ...props }) => (
        <>
          <br />
          <Typography variant='h4' className='header-link-class' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <Divider />
        </>
      ))
    },
    h3: {
      component: (({ children, ...props }) => (
        <>
          <Typography variant='h5' className='header-link-class' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
          <br />
        </>
      ))
    },
    h4: {
      component: (({ children, ...props }) => (
        <>
          <Typography variant='subtitle1' className='header-link-class' gutterBottom {...props}>{children} <span><Link href={`#${props.id}`}>#</Link></span></Typography>
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