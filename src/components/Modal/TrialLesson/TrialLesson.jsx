import { Description, Text, Heading } from './TrialLesson.styled';
export const TrialLesson = ({ details: { surname, name } }) => {
  // const { showBridge, description, brand, model } = details;
  return (
    <>
      {/* <TrialLessonStyled
        src={
          showBridge
            ? require('../../../images/bridge.jpg')
            : require('../../../images/placeholderCar.jpg')
        }
        onError={e =>
          (e.target.src = require('../../../images/placeholderCar.jpg'))
        }
        alt="large image"
        width="600"
      /> */}
      <Description>
        <Heading>{`Book Trial Lesson `}</Heading>
        <Text>Your Teacher: {`${surname} ${name}`} </Text>
        <Text>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </Text>
      </Description>
    </>
  );
};
export default TrialLesson;
