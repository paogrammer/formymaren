// pages/index.js

import React from 'react';
import '../letters.css';
import Link from 'next/link'


const LetterTwo = () => {
  return (
    
    <div className='container'>
        <Link className ='return-link' href='/letters'>Back to previous page</Link>
        
        <div className='content'>
          <div className='paper'>
            <h2 className='letter-title'>Destiny</h2>
            <p className='letter-content'>Dear Maren,</p>
            <p className='letter-content'>It's almost 3am now on Nov 18, 2023. I'm at a watch party with Bro and Abu and we're watching Serendipity, a romance about fate and destiny. I personnally didn't like the story, and it kept me thinking about a lot of things. Dun sa story kasi they both had a boyfriend and girlfriend, which later turned to fiances, tapos they met by chance lang and they kept on thinking about each other. And to me that isn't romantic, it's just plain wrong. Kasi if I'm in a relationship with someone I'm not really looking to have a romantic encounter with anybody else, and I would 100% expect my partner to be the same. I was a feeling a bit down kasi I didn't want that to happen to me. I don't think my heart could take it. Then, out of nowhere, biglang tumunog yung Spotify. Naka listen along ako sayo kasi, and nagplay ka ulit ng song. I don't even know if this is you, or maybe Bunso or Kuya using your laptop/pc. Anyway, at this moment, I felt like I've been given reassurance somehow. Sorry if this doesn't make sense.</p>
            <p className='letter-content'>You see, I've never been really much of a fan of destiny. I believe we carve our own fate. Pero when I think about the circumstances behind meeting you, I'm starting to think of it as a half-half thing. Destiny gives you the opportunity, and then it's up to you if you're going to grab it, or let it slip through your fingers. Not even knowing all that, we both ended up holding on to each other. And when I think of it like that, I can't help but be grateful. Fate led us to each other, and even though we didn't realize the importance of it right away, we still somehow managed to connect.</p>
            <p className='letter-content'>Thalia Maren, I was destined to meet you. And now, of my own volition, I am choosing to love you. And so far, I fully believe this is what I was meant to do. It just so happened that I really wanted to do it, too. Hope that made sense.</p>
            <p className='letter-content'>Love,<br></br>Lorenzo</p>
            <p className='letter-content'>PS: The song that played was "flaws" by Thomas Ng</p>
          </div>
        </div>
    </div>
  );
};

export default LetterTwo;



