import { ContactItem } from './ContactItem/ContactItem';

import { Container } from './ContactList.module';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={name}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
