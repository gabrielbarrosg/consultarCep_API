function consultarCep(){
    let cep = document.getElementById('cep').value;
    if (cep.length == 8 && cep > 0){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data =>{
            document.getElementById('resultado-valida-cep').innerHTML = `<p><strong>CEP:</strong> ${data.cep}</p>
                                                          <p>${data.localidade} - ${data.uf}</p>
                                                          <p>${data.logradouro} - ${data.bairro}</p>
                                                          <p><strong>Complemento:</strong> ${data.complemento}</p>`;
        })

        
    }else{
        window.alert("CEP inválido. Tente novamente;")
    }
    
}

function pesquisarCep(){
    let uf = document.getElementById('uf').value;
    let cidade = document.getElementById('cidade').value;
    let logradouro = document.getElementById('logradouro').value;
    if (logradouro.length > 50){
        
    }else{
        let url = `https://viacep.com.br/${uf}/${cidade}/${logradouro}/json/`;
        fetch(url,{
            method : "GET",
            mode: 'cors',
        }).then(response =>{
            return response.json();
        }).then(data =>{
            console.log(data);
        })
    }
}