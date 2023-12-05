type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  dados.portas;
  dados.preco;
  dados.rodas;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

//Com interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

const dado1: InterfaceCarro = {
  preco: 2000,
  rodas: 4,
  portas: 5,
};

// Com type
type TypeCarro = {
  rodas: number;
  portas: number;
};

type TypeCarroWithPrice = TypeCarro & {
  preco: number;
};

const dado2: TypeCarroWithPrice = {
  preco: 5000,
  portas: 5,
  rodas: 5,
};

console.log(dado1);
console.log(dado2);

interface Windown {
  userId: number;
}

window.userId = 200;
