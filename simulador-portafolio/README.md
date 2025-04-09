# Simulador de Portafolio de Inversiones

Una aplicación web construida con React que permite simular y visualizar un portafolio de inversiones.

## Características

- Visualización de inversiones en formato tabla y gráficos
- Formulario para agregar nuevas inversiones
- Diseño responsive que se adapta a diferentes dispositivos
- Gráficos interactivos que muestran la distribución del portafolio y rentabilidad
- Interfaz moderna y amigable con Tailwind CSS

## Tecnologías Utilizadas

- React 18
- Vite
- Tailwind CSS
- Recharts para visualización de datos
- Hero Icons

## Requisitos Previos

- Node.js 14.x o superior
- npm 6.x o superior

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd simulador-portafolio
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir el navegador en `http://localhost:3000`

## Construcción para Producción

1. Generar build de producción:
   ```bash
   npm run build
   ```

2. Los archivos de producción estarán en la carpeta `dist`

## Despliegue

La aplicación puede ser desplegada fácilmente en plataformas como Vercel o Netlify:

### Vercel
1. Crear una cuenta en Vercel
2. Conectar con el repositorio de GitHub
3. Importar el proyecto
4. Vercel detectará automáticamente que es un proyecto Vite y lo configurará

### Netlify
1. Crear una cuenta en Netlify
2. Conectar con el repositorio de GitHub
3. Configurar:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Estructura del Proyecto

```
simulador-portafolio/
├── public/
│   └── parval-logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── InvestmentForm.jsx
│   │   ├── PortfolioTable.jsx
│   │   └── PortfolioCharts.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Uso

1. La aplicación muestra una tabla con las inversiones actuales
2. Utiliza el formulario para agregar nuevas inversiones:
   - Ingresa el nombre del activo
   - Especifica el monto en dólares
   - Define la rentabilidad esperada en porcentaje
3. Los gráficos se actualizarán automáticamente al agregar nuevas inversiones

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.
