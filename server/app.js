const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const schema = require('./schema/schema')

// Let express know graphql
// Input schema inside the graphqlHTTP
app.use('/graphql', graphqlHTTP({
      schema
}))

app.listen(4000, () => {
      console.log('Listening on port 4000 ...')
})