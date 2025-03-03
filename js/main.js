const header = document.querySelector("header");
const nav = document.createElement("nav");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");

a1.href = "/html/index.html";
a1.innerText = "홈";
a2.href = "/html/login.html";
a2.innerText = "로그인";
a3.href = "/html/sign-up.html";
a3.innerText = "회원가입";
nav.append(a1, a2, a3);
header?.appendChild(nav);

console.log(header);
