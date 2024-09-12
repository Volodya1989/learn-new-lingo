import { Link } from 'react-router-dom';
import {
  StyledMain,
  StyledDescription,
  StyledUnlocked,
  StyledLanguage,
  StyledText,
  StyledButton,
  StyledList,
  StyledLi,
  StyledSpan,
  StyledContainer,
} from './MainHome.styled';
const MainHome = () => {
  return (
    <StyledContainer>
      <StyledMain>
        <StyledDescription>
          <StyledUnlocked>
            Unlock your potential with the best &nbsp;
            <StyledLanguage> language</StyledLanguage> tutors
          </StyledUnlocked>
          <StyledText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </StyledText>
          <Link
            to="/teachers"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <StyledButton>Get Started</StyledButton>
          </Link>
        </StyledDescription>
        <div>
          <img
            src={require('../../SVG/block.svg').default}
            alt="Lady with computer"
          />
        </div>
      </StyledMain>
      <StyledList>
        <StyledLi>
          32,000 + <StyledSpan>Experienced tutors</StyledSpan>
        </StyledLi>
        <StyledLi>
          300,000 + <StyledSpan>5-star tutor reviews</StyledSpan>
        </StyledLi>{' '}
        <StyledLi>
          120 + <StyledSpan>Subjects taught</StyledSpan>
        </StyledLi>{' '}
        <StyledLi>
          200 + <StyledSpan>Tutor nationalities</StyledSpan>
        </StyledLi>
      </StyledList>
    </StyledContainer>
  );
};
export default MainHome;
