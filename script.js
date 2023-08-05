const bar = document.getElementsByClassName('bar');
const nav = document.getElementsByClassName('navbar-1');
if (bar) {
  bar.addEventListener('click',()=> {
    nav.classList.add('active');
  })
}
