# Panel Coordinadora de Supervisores — La Celeste

Panel web con accesos directos a las herramientas de trabajo diario de la coordinadora de supervisores.

## Contenido

- `index.html` — página principal con las tarjetas de acceso.
- `styles.css` — estilos (paleta celeste de la marca, soporta modo claro/oscuro).
- `script.js` — calcula la fecha de hoy, la fecha de stock a controlar (día anterior) y resalta el Plan de Producción los viernes.
- `assets/logo.png` — logo oficial de Panadería La Celeste.

## Cómo ver el panel localmente

Abrir `index.html` directamente en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
```

## Cómo publicarlo en GitHub Pages

1. Crear un repositorio en GitHub (por ejemplo `panel-coordinadora-supervisores`).
2. Conectar este repo local y subir el contenido:
   ```bash
   git remote add origin <URL_DEL_REPO>
   git branch -M main
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, rama `main`, carpeta `/root`.
4. GitHub va a publicar el sitio en `https://<usuario>.github.io/<repo>/` en un par de minutos.

## Pendientes

- Sumar el link de "Plan Control" cuando esté disponible.
