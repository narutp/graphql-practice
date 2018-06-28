const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

// Let express know graphql
// Input schema inside the graphqlHTTP
app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
}))

app.listen(4000, () => {
      console.log('Listening on port:4000 ...')
})