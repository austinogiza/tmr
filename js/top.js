function openSideMenu(){document.getElementById('side-menu').style.width="250px";document.getElementById('main').style.marginleft="250px"}
function closeSideMenu()
{document.getElementById('side-menu').style.width="0px";document.getElementById('main').style.marginleft="0px"}
var dropdown=document.getElementsByClassName("dropdown-btn");var i;for(i=0;i<dropdown.length;i++){dropdown[i].addEventListener("click",function(){this.classList.toggle("active");var dropdownContent=this.nextElementSibling;if(dropdownContent.style.display==="block"){dropdownContent.style.display="none"}else{dropdownContent.style.display="block"}})}
$(document).ready(()=>{$(window).scroll(()=>{if($(this).scrollTop()>40)
{$('.arrowup').fadeIn()}
else{$('.arrowup').fadeOut()}});$('.arrowup').click(()=>{$('html ,body').animate({scrollTop:0},900)});$(window).on('scroll',()=>{if($(window).scrollTop()){$('header').addClass('black')}
else{$('header').removeClass('black')}})
$(function(){$('.lazy').Lazy()})})