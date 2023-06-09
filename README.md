# TipJobs
¡Encuentra la oferta de trabajo que te interese y consigue los mejores consejos para tu nuevo puesto de trabajo!

## Descripción
Con TipJobs será muy fácil conseguir tu nuevo puesto de trabajo. En ella te dará la información de:
- Descripción de la oferta desde infoJobs
- Consejos para la entrevista de este puesto de trabajo gracias a ChatGPT
- Cursos interesantes para la oferta de trabajo con Youtube

## Tecnologias
- Vite
- React
- Tailwind
- ApiRapid: 
  - Youtube search results: https://rapidapi.com/marindelija/api/youtube-search-results
  - ChatGPT: https://rapidapi.com/Glavier/api/chatgpt53

## Variables de entorno
| Variable | Descripción |
| --- | --- |
| VITE_KEY_INFOJOBS | Key de InfoJobs logueado. |
| VITE_KEY_API_RAPID | Key de api rapid para sus servicios. |

## Inicialización en entorno local
Definir un .env las variables

```bash
# Instalar dependencias
npm install
```

```bash
# Ejecutar en local
npm run dev
```

## Guia
  - En la pantalla principal buscamos el trabajo y seleccionamos el deseado
  - Dentro de la oferta podemos ver tres tipos de informacion:
    - Descripción de la oferta completa
    - Consejos de chatGPT para una entrevista del trabajo para esa oferta.
    - Cursos seleccionados para la oferta. Estara disponible si en la oferta viene los conocimientos
