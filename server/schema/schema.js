const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLInt } = graphql
// Temp data
let books = [
    { name: 'Moooa', genre: 'Fantasy', id: '1' },
    { name: 'Aqoek', genre: 'Fantasy', id: '2' },
    { name: 'Moana', genre: 'Action', id:'3' }
]

let authors = [
    { name: 'Benjamin', age: '21', id:'3' },
    { name: 'Alfred', age: '15', id:'2' },
    { name: 'Sebastian', age: '22', id:'4' },
    { name: 'Osaka', age: '17', id:'6' },
    { name: 'Bob', age: '35', id:'1' },
    { name: 'Seefa', age: '27', id:'5' },
]
// Initiate Book
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

// Create Author type
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

// Create root query to connect between front query with type object
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,                     // Connect object type
            args: {id: {type: GraphQLID}},  // Args is a parameter when query
            resolve(parent, args) {
                return _.find(books, {id: args.id})
            }
        },
        getAuthorByID: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery 
})