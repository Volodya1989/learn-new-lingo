import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader';
import {
  StyledLink,
  StyledHeader,
  StyledList,
  StyledItem,
  Block,
  BlockRight,
  Logo,
  StyledLogin,
  StyledRegistration,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <Block>
          <StyledList>
            <StyledLink to="/" end>
              <img
                src={require('../../SVG/ukraine.svg').default}
                alt="Flag of Ukraine"
                width={28}
                height={28}
              />
              <Logo>LearnLingo</Logo>
            </StyledLink>
            <StyledItem>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </StyledItem>
            <StyledItem>
              <StyledLink to="/teachers" end>
                Teachers
              </StyledLink>
            </StyledItem>
          </StyledList>
        </Block>
        <BlockRight>
          <StyledList>
            <StyledItem>
              <StyledLink to="/login">
                <img
                  src={require('../../SVG/log-in-01.svg').default}
                  alt="Log in"
                />
                <StyledLogin>Log in</StyledLogin>
              </StyledLink>
            </StyledItem>
            <StyledItem>
              <StyledLink to="/registration">
                <StyledRegistration> Registration</StyledRegistration>
              </StyledLink>
            </StyledItem>
          </StyledList>
        </BlockRight>
      </StyledHeader>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
