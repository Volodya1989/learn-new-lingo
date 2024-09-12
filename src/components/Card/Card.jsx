import { useState } from 'react';

import {
  CardWrapper,
  StyledImg,
  StyledIsActive,
  ImgWrapper,
  StyledFirstSection,
  StyledBook,
  StyledLessons,
  StyledFirstSection2,
  StyledPipe,
  StyledPrice,
  StyledSubTitle,
  StyledFirstName,
  StyledDescription,
  StyledDescMain,
  StyledReadMore,
  StyledLevel,
  StyledLevelEl,
  MainButton,
  Comments,
  CommentsRating,
  Heart,
} from './Card.styled';
const Card = ({
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  name,
  rating,
  price_per_hour,
  reviews,
  surname,
  favorites,
  id,
  onClick,
  onFavoriteChange,
}) => {
  console.log('card', surname);
  const [isFavorite, setIsFavorite] = useState(favorites);
  const [isReadMore, setIsReadMore] = useState(true);

  const onHandleFavorite = e => {
    setIsFavorite(!isFavorite);
    onFavoriteChange(e, id, isFavorite);
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <CardWrapper>
      <ImgWrapper>
        <StyledIsActive></StyledIsActive>
        <StyledImg src={avatar_url} alt={name} />
      </ImgWrapper>
      <div>
        <StyledFirstSection>
          <StyledSubTitle>
            Languages <br />
            <StyledFirstName>
              {name} {surname}
            </StyledFirstName>
          </StyledSubTitle>
          <StyledFirstSection2>
            <StyledBook>
              <img
                src={require('../../SVG/book-open.svg').default}
                alt="Book"
              />
              <StyledLessons> Lessons online </StyledLessons>
            </StyledBook>
            <StyledPipe />
            <div>Lessons Done: {lessons_done}</div>
            <StyledPipe />
            <StyledBook>
              <img src={require('../../SVG/star.svg').default} alt="Star" />
              <span>Rating: {rating}</span>
            </StyledBook>
            <StyledPipe />
            <div>
              Price / 1 hour: <StyledPrice>{price_per_hour}$</StyledPrice>
            </div>
          </StyledFirstSection2>
          <Heart onClick={() => onHandleFavorite()}>
            <img
              src={
                isFavorite
                  ? require('../../SVG/hover.svg').default
                  : require('../../SVG/heart.svg').default
              }
              alt="Heart"
            />
          </Heart>
        </StyledFirstSection>

        <div>
          <StyledDescMain>
            <StyledDescription>Speaks:</StyledDescription>{' '}
            {languages.map(el => el).join(', ')}
          </StyledDescMain>
          <StyledDescMain>
            <StyledDescription>Lesson Info:</StyledDescription> {lesson_info}
          </StyledDescMain>
          <StyledDescMain>
            <StyledDescription>Conditions:</StyledDescription>
            {conditions
              .map(el => el)
              .join('')
              .replace('.', '. ')}
          </StyledDescMain>
        </div>

        {isReadMore ? (
          ''
        ) : (
          <div onClick={() => toggleReadMore()}>
            <StyledDescMain>{experience}</StyledDescMain>
            {reviews ? <h4>Comments</h4> : ''}
            <div>
              {reviews?.length > 0
                ? reviews.map(
                    (
                      { comment, reviewer_name: name, reviewer_rating: rating },
                      index
                    ) => {
                      return (
                        <div key={index}>
                          <Comments>
                            {' '}
                            <StyledDescription>{name}</StyledDescription>{' '}
                            <CommentsRating>
                              {' '}
                              <img
                                src={require('../../SVG/star.svg').default}
                                alt="Star"
                              />
                              <span>{rating}.0</span>
                            </CommentsRating>
                            <div>{comment}</div>
                          </Comments>
                        </div>
                      );
                    }
                  )
                : ''}
            </div>
          </div>
        )}
        <StyledReadMore onClick={() => toggleReadMore()}>
          {isReadMore ? 'Read more' : ''}
        </StyledReadMore>
        <StyledLevel>
          {levels.map((el, i) => (
            <StyledLevelEl
              key={i}
              style={{ background: `${i === 0 ? '#f4c550' : '#fff'}` }}
            >
              {el}
            </StyledLevelEl>
          ))}
        </StyledLevel>
        {isReadMore ? (
          false
        ) : (
          <MainButton onClick={e => onClick(e, { surname, name })}>
            Book trial lesson
          </MainButton>
        )}
      </div>
    </CardWrapper>
  );
};
export default Card;
