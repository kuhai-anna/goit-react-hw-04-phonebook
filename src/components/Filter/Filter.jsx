import PropTypes from 'prop-types';
import { FilterField, FilterLabel, FilterLabelText } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      <FilterLabelText>Find contacts by name</FilterLabelText>
      <FilterField type="text" value={value} onChange={onChangeFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
