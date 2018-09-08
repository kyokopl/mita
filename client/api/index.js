import request from 'superagent'

const wordsUrl = 'http://localhost:3000/v1/words'

export function getWords () {
    return request.get(wordsUrl)
      .then(res => {
        const words = res.body
          return words
      })
  }
