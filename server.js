// server.js
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Add custom routes before JSON Server router
server.post('/auth', (req, res) => {
  console.log('Authenticate user')
  if(req.method === 'POST'){
    //console.log(req.body)
    req.method = 'GET'

    //const dbPath = path.join(__dirname, 'db.json'); // Risolve il percorso assoluto a db.json
    //const data = require(dbPath);

    //res.json(data)
    res.json({
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Im0tY3ViZSIsImlkIjoxLCJleHAiOjE2ODQ0MDE1NzIsImlhdCI6MTY4NDQwMTI3Mn0.3Cv53lVCJeGjmt_uQbjQ_qsSNZcs1J7V4hAwYmIJ8ihhesh8skFIzFVEf-VnYrPufJxr65kmjgc6GBLRUSaxAQ",
      "refreshToken": "16baad82-09ed-4468-aa61-ddab36d18923",
      "username": "a.donai65"
    })
  }
})

server.use(router)
server.listen(3030, () => {
  console.log('JSON Server is running!')
})

module.exports = router;