// --- CATÁLOGO DE EJERCICIOS Y RANGOS ---
const catalogoEjercicios = {
    "Banco plano con barra": { musculo: "Pecho", rangos: [30, 60, 90, 120] },
    "Banco plano con mancuernas": { musculo: "Pecho", rangos: [12, 22, 34, 44] },
    "Banco inclinado con barra": { musculo: "Pecho", rangos: [25, 50, 75, 100] },
    "Banco inclinado con mancuernas": { musculo: "Pecho", rangos: [10, 20, 30, 40] },
    "Pec Deck / Mariposa": { musculo: "Pecho", rangos: [25, 45, 70, 95] },

    "Tirón al pecho en polea": { musculo: "Espalda", rangos: [30, 55, 80, 105] },
    "Remo con barra": { musculo: "Espalda", rangos: [30, 60, 85, 110] },
    "Remo con mancuerna (un brazo)": { musculo: "Espalda", rangos: [14, 26, 38, 50] },
    "Peso muerto tradicional": { musculo: "Espalda", rangos: [50, 100, 150, 200] },

    "Sentadilla libre con barra": { musculo: "Cuádriceps", rangos: [40, 80, 120, 160] },
    "Prensa 45°": { musculo: "Cuádriceps", rangos: [80, 160, 240, 320] },
    "Sillón de cuádriceps": { musculo: "Cuádriceps", rangos: [30, 55, 80, 105] },
    "Sentadilla búlgara": { musculo: "Cuádriceps", rangos: [10, 20, 30, 40] },

    "Camilla acostado (Femoral)": { musculo: "Isquiotibiales", rangos: [20, 40, 60, 80] },
    "Peso muerto rumano (Glúteos/Femoral)": { musculo: "Isquiotibiales", rangos: [35, 70, 105, 140] },

    "Aductores en máquina": { musculo: "Aductores", rangos: [20, 40, 60, 80] },
    "Abductores en máquina": { musculo: "Abductores", rangos: [20, 40, 60, 80] },

    "Gemelos de pie en máquina": { musculo: "Gemelos", rangos: [30, 60, 90, 120] },
    "Gemelos sentado": { musculo: "Gemelos", rangos: [20, 40, 60, 80] },

    "Press militar de pie con barra": { musculo: "Hombro", rangos: [20, 40, 60, 80] },
    "Vuelos laterales con mancuerna": { musculo: "Hombro", rangos: [6, 12, 18, 24] },

    "Curl de bíceps con barra recta": { musculo: "Bíceps", rangos: [15, 30, 45, 60] },
    "Curl alterno con mancuernas": { musculo: "Bíceps", rangos: [8, 16, 24, 32] },

    "Press francés con barra W": { musculo: "Tríceps", rangos: [15, 30, 45, 60] },
    "Tríceps en polea alta con cuerda": { musculo: "Tríceps", rangos: [15, 30, 45, 60] },

    "Curl de antebrazo con barra (Palmas arriba)": { musculo: "Antebrazos", rangos: [10, 20, 30, 40] }
};

const COLORES_NIVEL = {
    0: "#333333",
    1: "#ef4444",
    2: "#f97316",
    3: "#eab308",
    4: "#22c55e",
    5: "#06b6d4"
};

// --- ESTADO LOCAL ---
let entrenamientos = JSON.parse(localStorage.getItem('gym_tracker_data')) || [];
let rutinasGuardadas = JSON.parse(localStorage.getItem('gym_tracker_rutinas')) || [];
let historialSesiones = JSON.parse(localStorage.getItem('gym_tracker_logbook')) || [];
let ejerciciosRutinaTemporal = [];
let miChart = null;

// --- ELEMENTOS DOM ---
const tabRegistrarBtn = document.getElementById('btn-tab-registrar');
const tabRutinasBtn = document.getElementById('btn-tab-rutinas');
const tabNivelesBtn = document.getElementById('btn-tab-niveles');
const tabStatsBtn = document.getElementById('btn-tab-stats');
const tabLogbookBtn = document.getElementById('btn-tab-logbook');
const tabLogrosBtn = document.getElementById('btn-tab-logros');

const seccionRegistrar = document.getElementById('seccion-registrar');
const seccionRutinas = document.getElementById('seccion-rutinas');
const seccionNiveles = document.getElementById('seccion-niveles');
const seccionStats = document.getElementById('seccion-stats');
const seccionLogbook = document.getElementById('seccion-logbook');
const seccionLogros = document.getElementById('seccion-logros');

const workoutForm = document.getElementById('workout-form');
const inputEjercicio = document.getElementById('ejercicio');
const infoUltimoPeso = document.getElementById('ultimo-peso-info');
const datalistEjercicios = document.getElementById('lista-ejercicios');
const selectRutinaFiltro = document.getElementById('select-rutina-filtro');
const selectEjercicioStats = document.getElementById('select-ejercicio-stats');

const routineWorkoutForm = document.getElementById('routine-workout-form');
const contenedorEjerciciosRutina = document.getElementById('contenedor-ejercicios-rutina');

const routineForm = document.getElementById('routine-form');
const inputEjercicioRutina = document.getElementById('input-ejercicio-rutina');
const btnAgregarEjercicioRutina = document.getElementById('btn-agregar-ejercicio-rutina');
const listaEjerciciosTemporales = document.getElementById('lista-ejercicios-temporales');
const contenedorRutinasGuardadas = document.getElementById('contenedor-rutinas-guardadas');
const contenedorNivelesMusculares = document.getElementById('contenedor-niveles-musculares');
const contenedorLogbook = document.getElementById('contenedor-logbook');
const contenedorLogros = document.getElementById('contenedor-logros');

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function obtenerGrupoMuscular(nombre) {
    if (catalogoEjercicios[nombre]) return catalogoEjercicios[nombre].musculo;
    
    const n = normalizarTexto(nombre);
    if (n.includes('antebrazo')) return 'Antebrazos';
    if (n.includes('cuadriceps') || n.includes('sentadilla') || n.includes('prensa')) return 'Cuádriceps';
    if (n.includes('femoral') || n.includes('isquio') || n.includes('rumano')) return 'Isquiotibiales';
    if (n.includes('aductor')) return 'Aductores';
    if (n.includes('abductor')) return 'Abductores';
    if (n.includes('gemelo') || n.includes('pantorrilla')) return 'Gemelos';
    if (n.includes('pecho') || n.includes('banco') || n.includes('plano') || n.includes('apertura') || n.includes('mariposa') || n.includes('mapeck')) return 'Pecho';
    if (n.includes('espalda') || n.includes('remo') || n.includes('tiron') || n.includes('dominada') || n.includes('muerto') || n.includes('pullover')) return 'Espalda';
    if (n.includes('hombro') || n.includes('vuelos') || n.includes('militar') || n.includes('pajaro') || n.includes('trapecio') || n.includes('arnold')) return 'Hombro';
    if (n.includes('bicep') || n.includes('curl') || n.includes('scott') || n.includes('martillo')) return 'Bíceps';
    if (n.includes('tricep') || n.includes('frances') || n.includes('copita') || n.includes('patada') || n.includes('fondos')) return 'Tríceps';
    
    return 'Cuádriceps';
}

function calcularRangoEjercicio(nombreEjercicio, pesoMaximo) {
    let rangos = [20, 40, 60, 80];
    if (catalogoEjercicios[nombreEjercicio]) {
        rangos = catalogoEjercicios[nombreEjercicio].rangos;
    }

    if (pesoMaximo < rangos[0]) return { nivel: 1, nombre: "Novato" };
    if (pesoMaximo < rangos[1]) return { nivel: 2, nombre: "Principiante" };
    if (pesoMaximo < rangos[2]) return { nivel: 3, nombre: "Intermedio" };
    if (pesoMaximo < rangos[3]) return { nivel: 4, nombre: "Avanzado" };
    return { nivel: 5, nombre: "Élite" };
}

function cambiarPestana(pestana) {
    [tabRegistrarBtn, tabRutinasBtn, tabNivelesBtn, tabStatsBtn, tabLogbookBtn, tabLogrosBtn].forEach(b => b.classList.remove('active'));
    [seccionRegistrar, seccionRutinas, seccionNiveles, seccionStats, seccionLogbook, seccionLogros].forEach(s => s.classList.remove('active'));

    if (pestana === 'registrar') {
        tabRegistrarBtn.classList.add('active');
        seccionRegistrar.classList.add('active');
    } else if (pestana === 'rutinas') {
        tabRutinasBtn.classList.add('active');
        seccionRutinas.classList.add('active');
    } else if (pestana === 'niveles') {
        tabNivelesBtn.classList.add('active');
        seccionNiveles.classList.add('active');
        renderizarNivelesMusculares();
    } else if (pestana === 'stats') {
        tabStatsBtn.classList.add('active');
        seccionStats.classList.add('active');
        actualizarSelectStats();
    } else if (pestana === 'logbook') {
        tabLogbookBtn.classList.add('active');
        seccionLogbook.classList.add('active');
        renderizarLogbook();
    } else if (pestana === 'logros') {
        tabLogrosBtn.classList.add('active');
        seccionLogros.classList.add('active');
        renderizarLogros();
    }
}

function actualizarSugerenciasYSelects() {
    const customEjercicios = entrenamientos.map(i => i.ejercicio);
    const baseKeys = Object.keys(catalogoEjercicios);
    const listaTotal = [...new Set([...baseKeys, ...customEjercicios])].sort();

    datalistEjercicios.innerHTML = '';
    listaTotal.forEach(ej => {
        const opt = document.createElement('option');
        opt.value = ej;
        datalistEjercicios.appendChild(opt);
    });

    selectRutinaFiltro.innerHTML = '<option value="">-- Selecciona una rutina guardada --</option>';
    rutinasGuardadas.forEach((rutina, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = rutina.nombre;
        selectRutinaFiltro.appendChild(opt);
    });
}

function buscarUltimoPeso() {
    const nombre = inputEjercicio.value.trim();
    if (!nombre) {
        infoUltimoPeso.innerHTML = `💡 Buscá o escribí un ejercicio para ver cuánto tiraste la última vez.`;
        return;
    }

    const musculo = obtenerGrupoMuscular(nombre);
    const nombreNorm = normalizarTexto(nombre);
    const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === nombreNorm);

    if (previos.length > 0) {
        const maxPeso = Math.max(...previos.map(p => parseFloat(p.peso)));
        const rangoInfo = calcularRangoEjercicio(nombre, maxPeso);
        const ultimo = previos[previos.length - 1];

        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rangoInfo.nivel]}; color:#000;">${rangoInfo.nombre}</span><br>⚡ Último registro: <strong>${ultimo.peso} kg</strong> (${ultimo.repeticiones} reps) el ${ultimo.fecha}`;
    } else {
        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 💡 Es la primera vez que vas a anotar este ejercicio.`;
    }
}

inputEjercicio.addEventListener('input', buscarUltimoPeso);
inputEjercicio.addEventListener('change', buscarUltimoPeso);

function cargarRutinaParaEntrenar() {
    const idx = selectRutinaFiltro.value;
    contenedorEjerciciosRutina.innerHTML = '';

    if (idx === "") {
        routineWorkoutForm.style.display = 'none';
        return;
    }

    const rutina = rutinasGuardadas[idx];
    if (!rutina || rutina.ejercicios.length === 0) return;

    rutina.ejercicios.forEach((ej, eIdx) => {
        const musculo = obtenerGrupoMuscular(ej);
        const ejNorm = normalizarTexto(ej);
        const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === ejNorm);
        
        let historialTexto = "💡 Sin registros anteriores.";

        if (previos.length > 0) {
            const maxPeso = Math.max(...previos.map(p => parseFloat(p.peso)));
            const rangoInfo = calcularRangoEjercicio(ej, maxPeso);
            let ultimos3 = previos.slice(-3).map(p => `• <strong>${p.peso} kg</strong> x ${p.repeticiones} reps (${p.fecha})`).join('<br>');
            
            historialTexto = `🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rangoInfo.nivel]}; color:#000;">${rangoInfo.nombre}</span><br>📌 <strong>Últimas marcas:</strong><br>${ultimos3}`;
        }

        const div = document.createElement('div');
        div.className = 'routine-exercise-box';
        div.innerHTML = `
            <h4>${ej} <span class="muscle-badge">${musculo}</span></h4>
            <div class="historial-directo-box">${historialTexto}</div>
            
            <div class="form-group" style="margin-bottom: 8px;">
                <label>Series:</label>
                <input type="number" min="1" max="10" value="3" class="input-num-series" onchange="generarFilasSeries(${eIdx}, this.value)">
            </div>
            <div id="series-container-${eIdx}"></div>

            <div class="form-group" style="margin-top: 8px; margin-bottom: 0;">
                <input type="text" placeholder="📝 Nota para este ejercicio..." class="nota-ejercicio-rutina">
            </div>
        `;
        contenedorEjerciciosRutina.appendChild(div);
        generarFilasSeries(eIdx, 3);
    });

    routineWorkoutForm.style.display = 'block';
}

function generarFilasSeries(ejercicioIdx, cantidadSeries) {
    const container = document.getElementById(`series-container-${ejercicioIdx}`);
    container.innerHTML = '';

    for (let s = 1; s <= cantidadSeries; s++) {
        const row = document.createElement('div');
        row.className = 'serie-row';
        row.innerHTML = `
            <span>Serie ${s}:</span>
            <input type="number" step="0.5" min="0" placeholder="Kg" class="serie-peso" required>
            <input type="number" min="1" placeholder="Reps" class="serie-reps" required>
        `;
        container.appendChild(row);
    }
}

routineWorkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const hoy = new Date().toLocaleDateString();
    const rutinaIdx = selectRutinaFiltro.value;
    const rutina = rutinasGuardadas[rutinaIdx];
    const notaSesion = document.getElementById('nota-sesion').value.trim();

    let ejerciciosRegistrados = [];

    rutina.ejercicios.forEach((ej, eIdx) => {
        const container = document.getElementById(`series-container-${eIdx}`);
        if (!container) return;
        
        const pesos = container.querySelectorAll('.serie-peso');
        const reps = container.querySelectorAll('.serie-reps');
        const notaInput = container.parentElement.querySelector('.nota-ejercicio-rutina');
        const notaEj = notaInput ? notaInput.value.trim() : "";

        let seriesDetalle = [];
        pesos.forEach((pInput, sIdx) => {
            const pesoVal = pInput.value;
            const repsVal = reps[sIdx].value;

            if (pesoVal && repsVal) {
                const item = {
                    ejercicio: ej,
                    peso: pesoVal,
                    repeticiones: repsVal,
                    fecha: hoy,
                    nota: notaEj
                };
                entrenamientos.push(item);
                seriesDetalle.push(`${pesoVal}kg x ${repsVal} reps`);
            }
        });

        if (seriesDetalle.length > 0) {
            ejerciciosRegistrados.push({
                ejercicio: ej,
                detalle: seriesDetalle.join(" | "),
                nota: notaEj
            });
        }
    });

    if (ejerciciosRegistrados.length > 0) {
        historialSesiones.unshift({
            nombreRutina: rutina.nombre,
            fecha: hoy,
            notaSesion: notaSesion,
            ejercicios: ejerciciosRegistrados
        });
        localStorage.setItem('gym_tracker_logbook', JSON.stringify(historialSesiones));
    }

    localStorage.setItem('gym_tracker_data', JSON.stringify(entrenamientos));
    routineWorkoutForm.reset();
    routineWorkoutForm.style.display = 'none';
    selectRutinaFiltro.value = "";
    
    alert('🎉 ¡Rutina guardada con éxito en tu Logbook e historial!');
    actualizarSugerenciasYSelects();
});

workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ejercicio = inputEjercicio.value.trim();
    const peso = document.getElementById('peso').value;
    const repeticiones = document.getElementById('repeticiones').value;
    const nota = document.getElementById('nota-suelta').value.trim();
    const hoy = new Date().toLocaleDateString();

    const nuevo = { ejercicio, peso, repeticiones, fecha: hoy, nota };
    entrenamientos.push(nuevo);
    localStorage.setItem('gym_tracker_data', JSON.stringify(entrenamientos));

    workoutForm.reset();
    infoUltimoPeso.innerHTML = `💡 Buscá o escribí un ejercicio para ver cuánto tiraste la última vez.`;
    actualizarSugerenciasYSelects();
    alert('🎉 ¡Serie guardada!');
});

// --- DASHBOARD CALOR MUSCULAR ---
function renderizarNivelesMusculares() {
    contenedorNivelesMusculares.innerHTML = '';
    const grupos = ["Pecho", "Espalda", "Cuádriceps", "Isquiotibiales", "Hombro", "Bíceps", "Tríceps", "Antebrazos", "Gemelos", "Aductores", "Abductores"];

    grupos.forEach(grupo => {
        const ejerciciosDelGrupo = entrenamientos.filter(item => obtenerGrupoMuscular(item.ejercicio) === grupo);
        
        if (ejerciciosDelGrupo.length === 0) {
            contenedorNivelesMusculares.innerHTML += `
                <div class="muscle-rank-card" style="border-left-color: #333333;">
                    <h3><span>${grupo}</span> <span class="rank-badge" style="background:#333333; color:#aaa;">Sin datos</span></h3>
                    <p style="font-size:12px; color:var(--text-secondary); margin:0;">Anotá entrenamientos para medir tu nivel.</p>
                </div>
            `;
            return;
        }

        const ejerciciosUnicos = [...new Set(ejerciciosDelGrupo.map(i => i.ejercicio))];
        let sumaNiveles = 0;

        let listaDetalle = ejerciciosUnicos.map(ej => {
            const registros = ejerciciosDelGrupo.filter(i => i.ejercicio === ej);
            const maxPeso = Math.max(...registros.map(r => parseFloat(r.peso)));
            const rangoInfo = calcularRangoEjercicio(ej, maxPeso);
            sumaNiveles += rangoInfo.nivel;

            let notaTxt = registros[registros.length - 1].nota ? ` <em>(Nota: "${registros[registros.length - 1].nota}")</em>` : "";
            return `• ${ej}: <strong>${maxPeso} kg</strong> (<span style="color:${COLORES_NIVEL[rangoInfo.nivel]}">${rangoInfo.nombre}</span>)${notaTxt}`;
        }).join('<br>');

        const nivelPromedio = Math.round(sumaNiveles / ejerciciosUnicos.length);
        const nombresNivel = ["", "Novato", "Principiante", "Intermedio", "Avanzado", "Élite"];
        const nombrePromedio = nombresNivel[nivelPromedio] || "Intermedio";
        const colorCard = COLORES_NIVEL[nivelPromedio] || "#333333";

        contenedorNivelesMusculares.innerHTML += `
            <div class="muscle-rank-card" style="border-left-color: ${colorCard};">
                <h3><span>${grupo}</span> <span class="rank-badge" style="background: ${colorCard}; color: #000;">${nombrePromedio}</span></h3>
                <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin-top:6px;">
                    ${listaDetalle}
                </div>
            </div>
        `;
    });
}

// --- GRÁFICOS DE EVOLUCIÓN (STATS) ---
function actualizarSelectStats() {
    const ejerciciosUnicos = [...new Set(entrenamientos.map(i => i.ejercicio))].sort();
    selectEjercicioStats.innerHTML = '<option value="">-- Elegí un ejercicio --</option>';
    ejerciciosUnicos.forEach(ej => {
        const opt = document.createElement('option');
        opt.value = ej;
        opt.textContent = ej;
        selectEjercicioStats.appendChild(opt);
    });
}

function actualizarGraficoEvolucion() {
    const ejercicioSeleccionado = selectEjercicioStats.value;
    const ctx = document.getElementById('graficoEvolucion').getContext('2d');

    if (miChart) {
        miChart.destroy();
    }

    if (!ejercicioSeleccionado) return;

    const registros = entrenamientos.filter(i => i.ejercicio === ejercicioSeleccionado);
    
    // Agrupar peso máximo por fecha
    const datosPorFecha = {};
    registros.forEach(r => {
        const pesoNum = parseFloat(r.peso);
        if (!datosPorFecha[r.fecha] || pesoNum > datosPorFecha[r.fecha]) {
            datosPorFecha[r.fecha] = pesoNum;
        }
    });

    const fechas = Object.keys(datosPorFecha);
    const pesos = Object.values(datosPorFecha);

    miChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: 'Peso Máximo (kg)',
                data: pesos,
                borderColor: '#ffd700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { color: '#aaaaaa', font: { size: 10 } }, grid: { color: '#2c2c2c' } },
                y: { ticks: { color: '#aaaaaa', font: { size: 10 } }, grid: { color: '#2c2c2c' } }
            },
            plugins: { legend: { labels: { color: '#ffffff' } } }
        }
    });
}

// --- LOGBOOK (HISTORIAL GLOBAL) ---
function renderizarLogbook() {
    contenedorLogbook.innerHTML = '';
    if (historialSesiones.length === 0) {
        contenedorLogbook.innerHTML = `<p class="empty-notice">No hay sesiones de rutinas guardadas todavía.</p>`;
        return;
    }

    historialSesiones.forEach((sesion, idx) => {
        let ejerciciosHtml = sesion.ejercicios.map(e => `
            <div style="font-size: 13px; margin-top: 4px;">
                <strong>${e.ejercicio}:</strong> ${e.detalle} 
                ${e.nota ? `<br><small style="color:var(--accent);">Nota: ${e.nota}</small>` : ''}
            </div>
        `).join('');

        contenedorLogbook.innerHTML += `
            <div class="logbook-card">
                <h3><span>⚡ ${sesion.nombreRutina}</span> <small style="font-size:12px; color:var(--text-secondary);">${sesion.fecha}</small></h3>
                ${sesion.notaSesion ? `<p style="font-size: 12px; color: var(--accent); margin: 4px 0;">📝 "${sesion.notaSesion}"</p>` : ''}
                <div style="margin-top: 8px; border-top: 1px solid var(--border-color); padding-top: 6px;">
                    ${ejerciciosHtml}
                </div>
            </div>
        `;
    });
}

// --- LOGROS Y MEDALLAS ---
function renderizarLogros() {
    contenedorLogros.innerHTML = '';

    const totalEntrenos = entrenamientos.length;
    const pesoMaxAbsoluto = entrenamientos.length > 0 ? Math.max(...entrenamientos.map(i => parseFloat(i.peso))) : 0;
    const totalSesiones = historialSesiones.length;

    const listaLogros = [
        {
            titulo: "Primeros Pasos",
            desc: "Registrá tu primer ejercicio en la app.",
            icono: "🐣",
            desbloqueado: totalEntrenos > 0
        },
        {
            titulo: "Bestia de Carga",
            desc: "Superá los 100 kg en cualquier ejercicio.",
            icono: "🦍",
            desbloqueado: pesoMaxAbsoluto >= 100
        },
        {
            titulo: "Constancia de Hierro",
            desc: "Completá y guardá 3 rutinas entrenando.",
            icono: "🔥",
            desbloqueado: totalSesiones >= 3
        },
        {
            titulo: "Atleta Dedicado",
            desc: "Registrá más de 20 series totales en tu historial.",
            icono: "⚡",
            desbloqueado: totalEntrenos >= 20
        }
    ];

    listaLogros.forEach(l => {
        contenedorLogros.innerHTML += `
            <div class="logro-item ${l.desbloqueado ? 'desbloqueado' : ''}">
                <div class="logro-icono">${l.icono}</div>
                <div class="logro-info">
                    <h4>${l.titulo} ${l.desbloqueado ? '✅' : '🔒'}</h4>
                    <p>${l.desc}</p>
                </div>
            </div>
        `;
    });
}

// Rutinas
btnAgregarEjercicioRutina.addEventListener('click', () => {
    const ej = inputEjercicioRutina.value.trim();
    if (ej && !ejerciciosRutinaTemporal.includes(ej)) {
        ejerciciosRutinaTemporal.push(ej);
        renderizarEjerciciosTemporales();
        inputEjercicioRutina.value = '';
    }
});

function renderizarEjerciciosTemporales() {
    listaEjerciciosTemporales.innerHTML = '';
    if (ejerciciosRutinaTemporal.length === 0) {
        listaEjerciciosTemporales.innerHTML = `<li class="empty-notice">Todavía no agregaste ejercicios.</li>`;
        return;
    }

    ejerciciosRutinaTemporal.forEach((ej, idx) => {
        const musculo = obtenerGrupoMuscular(ej);
        const li = document.createElement('li');
        li.className = 'temp-item';
        li.innerHTML = `
            <div>
                <span>${ej}</span>
                <span class="muscle-badge" style="margin-left: 10px;">${musculo}</span>
            </div>
            <button class="icon-btn" onclick="quitarEjercicioTemporal(${idx})" title="Quitar">❌</button>
        `;
        listaEjerciciosTemporales.appendChild(li);
    });
}

function quitarEjercicioTemporal(idx) {
    ejerciciosRutinaTemporal.splice(idx, 1);
    renderizarEjerciciosTemporales();
}

routineForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreRutina = document.getElementById('nombre-rutina').value.trim();

    if (ejerciciosRutinaTemporal.length === 0) {
        alert('Agregá por lo menos un ejercicio a la rutina.');
        return;
    }

    const nuevaRutina = {
        nombre: nombreRutina,
        ejercicios: [...ejerciciosRutinaTemporal]
    };

    rutinasGuardadas.push(nuevaRutina);
    localStorage.setItem('gym_tracker_rutinas', JSON.stringify(rutinasGuardadas));

    document.getElementById('nombre-rutina').value = '';
    inputEjercicioRutina.value = '';
    ejerciciosRutinaTemporal = [];
    renderizarEjerciciosTemporales();
    renderizarRutinasGuardadas();
    actualizarSugerenciasYSelects();
    alert('🎉 ¡Rutina guardada con éxito!');
});

function renderizarRutinasGuardadas() {
    contenedorRutinasGuardadas.innerHTML = '';
    if (rutinasGuardadas.length === 0) {
        contenedorRutinasGuardadas.innerHTML = `<p class="empty-notice">No tenés rutinas guardadas.</p>`;
        return;
    }

    rutinasGuardadas.forEach((rutina, idx) => {
        const card = document.createElement('div');
        card.className = 'routine-card';

        let ejerciciosHtml = rutina.ejercicios.map(ej => {
            const musculo = obtenerGrupoMuscular(ej);
            return `
                <div class="routine-exercise-item">
                    <span>${ej}</span>
                    <span class="muscle-badge">${musculo}</span>
                </div>
            `;
        }).join('');

        card.innerHTML = `
            <div class="routine-card-header">
                <h3>${rutina.nombre}</h3>
                <button class="icon-btn" onclick="eliminarRutina(${idx})" title="Borrar rutina">🗑️</button>
            </div>
            <div class="routine-exercises-container">
                ${ejerciciosHtml}
            </div>
        `;
        contenedorRutinasGuardadas.appendChild(card);
    });
}

function eliminarRutina(idx) {
    if (confirm('¿Querés borrar esta rutina?')) {
        rutinasGuardadas.splice(idx, 1);
        localStorage.setItem('gym_tracker_rutinas', JSON.stringify(rutinasGuardadas));
        renderizarRutinasGuardadas();
        actualizarSugerenciasYSelects();
    }
}

// Inicio
actualizarSugerenciasYSelects();
renderizarRutinasGuardadas();