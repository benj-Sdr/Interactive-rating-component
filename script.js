const spanEl = document.getElementsByTagName('span');

//spanEl.addEventListener('click', eventHandler, false);
//This will result in addEventListener is not a function.

for(const span of spanEl) {
  span.addEventListener('click', function eventHandler() {
   localDataSt = JSON.stringify(span.textContent);
   window.sessionStorage.setItem("data", localDataSt);
 });

}
const inptEl = document.getElementsByTagName('input');
inptEl[0].addEventListener('click', function submit() {

  return window.location.href="thanks.html?data=localDataSt";
});
