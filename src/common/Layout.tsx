import { TLayout } from '../types/common/common';
import { styled } from 'styled-components';

const Layout = ({ children }: TLayout) => {
    return <LayoutWrapStyle>{children}</LayoutWrapStyle>;
};

const LayoutWrapStyle = styled.div`
    margin: 0 auto;
    padding-bottom: 7vh;
    max-width: 430px;
    height: 100vh;
    background: ${({ theme }) => theme.color.background};
`;

export default Layout;
