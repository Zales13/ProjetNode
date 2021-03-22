const http = require('http')
const port = 3030

const server = http.createServer(function(req,res) {
    res.write('Hello Node')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('Erreur', error)
    } else {
        console.log('Serveur sur port ' + port)
    }
})