import mongoose from 'mongoose';

const Tariff = mongoose.model('Tariff', {
  id: String,
  supplier_name: String,
  tariff_name: String,
  type: String,
  end_date: Date,
});

export default Tariff;
