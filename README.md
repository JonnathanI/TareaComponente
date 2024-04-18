# CarFactory Component

## Descripción
El componente `CarFactory` simula una fábrica de automóviles en diferentes etapas de producción. Muestra el estado actual de la producción, que cambia en intervalos de tiempo predefinidos.

## Detalles de Implementación

### Importaciones
- `React` y `Component` son importados desde el paquete 'react' para definir componentes de React.

### Interfaz de Estado
- Define una interfaz `CarFactoryState` que especifica la estructura del estado del componente. En este caso, solo hay un campo `productionStatus` que es una cadena.

### Definición del Componente
- Define la clase `CarFactory` que extiende `Component`. Toma dos argumentos de tipo genérico, siendo el primero para las propiedades (en este caso, no se utilizan) y el segundo para el estado (`CarFactoryState`).

### Constructor
- Inicializa el estado del componente con `productionStatus` establecido en `'Idle'`.

### componentDidMount
- Se llama después de que el componente se monta en el DOM. Después de 2 segundos, actualiza el estado para establecer `productionStatus` en `'Production Started'`.

### componentDidUpdate
- Se llama después de que el componente se actualiza en el DOM. Actualiza el estado en intervalos de 2 segundos según el estado actual de `productionStatus`.

### Renderización
- Retorna la estructura JSX del componente, mostrando el estado actual de la producción.

### Exportación del Componente
- Exporta el componente `CarFactory` para su uso en otros archivos.
