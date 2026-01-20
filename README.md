# Demoblaze E2E and API Automation  - Playwright

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
- Prueba e2e:
   npx playwright test --project=ui-demoblaze
- Prueba Api:
   npx playwright test --project=api-petstore
- Todas las pruebas
   npx playwright test

## Reportes (Opcional)
- Después de ejecutar:
  npx playwright show-report

- Ruta del reporte:
  playwright-report/index.html

## Estructura
- pages/: Page Object Model
- tests/: pruebas E2E
- data/: data externa
- api/: pruebas de Api

## Intefaz grafica (Opcional)
npx playwright test --ui
