type Pessoa = {
    name: string,
    idade:number,
    casado:boolean,
    trabalho:profissao
}

enum profissao{
    Atriz,
    Padeiro,
    Cantora,
    Piloto
}

type name = {
    Maria
    Roberto

}

const Maria: Pessoa= {
    name: 'Maria',
    idade: 26,
    casado: false,
    trabalho: profissao.Atriz
}

const Carlos: Pessoa = {
    name: 'Carlos',
    idade: 19,
    casado: false,
    trabalho: profissao.Piloto
}