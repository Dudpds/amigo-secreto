let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;


    if (nome === "") {
        alert("Você precisa digitar um nome!");
    } else {
        amigos.push(nome); 

        
        let li = document.createElement("li");
        li.textContent = nome; 
        document.getElementById("listaAmigos").appendChild(li);
    }

    document.getElementById("amigo").value = "";
}

    function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
    } else {
      
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado]; 

        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; 
        let li = document.createElement("li");
        li.textContent = "Amigo sorteado: " + amigoSorteado; 
        resultado.appendChild(li); 
    }
}
