import app from './app'

app.listen({ port: 3333, host: '0.0.0.0' }).then((address) => {
    console.log(`🔥🔥 HTTP Server is Running on ${address}`)
    console.log('http://localhost:3333')
})
