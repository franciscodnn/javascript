class Curso {
    #nome;
    #cargaHoraria;
    #grandeArea;

    constructor(nome, cargaHoraria, grandeArea) {
        this.#nome = nome;
        this.#cargaHoraria = cargaHoraria;
        this.#grandeArea = grandeArea;
    }

    imprimirDadosCurso() {
        console.log(`Informações sobre o curso: ${this.#nome} - ${this.#cargaHoraria} - ${this.#grandeArea}`);
    }
}

class TSI extends Curso {
    #percentualPraticas;
    #percentualTeoricas;

    constructor(nome, cargaHoraria, grandeArea, percentualPraticas, percentualTeoricas) {
        super(nome, cargaHoraria, grandeArea);
        this.#percentualPraticas = percentualPraticas;
        this.#percentualTeoricas = percentualTeoricas;
    }

    imprimirDadosCurso() {
        super.imprimirDadosCurso();
        let result = `Carga Horária (Práticas - Teóricas): ${this.#percentualPraticas} - ${this.#percentualTeoricas}`;

        console.log(result);
    }
}

export { Curso, TSI };