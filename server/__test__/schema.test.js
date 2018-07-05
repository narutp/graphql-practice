const axios = require('axios')

describe('schema', () => {
    it('find user id and title', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                user(id: 1) {
                  id
                  title
                }
            }
            `
        })
        expect(res.data).toMatchObject(
            {
                "data": {
                  "user": {
                    "id": "1",
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                  }
                }
            }
        )
    })

    it('find author name', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                author(id: 1) {
                    name
                }
            }
            `
        })
        expect(res.data).toMatchObject(
            {
                "data": {
                    "author": {
                      "name": "Bob"
                    }
                }
            }
        )
    })

    it('find author age', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                author(id: 1) {
                    age
                }
            }
            `
        })
        expect(res.data).toMatchObject(
            {
                "data": {
                    "author": {
                      "age": 35
                    }
                }
            }
        )
    })

    it('find author book list', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                author(id: 1) {
                    book {
                        name
                    }
                }
            }
            `
        })
        expect(res.data).toMatchObject(
            {
                "data": {
                    "author": {
                      "book": [
                        {
                          "name": "Name of the Wind"
                        },
                        {
                          "name": "The Colour of Magic"
                        },
                        {
                          "name": "The Light Fantastic"
                        }
                      ]
                    }
                }
            }
        )
    })
})