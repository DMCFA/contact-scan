import mongoose from 'mongoose';
import supertest from 'supertest';
import app from './../index.js';
import Contact from '../models/contacts.js';
import mockContacts, { allContacts } from './testHelper.js';

const api = supertest(app);

beforeEach(async () => {
  await Contact.deleteMany();

  const initialContacts = mockContacts.map((contact) => new Contact(contact));

  const promiseArr = initialContacts.map((contact) => contact.save());
  await Promise.all(promiseArr);
});

describe('api testing', () => {
  describe('fetching contacts', () => {
    test('contacts are getting returned', async () => {
      await api
        .get('/api')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });

    test('number of contacts in DB', async () => {
      const contact = await api.get('/api');

      expect(contact.body).toHaveLength(mockContacts.length);
    });

    test('fetching a specific contact', async () => {
      const initialContacts = await allContacts();

      const selectedContact = initialContacts[0];

      const identicalContact = await api
        .get(`/api/${selectedContact.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      expect(identicalContact.body).toEqual(selectedContact);
    });

    test('the first contact name is', async () => {
      const contact = await api.get('/api');

      expect(contact.body[0].name).toBe(mockContacts[0].name);
    });
  });

  describe('creating contacts', () => {
    test('add a new contact', async () => {
      const newContact = {
        name: 'Jack Baeur',
        phone: '12302167439',
        email: 'j.baeur@ctu.com',
      };

      await api
        .post('/api')
        .send(newContact)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const res = await api.get('/api');

      const contacts = res.body.map((contact) => contact.name);

      expect(res.body).toHaveLength(mockContacts.length + 1);
      expect(contacts).toContain('Jack Baeur');
    });

    test('contact without name will not be added', async () => {
      const newContact = {
        phone: '12302122439',
        email: 'randomtest@random.com',
      };

      await api.post('/api').send(newContact).expect(400);

      const res = await api.get('/api');

      expect(res.body).toHaveLength(mockContacts.length);
    });
  });

  describe('update and delete contacts', () => {
    test('delete a single contact', async () => {
      const initialContacts = await allContacts();
      const toDeleteContact = initialContacts[0];

      await api.delete(`/api/${toDeleteContact.id}`).expect(200);

      const finalContacts = await allContacts();

      expect(finalContacts).toHaveLength(mockContacts.length - 1);
    });

    test('update a single contact', async () => {
      const initialContacts = await allContacts();
      const toUpdateContact = initialContacts[0];

      const updatedName = {
        name: 'Fox Mulder',
      };

      await api
        .patch(`/api/${toUpdateContact.id}`)
        .send(updatedName)
        .expect(200);

      const res = await api.get('/api');

      const contacts = res.body.map((contact) => contact.name);

      expect(contacts).toContain('Fox Mulder');
      expect(initialContacts[0].name).not.toEqual(contacts[0].name);
    });
  });
});

afterAll(() => mongoose.connection.close());
