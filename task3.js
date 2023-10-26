let output1 = document.getElementById('h');
let output2 = document.getElementById('s');
let output3 = document.getElementById('m');
let output4 = document.getElementById('a');
let output5 = document.getElementById('f');
let output6 = document.getElementById('n');
let audio1 = new Audio('happy-happy-happy-cat.mp3');
let audio2 = new Audio('tf_nemesis.mp3');
let audio3 = new Audio('you_dont_know_me_son.mp3');
let audio4 = new Audio('do-it_2.mp3');
let audio5 = new Audio('rick-astley-never-gonna-give-you-up-chorus-1-audiotrimmer.mp3');
let audio6 = new Audio('acoustic-guitar-logo-13084.mp3');
let q1 = [' "The greatest happiness you can have is knowing that you do not necessarily require happiness." - William Saroyan',
          ' "Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
          ' "The purpose of our lives is to be happy." - Dalai Lama',
          '"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort." - Franklin D. Roosevelt',
        '"Happiness is when what you think, what you say, and what you do are in harmony." - Mahatma Gandhi',
        '"The secret of happiness is freedom, the secret of freedom is courage." - Carrie Jones',
        '"Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy." - Ralph Marston',
        '"Happiness is not a goal; it is a by-product." - Eleanor Roosevelt',
        '"The grand essentials of happiness are: something to do, something to love, and something to hope for." - Allan K. Chalmers',
        '"Happiness is a journey, not a destination." - Ben Sweetland',
        '"Happiness is a warm puppy." - Charles M. Schulz',
        '"Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed." - Unknown',
        '"The only way to do great work is to love what you do." - Steve Jobs',
        '"The best way to cheer yourself up is to try to cheer somebody else up." - Mark Twain',
        '"Happiness is not the absence of problems, but the ability to deal with them." - Steve Maraboli',
];
let q2 = [ '"The greater your storm, the brighter your rainbow." - Unknown',
          '"Every moment is a fresh beginning." - T.S. Eliot',
          '"This too shall pass." - Persian adage',
          '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
          '"Sadness flies away on the wings of time." - Jean de La Fontaine',
          '"Even the darkest night will end, and the sun will rise." - Victor Hugo',
          '"Happiness can be found even in the darkest of times if one only remembers to turn on the light." - J.K. Rowling',
          '"You may not control all the events that happen to you, but you can decide not to be reduced by them." - Maya Angelou',
          '"The only way out of the labyrinth of suffering is to forgive." - John Green',
          '"It is okay not to be okay as long as you are not giving up." - Karen Salmansohn',
          '"Tears are words that need to be written." - Paulo Coelho',
          '"The pain you feel today is the strength you feel tomorrow." - Unknown',
          '"Sometimes when things are falling apart, they may actually be falling into place." - Unknown',
          '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
          '"In the midst of winter, I found there was, within me, an invincible summer." - Albert Camus',
];
let q3 = ['"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
          '"The only way to do great work is to love what you do." - Steve Jobs',
          '"Do not watch the clock; do what it does. Keep going." - Sam Levenson',
          '"Believe you can, and you are halfway there." - Theodore Roosevelt',
          '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
          '"The future depends on what you do today." - Mahatma Gandhi',
          '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
          '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer',
          '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
          '"The best way to predict the future is to create it." - Peter Drucker',
          '"The harder you work for something, the greater you will feel when you achieve it." - Unknown',
          '"It does not matter how slowly you go as long as you do not stop." - Confucius',
          '"The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks." - Mark Zuckerberg',
          '"Your life does not get better by chance, it gets better by change." - Jim Rohn',

];
let q4 = ['"Courage is not the absence of fear but the triumph over it." - Nelson Mandela',
          '"Do one thing every day that scares you." - Eleanor Roosevelt',
          '"The only thing we have to fear is fear itself." - Franklin D. Roosevelt',
          '"Fear is only as deep as the mind allows." - Japanese Proverb',
          '"Fear is a reaction. Courage is a decision." - Winston S. Churchill',
          '"Everything you have ever wanted is on the other side of fear." - George Addair',
          '"Do not let the fear of what could happen make nothing happen." - Doe Zantamata',
          '"Bravery is the capacity to perform properly even when scared half to death." - Omar N. Bradley',
          '"Fear is a powerful beast. But we can learn to ride it." - Justina Chen',
          '"Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering." - Yoda',
          '"Action cures fear." - David J. Schwartz',
          '"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face." - Eleanor Roosevelt',
          '"The only thing we have to fear is running out of the toilet paper." - Anonymous (A bit of humor for lightening the mood)',
          '"Face your fear, and fear disappears." - David Joseph Schwartz',
];
let q5 = ['"Behind every great man, there is a woman rolling her eyes." - Jim Carrey',
          '"I am writing a book. I have got the page numbers done." - Steven Wright',
          '"I am on the whiskey diet. I have lost three days already." - Tommy Cooper',
          '"I used to play piano by ear, but now I use my hands." - Steven Wright',
          '"I am writing a letter. I cannot write it in Braille. So, I am writing it in longhand." - Steven Wright',
          '"When I eventually met Mr. Right, I had no idea that his first name was Always." - Rita Rudner',
          '"I asked the librarian if the library had books on paranoia. She whispered, "They are right behind you!" " - Steven Wright',
          '"The only mystery in life is why the kamikaze pilots wore helmets." - Al McGuire',
          '"I am not arguing, I am just explaining why I am right." - Unknown',
          '"When life gives you lemons, squirt someone in the eye." - Cathy Guisewite',
          '"I intend to live forever, or die trying." - Groucho Marx',
          '"I am not a vegetarian because I love animals. I am a vegetarian because I hate plants." - A. Whitney Brown',
          '"The only thing I cannot stand is discomfort." - Gloria Steinem',
          '"I could not repair your brakes, so I made your horn louder." - Steven Wright',
          '"I used to be indecisive. Now, I am not sure." - Unknown',
];
let q6 = ['"Look deep into nature, and then you will understand everything better." - Albert Einstein',
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          '"The Earth does not belong to us: we belong to the Earth." - Marlee Matlin',
          '"Nature always wears the colors of the spirit." - Ralph Waldo Emerson',
          '"Adopt the pace of nature: her secret is patience." - Ralph Waldo Emerson',
          '"To sit in the shade on a fine day and look upon the verdant green hills is the most perfect refreshment." - Jane Austen',
          '"Nature is not a place to visit. It is home." - Gary Snyder',
          '"The poetry of the Earth is never dead." - John Keats',
          '"Nature is the art of God." - Dante Alighieri',
          '"The clearest way into the Universe is through a forest wilderness." - John Muir',
          '"The mountains are calling, and I must go." - John Muir',
          '"Heaven is under our feet as well as over our heads." - Henry David Thoreau',
          '"The butterfly counts not months but moments and has time enough." - Rabindranath Tagore',
          '"Nature is pleased with simplicity." - Isaac Newton',
          '"To forget how to dig the Earth and to tend the soil is to forget ourselves." - Mahatma Gandhi',
];
function happy()
{
    var rq1 = q1[Math.floor(Math.random()*q1.length)]
    output1.innerHTML = rq1;
}
function sad()
{
  var rq2 = q2[Math.floor(Math.random()*q2.length)]
  output2.innerHTML = rq2;
}
function motivated()
{
  var rq3 = q3[Math.floor(Math.random()*q3.length)]
  output3.innerHTML = rq3;
}
function afraid()
{
  var rq4 = q4[Math.floor(Math.random()*q4.length)]
  output4.innerHTML = rq4;
}
function funny()
{
  var rq5 = q5[Math.floor(Math.random()*q5.length)]
  output5.innerHTML = rq5;
}
function nature()
{
  var rq6 = q6[Math.floor(Math.random()*q6.length)]
  output6.innerHTML = rq6;
}
function alert1()
{
  alert("Quote copied")
}
function play1()
{
  audio1.play();
}
function play2()
{
  audio2.play();
}
function play3()
{
  audio3.play();
}
function play4()
{
  audio4.play();
}
function play5()
{
  audio5.play();
}
function play6()
{
  audio6.play();
}
