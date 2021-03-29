import React, { useContext } from 'react';
import clsx from 'clsx';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ThemeContext } from '../context/theme';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    '&:hover': {
      cursor: 'pointer',
    }
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1000
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 1001
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function PersistentDrawerLeft() {
  const { mode, setTheme } = useContext(ThemeContext);

  const classes = useStyles();
  const theme = useTheme();
  const user = useUser();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="relative"
        color="primary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={() => Router.push('/')} button>
            Ayush CH
          </Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={setTheme}
          >
            {process.browser && (theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />)}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem onClick={() => Router.push('/article')} button>
            <ListItemIcon><ImportContactsIcon /></ListItemIcon>
            <ListItemText primary={'Articles'} />
          </ListItem>
          {!user ? (
            <ListItem onClick={() => Router.push('/login')} button>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary={'Login'} />
            </ListItem>
          ) : (
            <>
              <ListItem button onClick={() => Router.push('/api/logout')}>
                <ListItemIcon><ExitToAppOutlinedIcon /></ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItem>
              <ListItem button onClick={() => Router.push('/dashboard')}>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary={'DashBoard'} />
              </ListItem>
            </>
          )
          }
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => window.open('https://ayushkr.me/')}>
            <ListItemIcon> <OpenInNewIcon /> </ListItemIcon>
            <ListItemText primary={'Portfolio'} />
          </ListItem>
          <ListItem button onClick={() => window.open('https://ayushkr.me/discord')}>
            <ListItemIcon> <OpenInNewIcon /> </ListItemIcon>
            <ListItemText primary={'Discord'} />
          </ListItem>
          <ListItem button onClick={() => window.open('https://ayushkr.me/github')}>
            <ListItemIcon> <GitHubIcon /> </ListItemIcon>
            <ListItemText primary={'GitHub'} />
          </ListItem>
          <ListItem button onClick={() => window.open('https://ayushkr.me/facebook')}>
            <ListItemIcon> <FacebookIcon /> </ListItemIcon>
            <ListItemText primary={'Facebook'} />
          </ListItem>
          <ListItem button onClick={() => window.open('https://ayushkr.me/instagram')}>
            <ListItemIcon> <InstagramIcon /> </ListItemIcon>
            <ListItemText primary={'Instagram'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

async function getStaticProps() {
  
}
