import { Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './Component/Layout';
const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Layout>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
