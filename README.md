# Prueba Técnica Fullstack

Este proyecto es una aplicación completa de gestión de contactos desarrollada con Angular para el frontend y Laravel para el backend. La aplicación permite a los usuarios ver, agregar, editar y eliminar contactos, junto con sus números de teléfono, correos electrónicos y direcciones.

## Requisitos

- Node.js (v20.x)
- Angular CLI (v16.x o superior)
- PHP (v8.0 o superior)
- Composer
- MySQL

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación:

### Clonar el repositorio

```bash
git clone https://github.com/srodzav/fullstack-capi.git
cd fullstack-capi
```

### Configuración del Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
```

#### .env debería verse así
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=backend
DB_USERNAME=root
DB_PASSWORD=
```

### Configuración del Frontend (Angular)
```bash
cd ../frontend
npm install
npm start
```

#### El frontend estará disponible en http://localhost:4200.



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://drive.google.com/file/d/1W6cdL8AMoP-JW84Afd4G14QhqyHhTY_Q/view?usp=sharing)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sebastian-rodriguez-aaa916250//)


## License

[MIT](https://choosealicense.com/licenses/mit/)

