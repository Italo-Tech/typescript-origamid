// Exemplo 1
// function extractText<Tipo extends HTMLElement>(el: Tipo): string {
//   return el.innerText;
// }

// const link = document.querySelector('a');

// if (link) {
//   console.log(extractText(link));
//   // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
// }

// Exemplo 2
// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>('a')?.href;

// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector<HTMLAnchorElement>(".link");
link?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.nome);
}
