import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import reviewRoute from './routes/review.js';

//dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/review', reviewRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;