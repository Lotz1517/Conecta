document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const pageTitle = document.title; // Guardar el título original de la página

    const loadContent = (html, title) => {
        content.innerHTML = html;
        document.title = title ? `${title} | Conecta` : pageTitle;
    };

    const homeContent = `
        <h2>Bienvenido a Conecta Servicios</h2>
        <p>​​Tu plataforma confiable y eficiente que te conecta con profesionales de diversos servicios con clientes cerca de ti, facilitándote transacciones seguras y eficientes.​ </p>
        <p>Seleccione una opción de la barra de navegación.</p>
    `;

    const inscripcionContent = `
        <h2>Inscribirse como Empresa</h2>
        <p>Aquí va el formulario de inscripción...</p>
    `;

    const calificarContent = `
        <h2>Calificar Empresa</h2>
        <form id="calificar-form">
            <div class="form-group">
                <label for="servicio">Servicio:</label>
                <select id="servicio-calificacion" name="servicio-calificacion" required></select>
            </div>
            <div class="form-group">
                <label for="empresa">Empresa:</label>
                <select id="empresa-calificacion" name="empresa-calificacion" type="text" required></select>
            </div>
            <div class="form-group">
                <label for="calificacion">Calificación:</label>
                <input type="number" id="calificacion" name="calificacion" min="1" max="5" required>
            </div>
            <div class="form-group">
                <label for="comentarios">Comentarios:</label>
                <textarea id="comentarios" name="comentarios" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Enviar Calificación</button>
            </div>
        </form>
    `;

    const solicitarServiciosContent = `
        <h2>Solicitar Servicios</h2>
       
       

          <div class="container_rav">
        <h3>Portal de selecciones para su necesidad…</h3>
        
        <!-- Búsqueda de Servicios -->
        <div class="search-container_rav">
            <h2>Búsqueda de Servicios</h2>
            <select id="category">
                <option value="">Seleccionar Categoría</option>
                <option value="Plomería">Plomería</option>
                <option value="Electricidad">Electricidad</option>
                <option value="Carpintería">Carpintería</option>
                <option value="Albañileria">Albañileria</option>
            </select>
            <button onclick="searchServices()">Buscar</button>
        </div>

        <!-- Filtrado por Calificaciones -->
        <div class="filter-container_rav">
            <h2>Filtrado por Calificaciones</h2>
            <select id="rating">
                <option value="">Seleccionar Calificación</option>
                <option value="5">5 Estrellas</option>
                <option value="4">4 Estrellas</option>
                <option value="3">3 Estrellas</option>
                <option value="2">2 Estrellas</option>
                <option value="1">1 Estrella</option>
            </select>
            <button onclick="filterByRating()">Filtrar</button>
        </div>

        <!-- Visualización de Perfiles de Profesionales -->
        <div class="profile-container_rav">
            <h2>Perfiles de Profesionales</h2>
            <div id="profiles"></div>
        </div>

        <!-- Vista de Detalle del Profesional -->
        <div class="detail-container_rav">
            <h2>Detalle del Profesional</h2>
            <div id="professionalDetail" class="profile"></div>
        </div>

        <!-- Reserva de Servicios -->
        <div class="reservation-container_rav">
            <h2>Reserva de Servicios</h2>
            <div id="reservationForm">
                <input type="date" id="serviceDate" placeholder="Seleccionar Fecha">
                <input type="time" id="serviceTime" placeholder="Seleccionar Hora">
                <button onclick="reserveService()">Reservar</button>
            </div>
            <div id="confirmation">
                <p id="confirmationMessage"></p>
                <button onclick="showPayment()">Continuar con el Pago</button>
            </div>
            <div id="payment-section">
                <h3>Pago</h3>
                <input type="text" placeholder="Nombre en la Tarjeta">
                <input type="text" placeholder="Número de la Tarjeta">
                <button onclick="confirmPayment()">Confirmar Pago</button>
            </div>
            <div id="modify-cancel">
                <button onclick="modifyReservation()">Modificar Reserva</button>
                <button onclick="cancelReservation()">Cancelar Reserva</button>
            </div>
        </div>
    </div>


    `;

    const verCalificacionContent = `
        <h2>Ver Calificación de Empresa</h2>
        <p>Aquí va la lista de calificaciones de empresas...</p>
    `;

    const verEstadisticasContent = `
        <h2>Ver Estadísticas de Solicitudes</h2>
        <p>Aquí van las estadísticas de solicitudes...</p>
    `;

    loadContent(homeContent, 'Inicio');

    document.getElementById('home-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent(homeContent, 'Inicio');
    });

    document.getElementById('inscripcion-button').addEventListener('click', () => {
        loadContent(inscripcionContent, 'Inscribirse como Empresa');
    });

    document.getElementById('calificar-button').addEventListener('click', () => {
        loadContent(calificarContent, 'Calificar Empresa');
        document.getElementById('calificar-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const calificacionData = {
                servicio: formData.get('servicio'),
                empresa: formData.get('empresa'),
                calificacion: formData.get('calificacion'),
                comentarios: formData.get('comentarios')
            };
            console.log(calificacionData);
            alert('Calificación enviada con éxito');
        });
    });

    document.getElementById('solicitar-servicios-button').addEventListener('click', () => {
        loadContent(solicitarServiciosContent, 'Solicitar Servicios');
        
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/

    });

    document.getElementById('ver-calificacion-button').addEventListener('click', () => {
        loadContent(verCalificacionContent, 'Ver Calificación de Empresa');
    });

    document.getElementById('ver-estadisticas-button').addEventListener('click', () => {
        loadContent(verEstadisticasContent, 'Ver Estadísticas de Solicitudes');
    });
    
    document.getElementById('cerrar-sesion-button').addEventListener('click', () => {
        window.location.href = 'Login.html';
    });

    




});
