import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import Layout from './common/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <Layout>
            <Router />
            <GlobalStyle />
        </Layout>
    </ThemeProvider>,
);
