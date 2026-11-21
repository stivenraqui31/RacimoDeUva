document.addEventListener("DOMContentLoaded", () => {
    const TELEFONO_WHATSAPP = "51953815602";

    // --- MODO OSCURO / CLARO ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        if (themeIcon) themeIcon.className = "fas fa-sun";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            let theme = "dark";
            if (document.body.classList.contains("light-mode")) {
                theme = "light";
                if (themeIcon) themeIcon.className = "fas fa-sun";
            } else {
                if (themeIcon) themeIcon.className = "fas fa-moon";
            }
            localStorage.setItem("theme", theme);
        });
    }

    const productos = [
        {
            id: 1,
            categoria: "vinos",
            subcategoria: "Cosecha Propia",
            nombre: "Vino Borgoña Negra - Cosecha Propia",
            descripcion: "Vino semiseco artesanal de uva negra seleccionada, aroma intenso y dulce natural.",
            precio: 28.00,
            img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            categoria: "vinos",
            subcategoria: "Cosecha Propia",
            nombre: "Vino Quebranta Seco - Cosecha Propia",
            descripcion: "Elaborado con uvas quebranta de nuestros viñedos, cuerpo robusto ideal para carnes.",
            precio: 32.00,
            img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            categoria: "vinos",
            subcategoria: "Cosecha Propia",
            nombre: "Vino Rosé de la Casa - Cosecha Propia",
            descripcion: "Fresco, afrutado y ligero, perfecto para celebraciones y tardes soleadas.",
            precio: 30.00,
            img: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            categoria: "vinos",
            subcategoria: "Comercial",
            nombre: "Vino Tinto Gran Reserva (Comercial)",
            descripcion: "Selección comercial de bodega reconocida, notas a roble y frutos rojos.",
            precio: 45.00,
            img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            categoria: "vinos",
            subcategoria: "Comercial",
            nombre: "Vino Blanco Chenin Blanc (Comercial)",
            descripcion: "Vino blanco comercial refrescante con notas cítricas y equilibrada acidez.",
            precio: 38.00,
            img: "https://images.unsplash.com/photo-1566754436893-98224ee05be4?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            categoria: "macerados",
            subcategoria: "Artesanal",
            nombre: "Macerado de Maracuyá en Pisco",
            descripcion: "Pisco puro macerado con pulpa natural de maracuyá. Cítrico y exótico.",
            precio: 35.00,
            img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            categoria: "macerados",
            subcategoria: "Artesanal",
            nombre: "Macerado de Aguaymanto",
            descripcion: "Maceración lenta de aguaymanto peruano en pisco quebranta de primera.",
            precio: 38.00,
            img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            categoria: "macerados",
            subcategoria: "Artesanal",
            nombre: "Macerado de Canela y Clavo",
            descripcion: "Aromático y cálido, ideal para disfrutar puro o en cócteles de invierno.",
            precio: 35.00,
            img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 9,
            categoria: "macerados",
            subcategoria: "Artesanal",
            nombre: "Macerado de Hoja de Coca",
            descripcion: "Tradicional macerado andino con propiedades digestivas y sabor herbal.",
            precio: 40.00,
            img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 10,
            categoria: "piscos",
            subcategoria: "Puro",
            nombre: "Pisco Puro Quebranta 750ml",
            descripcion: "El clásico peruano. Potente, estructurado y perfecto para Pisco Sour.",
            precio: 48.00,
            img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 11,
            categoria: "piscos",
            subcategoria: "Aromático",
            nombre: "Pisco Italia Aromático 750ml",
            descripcion: "Notas florales, pasas rubias y cítricos. Ideal para Chilcanos.",
            precio: 52.00,
            img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 12,
            categoria: "piscos",
            subcategoria: "Acholado",
            nombre: "Pisco Acholado Premium 750ml",
            descripcion: "Ensamblaje perfecto de uvas pisqueras aromáticas y no aromáticas.",
            precio: 55.00,
            img: "https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 13,
            categoria: "piscos",
            subcategoria: "Mosto Verde",
            nombre: "Pisco Mosto Verde Torontel",
            descripcion: "Destilado de mostos frescos, textura aterciopelada y elegancia superior.",
            precio: 68.00,
            img: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 14,
            categoria: "cremas",
            subcategoria: "Crema",
            nombre: "Crema de Pisco sabor Lúcuma",
            descripcion: "Suave fusión de crema láctea, pisco puro y auténtica lúcuma peruana.",
            precio: 36.00,
            img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 15,
            categoria: "cremas",
            subcategoria: "Crema",
            nombre: "Crema de Pisco sabor Café",
            descripcion: "Intenso aroma a café tostado con el toque exacto de pisco seleccionado.",
            precio: 36.00,
            img: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 16,
            categoria: "cremas",
            subcategoria: "Crema",
            nombre: "Crema de Pisco sabor Algarrobina",
            descripcion: "Dulce tradición norteña combinada con la suavidad de nuestro pisco.",
            precio: 38.00,
            img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 17,
            categoria: "cremas",
            subcategoria: "Crema",
            nombre: "Crema de Pisco sabor Chocolate",
            descripcion: "Cacao fino peruano y crema de pisco para disfrutar bien helado.",
            precio: 38.00,
            img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80"
        }
    ];

    let carrito = [];

    function renderProductos(filtroVino = 'todos') {
        const tracks = {
            vinos: document.getElementById('track-vinos'),
            macerados: document.getElementById('track-macerados'),
            piscos: document.getElementById('track-piscos'),
            cremas: document.getElementById('track-cremas')
        };

        Object.values(tracks).forEach(track => {
            if (track) track.innerHTML = '';
        });

        productos.forEach(prod => {
            if (prod.categoria === 'vinos' && filtroVino !== 'todos' && prod.subcategoria !== filtroVino) {
                return;
            }

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <span class="product-tag">${prod.subcategoria}</span>
                    <img src="${prod.img}" alt="${prod.nombre}">
                </div>
                <div class="product-info">
                    <div>
                        <h4>${prod.nombre}</h4>
                        <p>${prod.descripcion}</p>
                    </div>
                    <div class="product-footer">
                        <span class="price">S/ ${prod.precio.toFixed(2)}</span>
                        <button class="add-btn" data-id="${prod.id}">
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            `;

            if (tracks[prod.categoria]) {
                tracks[prod.categoria].appendChild(card);
            }
        });
    }

    const catalogSection = document.querySelector('.catalog-section');
    if (catalogSection) {
        catalogSection.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-btn');
            if (btn) {
                const id = parseInt(btn.getAttribute('data-id'));
                agregarAlCarrito(id);
            }
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProductos(btn.getAttribute('data-filter'));
        });
    });

    document.querySelectorAll('.ctrl-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const trackId = btn.getAttribute('data-target');
            const distance = parseInt(btn.getAttribute('data-dir'));
            const track = document.getElementById(trackId);
            if (track) track.scrollBy({ left: distance, behavior: 'smooth' });
        });
    });

    const cartModal = document.getElementById('cart-modal');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');

    if (openCartBtn && cartModal) {
        openCartBtn.addEventListener('click', () => {
            cartModal.classList.add('open');
        });
    }
    if (closeCartBtn && cartModal) {
        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('open');
        });
    }

    function agregarAlCarrito(id) {
        const producto = productos.find(p => p.id === id);
        const itemExistente = carrito.find(item => item.id === id);

        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        actualizarCarrito();
        if (cartModal) cartModal.classList.add('open');
    }

    function cambiarCantidad(id, delta) {
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito[index].cantidad += delta;
            if (carrito[index].cantidad <= 0) {
                carrito.splice(index, 1);
            }
        }
        actualizarCarrito();
    }

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.qty-btn');
            if (btn) {
                const id = parseInt(btn.getAttribute('data-id'));
                const delta = parseInt(btn.getAttribute('data-delta'));
                cambiarCantidad(id, delta);
            }
        });
    }

    function actualizarCarrito() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');

        let totalItems = 0;
        let totalPrecio = 0;

        if (!cartItemsContainer) return;

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-msg">Tu carrito está vacío.</p>';
        } else {
            cartItemsContainer.innerHTML = '';
            carrito.forEach(item => {
                totalItems += item.cantidad;
                totalPrecio += item.precio * item.cantidad;

                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.nombre}</h4>
                            <span>S/ ${(item.precio * item.cantidad).toFixed(2)} (S/ ${item.precio.toFixed(2)} c/u)</span>
                        </div>
                        <div class="cart-item-controls">
                            <button class="qty-btn" data-id="${item.id}" data-delta="-1">-</button>
                            <span>${item.cantidad}</span>
                            <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                        </div>
                    </div>
                `;
            });
        }

        if (cartCount) cartCount.innerText = totalItems;
        if (cartTotal) cartTotal.innerText = `S/ ${totalPrecio.toFixed(2)}`;
    }

    // --- WHATSAPP CON FORMATO EXACTO SOLICITADO ---
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (carrito.length === 0) {
                alert("Por favor, agrega al menos una bebida a tu carrito antes de realizar el pedido.");
                return;
            }

            const nombreInput = document.getElementById('cliente-nombre');
            const entregaSelect = document.getElementById('cliente-entrega');
            const direccionInput = document.getElementById('cliente-direccion');

            const nombre = nombreInput ? nombreInput.value.trim() || "Cliente" : "Cliente";
            const entrega = entregaSelect ? entregaSelect.value : "Recojo en tienda";
            const direccion = direccionInput ? direccionInput.value.trim() || "Por coordinar" : "Por coordinar";

            let mensaje = `🍷 *NUEVO PEDIDO - VIÑEDOS EL RACIMO DE UVA* 🍇\n\n`;
            mensaje += `👤 *Cliente:* ${nombre}\n`;
            mensaje += `🚚 *Modalidad:* ${entrega}\n`;
            mensaje += `📍 *Destino / Dirección:* ${direccion}\n\n`;
            mensaje += `📋 *DETALLE DEL PEDIDO:*\n`;

            let total = 0;
            carrito.forEach(item => {
                const subtotal = item.precio * item.cantidad;
                total += subtotal;
                mensaje += `▪️ ${item.cantidad}x ${item.nombre} - S/ ${subtotal.toFixed(2)}\n`;
            });

            mensaje += `\n💰 *TOTAL A PAGAR: S/ ${total.toFixed(2)}*\n\n`;
            mensaje += `_Enviado desde la web oficial de Viñedos El Racimo de Uva (Atención 24/7)_`;

            const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    renderProductos();
});
