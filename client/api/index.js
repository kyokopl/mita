import request from 'superagent'

const wordsUrl = 'http://localhost:3000/v1/words'

export function getWords () {
    return request.get(wordsUrl)
      .then(res => {
        console.log(res);
        
        const words = res.body
        console.log('you hit api');
        
        return words
      })
  }
