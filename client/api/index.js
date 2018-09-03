import request from 'superagent'

export function getWords () {
    return request.get('/v1/words')
      .then(res => {
        const words = res.body
        return words
      })
      .catch(() => {
        throw Error('You need to implement an API route for /v1/posts')
      })
  }