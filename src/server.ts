import express, { NextFunction, Request, Response } from 'express';

const app = express();
const port = 3333;

// Main route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with Typescript!');
});


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Error caught', err.message);
    res.status(500).json({ error: 'An unexpected error occurred on the server.' });
});

// Starting the Server
app.listen(port, () => {
    console.log(`Server running on port ${port} `);
});