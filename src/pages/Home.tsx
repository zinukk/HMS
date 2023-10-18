import React from 'react';
import { styled } from 'styled-components';

const Home = () => {
    return <StMain>홈</StMain>;
};

const StMain = styled.div`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.gray600};
`;

export default Home;
