import { Item, Button, Text } from '../ContactList.module';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Item>
        <Text>
          {name}: {number}
        </Text>
        <Button id={name} onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Item>
    </>
  );
};
