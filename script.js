let button=document.querySelector('.contact');
button.onpointermove=changeInfo;
function changeInfo() {
    button.innerText="Click on me!";
}