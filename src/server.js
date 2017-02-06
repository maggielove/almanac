import express from 'express';

const app = express();

const weather_key = process.env.WU_ALMANAC_KEY;

app.use(express.static('./'));

app.get('/keys', (res) => {
    console.log('hit /keys!');
    console.log('WU key ', weather_key);
    res.send(weather_key);
});

const server = server.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Almanac running on host ', host, '& port ', port);
});
