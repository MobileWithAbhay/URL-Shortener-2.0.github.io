var link = document.querySelector('.link');
var links = document.querySelector('.links');

function getData(){
  url = "https://api.shrtco.de/v2/shorten?url="
  url2 = link.value;
  url3 = url + url2;
  console.log(url3);
  fetch(url3).then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data);
    links.classList.add('active');
     document.querySelector('.link1').value = data.result.full_short_link; 
     document.querySelector('.link2').value = data.result.full_short_link2;
     document.querySelector('.link3').value = data.result.full_short_link3;
     document.querySelector('.link4').value =
     data.result.full_share_link;
  });
}

function Shortener(){
     if(link.value!= ""){
        getData();
         
     }
     else{
       alert('Enter Your Url');
     }
 }
 
var link1 = document.querySelector('.link1');
var link2 = document.querySelector('.link2');
var link3 = document.querySelector('.link3');
var link4 = document.querySelector('.link4');

function clipboard1() {
  if (link1.value != "") {
  const textarea = document.createElement('textarea');
  const resultE = link1.value;
  if (!link1) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('URL Copied to Clipboard');
  }
}
function clipboard2() {
  if (link2.value != "") {
  const textarea = document.createElement('textarea');
  const resultE = link2.value;
  if (!link2) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('URL Copied to Clipboard');
  }
}
function clipboard3() {
  if (link3.value != "") {
  const textarea = document.createElement('textarea');
  const resultE = link3.value;
  if (!link3) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('URL Copied to Clipboard');
  }
}
function clipboard4() {
  if (link4.value != "") {
    const textarea = document.createElement('textarea');
    const resultE = link4.value;
    if (!link2) { return; }
    textarea.value = resultE;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('URL Copied to Clipboard');
  }
}
