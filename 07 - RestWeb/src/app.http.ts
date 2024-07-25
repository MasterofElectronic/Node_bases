import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    console.log(req.url);
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write('Hola Mundo');
    // res.end();

    // const data = {
    //     name: 'Jhony',
    //     age: 30,
    //     city: 'New York'
    // };

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(data));


    if(req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlFile);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
    }


});


server.listen(8080, () => {
    console.log('server runnin on port 8080');
});
