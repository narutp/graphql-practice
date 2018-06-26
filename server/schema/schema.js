const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

// Initiate Book
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => {
        id: {type: GraphQLString}
        name: {type: GraphQLString}
        genre: {type: GraphQLString}
    }
})

// Create root query to connect between front query with type object
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,                     // Connect object type
            args: {id: {type: GraphQLString}}   // Args is a parameter when query
        }
    }
})