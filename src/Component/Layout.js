import {
  makeStyles,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Avatar,
  Toolbar,
} from '@material-ui/core';
import { SubjectOutlined, AddCircleOutlineRounded } from '@material-ui/icons';
import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
const drawerWidth = 150;
const useStyles = makeStyles((theme) => {
  return {
    layout: { width: '100%', background: '#fefefe', padding: theme.spacing(3) },
    drawer: { width: drawerWidth },
    drawerPaper: { width: drawerWidth },
    root: { display: 'flex' },
    active: { background: '#f5f5f5' },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    toolbar: theme.mixins.toolbar,
    date: { flexGrow: 1 },
  };
});

const Layout = (props) => {
  const location = useLocation();
  const lists = [
    {
      text: 'Notes',
      path: '/',
      icon: <SubjectOutlined color="secondary" />,
    },
    {
      text: 'Create',
      path: '/create',
      icon: <AddCircleOutlineRounded color="secondary" />,
    },
  ];
  const classes = useStyles();
  return (
    <div className="flex md:gap-2 w-full overflow-hidden">
      <AppBar
        className={classes.appBar}
        elevation={0}
        position="fixed"
        color={'primary'}
      >
        <Toolbar>
          <Typography className={`${classes.date} `}>
            {/* npm install date-fns --save
             */}
            {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography variant="h6"> Adrain </Typography>
          <Avatar src="/download.jpg" className="ml-2"></Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={`text-gray-500 py-2 pl-1`}>
            Cat Notes
          </Typography>
        </div>
        <List>
          {lists.map((list) => {
            return (
              <Link to={list.path}>
                <ListItem
                  key={list.text}
                  button
                  className={
                    location.pathname === list.path ? classes.active : null
                  }
                >
                  <ListItemIcon>{list.icon}</ListItemIcon>
                  <ListItemText
                    primary={list.text}
                    className="text-gray-600"
                  ></ListItemText>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <div className={`${classes.layout} mt-1`}>
        <div className={classes.toolbar}> </div>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
