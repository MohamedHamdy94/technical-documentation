let pre=document.getElementsByTagName('pre')
let code=document.getElementsByTagName('code')
for (i = 0; i < code.length; i++) {
pre[i].innerHTML+=' <i class="material-icons my-button" onclick="copy(this)">content_copy</i>'
}
function  copy(el){
var codeBlock = el.parentElement.children[0]
var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(codeBlock);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
}