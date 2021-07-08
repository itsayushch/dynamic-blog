import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1)
    }
});

const options = {
    overrides: {
        h1: {
            component: ({ children, ...props }) => (
                <>
                    <br />
                    <Typography variant="h3" {...props}>
                        <span className="subheading-anchor" id={props.id}></span>
                        <section>
                            {children}{' '}
                            <Link className="anchor-icon" href={`#${props.id}`} ariaHidden>
                                #
                            </Link>
                        </section>
                    </Typography>
                    <Divider />
                    <br />
                </>
            )
        },
        h2: {
            component: ({ children, ...props }) => (
                <>
                    <br />
                    <Typography variant="h4" {...props}>
                        <span className="subheading-anchor" id={props.id}></span>
                        <section>
                            {children}{' '}
                            <Link className="anchor-icon" href={`#${props.id}`} ariaHidden>
                                #
                            </Link>
                        </section>
                    </Typography>
                    <Divider />
                    <br />
                </>
            )
        },
        h3: {
            component: ({ children, ...props }) => (
                <>
                    <br />
                    <Typography style={{ textDecoration: 'underline' }} variant="h5" gutterBottom {...props}>
                        {children}
                    </Typography>
                </>
            )
        },
        h4: {
            component: ({ children, ...props }) => (
                <>
                    <br />
                    <Typography variant="subtitle1" gutterBottom {...props}>
                        {children}
                    </Typography>
                </>
            )
        },
        p: {
            component: Typography,
            props: { variant: 'subtitle1', gutterBottom: true, style: { paddingButtom: '1em' } }
        },
        a: { component: Link },
        li: {
            component: withStyles(styles)(({ classes, ...props }) => (
                <li className={classes.listItem} key={props.id}>
                    <Typography component="span" {...props} />
                </li>
            ))
        }
    }
};

export default function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}
