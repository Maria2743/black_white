## DESAFÍO BLACK AND WHITE

En este desafío, pondremos a prueba nuestros conocimientos de procesamiento de imágenes con JIMP y la descarga de aplicaciones. Para lograrlo, necesitarás aplicar tus habilidades en manipulación de imágenes utilizando la biblioteca JIMP, así como también comprender cómo descargar e instalar aplicaciones de manera efectiva.

# DESCRIPCIÓN 

La empresa Black and White Spa está promocionando una campaña para las redes sociales en donde quieren ofrecer un sitio web que permita escribir la URL de una imagen de internet y que ésta sea procesada por el servidor para ser devuelta en blanco y negro.
Deberás crear un servidor que disponibilice una ruta raíz que devuelva un HTML con el formulario para ingresar la URL de la imagen con estilos CSS de un documento interno en los archivos del servidor. El formulario debe redirigir a otra ruta del servidor que procese la imagen y la devuelva en blanco y negro.

# REQUERIMIENTOS

1. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario para el ingreso de la URL de la imagen a tratar.

```sh
archivo-> index.js
```

2. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el servidor. 

```sh
archivo-> public/assets/css/style.css
```

3. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser procesada en escala de grises y redimensionada a unos 350px de ancho.

```sh
archivo-> index.js
```

4. La imagen alterada debe ser almacenada con un nombre incluya una porción de un UUID y con extensión “jpg”, por ejemplo: 3dcb6d.jpeg. 


```sh
archivo-> index.js
```
