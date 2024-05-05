import express, { Request, Response } from 'express';
import { splitString, concatenateParams, commands } from './logic';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());    // Middleware for parsing JSON bodies

// route
app.get('/', (req: Request, res: Response) => {
    res.send("Server is running");
})

// route string
app.get('/split/:inputString', (req: Request, res: Response) => {
    const inputString: string = req.params.inputString;
    const result = splitString(inputString);
    res.json(result);
});

//route concatenate parameters - req.params
app.get('/concat/:param1/:param2', (req: Request, res: Response) => {
    const { param1, param2 } = req.params
    const revisedString = concatenateParams(param1, param2);
    res.json({ revisedString });           // Send JSON response
});


//using req.query
app.get('/concat', (req: Request, res: Response) => {
    const param1: string = req.query.param1 as string;
    const param2: string = req.query.param2 as string;
    const revisedString = concatenateParams(param1, param2);
    res.json({ revisedString });
});

// Secret Handshake(sh)
app.get('/handshake/:number', (req: Request, res: Response) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number < 1 || number > 31) {
        return res.status(400).json({ error: 'Invalid number. Please provide a number between 1 and 31.' });
    }

    const handshake = commands(number); // Using the commands function to generate the secret handshake
    res.json({ handshake });
});

//
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})