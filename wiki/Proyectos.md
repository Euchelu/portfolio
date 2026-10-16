# Proyectos del Portfolio

Descripción técnica de cada proyecto showcaseado en la sección Projects.

---

## 1. Task Manager API
**Repo:** https://github.com/Euchelu/task-manager-api

API REST de gestión de tareas construida con FastAPI y SQLAlchemy.

| Detalle | Valor |
|---|---|
| Tests | 11/11 (pytest) |
| CI | Python 3.12 + 3.13 matrix |
| DB local | SQLite (`check_same_thread: False`) |
| DB Docker | PostgreSQL 16 |
| Endpoints | GET/POST `/tasks`, GET/PATCH/DELETE `/tasks/{id}` |

**Decisión clave:** `database.py` detecta si el `DATABASE_URL` es SQLite para añadir el argumento `check_same_thread` solo en ese caso.

---

## 2. Weather ETL Pipeline
**Repo:** https://github.com/Euchelu/weather-etl-pipeline

Pipeline ETL que extrae datos meteorológicos de Open-Meteo API.

| Detalle | Valor |
|---|---|
| Tests | 25/25 (pytest + parametrize) |
| Ciudades | Madrid, Sevilla, Barcelona, Valencia |
| Deduplicación | `INSERT OR IGNORE` via SQLAlchemy `text()` |
| Etapas | `extract.py` → `transform.py` → `load.py` → `runner.py` |

**Fix crítico:** `response.json().copy()` evita que al mutar `data["city"]` se modifique el dict compartido en los tests mock.

---

## 3. DevOps Toolkit
**Repo:** https://github.com/Euchelu/devops-toolkit

Monitor de salud del sistema con pipeline CI/CD de 4 etapas.

| Detalle | Valor |
|---|---|
| Tests | 18/18 (pytest, todos con mocks de psutil) |
| Pipeline | lint (ruff) → test (matrix) → docker build → deploy |
| Métricas | CPU, memoria RAM, disco |
| Clasificación | `ok / warning / critical` con umbrales configurables |

**Patrón:** `psutil` siempre mockeado en tests para evitar dependencia del sistema host.

---

## 4. Testing Showcase
**Repo:** https://github.com/Euchelu/testing-showcase

Suite de tests multi-lenguaje demostrando patrones avanzados.

| Detalle | Valor |
|---|---|
| Java tests | 18 (JUnit 5, `@ParameterizedTest`, `@ValueSource`, `assertThrows`) |
| JS tests | 34/34 Jest (97% cobertura) |
| CI | Java y JS jobs en paralelo |
| Clase Java | `BankAccount` con deposit/withdraw/transfer/freeze |
| Módulo JS | Validadores: email, password (weak/medium/strong), phone ES |

---

## 5. Auth API — JWT
**Repo:** https://github.com/Euchelu/auth-api

API de autenticación completa con tokens JWT.

| Detalle | Valor |
|---|---|
| Tests | 18/18 (pytest + httpx TestClient) |
| Access token | 30 min, claim `"type": "access"` |
| Refresh token | 7 días, claim `"type": "refresh"`, persiste en DB |
| Hashing | `bcrypt` directo (passlib 1.7.4 incompatible con bcrypt ≥4.0) |
| Sesión única | refresh token guardado en DB; logout lo revoca |
| Endpoints | `/auth/register`, `/auth/login`, `/auth/refresh`, `/auth/logout`, `/users/me` |

**Fix crítico:** se reemplazó `passlib[bcrypt]` por `bcrypt` directo para resolver `ValueError: password cannot be longer than 72 bytes` causado por incompatibilidad de versiones.
