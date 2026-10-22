// --- CATÁLOGO DE EJERCICIOS (CON MARCA UNILATERAL) ---
const catalogoEjercicios = {
    // PECHO
    "Banco plano con barra": { musculo: "Pecho", rangos: [30, 60, 90, 120], unilateral: false },
    "Banco plano con mancuernas": { musculo: "Pecho", rangos: [30, 60, 90, 120], unilateral: true },
    "Banco inclinado con barra": { musculo: "Pecho", rangos: [25, 50, 75, 100], unilateral: false },
    "Banco inclinado con mancuernas": { musculo: "Pecho", rangos: [25, 50, 75, 100], unilateral: true },
    "Banco declinado": { musculo: "Pecho", rangos: [30, 65, 95, 125], unilateral: false },
    "Aperturas en banco plano": { musculo: "Pecho", rangos: [16, 28, 44, 60], unilateral: true },
    "Cruce de poleas": { musculo: "Pecho", rangos: [20, 40, 60, 80], unilateral: true },
    "Pec Deck / Mariposa": { musculo: "Pecho", rangos: [25, 45, 70, 95], unilateral: false },
    "Flexiones de brazo (Push-ups)": { musculo: "Pecho", rangos: [0, 15, 30, 50], unilateral: false },

    // ESPALDA
    "Tirón al pecho en polea": { musculo: "Espalda", rangos: [30, 55, 80, 105], unilateral: false },
    "Remo con barra": { musculo: "Espalda", rangos: [30, 60, 85, 110], unilateral: false },
    "Remo con mancuerna (un brazo)": { musculo: "Espalda", rangos: [28, 52, 76, 100], unilateral: true },
    "Remo bajo en polea (Gironda)": { musculo: "Espalda", rangos: [30, 55, 80, 105], unilateral: false },
    "Peso muerto tradicional": { musculo: "Espalda", rangos: [50, 100, 150, 200], unilateral: false },
    "Dominadas": { musculo: "Espalda", rangos: [0, 10, 20, 35], unilateral: false },
    "Pull-over en polea alta": { musculo: "Espalda", rangos: [15, 30, 45, 60], unilateral: false },

    // CUÁDRICEPS
    "Sentadilla libre con barra": { musculo: "Cuádriceps", rangos: [40, 80, 120, 160], unilateral: false },
    "Prensa 45°": { musculo: "Cuádriceps", rangos: [80, 160, 240, 320], unilateral: false },
    "Sillón de cuádriceps": { musculo: "Cuádriceps", rangos: [30, 55, 80, 105], unilateral: false },
    "Sentadilla búlgara": { musculo: "Cuádriceps", rangos: [20, 40, 60, 80], unilateral: true },
    "Hack Squat": { musculo: "Cuádriceps", rangos: [40, 90, 140, 190], unilateral: false },
    "Estocadas / Zancadas": { musculo: "Cuádriceps", rangos: [20, 40, 60, 80], unilateral: true },

    // ISQUIOTIBIALES
    "Camilla acostado (Femoral)": { musculo: "Isquiotibiales", rangos: [20, 40, 60, 80], unilateral: false },
    "Peso muerto rumano": { musculo: "Isquiotibiales", rangos: [35, 70, 105, 140], unilateral: false },
    "Femoral sentado en máquina": { musculo: "Isquiotibiales", rangos: [20, 45, 70, 95], unilateral: false },

    // ADUCTORES Y ABDUCTORES
    "Aductores en máquina": { musculo: "Aductores", rangos: [20, 40, 60, 80], unilateral: false },
    "Abductores en máquina": { musculo: "Abductores", rangos: [20, 40, 60, 80], unilateral: false },

    // GEMELOS
    "Gemelos de pie en máquina": { musculo: "Gemelos", rangos: [30, 60, 90, 120], unilateral: false },
    "Gemelos sentado": { musculo: "Gemelos", rangos: [20, 40, 60, 80], unilateral: false },
    "Elevación de talones con mancuerna": { musculo: "Gemelos", rangos: [20, 40, 60, 80], unilateral: true },

    // HOMBRO
    "Press militar de pie con barra": { musculo: "Hombro", rangos: [20, 40, 60, 80], unilateral: false },
    "Press sentado con mancuernas": { musculo: "Hombro", rangos: [20, 40, 60, 80], unilateral: true },
    "Vuelos laterales con mancuerna": { musculo: "Hombro", rangos: [12, 24, 36, 48], unilateral: true },
    "Vuelos posteriores (Pájaro)": { musculo: "Hombro", rangos: [12, 24, 36, 48], unilateral: true },
    "Encogimientos de hombros (Trapecio)": { musculo: "Hombro", rangos: [20, 45, 70, 95], unilateral: false },

    // BÍCEPS
    "Curl de bíceps con barra recta": { musculo: "Bíceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Curl alterno con mancuernas": { musculo: "Bíceps", rangos: [16, 32, 48, 64], unilateral: true },
    "Curl martillo con mancuernas": { musculo: "Bíceps", rangos: [20, 36, 52, 68], unilateral: true },
    "Curl en banco Scott / Predicador": { musculo: "Bíceps", rangos: [12, 25, 38, 50], unilateral: false },

    // TRÍCEPS
    "Press francés con barra W": { musculo: "Tríceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Tríceps en polea alta con cuerda": { musculo: "Tríceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Copita sobre la cabeza": { musculo: "Tríceps", rangos: [12, 22, 32, 42], unilateral: false },
    "Fondos en paralelas": { musculo: "Tríceps", rangos: [0, 10, 20, 35], unilateral: false },

    // ANTEBRAZOS
    "Curl de antebrazo (Palmas arriba)": { musculo: "Antebrazos", rangos: [10, 20, 30, 40], unilateral: false },
    "Curl de antebrazo reverso (Palmas abajo)": { musculo: "Antebrazos", rangos: [8, 15, 22, 30], unilateral: false }
};

const COLORES_NIVEL = {
    0: "#333333",
    1: "#ef4444",
    2: "#f97316",
    3: "#eab308",
    4: "#22c55e",
    5: "#06b6d4"
};

let entrenamientos = JSON.parse(localStorage.getItem('gym_tracker_data')) || [];
let rutinasGuardadas = JSON.parse(localStorage.getItem('gym_tracker_rutinas')) || [];
let historialSesiones = JSON.parse(localStorage.getItem('gym_tracker_logbook')) || [];
let temaGuardado = localStorage.getItem('gym_tracker_tema') || 'default';
let ejerciciosRutinaTemporal = [];
let miChart = null;

const tabRegistrarBtn = document.getElementById('btn-tab-registrar');
const tabRutinasBtn = document.getElementById('btn-tab-rutinas');
const tabNivelesBtn = document.getElementById('btn-tab-niveles');
const tabStatsBtn = document.getElementById('btn-tab-stats');
const tabLogbookBtn = document.getElementById('btn-tab-logbook');
const tabLogrosBtn = document.getElementById('btn-tab-logros');
const tabConfigBtn = document.getElementById('btn-tab-config');

const seccionRegistrar = document.getElementById('seccion-registrar');
const seccionRutinas = document.getElementById('seccion-rutinas');
const seccionNiveles = document.getElementById('seccion-niveles');
const seccionStats = document.getElementById('seccion-stats');
const seccionLogbook = document.getElementById('seccion-logbook');
const seccionLogros = document.getElementById('seccion-logros');
const seccionConfig = document.getElementById('seccion-config');

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

function esEjercicioUnilateral(nombre) {
    if (catalogoEjercicios[nombre] !== undefined) {
        return catalogoEjercicios[nombre].unilateral;
    }
    const n = normalizarTexto(nombre);
    return n.includes('mancuerna') || n.includes('alterno') || n.includes('un brazo') || n.includes('una pierna') || n.includes('bulgara');
}

function obtenerGrupoMuscular(nombre) {
    if (catalogoEjercicios[nombre]) return catalogoEjercicios[nombre].musculo;
    
    const n = normalizarTexto(nombre);
    if (n.includes('antebrazo')) return 'Antebrazos';
    if (n.includes('cuadriceps') || n.includes('sentadilla') || n.includes('prensa') || n.includes('bulgara') || n.includes('hack')) return 'Cuádriceps';
    if (n.includes('femoral') || n.includes('isquio') || n.includes('rumano')) return 'Isquiotibiales';
    if (n.includes('aductor')) return 'Aductores';
    if (n.includes('abductor')) return 'Abductores';
    if (n.includes('gemelo') || n.includes('pantorrilla') || n.includes('talon')) return 'Gemelos';
    if (n.includes('pecho') || n.includes('banco') || n.includes('plano') || n.includes('apertura') || n.includes('mariposa') || n.includes('flexiones')) return 'Pecho';
    if (n.includes('espalda') || n.includes('remo') || n.includes('tiron') || n.includes('dominada') || n.includes('muerto') || n.includes('pullover')) return 'Espalda';
    if (n.includes('hombro') || n.includes('vuelos') || n.includes('militar') || n.includes('pajaro') || n.includes('trapecio')) return 'Hombro';
    if (n.includes('bicep') || n.includes('curl') || n.includes('scott') || n.includes('martillo')) return 'Bíceps';
    if (n.includes('tricep') || n.includes('frances') || n.includes('copita') || n.includes('fondos')) return 'Tríceps';
    
    return 'Cuádriceps';
}

function calcularRangoEjercicio(nombreEjercicio, pesoIngresado) {
    const esUnilateral = esEjercicioUnilateral(nombreEjercicio);
    const pesoEfectivo = esUnilateral ? (pesoIngresado * 2) : pesoIngresado;

    let rangos = [20, 40, 60, 80];
    if (catalogoEjercicios[nombreEjercicio]) {
        rangos = catalogoEjercicios[nombreEjercicio].rangos;
    }

    if (pesoEfectivo < rangos[0]) return { nivel: 1, nombre: "Novato", pesoEfectivo };
    if (pesoEfectivo < rangos[1]) return { nivel: 2, nombre: "Principiante", pesoEfectivo };
    if (pesoEfectivo < rangos[2]) return { nivel: 3, nombre: "Intermedio", pesoEfectivo };
    if (pesoEfectivo < rangos[3]) return { nivel: 4, nombre: "Avanzado", pesoEfectivo };
    return { nivel: 5, nombre: "Élite", pesoEfectivo };
}

// --- TEMAS VISUALES ---
function cambiarTemaColor(nombreTema) {
    document.body.className = ''; // Limpiar clases anteriores
    if (nombreTema !== 'default') {
        document.body.classList.add(`theme-${nombreTema}`);
    }
    localStorage.setItem('gym_tracker_tema', nombreTema);
    
    // Si hay un gráfico renderizado, actualizar su color
    if (selectEjercicioStats && selectEjercicioStats.value) {
        actualizarGraficoEvolucion();
    }
}

function cargarTemaGuardado() {
    const select = document.getElementById('select-tema');
    if (select) select.value = temaGuardado;
    cambiarTemaColor(temaGuardado);
}

function cambiarPestana(pestana) {
    [tabRegistrarBtn, tabRutinasBtn, tabNivelesBtn, tabStatsBtn, tabLogbookBtn, tabLogrosBtn, tabConfigBtn].forEach(b => b && b.classList.remove('active'));
    [seccionRegistrar, seccionRutinas, seccionNiveles, seccionStats, seccionLogbook, seccionLogros, seccionConfig].forEach(s => s && s.classList.remove('active'));

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
    } else if (pestana === 'config') {
        tabConfigBtn.classList.add('active');
        seccionConfig.classList.add('active');
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
    const esUnil = esEjercicioUnilateral(nombre);
    const nombreNorm = normalizarTexto(nombre);
    const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === nombreNorm);

    let textoAclaratorio = esUnil ? `<br><small style="color:var(--text-secondary);">💡 Ejercicio unilateral: Ingresá el peso de 1 sola mancuerna/lado.</small>` : "";

    if (previos.length > 0) {
        const maxPeso = Math.max(...previos.map(p => parseFloat(p.peso)));
        const rangoInfo = calcularRangoEjercicio(nombre, maxPeso);
        const ultimo = previos[previos.length - 1];

        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rangoInfo.nivel]}; color:#000;">${rangoInfo.nombre}</span><br>⚡ Último registro: <strong>${ultimo.peso} kg ${esUnil ? '/lado' : ''}</strong> (${ultimo.repeticiones} reps) el ${ultimo.fecha}${textoAclaratorio}`;
    } else {
        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 💡 Es la primera vez que vas a anotar este ejercicio.${textoAclaratorio}`;
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
        const esUnil = esEjercicioUnilateral(ej);
        const ejNorm = normalizarTexto(ej);
        const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === ejNorm);
        
        let historialTexto = "💡 Sin registros anteriores.";
        let notaUnilateral = esUnil ? `<br><small style="color:var(--text-secondary);">(Ingresá peso por lado/mancuerna)</small>` : "";

        if (previos.length > 0) {
            const maxPeso = Math.max(...previos.map(p => parseFloat(p.peso)));
            const rangoInfo = calcularRangoEjercicio(ej, maxPeso);
            let ultimos3 = previos.slice(-3).map(p => `• <strong>${p.peso} kg ${esUnil ? '/lado' : ''}</strong> x ${p.repeticiones} reps (${p.fecha})`).join('<br>');
            
            historialTexto = `🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rangoInfo.nivel]}; color:#000;">${rangoInfo.nombre}</span><br>📌 <strong>Últimas marcas:</strong><br>${ultimos3}`;
        }

        const div = document.createElement('div');
        div.className = 'routine-exercise-box';
        div.innerHTML = `
            <h4>${ej} <span class="muscle-badge">${musculo}</span> ${notaUnilateral}</h4>
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
        const esUnil = esEjercicioUnilateral(ej);

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
                seriesDetalle.push(`${pesoVal}kg${esUnil ? '/lado' : ''} x ${repsVal} reps`);
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
    
    alert('🎉 ¡Rutina guardada con éxito!');
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

// DASHBOARD DE RANGOS
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
            const esUnil = esEjercicioUnilateral(ej);

            let aclaracionUnil = esUnil ? ` <em>(${maxPeso}kg/lado = ${rangoInfo.pesoEfectivo}kg total)</em>` : "";
            let notaTxt = registros[registros.length - 1].nota ? ` <em>(Nota: "${registros[registros.length - 1].nota}")</em>` : "";
            return `• ${ej}: <strong>${maxPeso} kg</strong>${aclaracionUnil} (<span style="color:${COLORES_NIVEL[rangoInfo.nivel]}">${rangoInfo.nombre}</span>)${notaTxt}`;
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

// GRÁFICOS Y CÁLCULO DE 1RM TEÓRICO (STATS)
function actualizarSelectStats() {
    const ejerciciosUnicos = [...new Set(entrenamientos.map(i => i.ejercicio))].sort();
    selectEjercicioStats.innerHTML = '<option value="">-- Elegí un ejercicio --</option>';
    ejerciciosUnicos.forEach(ej => {
        const opt = document.createElement('option');
        opt.value = ej;
        opt.textContent = ej;
        selectEjercicioStats.appendChild(opt);
    });
    document.getElementById('rm-teorico-banner').style.display = 'none';
}

function actualizarGraficoEvolucion() {
    const ejercicioSeleccionado = selectEjercicioStats.value;
    const ctx = document.getElementById('graficoEvolucion').getContext('2d');
    const rmBanner = document.getElementById('rm-teorico-banner');
    const rmValor = document.getElementById('rm-valor');

    if (miChart) {
        miChart.destroy();
    }

    if (!ejercicioSeleccionado) {
        rmBanner.style.display = 'none';
        return;
    }

    const registros = entrenamientos.filter(i => i.ejercicio === ejercicioSeleccionado);
    const esUnil = esEjercicioUnilateral(ejercicioSeleccionado);
    
    // Cálculo de 1RM Teórico (Fórmula Brzycki)
    let mejor1RM = 0;
    registros.forEach(r => {
        const p = parseFloat(r.peso);
        const pesoEfectivo = esUnil ? (p * 2) : p;
        const reps = parseInt(r.repeticiones) || 1;
        
        if (reps < 37) {
            let rmCalculado = pesoEfectivo * (36 / (37 - reps));
            if (rmCalculado > mejor1RM) {
                mejor1RM = rmCalculado;
            }
        }
    });

    if (mejor1RM > 0) {
        rmValor.textContent = `${Math.round(mejor1RM)} kg`;
        rmBanner.style.display = 'block';
    } else {
        rmBanner.style.display = 'none';
    }

    const datosPorFecha = {};
    registros.forEach(r => {
        const pesoNum = parseFloat(r.peso);
        const pesoEfectivo = esUnil ? (pesoNum * 2) : pesoNum;
        if (!datosPorFecha[r.fecha] || pesoEfectivo > datosPorFecha[r.fecha]) {
            datosPorFecha[r.fecha] = pesoEfectivo;
        }
    });

    const fechas = Object.keys(datosPorFecha);
    const pesos = Object.values(datosPorFecha);

    // Obtener el color del acento actual desde CSS
    const colorAccent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#ffd700';

    miChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: esUnil ? 'Peso Total Calculado (kg acumulado ambos lados)' : 'Peso Máximo (kg)',
                data: pesos,
                borderColor: colorAccent,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderWidth: 2,
                fill: true,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { color: 'var(--text-secondary)', font: { size: 10 } }, grid: { color: 'var(--border-color)' } },
                y: { ticks: { color: 'var(--text-secondary)', font: { size: 10 } }, grid: { color: 'var(--border-color)' } }
            },
            plugins: { legend: { labels: { color: 'var(--text-primary)' } } }
        }
    });
}

// LOGBOOK
function renderizarLogbook() {
    contenedorLogbook.innerHTML = '';
    if (historialSesiones.length === 0) {
        contenedorLogbook.innerHTML = `<p class="empty-notice">No hay sesiones de rutinas guardadas todavía.</p>`;
        return;
    }

    historialSesiones.forEach((sesion) => {
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

// SISTEMA DE 20 LOGROS
function renderizarLogros() {
    contenedorLogros.innerHTML = '';

    const totalEntrenos = entrenamientos.length;
    
    const pesosEfectivos = entrenamientos.map(i => {
        const p = parseFloat(i.peso);
        return esEjercicioUnilateral(i.ejercicio) ? (p * 2) : p;
    });
    const pesoMaxAbsoluto = pesosEfectivos.length > 0 ? Math.max(...pesosEfectivos) : 0;
    
    const totalSesiones = historialSesiones.length;
    const gruposDistintos = [...new Set(entrenamientos.map(i => obtenerGrupoMuscular(i.ejercicio)))].length;
    const ejerciciosDistintos = [...new Set(entrenamientos.map(i => i.ejercicio))].length;
    const tieneNotas = entrenamientos.some(i => i.nota && i.nota.trim() !== '') || historialSesiones.some(s => s.notaSesion && s.notaSesion.trim() !== '');
    const tieneUnilateral = entrenamientos.some(i => esEjercicioUnilateral(i.ejercicio));
    const tienePierna = entrenamientos.some(i => {
        const g = obtenerGrupoMuscular(i.ejercicio);
        return g === "Cuádriceps" || g === "Isquiotibiales" || g === "Gemelos";
    });
    const tieneBrazos = entrenamientos.some(i => {
        const g = obtenerGrupoMuscular(i.ejercicio);
        return g === "Bíceps" || g === "Tríceps" || g === "Antebrazos";
    });
    const tieneRutinaCreada = rutinasGuardadas.length > 0;

    let conteoIntermedio = 0;
    let conteoElite = 0;

    const ejerciciosUnicos = [...new Set(entrenamientos.map(i => i.ejercicio))];
    ejerciciosUnicos.forEach(ej => {
        const reg = entrenamientos.filter(i => i.ejercicio === ej);
        const maxP = Math.max(...reg.map(r => parseFloat(r.peso)));
        const rInfo = calcularRangoEjercicio(ej, maxP);

        if (rInfo.nivel >= 3) conteoIntermedio++;
        if (rInfo.nivel >= 4) conteoElite++;
    });

    const listaLogros = [
        { titulo: "Primeros Pasos", desc: "Registrá tu primer ejercicio en la app.", icono: "🐣", desbloqueado: totalEntrenos > 0 },
        { titulo: "Bestia de Carga", desc: "Superá los 100 kg en un ejercicio (peso total).", icono: "🦍", desbloqueado: pesoMaxAbsoluto >= 100 },
        { titulo: "Rompiendo Límites", desc: "Superá los 150 kg en un ejercicio.", icono: "🚀", desbloqueado: pesoMaxAbsoluto >= 150 },
        { titulo: "Fuerza Bruta", desc: "Superá los 200 kg en un ejercicio.", icono: "🗿", desbloqueado: pesoMaxAbsoluto >= 200 },
        { titulo: "Constancia de Hierro", desc: "Completá y guardá 3 sesiones de rutina.", icono: "🔥", desbloqueado: totalSesiones >= 3 },
        { titulo: "Atleta Dedicado", desc: "Registrá más de 20 series totales.", icono: "⚡", desbloqueado: totalEntrenos >= 20 },
        { titulo: "Maratón de Series", desc: "Acumulá 50 series registradas en tu historial.", icono: "🏋️‍♂️", desbloqueado: totalEntrenos >= 50 },
        { titulo: "Titán de la Fuerza", desc: "Alcanzá el nivel Intermedio en al menos 1 ejercicio.", icono: "🛡️", desbloqueado: conteoIntermedio >= 1 },
        { titulo: "Cuerpo Balanceado", desc: "Registrá ejercicios de al menos 5 músculos distintos.", icono: "🎯", desbloqueado: gruposDistintos >= 5 },
        { titulo: "Modo Élite", desc: "Alcanzá el rango Avanzado o Élite en un ejercicio.", icono: "🏆", desbloqueado: conteoElite >= 1 },
        { titulo: "Nivel Leyenda", desc: "Alcanzá el rango Avanzado o Élite en 3 músculos distintos.", icono: "💎", desbloqueado: conteoElite >= 3 },
        { titulo: "Leyenda del Gym", desc: "Completá más de 10 sesiones totales de rutinas.", icono: "👑", desbloqueado: totalSesiones >= 10 },
        { titulo: "Dedicación Absoluta", desc: "Completá 25 sesiones totales en el Logbook.", icono: "🧘", desbloqueado: totalSesiones >= 25 },
        { titulo: "Anatómico Preciso", desc: "Guardá una nota o sensación en un entrenamiento.", icono: "📝", desbloqueado: tieneNotas },
        { titulo: "Maestro Unilateral", desc: "Registrá una serie en un ejercicio con mancuernas o unilateral.", icono: "⚖️", desbloqueado: tieneUnilateral },
        { titulo: "Día de Pierna", desc: "Registrá al menos un ejercicio de piernas.", icono: "🦵", desbloqueado: tienePierna },
        { titulo: "Brazos de Acero", desc: "Registrá ejercicios de Bíceps, Tríceps o Antebrazos.", icono: "🪵", desbloqueado: tieneBrazos },
        { titulo: "Rutina Pro", desc: "Diseñá y guardá tu primera rutina personalizada.", icono: "🎒", desbloqueado: tieneRutinaCreada },
        { titulo: "Explorador del Gym", desc: "Registrá 10 ejercicios diferentes en tu historial.", icono: "🧭", desbloqueado: ejerciciosDistintos >= 10 },
        { titulo: "Coleccionista", desc: "Desbloqueá al menos 10 logros en la app.", icono: "🏅", desbloqueado: false }
    ];

    const desbloqueadosCount = listaLogros.filter(l => l.desbloqueado).length;
    listaLogros[19].desbloqueado = desbloqueadosCount >= 10;

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

// EXPORTAR E IMPORTAR DATOS
function exportarDatos() {
    const backup = {
        entrenamientos: entrenamientos,
        rutinasGuardadas: rutinasGuardadas,
        historialSesiones: historialSesiones
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gym_tracker_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
}

function importarDatos(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.entrenamientos) localStorage.setItem('gym_tracker_data', JSON.stringify(data.entrenamientos));
            if (data.rutinasGuardadas) localStorage.setItem('gym_tracker_rutinas', JSON.stringify(data.rutinasGuardadas));
            if (data.historialSesiones) localStorage.setItem('gym_tracker_logbook', JSON.stringify(data.historialSesiones));

            alert('🎉 ¡Datos importados con éxito! La página se va a recargar.');
            location.reload();
        } catch (err) {
            alert('❌ Archivo de respaldo no válido.');
        }
    };
    reader.readAsText(file);
}

// RUTINAS
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

// INICIO
cargarTemaGuardado();
actualizarSugerenciasYSelects();
renderizarRutinasGuardadas();
