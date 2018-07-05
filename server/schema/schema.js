const graphql = require('graphql')
// lodash is for 
const _ = require('lodash')
const axios = require('axios')

const { 
    GraphQLObjectType,
    GraphQLSchema, 
    GraphQLString, 
    GraphQLID, 
    GraphQLInt,
    GraphQLFloat,
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

let user = []
let coords = []

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

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString}
    })
})

const CoordsType = new GraphQLObjectType({
    name: 'CoordsType',
    fields: () => ({
        id: {type: GraphQLInt},
        type: {type: GraphQLInt},
        distance: {type: GraphQLFloat},
        time: {type: GraphQLFloat},
        route: {
            type: new GraphQLList(RouteType),
            // resolve(parent, args) {
            //     return geom
            // }
        }
    })
})

const RouteType = new GraphQLObjectType({
    name: 'Route',
    fields: () => ({
        seq: {type: GraphQLInt},
        nameth: {type: GraphQLString},
        geom: {type: GraphQLString}
    })
})

// const GeomType = new GraphQLObjectType({
//     name: 'Geom',
//     fields: () => ({
//         type: {type: GraphQLString},
//         coordinates: {
//             type: GraphQLString

//         }
//     })
// })

// const CoordinatesType = new GraphQLObjectType({
//     name: 'Coordinates',
//     fields: () => ({
//         coords: {
//             type: new GraphQLList(CoordsListType),
//         }
//     })
// })

// const CoordsListType = new GraphQLObjectType({
//     name: 'Coords',
//     fields: () => ({
//         coord: {type: GraphQLInt}
//     })
// })

// Try to fetch data
async function fetchTempData() {
    let coords = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    // console.log('aa', coords)
    user = coords.data
}

async function fetchCoordinates() {
    let coordsRes = await axios.get('https://api-routing.mapmagic.co.th/v1/driving/route?src=13.802003614469, 100.596212131283&dst=13.7284230074659, 100.534788043111')
    coords = coordsRes.data.data
    // coords[0].route.forEach((element) => {
    //     console.log('element1', element.geom)
    //     element.geom = JSON.parse(element.geom)
    // });
    // coords[0].route.forEach((element) => {
    //     console.log('element2', element.geom)
    // })
    // console.log('coords', coords)
}

// Create root query to connect between front query with type object
// Root query is like a first parent node that user want to query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        coords: {
            type: CoordsType,
            args: {id: {type: GraphQLInt}},
            async resolve(parent, args) {
                await fetchCoordinates()
                return _.find(coords, {id: args.id})
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLInt}},
            async resolve(parent, args) {
                await fetchTempData()
                return _.find(user, {id: args.id})
            }
        },
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