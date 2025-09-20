const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    source: { type: String, default: 'linkedin-landing' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', LeadSchema);


