// --- CATÁLOGO DE EJERCICIOS ---
const catalogoEjercicios = {
    "Banco plano con barra": { musculo: "Pecho", rangos: [30, 60, 90, 120], unilateral: false },
    "Banco plano con mancuernas": { musculo: "Pecho", rangos: [30, 60, 90, 120], unilateral: true },
    "Banco inclinado con barra": { musculo: "Pecho", rangos: [25, 50, 75, 100], unilateral: false },
    "Banco inclinado con mancuernas": { musculo: "Pecho", rangos: [25, 50, 75, 100], unilateral: true },
    "Banco declinado": { musculo: "Pecho", rangos: [30, 65, 95, 125], unilateral: false },
    "Aperturas en banco plano": { musculo: "Pecho", rangos: [16, 28, 44, 60], unilateral: true },
    "Cruce de poleas": { musculo: "Pecho", rangos: [20, 40, 60, 80], unilateral: true },
    "Pec Deck / Mariposa": { musculo: "Pecho", rangos: [25, 45, 70, 95], unilateral: false },
    "Flexiones de brazo (Push-ups)": { musculo: "Pecho", rangos: [0, 15, 30, 50], unilateral: false },

    "Tirón al pecho en polea": { musculo: "Espalda", rangos: [30, 55, 80, 105], unilateral: false },
    "Remo con barra": { musculo: "Espalda", rangos: [30, 60, 85, 110], unilateral: false },
    "Remo con mancuerna (un brazo)": { musculo: "Espalda", rangos: [28, 52, 76, 100], unilateral: true },
    "Remo bajo en polea (Gironda)": { musculo: "Espalda", rangos: [30, 55, 80, 105], unilateral: false },
    "Peso muerto tradicional": { musculo: "Espalda", rangos: [50, 100, 150, 200], unilateral: false },
    "Dominadas": { musculo: "Espalda", rangos: [0, 10, 20, 35], unilateral: false },
    "Pull-over en polea alta": { musculo: "Espalda", rangos: [15, 30, 45, 60], unilateral: false },

    "Sentadilla libre con barra": { musculo: "Cuádriceps", rangos: [40, 80, 120, 160], unilateral: false },
    "Prensa 45°": { musculo: "Cuádriceps", rangos: [80, 160, 240, 320], unilateral: false },
    "Sillón de cuádriceps": { musculo: "Cuádriceps", rangos: [30, 55, 80, 105], unilateral: false },
    "Sentadilla búlgara": { musculo: "Cuádriceps", rangos: [20, 40, 60, 80], unilateral: true },
    "Hack Squat": { musculo: "Cuádriceps", rangos: [40, 90, 140, 190], unilateral: false },
    "Estocadas / Zancadas": { musculo: "Cuádriceps", rangos: [20, 40, 60, 80], unilateral: true },

    "Camilla acostado (Femoral)": { musculo: "Isquiotibiales", rangos: [20, 40, 60, 80], unilateral: false },
    "Peso muerto rumano": { musculo: "Isquiotibiales", rangos: [35, 70, 105, 140], unilateral: false },
    "Femoral sentado en máquina": { musculo: "Isquiotibiales", rangos: [20, 45, 70, 95], unilateral: false },

    "Aductores en máquina": { musculo: "Aductores", rangos: [20, 40, 60, 80], unilateral: false },
    "Abductores en máquina": { musculo: "Abductores", rangos: [20, 40, 60, 80], unilateral: false },

    "Gemelos de pie en máquina": { musculo: "Gemelos", rangos: [30, 60, 90, 120], unilateral: false },
    "Gemelos sentado": { musculo: "Gemelos", rangos: [20, 40, 60, 80], unilateral: false },
    "Elevación de talones con mancuerna": { musculo: "Gemelos", rangos: [20, 40, 60, 80], unilateral: true },

    "Press militar de pie con barra": { musculo: "Hombro", rangos: [20, 40, 60, 80], unilateral: false },
    "Press sentado con mancuernas": { musculo: "Hombro", rangos: [20, 40, 60, 80], unilateral: true },
    "Vuelos laterales con mancuerna": { musculo: "Hombro", rangos: [12, 24, 36, 48], unilateral: true },
    "Vuelos posteriores (Pájaro)": { musculo: "Hombro", rangos: [12, 24, 36, 48], unilateral: true },
    "Encogimientos de hombros (Trapecio)": { musculo: "Hombro", rangos: [20, 45, 70, 95], unilateral: false },

    "Curl de bíceps con barra recta": { musculo: "Bíceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Curl alterno con mancuernas": { musculo: "Bíceps", rangos: [16, 32, 48, 64], unilateral: true },
    "Curl martillo con mancuernas": { musculo: "Bíceps", rangos: [20, 36, 52, 68], unilateral: true },
    "Curl en banco Scott / Predicador": { musculo: "Bíceps", rangos: [12, 25, 38, 50], unilateral: false },

    "Press francés con barra W": { musculo: "Tríceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Tríceps en polea alta con cuerda": { musculo: "Tríceps", rangos: [15, 30, 45, 60], unilateral: false },
    "Copita sobre la cabeza": { musculo: "Tríceps", rangos: [12, 22, 32, 42], unilateral: false },
    "Fondos en paralelas": { musculo: "Tríceps", rangos: [0, 10, 20, 35], unilateral: false },

    "Curl de antebrazo (Palmas arriba)": { musculo: "Antebrazos", rangos: [10, 20, 30, 40], unilateral: false },
    "Curl de antebrazo reverso (Palmas abajo)": { musculo: "Antebrazos", rangos: [8, 15, 22, 30], unilateral: false }
};

const COLORES_NIVEL = { 0: "#333333", 1: "#ef4444", 2: "#f97316", 3: "#eab308", 4: "#22c55e", 5: "#06b6d4" };

let entrenamientos = JSON.parse(localStorage.getItem('gym_tracker_data')) || [];
let rutinasGuardadas = JSON.parse(localStorage.getItem('gym_tracker_rutinas')) || [];
let historialSesiones = JSON.parse(localStorage.getItem('gym_tracker_logbook')) || [];
let temaGuardado = localStorage.getItem('gym_tracker_tema') || 'default';
let groqApiKey = localStorage.getItem('gym_tracker_groq_key') || '';
let ejerciciosRutinaTemporal = [];
let miChart = null;

const seleccionarElemento = (id) => document.getElementById(id);

function normalizarTexto(texto) {
    return texto ? texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
}

function esEjercicioUnilateral(nombre) {
    if (catalogoEjercicios[nombre] !== undefined) return catalogoEjercicios[nombre].unilateral;
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
    const esUnil = esEjercicioUnilateral(nombreEjercicio);
    const pesoEfectivo = esUnil ? (pesoIngresado * 2) : pesoIngresado;
    let rangos = catalogoEjercicios[nombreEjercicio] ? catalogoEjercicios[nombreEjercicio].rangos : [20, 40, 60, 80];

    if (pesoEfectivo < rangos[0]) return { nivel: 1, nombre: "Novato", pesoEfectivo };
    if (pesoEfectivo < rangos[1]) return { nivel: 2, nombre: "Principiante", pesoEfectivo };
    if (pesoEfectivo < rangos[2]) return { nivel: 3, nombre: "Intermedio", pesoEfectivo };
    if (pesoEfectivo < rangos[3]) return { nivel: 4, nombre: "Avanzado", pesoEfectivo };
    return { nivel: 5, nombre: "Élite", pesoEfectivo };
}

// --- GESTIÓN DE TEMAS Y API KEY ---
function cambiarTemaColor(nombreTema) {
    document.body.className = '';
    if (nombreTema !== 'default') document.body.classList.add(`theme-${nombreTema}`);
    localStorage.setItem('gym_tracker_tema', nombreTema);
    if (seleccionarElemento('select-ejercicio-stats').value) actualizarGraficoEvolucion();
}

function cargarConfiguracionInicial() {
    const select = seleccionarElemento('select-tema');
    if (select) select.value = temaGuardado;
    cambiarTemaColor(temaGuardado);

    const inputKey = seleccionarElemento('input-groq-key');
    if (inputKey) inputKey.value = groqApiKey;
}

function guardarGroqKey(key) {
    groqApiKey = key.trim();
    localStorage.setItem('gym_tracker_groq_key', groqApiKey);
    alert('🔑 API Key de Groq guardada con éxito.');
}

// --- INTEGRACIÓN GROQ API ---
async function llamarGroqAPI(promptUsuario) {
    if (!groqApiKey) {
        alert('⚠️ Por favor, ingresá tu API Key de Groq en la pestaña Ajustes.');
        cambiarPestana('config');
        return;
    }

    const chatContainer = seleccionarElemento('ai-chat-container');
    chatContainer.innerHTML += `<div class="ai-message user">${promptUsuario}</div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const loadingId = 'loading-' + Date.now();
    chatContainer.innerHTML += `<div class="ai-message bot" id="${loadingId}">⚡ El coach está escribiendo...</div>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;

    try {
        const respuesta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${groqApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: `Sos un entrenador personal experto en hipertrofia y fuerza. Contexto del usuario en GymTracker Pro: Tiene ${entrenamientos.length} registros y ${rutinasGuardadas.length} rutinas guardadas. Respondé de forma directa, motivadora y clara en español.` },
                    { role: "user", content: promptUsuario }
                ]
            })
        });

        const data = await respuesta.json();
        const elementoCarga = seleccionarElemento(loadingId);
        if (elementoCarga) elementoCarga.remove();

        if (data.choices && data.choices[0].message.content) {
            const textoBot = data.choices[0].message.content;
            chatContainer.innerHTML += `<div class="ai-message bot">${textoBot.replace(/\n/g, '<br>')}</div>`;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        } else {
            console.error("Groq Response:", data);
            chatContainer.innerHTML += `<div class="ai-message bot">❌ Error al procesar la respuesta. Verificá tu clave de Groq.</div>`;
        }
    } catch (err) {
        const elementoCarga = seleccionarElemento(loadingId);
        if (elementoCarga) elementoCarga.remove();
        console.error("Error de red:", err);
        chatContainer.innerHTML += `<div class="ai-message bot">❌ Error de conexión con Groq.</div>`;
    }
}

function consultarIA() {
    const input = seleccionarElemento('ai-input-pregunta');
    const pregunta = input.value.trim();
    if (!pregunta) return;
    input.value = '';
    llamarGroqAPI(pregunta);
}

function pedirRutinaIA() {
    llamarGroqAPI("Armame una rutina de entrenamiento equilibrada de 3 días para hipertrofia con ejercicios estándar de gimnasio.");
}

// --- NAVEGACIÓN ---
function cambiarPestana(pestana) {
    ['registrar', 'rutinas', 'niveles', 'stats', 'logbook', 'logros', 'ai', 'config'].forEach(p => {
        const btn = seleccionarElemento(`btn-tab-${p}`);
        const sec = seleccionarElemento(`seccion-${p}`);
        if (btn) btn.classList.toggle('active', p === pestana);
        if (sec) sec.classList.toggle('active', p === pestana);
    });

    if (pestana === 'niveles') renderizarNivelesMusculares();
    if (pestana === 'stats') actualizarSelectStats();
    if (pestana === 'logbook') renderizarLogbook();
    if (pestana === 'logros') renderizarLogros();
}

function actualizarSugerenciasYSelects() {
    const listaTotal = [...new Set([...Object.keys(catalogoEjercicios), ...entrenamientos.map(i => i.ejercicio)])].sort();
    seleccionarElemento('lista-ejercicios').innerHTML = listaTotal.map(ej => `<option value="${ej}">`).join('');

    seleccionarElemento('select-rutina-filtro').innerHTML = '<option value="">-- Selecciona una rutina guardada --</option>' + 
        rutinasGuardadas.map((r, idx) => `<option value="${idx}">${r.nombre}</option>`).join('');
}

// --- REGISTRO DE ENTRENAMIENTO ---
const inputEjercicio = seleccionarElemento('ejercicio');
const infoUltimoPeso = seleccionarElemento('ultimo-peso-info');

function buscarUltimoPeso() {
    const nombre = inputEjercicio.value.trim();
    if (!nombre) {
        infoUltimoPeso.innerHTML = `💡 Buscá o escribí un ejercicio para ver cuánto tiraste la última vez.`;
        return;
    }
    const musculo = obtenerGrupoMuscular(nombre);
    const esUnil = esEjercicioUnilateral(nombre);
    const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === normalizarTexto(nombre));
    const aclaracion = esUnil ? `<br><small style="color:var(--text-secondary);">💡 Ejercicio unilateral: Ingresá el peso de 1 sola mancuerna/lado.</small>` : "";

    if (previos.length > 0) {
        const maxPeso = Math.max(...previos.map(p => parseFloat(p.peso)));
        const rango = calcularRangoEjercicio(nombre, maxPeso);
        const ultimo = previos[previos.length - 1];
        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rango.nivel]}; color:#000;">${rango.nombre}</span><br>⚡ Último: <strong>${ultimo.peso} kg ${esUnil ? '/lado' : ''}</strong> (${ultimo.repeticiones} reps) el ${ultimo.fecha}${aclaracion}`;
    } else {
        infoUltimoPeso.innerHTML = `🎯 <strong>${musculo}</strong> | 💡 Es la primera vez que anotás este ejercicio.${aclaracion}`;
    }
}

if (inputEjercicio) {
    inputEjercicio.addEventListener('input', buscarUltimoPeso);
    inputEjercicio.addEventListener('change', buscarUltimoPeso);
}

function cargarRutinaParaEntrenar() {
    const idx = seleccionarElemento('select-rutina-filtro').value;
    const contenedor = seleccionarElemento('contenedor-ejercicios-rutina');
    const formRutina = seleccionarElemento('routine-workout-form');
    contenedor.innerHTML = '';

    if (idx === "") {
        formRutina.style.display = 'none';
        return;
    }

    const rutina = rutinasGuardadas[idx];
    if (!rutina || !rutina.ejercicios.length) return;

    rutina.ejercicios.forEach((ej, eIdx) => {
        const musculo = obtenerGrupoMuscular(ej);
        const esUnil = esEjercicioUnilateral(ej);
        const previos = entrenamientos.filter(i => normalizarTexto(i.ejercicio) === normalizarTexto(ej));
        let historial = "💡 Sin registros anteriores.";
        let notaUnil = esUnil ? `<br><small style="color:var(--text-secondary);">(Ingresá peso por lado)</small>` : "";

        if (previos.length > 0) {
            const maxP = Math.max(...previos.map(p => parseFloat(p.peso)));
            const rango = calcularRangoEjercicio(ej, maxP);
            const ult3 = previos.slice(-3).map(p => `• <strong>${p.peso} kg</strong> x ${p.repeticiones} reps (${p.fecha})`).join('<br>');
            historial = `🏆 Rango: <span class="rank-badge" style="background:${COLORES_NIVEL[rango.nivel]}; color:#000;">${rango.nombre}</span><br>📌 <strong>Últimas:</strong><br>${ult3}`;
        }

        contenedor.innerHTML += `
            <div class="routine-exercise-box">
                <h4>${ej} <span class="muscle-badge">${musculo}</span> ${notaUnil}</h4>
                <div class="historial-directo-box">${historial}</div>
                <div class="form-group" style="margin-bottom: 8px;">
                    <label>Series:</label>
                    <input type="number" min="1" max="10" value="3" onchange="generarFilasSeries(${eIdx}, this.value)">
                </div>
                <div id="series-container-${eIdx}"></div>
                <div class="form-group" style="margin-top: 8px; margin-bottom: 0;">
                    <input type="text" placeholder="📝 Nota para este ejercicio..." class="nota-ejercicio-rutina">
                </div>
            </div>
        `;
        generarFilasSeries(eIdx, 3);
    });
    formRutina.style.display = 'block';
}

function generarFilasSeries(eIdx, cant) {
    const cont = seleccionarElemento(`series-container-${eIdx}`);
    if (!cont) return;
    cont.innerHTML = Array.from({ length: cant }, (_, s) => `
        <div class="serie-row">
            <span>Serie ${s + 1}:</span>
            <input type="number" step="0.5" min="0" placeholder="Kg" class="serie-peso" required>
            <input type="number" min="1" placeholder="Reps" class="serie-reps" required>
        </div>
    `).join('');
}

seleccionarElemento('routine-workout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const hoy = new Date().toLocaleDateString();
    const rutina = rutinasGuardadas[seleccionarElemento('select-rutina-filtro').value];
    const notaSesion = seleccionarElemento('nota-sesion').value.trim();
    let regEjercicios = [];

    rutina.ejercicios.forEach((ej, eIdx) => {
        const cont = seleccionarElemento(`series-container-${eIdx}`);
        if (!cont) return;
        const pesos = cont.querySelectorAll('.serie-peso');
        const reps = cont.querySelectorAll('.serie-reps');
        const notaEj = cont.parentElement.querySelector('.nota-ejercicio-rutina').value.trim();
        const esUnil = esEjercicioUnilateral(ej);
        let detalle = [];

        pesos.forEach((p, s) => {
            if (p.value && reps[s].value) {
                entrenamientos.push({ ejercicio: ej, peso: p.value, repeticiones: reps[s].value, fecha: hoy, nota: notaEj });
                detalle.push(`${p.value}kg${esUnil ? '/lado' : ''} x ${reps[s].value} reps`);
            }
        });

        if (detalle.length) regEjercicios.push({ ejercicio: ej, detalle: detalle.join(" | "), nota: notaEj });
    });

    if (regEjercicios.length) {
        historialSesiones.unshift({ nombreRutina: rutina.nombre, fecha: hoy, notaSesion, ejercicios: regEjercicios });
        localStorage.setItem('gym_tracker_logbook', JSON.stringify(historialSesiones));
    }

    localStorage.setItem('gym_tracker_data', JSON.stringify(entrenamientos));
    e.target.reset();
    e.target.style.display = 'none';
    seleccionarElemento('select-rutina-filtro').value = "";
    alert('🎉 ¡Rutina guardada con éxito!');
    actualizarSugerenciasYSelects();
});

seleccionarElemento('workout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    entrenamientos.push({
        ejercicio: inputEjercicio.value.trim(),
        peso: seleccionarElemento('peso').value,
        repeticiones: seleccionarElemento('repeticiones').value,
        fecha: new Date().toLocaleDateString(),
        nota: seleccionarElemento('nota-suelta').value.trim()
    });
    localStorage.setItem('gym_tracker_data', JSON.stringify(entrenamientos));
    e.target.reset();
    infoUltimoPeso.innerHTML = `💡 Buscá o escribí un ejercicio para ver cuánto tiraste la última vez.`;
    actualizarSugerenciasYSelects();
    alert('🎉 ¡Serie guardada!');
});

// --- ESTADÍSTICAS Y 1RM ---
function actualizarSelectStats() {
    const unicos = [...new Set(entrenamientos.map(i => i.ejercicio))].sort();
    seleccionarElemento('select-ejercicio-stats').innerHTML = '<option value="">-- Elegí un ejercicio --</option>' + 
        unicos.map(ej => `<option value="${ej}">${ej}</option>`).join('');
    seleccionarElemento('rm-teorico-banner').style.display = 'none';
}

function actualizarGraficoEvolucion() {
    const ejercicio = seleccionarElemento('select-ejercicio-stats').value;
    const ctx = seleccionarElemento('graficoEvolucion').getContext('2d');
    const rmBanner = seleccionarElemento('rm-teorico-banner');
    if (miChart) miChart.destroy();
    if (!ejercicio) { rmBanner.style.display = 'none'; return; }

    const regs = entrenamientos.filter(i => i.ejercicio === ejercicio);
    const esUnil = esEjercicioUnilateral(ejercicio);
    let mejor1RM = 0;

    regs.forEach(r => {
        const p = parseFloat(r.peso);
        const pEf = esUnil ? (p * 2) : p;
        const reps = parseInt(r.repeticiones) || 1;
        if (reps < 37) {
            let rm = pEf * (36 / (37 - reps));
            if (rm > mejor1RM) mejor1RM = rm;
        }
    });

    if (mejor1RM > 0) {
        seleccionarElemento('rm-valor').textContent = `${Math.round(mejor1RM)} kg`;
        rmBanner.style.display = 'block';
    } else {
        rmBanner.style.display = 'none';
    }

    const porFecha = {};
    regs.forEach(r => {
        const pEf = esUnil ? (parseFloat(r.peso) * 2) : parseFloat(r.peso);
        if (!porFecha[r.fecha] || pEf > porFecha[r.fecha]) porFecha[r.fecha] = pEf;
    });

    const colorAccent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#ffd700';

    miChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(porFecha),
            datasets: [{
                label: esUnil ? 'Peso Total Calculado (kg)' : 'Peso Máximo (kg)',
                data: Object.values(porFecha),
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
                x: { ticks: { color: 'var(--text-secondary)' }, grid: { color: 'var(--border-color)' } },
                y: { ticks: { color: 'var(--text-secondary)' }, grid: { color: 'var(--border-color)' } }
            },
            plugins: { legend: { labels: { color: 'var(--text-primary)' } } }
        }
    });
}

// --- RANGOS MUSCULARES Y LOGBOOK ---
function renderizarNivelesMusculares() {
    const cont = seleccionarElemento('contenedor-niveles-musculares');
    cont.innerHTML = '';
    const grupos = ["Pecho", "Espalda", "Cuádriceps", "Isquiotibiales", "Hombro", "Bíceps", "Tríceps", "Antebrazos", "Gemelos", "Aductores", "Abductores"];

    grupos.forEach(grupo => {
        const delGrupo = entrenamientos.filter(i => obtenerGrupoMuscular(i.ejercicio) === grupo);
        if (!delGrupo.length) {
            cont.innerHTML += `<div class="muscle-rank-card" style="border-left-color:#333;"><h3><span>${grupo}</span> <span class="rank-badge" style="background:#333; color:#aaa;">Sin datos</span></h3><p style="font-size:12px; color:var(--text-secondary); margin:0;">Anotá entrenamientos.</p></div>`;
            return;
        }

        const unicos = [...new Set(delGrupo.map(i => i.ejercicio))];
        let suma = 0;
        let detalle = unicos.map(ej => {
            const regs = delGrupo.filter(i => i.ejercicio === ej);
            const maxP = Math.max(...regs.map(r => parseFloat(r.peso)));
            const rango = calcularRangoEjercicio(ej, maxP);
            suma += rango.nivel;
            const esUnil = esEjercicioUnilateral(ej);
            return `• ${ej}: <strong>${maxP} kg</strong>${esUnil ? ` <em>(${maxP * 2}kg total)</em>` : ""} (<span style="color:${COLORES_NIVEL[rango.nivel]}">${rango.nombre}</span>)`;
        }).join('<br>');

        const prom = Math.round(suma / unicos.length);
        const nombreProm = ["", "Novato", "Principiante", "Intermedio", "Avanzado", "Élite"][prom] || "Intermedio";
        const color = COLORES_NIVEL[prom] || "#333";

        cont.innerHTML += `
            <div class="muscle-rank-card" style="border-left-color: ${color};">
                <h3><span>${grupo}</span> <span class="rank-badge" style="background: ${color}; color: #000;">${nombreProm}</span></h3>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top:6px;">${detalle}</div>
            </div>
        `;
    });
}

function renderizarLogbook() {
    const cont = seleccionarElemento('contenedor-logbook');
    cont.innerHTML = historialSesiones.length ? historialSesiones.map(s => `
        <div class="logbook-card">
            <h3><span>⚡ ${s.nombreRutina}</span> <small style="font-size:12px; color:var(--text-secondary);">${s.fecha}</small></h3>
            ${s.notaSesion ? `<p style="font-size: 12px; color: var(--accent); margin: 4px 0;">📝 "${s.notaSesion}"</p>` : ''}
            <div style="margin-top: 8px; border-top: 1px solid var(--border-color); padding-top: 6px;">
                ${s.ejercicios.map(e => `<div style="font-size: 13px; margin-top: 4px;"><strong>${e.ejercicio}:</strong> ${e.detalle}${e.nota ? `<br><small style="color:var(--accent);">Nota: ${e.nota}</small>` : ''}</div>`).join('')}
            </div>
        </div>
    `).join('') : `<p class="empty-notice">No hay sesiones guardadas.</p>`;
}

// --- LOGROS (20 MEDALLAS) ---
function renderizarLogros() {
    const cont = seleccionarElemento('contenedor-logros');
    cont.innerHTML = '';
    const totalEntrenos = entrenamientos.length;
    const pesosEf = entrenamientos.map(i => esEjercicioUnilateral(i.ejercicio) ? parseFloat(i.peso) * 2 : parseFloat(i.peso));
    const maxAbs = pesosEf.length ? Math.max(...pesosEf) : 0;
    const totalSes = historialSesiones.length;
    const gruposDist = [...new Set(entrenamientos.map(i => obtenerGrupoMuscular(i.ejercicio)))].length;
    const ejDist = [...new Set(entrenamientos.map(i => i.ejercicio))].length;
    const notas = entrenamientos.some(i => i.nota) || historialSesiones.some(s => s.notaSesion);
    const unil = entrenamientos.some(i => esEjercicioUnilateral(i.ejercicio));
    const pierna = entrenamientos.some(i => ["Cuádriceps", "Isquiotibiales", "Gemelos"].includes(obtenerGrupoMuscular(i.ejercicio)));
    const brazos = entrenamientos.some(i => ["Bíceps", "Tríceps", "Antebrazos"].includes(obtenerGrupoMuscular(i.ejercicio)));

    let intC = 0, eliteC = 0;
    [...new Set(entrenamientos.map(i => i.ejercicio))].forEach(ej => {
        const maxP = Math.max(...entrenamientos.filter(i => i.ejercicio === ej).map(r => parseFloat(r.peso)));
        const r = calcularRangoEjercicio(ej, maxP);
        if (r.nivel >= 3) intC++;
        if (r.nivel >= 4) eliteC++;
    });

    const logros = [
        { titulo: "Primeros Pasos", desc: "Registrá tu primer ejercicio.", icono: "🐣", des: totalEntrenos > 0 },
        { titulo: "Bestia de Carga", desc: "Superá los 100 kg totales en un ejercicio.", icono: "🦍", des: maxAbs >= 100 },
        { titulo: "Rompiendo Límites", desc: "Superá los 150 kg en un ejercicio.", icono: "🚀", des: maxAbs >= 150 },
        { titulo: "Fuerza Bruta", desc: "Superá los 200 kg en un ejercicio.", icono: "🗿", des: maxAbs >= 200 },
        { titulo: "Constancia de Hierro", desc: "Completá 3 sesiones de rutina.", icono: "🔥", des: totalSes >= 3 },
        { titulo: "Atleta Dedicado", desc: "Registrá más de 20 series totales.", icono: "⚡", des: totalEntrenos >= 20 },
        { titulo: "Maratón de Series", desc: "Acumulá 50 series registradas.", icono: "🏋️‍♂️", des: totalEntrenos >= 50 },
        { titulo: "Titán de la Fuerza", desc: "Alcanzá el nivel Intermedio en 1 ejercicio.", icono: "🛡️", des: intC >= 1 },
        { titulo: "Cuerpo Balanceado", desc: "Entrená 5 músculos distintos.", icono: "🎯", des: gruposDist >= 5 },
        { titulo: "Modo Élite", desc: "Alcanzá rango Avanzado o Élite en 1 ejercicio.", icono: "🏆", des: eliteC >= 1 },
        { titulo: "Nivel Leyenda", desc: "Alcanzá rango Avanzado o Élite en 3 músculos.", icono: "💎", des: eliteC >= 3 },
        { titulo: "Leyenda del Gym", desc: "Completá 10 sesiones de rutinas.", icono: "👑", des: totalSes >= 10 },
        { titulo: "Dedicación Absoluta", desc: "Completá 25 sesiones en el Logbook.", icono: "🧘", des: totalSes >= 25 },
        { titulo: "Anatómico Preciso", desc: "Guardá una nota en un entrenamiento.", icono: "📝", des: notas },
        { titulo: "Maestro Unilateral", desc: "Registrá un ejercicio con mancuernas.", icono: "⚖️", des: unil },
        { titulo: "Día de Pierna", desc: "Registrá ejercicios de piernas.", icono: "🦵", des: pierna },
        { titulo: "Brazos de Acero", desc: "Registrá ejercicios de brazos.", icono: "🪵", des: brazos },
        { titulo: "Rutina Pro", desc: "Creá tu primera rutina personalizada.", icono: "🎒", des: rutinasGuardadas.length > 0 },
        { titulo: "Explorador del Gym", desc: "Registrá 10 ejercicios diferentes.", icono: "🧭", des: ejDist >= 10 },
        { titulo: "Coleccionista", desc: "Desbloqueá al menos 10 logros.", icono: "🏅", des: false }
    ];

    logros[19].des = logros.filter(l => l.des).length >= 10;

    logros.forEach(l => {
        cont.innerHTML += `
            <div class="logro-item ${l.des ? 'desbloqueado' : ''}">
                <div class="logro-icono">${l.icono}</div>
                <div class="logro-info">
                    <h4>${l.titulo} ${l.des ? '✅' : '🔒'}</h4>
                    <p>${l.desc}</p>
                </div>
            </div>
        `;
    });
}

// --- BACKUP ---
function exportarDatos() {
    const blob = new Blob([JSON.stringify({ entrenamientos, rutinasGuardadas, historialSesiones }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `gym_tracker_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
}

function importarDatos(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (data.entrenamientos) localStorage.setItem('gym_tracker_data', JSON.stringify(data.entrenamientos));
            if (data.rutinasGuardadas) localStorage.setItem('gym_tracker_rutinas', JSON.stringify(data.rutinasGuardadas));
            if (data.historialSesiones) localStorage.setItem('gym_tracker_logbook', JSON.stringify(data.historialSesiones));
            alert('🎉 ¡Datos importados con éxito! La página se va a recargar.');
            location.reload();
        } catch { alert('❌ Archivo no válido.'); }
    };
    reader.readAsText(file);
}

// --- GESTIÓN DE RUTINAS ---
const ejTemporalesList = seleccionarElemento('lista-ejercicios-temporales');
seleccionarElemento('btn-agregar-ejercicio-rutina').addEventListener('click', () => {
    const val = seleccionarElemento('input-ejercicio-rutina').value.trim();
    if (val && !ejerciciosRutinaTemporal.includes(val)) {
        ejerciciosRutinaTemporal.push(val);
        renderEjTemporales();
        seleccionarElemento('input-ejercicio-rutina').value = '';
    }
});

function renderEjTemporales() {
    ejTemporalesList.innerHTML = ejerciciosRutinaTemporal.length ? ejerciciosRutinaTemporal.map((e, idx) => `
        <li class="temp-item">
            <div><span>${e}</span> <span class="muscle-badge" style="margin-left: 10px;">${obtenerGrupoMuscular(e)}</span></div>
            <button class="icon-btn" onclick="ejerciciosRutinaTemporal.splice(${idx}, 1); renderEjTemporales();">❌</button>
        </li>
    `).join('') : `<li class="empty-notice">Todavía no agregaste ejercicios.</li>`;
}

seleccionarElemento('routine-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = seleccionarElemento('nombre-rutina').value.trim();
    if (!ejerciciosRutinaTemporal.length) { alert('Agregá al menos un ejercicio.'); return; }
    rutinasGuardadas.push({ nombre, ejercicios: [...ejerciciosRutinaTemporal] });
    localStorage.setItem('gym_tracker_rutinas', JSON.stringify(rutinasGuardadas));
    seleccionarElemento('nombre-rutina').value = '';
    ejerciciosRutinaTemporal = [];
    renderEjTemporales();
    renderizarRutinasGuardadas();
    actualizarSugerenciasYSelects();
    alert('🎉 ¡Rutina guardada!');
});

function renderizarRutinasGuardadas() {
    const cont = seleccionarElemento('contenedor-rutinas-guardadas');
    cont.innerHTML = rutinasGuardadas.length ? rutinasGuardadas.map((r, idx) => `
        <div class="routine-card">
            <div class="routine-card-header">
                <h3>${r.nombre}</h3>
                <button class="icon-btn" onclick="rutinasGuardadas.splice(${idx}, 1); localStorage.setItem('gym_tracker_rutinas', JSON.stringify(rutinasGuardadas)); renderizarRutinasGuardadas(); actualizarSugerenciasYSelects();">🗑️</button>
            </div>
            <div>${r.ejercicios.map(ej => `<div class="routine-exercise-item"><span>${ej}</span><span class="muscle-badge">${obtenerGrupoMuscular(ej)}</span></div>`).join('')}</div>
        </div>
    `).join('') : `<p class="empty-notice">No tenés rutinas guardadas.</p>`;
}

// INICIO APP
cargarConfiguracionInicial();
actualizarSugerenciasYSelects();
renderizarRutinasGuardadas();
