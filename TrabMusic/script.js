let cartCount = 0;

        function addToCart(product) {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
            alert(product + ' foi adicionado ao carrinho!');
        }

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Mensagem enviada com sucesso!');
        });