import express from 'express';

const app = express();

app.use(express.static('./'));

// app.get('/', (req, res) => {
//     console.log('on home page');
// });

let server = app.listen(8080, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('*Almanac* running on port ', port);
});
