import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A name is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    minlength: [11, 'Phone number requires 11 digits, only got {VALUE}'],
    maxlength: [11, 'Phone number requires 11 digits, got {VALUE}'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'An email is required'],
    unique: true,
  },
});

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

contactSchema.plugin(uniqueValidator);

export default mongoose.model('Contact', contactSchema);
