// Declaração de uma classe chamada 'heroiDeAventura'
class heroiDeAventura {
    // O construtor inicializa o objeto com nome, idade e tipo
    constructor(nome, idade, tipo) {    
        this.nome = nome;
        this.idade = idade;
        
        // Verifica se o tipo fornecido é válido
        const tiposValidos = ["guerreiro", "mago", "monge", "ninja"];
        if (!tiposValidos.includes(tipo)) {
            throw new Error(`Tipo inválido: ${tipo}. Tipos válidos são: ${tiposValidos.join(", ")}`);
        }
        this.tipo = tipo;
    }
        
    // Método para apresentar a pessoa
    atacar() {
        let ataque;
        // Verifica as condições com base no tipo
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else {
            ataque = "usou shuriken";
        }
        // Exibe a mensagem com a ação correspondente
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância da classe 'heroiDeAventura' e chamando o método 'atacar'
try {
    let heroi = new heroiDeAventura("Caio", 36, "jogador");
    heroi.atacar(); // Se chegar aqui, não deveria.
} catch (error) {
    console.error(error.message); // Saída: Tipo inválido: jogador. Tipos válidos são: guerreiro, mago, monge, ninja
}
