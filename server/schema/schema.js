const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql

// Temp data
let books = [
    { name: 'Moooa', genre: 'Fantasy', id: '1' },
    { name: 'Aqoek', genre: 'Fantasy', id: '2' },
    { name: 'Moana', genre: 'Action', id:'3' }
]
// Initiate Book
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

// Create root query to connect between front query with type object
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,                     // Connect object type
            args: {id: {type: GraphQLString}},  // Args is a parameter when query
            resolve(parent, args) {
                return _.find(books, {id: args.id}) 
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery 
})