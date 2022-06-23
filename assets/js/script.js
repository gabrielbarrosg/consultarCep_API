function preencherForm(data){
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
}

function consultarCep(){
    let cep = document.getElementById('cep').value;
    if (cep.length == 8 && cep > 0){
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data =>{
            preencherForm(data);
            /*document.getElementById('resultado-valida-cep').innerHTML = `<p><strong>CEP:</strong> ${data.cep}</p>
                                                          <p>${data.localidade} - ${data.uf}</p>
                                                          <p>${data.logradouro} - ${data.bairro}</p>
                                                          <p><strong>Complemento:</strong> ${data.complemento}</p>`;*/
        })

        
    }else{
        window.alert("CEP inválido. Tente novamente;")
    }
    
}

