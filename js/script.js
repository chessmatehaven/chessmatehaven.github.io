// Select the HTML element containing the text you want to count
var element = document.body;

// Retrieve the text content from the selected element
var text = element.textContent;

// Split the text into an array of words, considering whitespace as separators
var words = text.split(/\s+/);

// Get the total word count
var wordCount = words.length;

let additionalContent = document.getElementById('additionalContent');

let moreScripts = document.getElementById('moreScripts');

let wordCountDiv = document.createElement('div');

let homeButton = document.createElement('div');

let commentsDiv = document.createElement('div');

let progressBarDiv = document.createElement('div');

progressBarDiv.className = 'progressBar';

homeButton.className = 'homeButtonDiv';

homeButton.addEventListener('click', () => {
  window.location.href = '../index.html';
});

wordCountDiv.innerHTML = `
<p class="wordCount">Word Count: ${wordCount}</p>
`;

homeButton.innerHTML = `
<button class="homeButton">Home</button>
`;

/*
commentsDiv.innerHTML = '<div id="disqus_thread"></div>';

let commentSDK = document.createElement('script');

commentSDK.src = '//chessmate-haven.disqus.com/count.js';

commentSDK.addEventListener('load', function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://chessmate-haven.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
});
commentSDK.async = 'true';


let progressBarScript = document.createElement('script');
progressBarScript.defer = 'true';
progressBarScript.async = 'true';

progressBarScript.addEventListener('load', () => {
  
});
*/

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrolled = window.scrollY;

  const progressWidth = (scrolled / (fullHeight - windowHeight)) * 100;
  progressBarDiv.style.width = progressWidth + '%';

});

additionalContent.appendChild(wordCountDiv);
additionalContent.appendChild(homeButton);
additionalContent.appendChild(progressBarDiv);
/*
additionalContent.appendChild(commentsDiv);
moreScripts.appendChild(commentSDK);
*/