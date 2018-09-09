import React from 'react'
// import {ButtonToolbar, Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

function Guide () {
  return (
    <div className='box'>
        <h1>Te reo Māori pronunciation guide </h1><br/>
        <h3>Learn to pronounce Māori words correctly to become more confident using them. Find out how to pronounce Māori vowels, consonants and digraphs.</h3>
        <ul> 
            <p>
                There are 15 distinct sounds within the Māori alphabet. They are:
            </p>
            <li>five vowels: a, e, i, o, u</li>
            <li>eight consonants: h, k, m, n, p, r, t, w</li>
            <li>two digraphs (two letters that combine to form one sound): wh, ng</li>
        </ul>

        <h2>Vowels</h2>
            <p>
                While there are only five vowels, combinations of vowels (diphthongs) are common eg. au, ao, ea, oi, ua.
            </p>
            <p>
                A vowel can also have a long or short sound. A long sound is usually denoted by a macron (a bar appearing over a vowel to indicate it is lengthened during pronunciation eg. ā as in wāhi).
            </p>

        <h2>Pronunciation</h2>
            <ul>
                <p>
                    Vowels are pronounced as follows:
                </p>
                <li><h4>Short</h4></li>
                <li><strong>A </strong>as in aloud</li>
                <li><strong>E </strong>as in entry</li>
                <li><strong>I </strong>as in eat</li>
                <li><strong>O </strong>as in ordinary</li>
                <li><strong>U </strong>as in to</li><br/>

                <li><h4>Long</h4></li>
                <li><strong>A </strong>as in car</li>
                <li><strong>E </strong>as in led</li>
                <li><strong>I </strong>as in peep</li>
                <li><strong>O </strong>as in pork</li>
                <li><strong>U </strong>as in loot</li><br/>
            </ul>

        <h2>Consonants</h2>
            <p>
                Pronounce consonants as you would in English, with two key exceptions:
            </p>
            <p>
                <strong>T</strong> The ‘t’ sound depends on which vowel appears after it. When it follows an ‘a’, ‘e’ or ‘o’, pronounce it with as little sibilant sound as possible (almost like a ‘d’). When it follows an ‘i’ or ‘u’, it includes a slight sibilant sound, but not nearly as much as an English ‘t’.
            </p>
            <p>
                <strong>R</strong> Pronounced as a soft ‘rolled’ r.
            </p>

        <h2>Digraphs</h2>
            <p> 
                The ‘ng’ digraph is pronounced as it sounds in the English word ‘singer'.
            </p>
            <p> 
                The ‘wh’ digraph originally sounded like the ‘wh’ in ‘whisper’, but in most dialects has evolved to be more like the English ‘f’ sound.
            </p>
            <p> 
                For further information about reo Māori pronunciation visit the <a href="http://www.tewikiotereomaori.co.nz/">Kōrero Māori</a> website.
                Information sourced from <a href="https://www.victoria.ac.nz/maori-at-victoria/ako/te-reo-at-victoria/te-reo-pronunciation-guide">Victoria University</a>
            </p>

        {/* <div id="buttonsMain">
        <ButtonToolbar>
          <Link id = "list" to = "/Package">
            <Button id= "button2" bsStyle="primary" bsSize="large" >
              Order now
            </Button>
          </Link>
        </ButtonToolbar>
      </div> */}
    </div>
  )
}

export default Guide