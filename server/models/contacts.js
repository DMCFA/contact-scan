import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String,
  phone: Number,
  email: String,
});

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model('Contacts', contactSchema);
