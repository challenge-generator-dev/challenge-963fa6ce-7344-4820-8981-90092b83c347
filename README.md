# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

El sistema de gestión de inventario de una tienda online requiere la implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en bases de datos SQL y NoSQL. El sistema debe permitir a los administradores gestionar productos, incluyendo la creación de nuevos productos, la obtención de detalles de productos existentes, la actualización de información de productos y la eliminación de productos obsoletos. Los datos de los productos incluyen nombre, descripción, precio y categoría.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 12 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del Entorno y Creación de la Estructura de la Base de Datos

**Objetivo:** Configurar el entorno de desarrollo y crear la estructura básica de la base de datos para almacenar productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Configura el entorno de desarrollo para trabajar con bases de datos SQL y NoSQL.
- Crea la estructura de la base de datos con las tablas/colecciones necesarias para almacenar productos.
- Verifica que la estructura de la base de datos cumpla con los requisitos del sistema.

**Entregable:** Estructura de la base de datos configurada y verificada.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el depurador de IntelliJ IDEA para verificar la configuración de la base de datos.

</details>

### Fase 2: Implementación de Operaciones CRUD en Base de Datos SQL

**Objetivo:** Implementar operaciones CRUD en la base de datos SQL para gestionar productos.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Implementa las operaciones CRUD en la base de datos SQL para crear, obtener, actualizar y eliminar productos.
- Verifica que las operaciones CRUD funcionen correctamente y cumplan con los requisitos del sistema.

**Entregable:** Operaciones CRUD implementadas y verificadas en la base de datos SQL.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el depurador de IntelliJ IDEA para verificar el funcionamiento de las operaciones CRUD.

</details>

### Fase 3: Implementación de Operaciones CRUD en Base de Datos NoSQL

**Objetivo:** Implementar operaciones CRUD en la base de datos NoSQL para gestionar productos.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Implementa las operaciones CRUD en la base de datos NoSQL para crear, obtener, actualizar y eliminar productos.
- Verifica que las operaciones CRUD funcionen correctamente y cumplan con los requisitos del sistema.

**Entregable:** Operaciones CRUD implementadas y verificadas en la base de datos NoSQL.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el depurador de IntelliJ IDEA para verificar el funcionamiento de las operaciones CRUD.

</details>

### Fase 4: Integración y Verificación Final

**Objetivo:** Integrar las operaciones CRUD en el sistema y verificar su funcionamiento completo.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Integra las operaciones CRUD implementadas en la base de datos SQL y NoSQL en el sistema.
- Verifica que el sistema funcione correctamente y cumpla con todos los requisitos del sistema.
- Realiza pruebas adicionales para asegurar la robustez y fiabilidad del sistema.

**Entregable:** Sistema integrado y verificado con operaciones CRUD funcionales en bases de datos SQL y NoSQL.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el depurador de IntelliJ IDEA para verificar el funcionamiento del sistema integrado.
- IntelliJ IDEA Debugger: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y cómo se implementan en bases de datos SQL y NoSQL?
- **paraQueSirve**: ¿Para qué sirven las operaciones CRUD en el contexto de un sistema de gestión de inventario?
- **comoSeUsa**: ¿Cómo se utilizan las operaciones CRUD para gestionar productos en un sistema de inventario?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar operaciones CRUD en bases de datos SQL y NoSQL?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y creación de la estructura de la base de datos.
- Implementación correcta de las operaciones CRUD en la base de datos SQL.
- Implementación correcta de las operaciones CRUD en la base de datos NoSQL.
- Integración y verificación exitosa del sistema con operaciones CRUD funcionales.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`
  - `GET /products`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
