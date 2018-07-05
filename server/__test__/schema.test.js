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
})