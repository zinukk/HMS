import LogoIcon from '../assets/icons/nav/icon-logo.webp';
import LogoText from '../assets/images/nav/image-logo.webp';
import { styled } from 'styled-components';

const TopNav = () => {
    return (
        <StTopNav>
            <StImgBox>
                <StLogoImg src={LogoIcon} alt="로고 이미지" />
                <StTextImg src={LogoText} alt="로고 텍스트" />
            </StImgBox>
        </StTopNav>
    );
};

const StTopNav = styled.nav`
    position: fixed;
    top: 0;
    left: 50%;
    right: 0;
    transform: translate(-50%, 0%);
    width: 430px;
    height: 8vh;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    z-index: 100;
`;

const StImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StLogoImg = styled.img`
    width: 26.75px;
    height: 31.25px;
`;

const StTextImg = styled.img`
    width: 240px;
    height: 21.75px;
`;

export default TopNav;
