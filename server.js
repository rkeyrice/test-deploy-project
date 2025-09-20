import express from 'express';

import dotenv from 'dotenv';
dotenv.config();



const app = express();

app.use(express.json());

app.get('/api/test', async (_, res) => {
    const testData = [
        { id: 1, name: 'Item 1', value: 100 },
        { id: 2, name: 'Item 2', value: 200 },
        { id: 3, name: 'Item 3', value: 300 },
        { id: 4, name: 'Item 4', value: 400 },
        { id: 5, name: 'Item 5', value: 500 },
    ];

    res.json(testData);
});


const PORT = process.env.PORT;

console.log(process.env.TEST_SERVER_ENV)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

