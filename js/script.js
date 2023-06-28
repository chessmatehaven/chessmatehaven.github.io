// Select the HTML element containing the text you want to count
var element = document.body;

// Retrieve the text content from the selected element
var text = element.textContent;

// Split the text into an array of words, considering whitespace as separators
var words = text.split(/\s+/);

// Get the total word count
var wordCount = words.length;

var additionalContent = document.getElementById('additionalContent');

let wordCountDiv = document.createElement('div');

let homeButton = document.createElement('div');

homeButton.className = 'homeButtonDiv';

homeButton.addEventListener('click', () => {
  window.location.href = '../index.html';
});

wordCountDiv.innerHTML =
`
<p class="wordCount">Word Count: ${wordCount}</p>
`;

homeButton.innerHTML =
`
<button class="homeButton">Home</button>
`;

additionalContent.append(wordCountDiv);
additionalContent.append(homeButton);