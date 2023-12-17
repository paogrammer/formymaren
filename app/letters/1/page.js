// pages/index.js

import React from "react";
import "../letters.css";
import Link from "next/link"


const LetterOne = () => {
  return (
    
    <div className="container">
        <Link className ="return-link" href="/letters">Back to previous page</Link>
        <div className="content">
          <div className="paper">
            <h2 className="letter-title">Those Eyes</h2>
            <p className="letter-content">Dear Maren,</p>
            <p className="letter-content">I don&apos;t wanna keep spamming your inbox so I&apos;ll write this here nalang for you to read in the future. Right now it&apos;s 11:46pm on November 12, 2023. I&apos;m writing this letter while listening to &apos;Those Eyes&apos; by New West, and you&apos;re fast asleep in a Discord call with me. There&apos;s not much to say. I mentioned this already before but I don&apos;t mind repeating it. Just having you here, present with me—despite your body being 40-ish kilometers away, and your mind in a different dimension altogether—gives my heart so much warmth. It&apos;s like I&apos;m being reminded of something that I&apos;ve always known; as long as you&apos;re with me, it doesn&apos;t matter what we do. I absolutely adore every moment with you, no matter how mundane it may seem. It makes me wonder how I&apos;d be when we&apos;re actually physically together. Can my heart take it? Will I spontaneously combust? Guess we&apos;ll have to find out.</p>
            <p className="letter-content">Yours,<br></br>Lorenzo</p>
            <p className="letter-content">PS: This is also the first letter I actually wrote outside of my long-ass messages in our messaging apps. I&apos;m saving this for your birthday. I&apos;m bad at keeping secrets, but I&apos;ll try to keep mum about it for as long as I can. Here&apos;s to hoping I don&apos;t accidentally let it slip, or that I won&apos;t get overly eager and let you know in advance.</p>
            <p className="letter-content">PPS: I was talking with Bro and Abu, I told them to check out your Discord profile kasi you updated it today, and I was 200% gushing about how cute you were in your new DP and moving banner. Sabi nila nagbago na daw ako, hindi na nila ako kilala. HAHA.</p>
          </div>
        </div>
    </div>
  );
};

export default LetterOne;



