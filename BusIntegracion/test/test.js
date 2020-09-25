const request = require('supertest')
const app = require('../app')
let server, agent


beforeEach(done => {
  server = app.listen(5000, err => {
    if (err) return done(err)
    agent = request.agent(server)
    done()
  })
})
afterEach(done => {
  return server && server.close(done)
})

test('Fake Test', () => {
  expect(true)
})


describe('Pruebas para App/server', function () {
  test('post /nuevo_pedido', function (done) {
    request(app)
      .post('/nuevo_pedido')
      .send({
        "descripcion": "Una soda",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        done()
      })
  })
})
