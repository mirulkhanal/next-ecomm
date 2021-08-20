import mongoose from 'mongoose';

const init = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Connection cancelled, Already connected');
    return;
  }
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('Connected to the Database');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Connection failed`);
  });
};

export default init;
