# Demoblaze E2E Automation - Playwright Prueba Devsu



## Requisitos
- Node.js >= 18
- Git

## Instalación
1. Clonar el repositorio
2. Ejecutar:
   npm install
3. Instalar navegadores:
   npx playwright install

## Ejecutar pruebas
- Modo visible:
   npx playwright test --headed

## Reportes (Opcional)
Después de ejecutar:
  npx playwright show-report

Ruta del reporte:
  playwright-report/index.html

## Estructura
- pages/: Page Object Model
- tests/: pruebas E2E
- data/: data externa


## Intefaz grafica (Opcional)
npx playwright test --ui
