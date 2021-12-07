import Contact from '../models/contacts.js';

const findContact = async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    if (contact === null) {
      return res.status(404).json({ message: 'Cannot find Contact' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.contact = contact;
  next();
};

export default findContact;
