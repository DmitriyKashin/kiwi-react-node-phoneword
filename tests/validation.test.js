const supertest = require('supertest')
const app = require('../app')
const request = supertest(app)

test('Validate correct numbers #1', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=1')
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
})
test('Validate correct numbers #2', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=2331')
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
})
test('Validate incorrect numbers #1', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=23asd1')
  expect(res.statusCode).toEqual(400)
  expect(res.body).toHaveProperty('errors')
  expect(res.body).toHaveProperty('message')
})
test('Validate Incorrect numbers #2 - containing zero', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=230')
  expect(res.statusCode).toEqual(400)
  expect(res.body).toHaveProperty('errors')
  expect(res.body).toHaveProperty('message')
})


test('Validate correct response #1', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=2')
  const expected = ["a","b","c"]
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
  expect(res.body.phoneWords).toEqual(expected)
})

test('Validate correct response #2', async () => {
  const res = await request.get('/api/phonewords/generate?typedNumbers=789')
  const expected = ["ptw","qtw","rtw","stw","puw","quw","ruw","suw","pvw","qvw","rvw","svw","ptx","qtx","rtx","stx","pux","qux","rux","sux","pvx","qvx","rvx","svx","pty","qty","rty","sty","puy","quy","ruy","suy","pvy","qvy","rvy","svy","ptz","qtz","rtz","stz","puz","quz","ruz","suz","pvz","qvz","rvz","svz"]
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
  expect(res.body.phoneWords).toEqual(expected)
})


test('Validate correct response #3 - real words', async () => {
  const exptected = ["sold", "role"]
  const res = await request.get('/api/phonewords/generate?typedNumbers=7653&showReal=true')
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
  expect(res.body.phoneWords).toEqual(exptected)

})

test('Validate correct response #4 - real words', async () => {
  const exptected = ["temperature"]
  const res = await request.get('/api/phonewords/generate?typedNumbers=83673728873&showReal=true')
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('phoneWords')
  expect(res.body.phoneWords).toEqual(exptected)
})

