var addBtn = document.querySelector('#revealBtn')
var stopBtn = document.querySelector('#stpbtn')
var main = document.querySelector('main')
var nameInput = document.querySelector('#nameInput')

var messageInput = document.querySelector('#messageInput')
var intervalId = null;

// Start button - begins generating divs
addBtn.addEventListener('click', function(){
    if(intervalId) return;
    
    intervalId = setInterval(function(){
        let div = document.createElement('div')
        // var c1 = Math.floor(Math.random()*256);
        // var c2 = Math.floor(Math.random()*256);
        // var c3 = Math.floor(Math.random()*256);
        var x = Math.random()*90; 
        var y = Math.random()*90;
        
        // Get input values
        var textToShow = Math.random() > 0.5 ? nameInput.value : messageInput.value;
        
        div.textContent = textToShow; // Add text instead of circle
        // div.style.color = `rgb(${c1},${c2},${c3})`
         div.style.color = "white"
        div.style.position = 'absolute'
        div.style.top = y + '%'
        div.style.left = x + '%'
        div.style.fontWeight = 'bold'
        div.style.fontSize = '50px'
        div.style.whiteSpace = 'nowrap'
        
        main.appendChild(div)
    }, 20); 
    
});

// Stop button - stops generating divs
stopBtn.addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
});

