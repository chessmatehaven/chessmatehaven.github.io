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

let shareDiv = document.createElement('div');

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
// AddToAny BEGIN

shareDiv.innerHTML =
`
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_facebook"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_email"></a>
</div>
`;

let shareScript = document.createElement('script');

shareScript.src = 'https://static.addtoany.com/menu/page.js';

shareScript.async = 'true';

let popadsScript = document.createElement('script');

popadsScript.innerText =
`
/*<![CDATA[/* */
(function(){if(window.ccde90257621b854b22344a0c825b210) return; window.ccde90257621b854b22344a0c825b210="EYVz9CKas9KBN1NO4Po5TvQI5JOTqE5xZmRJ-z9bF4SlX1SsCWTlfLwsliukQISbWG6bdzkZ2JG-AzqJzw";var a=['wpPDhcOKG8O1dsOYwpJbf8Oo','acKpBsKu','Mhw+RsK/bEDCtEXCtcKpwrITAg==','w6LCujVqwrrCrA==','w7LCqyJiwr7CvcOkw7vCksOAKH/DoA==','HEYzHglIYxB7Mg==','eVPDhh44w5E=','T8O8WiLDgQ==','fVTDmzkjw4HCkMKqwobCqMKRw4g=','wq7DncOLTTlECcK+C8KzwrAG','OMK1wrAuHn0=','w77Dm8OVwpgpw5zDjz5a','woHDv2jDmsOCeUUb','NUsBWMKKwoDCjHbCusOGwr/Dp8Kg','YMOjYADDo8O4wpAKw5I9LxrDp24h','P2/DrWUKw7vDocOe','w6DChxjCicOSUEERaTYsZA==','cAjDgzApwo3DpcKtwofCvcKNw4rComfDhsOCbiZRw7UHwqTCuR0xYwzCvsKRNkvDlT4RecOPCzdAwpQzw6FVw5E=','w65gw7Ft','wqU3wq/CmnLDmcKGw4lYwoHDrhfDqMK5wp/DgwgTZcOXwqhIVcORR8O4w4ZEw7HDp0khwr7Dj8OIw6F4bsKVc8KW','DMKMGlleEy1c','wo7DrmjDr8OdJgdRJ2PCqcKXfH15w5krbsKMTw==','e8OofQbCvsO9woM=','w758w6dpWMO2woE=','w6zDh8OZ','MRA8WsKhfA=='];(function(b,c){var f=function(g){while(--g){b['push'](b['shift']());}};f(++c);}(a,0x180));var c=function(b,d){b=b-0x0;var e=a[b];if(c['HfATqD']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['wnITbF']=g;c['LXUAWL']={};c['HfATqD']=!![];}var f=c['LXUAWL'][b];if(f===undefined){if(c['kXenpd']===undefined){c['kXenpd']=!![];}e=c['wnITbF'](e,d);c['LXUAWL'][b]=e;}else{e=f;}return e;};var k=window;k[c('0x7','7]%k')]=[[c('0x10','ZBuL'),0x4c345b],[c('0xc','aI02'),0x0],[c('0x8','TQxR'),'0'],[c('0x16','J)O!'),0x0],[c('0x3','l7Gb'),![]],[c('0x13','u*Gf'),0x0],[c('0xf','l]dA'),!0x0]];var g=[c('0x19','ywkh'),c('0x17','aI02')],z=0x0,b,h=function(){if(!g[z])return;b=k[c('0x15','*sm0')][c('0xa','r46n')](c('0x5','TQxR'));b[c('0x18','l7Gb')]=c('0x14','GU]q');b[c('0xd','9eH[')]=!0x0;var d=k[c('0x0','l(X*')][c('0x1','w7g]')](c('0x9','r46n'))[0x0];b[c('0x4','Qchb')]=c('0x12','w7g]')+g[z];b[c('0x6','G%GN')]=c('0x11','Qchb');b[c('0x2','GU]q')]=function(){z++;h();};d[c('0xb','MZwP')][c('0xe','aI02')](b,d);};h();})();
/*]]>/* */
`;

popadsScript.async = 'false';

// Save Scroll Position

  window.addEventListener('scroll', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
  window.addEventListener('load', () => {
    let scrollPosition = localStorage.getItem('scrollPosition');
    if(scrollPosition){
      window.scrollTo(0, scrollPosition);
      // localStorage.removeItem('scrollPosition');
    }
  });

window.addEventListener('unload', () => {
    window.location.reload();
});

moreScripts.append(shareScript);
moreScripts.append(popadsScript);
//moreScripts.append(scrollPositionScript);
additionalContent.append(wordCountDiv);
additionalContent.append(homeButton);
additionalContent.append(progressBarDiv);
additionalContent.append(shareDiv);
/*
additionalContent.appendChild(commentsDiv);
moreScripts.appendChild(commentSDK);
*/