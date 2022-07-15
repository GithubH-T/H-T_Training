function count(event){
    console.log(event.target.value.length);
    const counterElement = document.getElementById ('counter');
    counterElement.innerText = event.target.value.length;
}

function handleKeyDown(event) {
    console.log('handleKeyDown')
}