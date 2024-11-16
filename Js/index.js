var quotes = [  { quote : `"Be yourself; everyone else is already taken."`, author : "--Oscar Wilde"} ,
                
    { quote : `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    author : "--Marilyn Monroe"},

    { quote : `"So many books, so little time."`, author : "--Frank Zappa"},

    { quote : `"A room without books is like a body without a soul."`, author : "--Marcus Tullius Cicero"},
    
    { quote : `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    author : "--Albert Einstein"},

    { quote : `"You only live once, but if you do it right, once is enough."`, author : "--Mae West"},

    { quote : `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    author : "--Dr. Seuss"},

    { quote : `"In three words I can sum up everything I've learned about life: it goes on."`,
    author : "--Robert Frost"},

    { quote : `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    author : "--Maya Angelou"},

    { quote : `"Be the change that you wish to see in the world."`,author : "--Mahatma Gandhi"},
]

var len = quotes.length;
var x ;
var quoteText = document.getElementById("quote");
var authorname = document.getElementById("author");

function randomQuote(){

var i = Math.floor(Math.random()* len);

if (i !== x) {  
quoteText.innerHTML = quotes[i].quote;
authorname.innerHTML = quotes[i].author;
} else {
quoteText.innerHTML = quotes[i--].quote;
authorname.innerHTML = quotes[i--].author;
}
x = i;
}
