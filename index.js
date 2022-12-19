function getImage(){
fetch;"file:///home/tugi/Downloads/undraw_scientist_re_fs04%20(1).svg"
fetch;image.png
console.log("image.png")
}

el = document.querySelector('#foo')
var request = new XMLHttpRequest()
request.open('GET', 'bar.svg', true)

request.onreadystatechange = function() {
  if (this.readyState !== 4) return
  if (this.status !== 200) return
  el.innerHTML = this.responseText
}
request.send()
// bar.svg is inserted in element with ID 'foo'

fetch('bar.svg').then("...")

fetch('bar.svg')
    .then(r => r.text())
    .then(text => {
        el.innerHTML = text;
    })
    .catch(console.error.bind(console));

    
