// pages/index.js

import React from 'react';
import '../letters.css';
import Link from 'next/link'


const LetterThree = () => {
  return (
    
    <div className='container'>
        <Link className ='return-link' href='/letters'>Back to previous page</Link>
        <div className='content'>
          <div className='paper'>
            <h2 className='letter-title'>Our Own Story</h2>
            <p className='letter-content'>Dear Maren,</p>
            <p className='letter-content'>I'm writing this letter to you during the height of the KathNiel breakup issue. I know how that story had somehow caused you to overthink and feel sorrow for the end of a relationship you had believed would last forever. You mused that we might end up like them--like Kathryn and Daniel, Carmina and Rustom, Claudine and Rico, or Richard and Dawn, and many more like them. I even joked that we'd end up like Drew and Iya. But the truth is, it's none of these options. Our relationship dynamic can't be defined by these love stories, and it definitely won't follow their tracks. This love is ours, and ours alone. Wherever it may take us, you can rest assured that this story belongs solely to us. We'll face our own battles, our own difficulties. We'll rejoice in our own victories, and grieve in our own defeats. We will have our own mountains and valleys, our own seas and rivers. And in crossing each one of them, I'm hoping that we'll remain true to each other, and that we'd choose to stick to one another until the end.</p>
            <p className='letter-content'>You and I each have our own unique stories, our own unique worlds. Nobody knows what would happen once these worlds converge, but I'm filled with anticipation.</p>
            <p className='letter-content'>Yours,<br></br>Lorenzo</p>
          </div>
        </div>
    </div>
  );
};

export default LetterThree;



