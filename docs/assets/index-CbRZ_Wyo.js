(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const b=n=>{const c=n-273.15;return parseFloat(c.toFixed(2))},g=n=>{const c=parseFloat(n)+273.15;return parseFloat(c.toFixed(2))};let r="on";const u=document.querySelector(".tabla__buttom"),f=document.querySelector(".celsius"),v=document.querySelector(".kelvin"),a=document.querySelector(".nigth-change"),m=document.querySelector(".tabla"),y=document.querySelector(".autor__texto"),p=document.querySelector(".input_kelvin"),_=document.querySelector(".input_celsius"),l=document.querySelector(".tabla__kelvin"),s=document.querySelector(".tabla__celsius");u.addEventListener("click",()=>{r==="on"?(u.textContent="celsius",f.style.color="red",v.style.color="black",p.textContent="CELSIUS:",_.textContent="KELVIN:",s.value="",l.value="",r="off"):(u.textContent="kelvin",v.style.color="red",f.style.color="black",p.textContent="KELVIN:",_.textContent="CELSIUS:",s.value="",l.value="",r="on")});l.addEventListener("input",()=>{const n=l.value;let t;r==="on"&&l.value?t=b(n):(t=g(n),s.value=""),s.value=t});s.addEventListener("input",()=>{const n=s.value;let t;r==="on"&&s.value?t=g(n):(t=b(n),l.value=""),l.value=t});a.addEventListener("click",()=>{r==="on"?(a.innerHTML='<i class="nigth-change fa-solid fa-moon"></i>',r="off",m.style.background="#242424",y.style.color="white"):(m.style.background="#C8C8C8",a.innerHTML='<i class="day-change fa-solid fa-sun"></i>',r="on",y.style.color="black")});