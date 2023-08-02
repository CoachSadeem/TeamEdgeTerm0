// Load content onload if it exists in localStorage
window.onload = function() {
	if(localStorage.getItem('content')) {
		document.querySelector('.content').innerHTML = localStorage.getItem('content');
  }
}

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('.content');

editBtn.addEventListener('click', () => {
  // Toggle contentEditable on button click
	content.contentEditable = !content.isContentEditable;
  
  // If disabled, save text
  if(content.contentEditable === 'false') {
  	localStorage.setItem('content', content.innerHTML);
  }
});