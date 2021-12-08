import axios from 'axios';

const baseUrl = 'http://localhost:3001/api';

// @route    GET "/"
// @desc.    Get all contacts
export const getAllContacts = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

// @route    GET "/:contactID"
// @desc.    Get single contact by contactID
export const findContact = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

// @route    POST "/"
// @desc.    Create a contact
export const createContact = async (contact) => {
  try {
    const res = await axios.post(baseUrl, contact);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

// @route    PATCH "/:contactID"
// @desc.    Edit a contact
export const updateContact = async (id, update) => {
  try {
    const res = await axios.patch(`${baseUrl}/${id}`, update);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

// @route    DELETE "/:contactID"
// @desc.    Delete a contact
export const deleteContact = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
