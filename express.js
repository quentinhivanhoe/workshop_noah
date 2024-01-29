
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/acceuil', (req, res) => {
    res.write("<!DOCTYPE html><html><body><h1> Bienvenue sur l'acceuil </h1></body></html>");
    console.log("vous êtes à l'acceuil")
})

app.get('/logo', (req, res) => {
    res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz"/></p></body></html>');
    console.log("vous êtes au logo")
})
app.get('/profil', (req, res) => {
    res.write("<!DOCTYPE html><html><body><h1> Bienvenue sur votre profil</h1></body></html>");
    console.log("vous êtes sur votre profil")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})