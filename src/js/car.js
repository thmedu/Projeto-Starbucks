 document.addEventListener('DOMContentLoaded', () => {
            const carrinho = {};
            const cartCount = document.getElementById('cart-count');

            function atualizarContadorCarrinho() {
                const totalItens = Object.values(carrinho).reduce((acc, quantidade) => acc + quantidade, 0);
                cartCount.textContent = totalItens;
            }

            const produtos = document.querySelectorAll('.produto');

            produtos.forEach(produto => {
                const btnMenos = produto.querySelector('.btn-quantidade:first-child');
                const btnMais = produto.querySelector('.btn-quantidade:last-child');
                const quantidade = produto.querySelector('.quantidade span');
                const btnAdicionar = produto.querySelector('.btn-adicionar');

                const produtoId = produto.getAttribute('data-id');
                let quantidadeAtual = parseInt(quantidade.textContent);

                function atualizarQuantidade(produtoId, quantidade) {
                    if (quantidade > 0) {
                        carrinho[produtoId] = quantidade;
                    } else {
                        delete carrinho[produtoId];
                    }
                    atualizarContadorCarrinho();
                }

                function atualizarQuantidadeVisivel() {
                    quantidade.textContent = quantidadeAtual;
                    atualizarQuantidade(produtoId, quantidadeAtual);
                }

                btnMenos.addEventListener('click', () => {
                    if (quantidadeAtual > 1) {
                        quantidadeAtual--;
                        atualizarQuantidadeVisivel();
                    }
                });

                btnMais.addEventListener('click', () => {
                    quantidadeAtual++;
                    atualizarQuantidadeVisivel();
                });

                btnAdicionar.addEventListener('click', () => {
                    if (quantidadeAtual > 0) {
                        alert(`Produto ${produtoId} adicionado ao carrinho com quantidade ${quantidadeAtual}!`);
                    } else {
                        alert('Selecione uma quantidade antes de adicionar ao carrinho.');
                    }
                });

                atualizarQuantidade(produtoId, quantidadeAtual);
            });

            atualizarContadorCarrinho();
        });