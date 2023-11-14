// Eventos
// const button = document.querySelector("button");
// button?.addEventListener("pointerdown", handleClick);
// function handleClick(event: MouseEvent) {
//   console.log(event.pageX);
// }
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// Eventos e instanceof
// // function ativarMenu(event: MouseEvent | TouchEvent | KeyboardEvent) {
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) {
//     console.log(event);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches[0].pageX);
//   }
// }
// document.documentElement.addEventListener("mousedown", ativarMenu);
// document.documentElement.addEventListener("touchstart", ativarMenu);
// document.documentElement.addEventListener("keydown", ativarMenu);
// this
// const button = document.querySelector("button");
// button?.addEventListener("click", ativarMenu);
// function ativarMenu(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }
// const button = document.querySelector("button");
// button?.addEventListener("click", ativarMenu);
// function ativarMenu(event: MouseEvent) {
//   const elemento = event.currentTarget;
//   if (elemento instanceof HTMLElement) {
//     console.log(elemento.innerText);
//   }
// }
// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const navClass = document.getElementById("nav");
const btnMobile = document.getElementById("btn-mobile");
navClass?.addEventListener("click", menuActive);
function menuActive(event) {
  if (btnMobile instanceof HTMLElement && navClass) {
    // Ativo
    if (navClass.classList.contains("active")) {
      navClass.classList.remove("active");
      btnMobile.setAttribute("aria-expanded", "false");
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
    // Inativo
    else {
      navClass.classList.add("active");
      btnMobile.setAttribute("aria-expanded", "true");
      btnMobile.setAttribute("aria-label", "Fechar Menu");
    }
  }
  console.log(event);
}
// Solução Origamid
// const navClass = document.getElementById("nav");
// const btnMobile = event.currentTarget;
// function toggleMenu(event: PointerEvent) {
//   if (btnMobile instanceof HTMLElement && navClass) {
//     const active = nav.classList.contains('active')
//     if (active) {
//       navClass.classList.remove("active");
//       btnMobile.setAttribute("aria-expanded", "false");
//       btnMobile.setAttribute("aria-label", "Abrir Menu");
//     }
//     // Inativo
//     else {
//       navClass.classList.add("active");
//       btnMobile.setAttribute("aria-expanded", "true");
//       btnMobile.setAttribute("aria-label", "Fechar Menu");
//     }
//   }
//   console.log(event);
// }
// navClass?.addEventListener("click", toggleMenu);
