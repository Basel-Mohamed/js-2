// define quotes
var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    auther: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein",
  },
];
// choose random quote
function getQoutes() {
  var num = Math.floor(Math.random() * quotes.length);

  document.getElementById("qoute").innerHTML = quotes[num].quote;
  document.getElementById("auther").innerHTML = quotes[num].auther;
}
