import Contact from './../models/contacts.js';

const mockContacts = [
  {
    name: 'Mario',
    phone: '01011010000',
    email: 'mario@marioland.com',
  },
  {
    name: 'Walter White',
    phone: '01258918754',
    email: 'ww@bb.com',
  },
  {
    name: 'Art Vandelay',
    phone: '01012871654',
    email: 'art@vanderlayindustries.com',
  },
];

export const allContacts = async () => {
  const contacts = await Contact.find({});
  return contacts.map((contact) => contact.toJSON());
};

export default mockContacts;
