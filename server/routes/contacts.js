import express from 'express';
import Contact from '../models/contacts.js';
import findContact from '../utils/middleware.js';

const router = express.Router();

// @route    GET "/"
// @desc.    Get all contacts
// @access   Public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route    GET "/:contactID"
// @desc.    Get single contact by contactID
// @access   Public
router.get('/:id', findContact, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route    POST "/"
// @desc.    Create a contact
// @access   Public
router.post('/', async (req, res) => {
  const { name, phone, email } = req.body;

  const contact = new Contact({
    name,
    phone,
    email,
  });
  try {
    const newContact = await contact.save();
    res.status(201).json({ newContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route    PATCH "/:contactID"
// @desc.    Edit a contact
// @access   Public
router.patch('/:id', findContact, async (req, res) => {
  const { name, phone, email } = req.body;
  if (name != null) {
    res.contact.name = name;
  }
  if (phone != null) {
    res.contact.phone = phone;
  }
  if (email != null) {
    res.contact.email = email;
  }
  try {
    const updatedContact = await res.contact.save({
      validateModifiedOnly: true,
    });
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route    DELETE "/:contactID"
// @desc.    Delete a contact
// @access   Public
router.delete('/:id', findContact, async (req, res) => {
  try {
    await res.contact.deleteOne();
    res.json({ message: 'Contact has been deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
