const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)

// const cors = require('cors')
const port = process.env.PORT || 3000

// const corsOpts = { origin: '*', optionsSuccessStatus: 200}
// app.use(cors(corsOpts))

server.listen(port, () => { console.log('Servidor de testes ativo na porta %d', port) })

// Routing
// app.use(express.static(path.join(__dirname + '/dist/botcryptos')) )
app.use(express.static('public'))
app.get('/*', (req, res) =>
{
    res.sendFile(__dirname + '/index.html')
})


// socket.emit('subscribe', 
// {
//     channel: 'best_bid_price_1010',
//     auth: {}
// })
// socket.on("App\\Events\\BestPriceChanged", function(msg, obj) 
// {    
//     // let array = Object.keys(json).map(i => JSON.parse(json[Number(i)]))
//     console.info('Objeto da pedra de COMPRA: ' ,obj)
    

//     let result = []

//     for(let i in obj)
//         result.push(i, obj[i] )
        
//     console.info(result)
//     console.log('Preço ZNN_BTC: ', result[5])
//     console.log('Tipo: ', result[13])

//     orderbook_data1010
//     GlassRowChanged
//     BestPriceChanged
//     best_bid_price_1010
// })