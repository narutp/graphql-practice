const axios = require('axios')

describe('book', () => {
    it('book name, genre and author name', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                book(id: 1) {
                  name,
                  genre,
                  author {
                    name
                  }
                }
            }
            `
        })
        expect(res.data).toMatchObject({
            "data": {
                "book": {
                  "name": "Name of the Wind",
                  "genre": "Fantasy",
                  "author": {
                    "name": "Bob"
                  }
                }
            }
        })
    })

    it('book list', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                books {
                    name
                    author {
                    name
                    }
                    id
                }
            }
            `
        })
        expect(res.data).toMatchObject({
            "data": {
                "books": [
                  {
                    "name": "Name of the Wind",
                    "author": {
                      "name": "Bob"
                    },
                    "id": "1"
                  },
                  {
                    "name": "The Final Empire",
                    "author": {
                      "name": "Alfred"
                    },
                    "id": "2"
                  },
                  {
                    "name": "The Long Earth",
                    "author": {
                      "name": "Benjamin"
                    },
                    "id": "3"
                  },
                  {
                    "name": "The Hero of Ages",
                    "author": {
                      "name": "Alfred"
                    },
                    "id": "4"
                  },
                  {
                    "name": "The Colour of Magic",
                    "author": {
                      "name": "Bob"
                    },
                    "id": "5"
                  },
                  {
                    "name": "The Light Fantastic",
                    "author": {
                      "name": "Bob"
                    },
                    "id": "6"
                  },
                  {
                    "name": "The Lord of the ring",
                    "author": {
                      "name": "Benjamin"
                    },
                    "id": "7"
                  }
                ]
            }
        })
    })
})