const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// allow cross-origin requests
app.use(cors)

mongoose.connect('mongodb://net:test1234@ds223161.mlab.com:23161/gql-practice')
mongoose.connection.once('open', () => {
      console.log('connect to database...')
})
// Let express know graphql
// Input schema inside the graphqlHTTP
app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
}))

app.listen(4000, () => {
      console.log('Listening on port:4000 ...')
})