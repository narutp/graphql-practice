const graphql = require('graphql')
const _ = require('lodash')
const { 
    GraphQLObjectType,
    GraphQLSchema, 
    GraphQLString, 
    GraphQLID, 
    GraphQLInt,
    GraphQLList
} = graphql
// Temp data
let books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
    {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2'},
    {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '1'},
    {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '1'},
    {name: 'The Lord of the ring', genre: 'Fantasy', id: '7', authorId: '3'}
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
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

// Create Author type
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, { authorId : parent.id })
            }
        }
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
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id: args.id})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery 
})