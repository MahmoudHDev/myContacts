import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import http from 'http';
import https from 'https';





// Properties
const app = express();
const port = 9000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const usersURL = "https://jsonplaceholder.typicode.com/users";

// Methods
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const data = await fetchData();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

function fetchData() {
    return new Promise((resolve, reject) => {

        https.get(usersURL, (result) => {
            let rawData = '';
            result.on('data', (chunk) => {
                rawData += chunk;
            });
            result.on('end', () => {
                resolve(rawData);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

app.listen(port, () => {
    console.log("App started listening on port number: " + port)
});

function makePromise() {
    return new Promise((myResolve, myReject) => {
        // Write the code that will take time 
    })


};