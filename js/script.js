/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Author: Daniel Ross
Date: 12/12/2022
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*
* `usedQuotes` array
* Contains list of indexes of used quotes. This is compared against to avoid repeats.
* This list is updated each quote and cleared when all quotes have been used.
**/
const usedQuotes = [];
/*** 
 * `quotes` array 
 * Contains a list of quote objects, selected from the works of Brandon Sanderson.
 * Citation and year left off of last quote to demonstrate function
 ***/
const quotes = [
  {
    quote: 'The most important words a man can say are, \u2018I will do better.\u2019',
    source: 'Dalinar Kholin',
    citation: 'Oathbringer - Brandon Sanderson',
    year: '2017',
    tags: ['Stormlight']
  },
  {
    quote: 'The question, is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, '
         + 'when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path.',
    source: "Jasnah Kholin (Reading from the 'Way of the Kings')",
    citation: 'Oathbringer - Brandon Sanderson',
    year: '2017',
    tags: ['Stormlight']
  },
  {
    quote: 'All stories told have been told before. We tell them to ourselves, '
         + 'as did all men who ever were. And all men who ever will be. The only things new are the names.',
    source: 'Wit',
    citation: 'Words of Radiance - Brandon Sanderson',
    year: '2014',
    tags: ['Stormlight']
  },
  {
    quote: 'Strength does not make one capable of rule, it makes one capable of service.',
    source: 'Teft',
    citation: 'Way of Kings - Brandon Sanderson',
    year: '2010',
    tags: ['Stormlight']
  },
  {
    quote: 'Our belief is often strongest when it should be weakest. That is the nature of hope.',
    source: 'Sazed',
    citation: 'Mistborn: The Final Empire - Brandon Sanderson',
    year: '2006'
  },
  {
    quote: 'Unknowing ignorance is preferable to informed stupidity.',
    source: 'Lightsong',
    citation: 'Warbreaker - Brandon Sanderson',
    year: '2009',
    tags: ['Humor']
  },
  {
    quote: 'Aim for the sun. That way if you miss, at least your arrow will fall far away, '
         + 'and the person it kills will likely be someone you don\'t know.',
    source: 'Wit',
    citation: 'Oathbringer - Brandon Sanderson',
    year: '2017',
    tags: ['Humor','Stormlight']
  },
  {
    quote: 'Sometimes a hypocrite is nothing more than a man in the process of changing.',
    source: 'Dalinar Kholin',
    citation: 'Oathbringer - Brandon Sanderson',
    year: '2017',
    tags: ['Stormlight']
  },
  {
    quote: 'Life before death, strength before weakness, journey before destination.',
    source: 'Brandon Sanderson',
    tags: ['Stormlight']
  }
];


/***
 * `getRandomQuote` function
 * Returns a random quote from the `quotes` list.
 * Compares the quotes index to the `usedQuotes` list. Repeats until an unused quote is found
 * Adds the quote to the `usedQuotes` list, if all quotes have been used clears the `usedQuotes` list
***/
function getRandomQuote(quotes){
  let randomQuote;
  do {
    randomQuote = Math.floor(Math.random()*quotes.length);
  } while (usedQuotes.includes(randomQuote));
  usedQuotes.push(randomQuote);
  if (usedQuotes.length == quotes.length) {
    usedQuotes.length = 0;
  }
  return quotes[randomQuote];
}


/***
 * `printQuote` function
 * Prints a new quote into Body Paragraph.
 * Adds citation, year, and tag classes if they exist on the quote.
***/
function printQuote(){
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation != undefined){
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year != undefined){
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.tags != undefined){
    html += `<span class="tags"> ${randomQuote.tags.join(" - ")} </span>`;
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}


/***
 * `randomRGB` function
 * Returns a random RGB, Values limited to 100 to keep the text contrast high.
***/
function randomRGB(){
  let r = Math.floor(Math.random()*100);
  let g = Math.floor(Math.random()*100);
  let b = Math.floor(Math.random()*100);
  return `rgb(${r},${g},${b})`;
}


/***
 * `changeColor` function
 * Sets body background color to a random RGB value.
***/
function changeColor(){
  const element = document.querySelector('body');
  element.style.backgroundColor = randomRGB();
}


/**
 * `update` function
 * Randomly update the quote and colors.
 **/
function update(){
  printQuote();
  changeColor();
}

/**
 * Update the quote and color every 10 seconds.
 */
setInterval(() => {
  update();
}, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", update, false);
