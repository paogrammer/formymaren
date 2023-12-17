// pages/index.js

import React from "react";
import "../letters/letters.css";
import Link from "next/link"


const Greeting = () => {
  return (
    
    <div className="container">
        <div className="content">
          <div className="paper">
            <h2 className="letter-title">Birthday Note</h2>
            <p className="letter-content">Dear Maren,</p>
            <p className="letter-content">As you're reading this note, you've probably just turned 21. Congratulations on leveling up! I'm sure 20 has been quite a ride, but I'm hoping 
            for even better things for you this coming year. Be it your health, career, inter-personal relationships, self-growth, and everythig else in between--it's all
            going to be even better than it has ever been, and I'm looking forward to see you flourish.
            </p>
            <p className="letter-content">But before all that, I want to take the time to appreciate the person you've become in the present: a very loving and caring person. One of the most selfless
            people I've ever met. You're also very <i>topakin</i>, gets easily irritated, and has zero patience for dumb Valorant teammates. But all of that just adds to your flavor,
            and fails to conceal what you truly are--an immensely kind soul.  You've done well with the cards that you've been dealt, and I respect that a lot. Mapagmahal sa pamilya at mga kaibigan, kahit minsan di nila deserve.
            I know I've told you this many times and I'm sure naririndi ka na, but Maren, I really
            admire the person you've become. I just like to remind you a lot kasi sometimes you get overly self-critical and forget that you're great just the way you are.</p>
            <p className="letter-content">I know that there's a lot of growing and learning to be done but you can do that on your own pace. You can take your time and enjoy the ride, and try not to worry too much. Eventually, everything will fall into place.</p>
            <p className="letter-content">So don't worry, and live as you please. I'm sure you'll be phenomenal.</p>
            <p className="letter-content">I wish you a fulfilling year ahead, and, if you're alright with it, hopefully I can be a part of it too. More blessings to come!</p>
            <p className="letter-content">Oh, and Happy Birthday. I love you.</p>
            <p className="letter-content">Yours,<br></br>Lorenzo</p>
          </div>
        </div>
    </div>
  );
};

export default Greeting;



// I know getting here probably hasn't been the easiest task. You've encountered
//             many struggles, hardships, and all sorts of circumstances in the past 20 years of your wonderful existence. You have gone through so many battles, and some of them are probably still currently ongoing.
