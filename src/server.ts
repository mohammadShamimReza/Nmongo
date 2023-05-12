import app from './app';
import mongoose from 'mongoose';

const port: number = 5000;


// Database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pracitc-mongose");
    console.log(`Database connection successful`);

    app.listen(port, () => {
      console.log(`SERVER is listening on port ${port}`);
    });
  } catch {
    console.log(`Failed to connect to database`);
  }

}
bootstrap();

