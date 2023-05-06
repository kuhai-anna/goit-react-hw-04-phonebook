import PropTypes from 'prop-types';
import {
  Container,
  MainTitle,
  SectionTitle,
  SectionWrapper,
} from './Section.styled';

export const Section = ({ mainTitle, title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {mainTitle ? (
          <MainTitle>{mainTitle}</MainTitle>
        ) : (
          <SectionTitle>{title}</SectionTitle>
        )}
        {children}
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
