import PropTypes from 'prop-types';
import { TitleStat } from './Section.styled';

export const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <TitleStat>{title}</TitleStat>
      {children}
    </section>
  );
};

SectionTitle.propTytle = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
