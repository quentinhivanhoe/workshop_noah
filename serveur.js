const http = require('http');
const host = 'localhost';
const port = 3001;

http.createServer(function (req, res) {
    res.writeHead(200, {'Contente-Type': 'text/html'});
    if (req.url == '/acceuil') {
        res.write("<!DOCTYPE html><html><body><h1> Bienvenue sur l'acceuil </h1></body></html>");
        console.log("Vous êtes à l'acceuil");
    }
    if (req.url == '/logo') {
        res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz"/></p></body></html>');
        console.log("Vous êtes au logo");
    }
    if (req.url == '/profil') {
        res.write("<!DOCTYPE html><html><body><h1> Bienvenue sur votre profil</h1></body></html>");
        console.log("Vous êtes sur votre profil");
    }
    res.end();
}).listen(port);

console.log("serveur créer");
