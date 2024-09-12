/* FUNCTION:

function start() {
    console.log ('comecou')
}

start()

OU FUNCTION ARROW

const start() => {
    console.log ("comecou")
}
*/

const start = () => {

    while (true) { 
        let opcao = "sair"
        switch(opcao){
            case "cadrastrar":
                console.log("vamos cadrastar")
                break//serve para acabar um case
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}
start () 
