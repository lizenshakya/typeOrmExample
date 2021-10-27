import app from './app';
import http from 'http';

const port = process.env.PORT || '5000';

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`listening on port on ${port} ` + new Date())
})