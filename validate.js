// await == aguarde.
// then == então. 
// catch == pegue.
// finally == finalmente.
// try == tentar
// curso 7 alura: melhorendo o mesmo codigo.
async function buscaEndereco(cep){
    try{ 
      const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const consultaCepConvertida = await consultaCep.json();
      if (consultaCepConvertida.erro){
        throw Error('CEP inexistente!');
      }
      console.log(consultaCepConvertida);
      return consultaCepConvertida;
      } catch(erro) {
          console.log(erro);
          }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout",() => buscaEndereco(cep.value));