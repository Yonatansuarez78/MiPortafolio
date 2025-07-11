
        // 1. Fecha y hora de la visita
    const fechaHora = new Date().toISOString();

    // 2. Dirección IP usando API externa (ipinfo.io)
    fetch('https://ipinfo.io?token=tu_token')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;

    // 3. Información del navegador y sistema operativo (User Agent)
    const userAgent = navigator.userAgent;

    // 4. Resolución de la pantalla
    const anchoPantalla = window.screen.width;
    const altoPantalla = window.screen.height;

    // 5. Idioma del navegador
    const idioma = navigator.language || navigator.userLanguage;

    // 6. Geolocalización (requiere permiso del usuario)
    let ubicacion = "No disponible";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            ubicacion = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
            enviarWhatsApp(ip, userAgent, fechaHora, anchoPantalla, altoPantalla, idioma, ubicacion);
        });
                } else {
        enviarWhatsApp(ip, userAgent, fechaHora, anchoPantalla, altoPantalla, idioma, ubicacion);
                }
            })
            .catch(err => console.error('Error al obtener IP:', err));

    // 7. Detección del tipo de dispositivo (móvil, tablet, PC)
    const esMovil = /Mobi|Android/i.test(navigator.userAgent);
    const esTablet = /Tablet|iPad/i.test(navigator.userAgent);
    const esPC = !esMovil && !esTablet;

    // 8. Preferencias de color (modo oscuro o claro)
    const modoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 9. Página de referencia (referrer)
    const referente = document.referrer;

    // 10. Cookies y datos de sesión
    const cookie = document.cookie; // Lee las cookies del navegador

    // Función para enviar la información a WhatsApp
    function enviarWhatsApp(ip, userAgent, fechaHora, anchoPantalla, altoPantalla, idioma, ubicacion) {
            // Construir el mensaje
            const mensaje = encodeURIComponent(`
    Información de la visita:

    Fecha y hora: ${fechaHora}
    Dirección IP: ${ip}
    Navegador y Sistema Operativo: ${userAgent}
    Resolución de pantalla: ${anchoPantalla}x${altoPantalla}
    Idioma del navegador: ${idioma}
    Ubicación: ${ubicacion}
    ¿Es móvil?: ${esMovil}
    ¿Es tablet?: ${esTablet}
    ¿Es PC?: ${esPC}
    Modo oscuro activado: ${modoOscuro}
    Página de origen: ${referente}
    Cookies: ${cookie}
    `);

    // Número de WhatsApp al que enviar el mensaje (ejemplo para España: +34)
    const numeroWhatsapp = "+573182268916";  // Cambia este número por el que deseas

    // Enlace de WhatsApp
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsapp}?text=${"Ingreso a tu portafolio"}`;

    // Redirigir al enlace de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
        }