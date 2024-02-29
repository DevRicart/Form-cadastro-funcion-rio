class funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome
    this.idade = idade
    this.cargo = cargo
  }

  seApresentar() {
    alert(
      `Me chamo ${nome.value}, tenho ${idade.value} anos e sou ${cargo.value}.`
    )
    return
  }

  trabalhar() {
    alert(`${nome.value} está trabalhando.`)
    return
  }
}

class gerente extends funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo)
    this.departamento = departamento
  }

  gerenciar() {
    alert(
      `${nome.value} está gerenciando o departamento de ${departamento.value}.`
    )
    return
  }
}

class desenvolvedor extends funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo)
    this.linguagem = linguagem
  }

  programar() {
    alert(
      `${nome.value} está programando em ${linguagem.value}, com amor.`
    )
    return
  }
}
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const cargo = document.getElementById('cargo')
const departamento = document.getElementById('departamento')
const linguagem = document.getElementById('linguagem')

function trabalhador() {
  new funcionario(nome.value, idade.value, cargo.value).seApresentar()
  new funcionario(nome.value, idade.value, cargo.value).trabalhar()
}

function gerente1() {
  new gerente(
    nome.value,
    idade.value,
    cargo.value,
    departamento.value
  ).seApresentar()
  new gerente(
    nome.value,
    idade.value,
    cargo.value,
    departamento.value
  ).gerenciar()
}

function desenvolvedor1() {
  new desenvolvedor(
    nome.value,
    idade.value,
    cargo.value,
    linguagem.value
  ).seApresentar()
  new desenvolvedor(
    nome.value,
    idade.value,
    cargo.value,
    linguagem.value
  ).programar()
}

function teste() {
  var caracteresEspeciais = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  var caracteresProgramacao = /[!@$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/
  try {
    if (/\d/.test(nome.value) || caracteresEspeciais.test(nome.value)) {
      throw new Error('O campo Nome só pode possuir letras')
    }
    if (
      /\d/.test(departamento.value) ||
      caracteresEspeciais.test(departamento.value)
    ) {
      throw new Error('O campo Departamento só pode possuir letras')
    }
    if (
      /\d/.test(linguagem.value) ||
      caracteresProgramacao.test(linguagem.value)
    ) {
      throw new Error('Digite uma linguagem válida')
    }
    if (cargo.value === 'funcionario') {
      return trabalhador()
    }
    if (cargo.value === 'gerente') {
      return gerente1()
    }
    if (cargo.value === 'desenvolvedor') {
      return desenvolvedor1()
    }
  } catch (error) {
    alert('Ocorreu um erro: ' + error.message)
  }
}
