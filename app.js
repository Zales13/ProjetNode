const http = require('http')
const port = 3000

const server = http.createServer(function(req,res) {

})

server.listen(port, function(error) {
    if (error) {
        console.log('Erreur', error)
    } else {
        console.log('Serveur sur port ' + port)
    }
})