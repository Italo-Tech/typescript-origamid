// const video = document.querySelector(".player") as HTMLVideoElement;
// erro runtime, não existe volume de null
// video.volume;

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}
