import express from 'express';
import cors from 'cors';                
import commentsRouter from './routes/commentsRoutes.js'; 
import sendFormRoutes from './routes/sendformRoutes.js';
import userRoutes from './routes/userRoutes.js';
import textRoutes from './routes/textRoutes.js';
import imageRoutes from './routes/imageRoutes.js'



const port = 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/comments', commentsRouter);
app.use('/sendform', sendFormRoutes);
app.use('/auth', userRoutes);
app.use('/api', textRoutes);
app.use('/api', imageRoutes)

app.use(cors({ origin: 'https://elcitr.com' }));

app.listen(port, () => {
    console.log(`Backend ${port} portunda çalışıyor.`);
});


