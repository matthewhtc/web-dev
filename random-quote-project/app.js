var array = ['"It is not whether you get knocked down; it is whether you get up." — Vince Lombardi',
  '“The only way to prove that you’re a good sport is to lose.” – Ernie Banks',
  '“Only he who can see the invisible can do the impossible.” – Frank L.',
  '“Age is no barrier. It’s a limitation you put on your mind.” – Jackie Joyner-Kersee',
  '“Most people give up just when they are about to achieve success. They quit on the one yard line. They give up at the last minute of the game one foot from a winning touchdown.” – Ross Perot',
  '“There may be people that have more talent than you, but theres no excuse for anyone to work harder than you do.” – Derek Jeter',
  '“When you’ve got something to prove, there’s nothing greater than a challenge.” – Terry Bradshaw',
  '“Persistence can change failure into extraordinary achievement." – Marv Levy',
  '“One man can be a crucial ingredient on a team, but one man cannot make a team." – Kareem Abdul-Jabbar',
  '“The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.” – Arnold Schwarzenegger',
  '“You have to expect things of yourself before you can do them.” – Michael Jordan',
  '“If you don’t have confidence, you’ll always find a way not to win.” – Carl Lewis',
  '“Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.” – Michael Jordan',
  '“Excellence is the gradual result of always striving to do better.” – Pat Riley',
  '“Push yourself again and again. Don’t give an inch until the final buzzer sounds.” – Larry Bird',
  '“You can’t put a limit on anything. The more you dream, the farther you get.” – Michael Phelps',
  '"Wisdom is always an overmatch for strength." – Phil Jackson',
  '“Some people say I have attitude – maybe I do…but I think you have to. You have to believe in yourself when no one else does – that makes you a winner right there.” – Venus Williams',
  '“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’” – Muhammad Ali',
  '“There are only two options regarding commitment. You’re either IN or you’re OUT. There is no such thing as life in-between.” – Pat Riley',
  '"It aint over till it is over." – Yogi Berra',
  '“The highest compliment that you can pay me is to say that I work hard every day, that I never dog it.” – Wayne Gretzky',
  '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” – Michael Jordan'
  ];
  
$(document).ready(function() {
  var $randomize = $("#randomize");
  var $quote = $("#quote");
  var index = 0;
  var $tweet = $("#twitter");


  $randomize.on("click", function() {
    index = Math.floor(Math.random()*array.length);
    $quote.html(array[index]);
    $tweet.attr("href", "https://twitter.com/intent/tweet?text=" + array[index]);

  });

});
