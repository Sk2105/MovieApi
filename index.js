const http = require('http');
const getReq = require('./methods/get_request');
const postReq = require('./methods/post_reques');
const putReq = require('./methods/put_reques');
const deleteReq = require('./methods/delete_request');
//require('dotenv').config();

const port = process.env.PORT || 5000;
let count = 0;

const server = http.createServer((req, res) => {

    switch(req.method){

        case 'GET':
            getReq(req, res);
            break;

        case 'POST':
            postReq(req, res);
            break;

        case 'PUT':
            putReq(req, res);
            break;

        case 'DELETE':
            deleteReq(req, res);
            break;

        default:
            res.statusCode = 405;
            res.write(JSON.stringify({ message: 'Method Not Allowed' }));
            res.end();

        
    }


   
})

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})

