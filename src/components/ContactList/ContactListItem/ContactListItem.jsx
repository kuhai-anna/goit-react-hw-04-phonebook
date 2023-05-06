import PropTypes from 'prop-types';
import {
  Contact,
  ContactItem,
  ContactName,
  DeleteButton,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem>
      <Contact>
        <ContactName>{name}:</ContactName> {number}
      </Contact>
      <DeleteButton
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
