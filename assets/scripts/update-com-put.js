

        // --Ínicio Desafio 1-- //

        import { buscaProdutos } from "./read-com-get.js";
        buscaProdutos();

        document.querySelector('#listaProdutos').addEventListener('click', event => {
            // console.log(event.target);
           
            if (event.target.closest('ul').classList.contains('produto')) {
                // console.log(event.target);
                const elementoBase = event.target.closest('ul');

                document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

                document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

                document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

            }

            verificaSeInputsEstaoPreenchidos();

        });

        // --Fim Desafio 1-- //


        // --Ínicio Desafio 2-- //

        function verificaSeInputsEstaoPreenchidos() {

            const idPreenchido = document.querySelector('input#id').value !== "";
            const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
            const precoPreenchido = document.querySelector('input#preco').value !== "";

            if (idPreenchido || descricaoPreenchido || precoPreenchido) {
                document.querySelector('button#btCancelar').removeAttribute('disabled');
                
                
            } else {
                document.querySelector('button#btCancelar').setAttribute('disabled', '');
            }

             // --Ínicio Desafio 3-- //

            if (idPreenchido) {
            document.querySelector('button#btAtualizar').removeAttribute('disabled');
        } else{
            document.querySelector('button#btAtualizar').setAttribute('disabled','');
        }
    
         // --Fim Desafio 3-- //

        }

        // Complemento desafio 2 *Desabilitar o botão no reset do formulário //

        document.querySelector('form').addEventListener('reset', () => {
            document.querySelector('button#btCancelar').setAttribute('disabled','');
            document.querySelector('button#btAtualizar').removeAttribute('disabled');
        });

        // Verifica os campos do formulário na digitação manual
        document.querySelector('form').addEventListener('input', 
            verificaSeInputsEstaoPreenchidos);
       

        // --Fim Desafio 2-- //

       

        document.querySelector('#btAtualizar').addEventListener('click', () => {

            const dados = {
                'id': null,
                'descricao': document.querySelector('#descricao').value,
                'preco': document.querySelector('#preco').value,
                'atualizado': true
            }
            console.log(JSON.stringify(dados))

            const id = document.querySelector('input#id').value;
            
            //ATUALIZA OS PRODUTOS   
            fetch(`http://localhost:3000/produtos/${id}`, { //chama o parametro com o ${}, {} chaves em ingles = curly braces
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
                .then(resposta => {
                    if (resposta.ok) {
                        alert('Produto Atualizado');
                        buscaProdutos();
                    }
                });

        });
        

            // const informacoes = ['id', 'descricao', 'preco'];

            //       function autocomplete(informacoes) {
            //         const informacoes = ['id', 'descricao','preco'];
            //         return informacoes
            //        } 

  
    