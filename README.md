## Frontend con React + Vite

Este proyecto incluye un frontend desarrollado con [React](https://reactjs.org/) y [Vite](https://vitejs.dev/) que interactúa con el backend para crear, obtener y actualizar artículos.

### Características

- **Interfaz de usuario**: Proporciona una interfaz intuitiva para gestionar artículos.
- **Consumo de API**: Utiliza la API del backend para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

### Instalación

Sigue estos pasos para instalar y ejecutar el frontend en tu máquina local:

1. **Navega al directorio del frontend**:

    ```bash
    cd frontend
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

3. **Configura el archivo `.env`**:
    Crea un archivo `.env` en el directorio raíz del frontend con el siguiente contenido:

    ```env
    VITE_API_URL=http://localhost:3000
    ```

### Uso

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
