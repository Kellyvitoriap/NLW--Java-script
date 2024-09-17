- **function:**  Realiza uma tarefa específica ou calcula um valor.
    
    EX:
    
    ```jsx
    function somar (a ,b){
    return a + b //vai retornar o valor da soma de 'a' e 'b'.
    }
    //A função somar vai somar os valores a e b 
    //e retornara o resultado de a + b
    ```
    
- **var** : Variável em que se pode alterar o valor durante a execução do código
    
    ```jsx
    var modal = document.getElementById("myModal") 
    //A variavel modal recebe o elemento com o id myModal.
    ```
    
- **let** :Variável em que seu valor não pode ser alterado durante a execução do código
    - **Escopo de bloco**: Variáveis declaradas com `let` são limitadas ao bloco em que são declaradas, ou seja, entre `{}`. Isso evita o "vazamento" de variáveis para fora do bloco, o que acontece com `var`.
        
        Exemplo:
        
        ```jsx
        
        if (true) {
            let x = 10;
            console.log(x); // Funciona, exibe 10
        }
        console.log(x); // Erro: x não está definido fora do bloco
        
        ```
        
    - **Não permite redeclaração**: Diferente de `var`, uma variável declarada com `let` **não pode ser redeclarada** no mesmo escopo.
        
        Exemplo:
        
        ```jsx
        javascript
        Copiar código
        let x = 5;
        let x = 10; // Erro: não pode redeclarar 'x'
        
        ```
        
    - **Pode ser atualizado**: Você pode atribuir um novo valor a uma variável declarada com `let`, mas não pode redeclará-la no mesmo escopo.
        
        Exemplo:
        
        ```jsx
        javascript
        Copiar código
        let y = 20;
        y = 30; // Funciona, o valor de 'y' é atualizado
        console.log(y); // Exibe: 30
        
        ```
        
    - **Não sofre de "hoisting" como `var`**: Embora o "hoisting" (elevação da declaração de variáveis) ainda ocorra com `let`, ele não inicializa a variável com `undefined`, como acontece com `var`. Isso significa que você **não pode usar uma variável `let` antes de declará-la**.
        
        Exemplo:
        
        ```jsx
        javascript
        Copiar código
        console.log(z); // Erro: Cannot access 'z' before initialization
        let z = 50;
        
        ```
        
- **const** : Variável, que não pode ser alterada.
    
    ```jsx
    const numer = 10;
    numero = 20; // Erro :assignment to contant variable
    ```
    
- **console.log**: Exibe dados no console
    
    EX: Exibindo variável
    
    ```jsx
    let nome = "Maria"
    console.log(nome) //Exibe:Maria
    
    //A variavel nome recebe Maria 
    //Exibir no console a variavel nome
    ```
    
- **switch** : Avalia expressões, Dependendo do valor resultante dessa expressão, o programa procura um **`case`** correspondente. Se encontrar um `case` correspondente, executa o bloco de código associado àquele `case`. Se nenhum `case` for correspondido, o `switch` pode executar um bloco **`default`** (caso opcional), que age como um "plano B".
    
    ```jsx
    let dia = 3;
    
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");  // Este bloco será executado
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        default:
            console.log("Dia inválido");
    }
    
    ```
    
    ### Componentes do `switch`:
    
    - **`expressao`**: A expressão ou variável que será avaliada (geralmente uma variável ou valor).
    - **`case valor`**: Define um valor que a expressão pode assumir. Se a expressão for igual a esse valor, o código associado será executado.
    - **`break`**: Interrompe a execução do `switch`. Sem o `break`, o programa continua executando o próximo `case`, mesmo que ele não corresponda.
    - **`default`**: (Opcional) Especifica um bloco de código que será executado se nenhum dos `cases` corresponder ao valor da expressão.
- **Operadores  Aritméticos** : Realizam cálculos matemáticos básicos,
    - **adição**  : + , Soma dois valores.
    - **subtração** : - , Subtrai o segundo valor do primeiro.
    - **multiplicação** : * , Multiplica dois valores.
    - **divisão** : / , Divide dois valores.
    - **modulo** : % , Retorna o resto da divisão de dois valores.
    - **Exponenciação** : ** , Eleva o primeiro valor a potência do segundo.
- **Operadores de incremento e Decremento:**
    
    **Incremento (`++`)**: Aumenta o valor de uma variável em 1.
    
    - **Pré-incremento (`++a`)**: Incrementa antes de usar o valor.
    - **Pós-incremento (`a++`)**: Usa o valor e depois incrementa.
    
    **Decremento (`--`)**: Diminui o valor de uma variável em 1.
    
    - **Pré-decremento (`-a`)**: Decrementa antes de usar o valor.
    - **Pós-decremento (`a--`)**: Usa o valor e depois decrementa.