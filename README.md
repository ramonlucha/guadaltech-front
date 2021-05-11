# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Funcionamiento

El funcionamiento simplemente hace una consulta al API utilizando hooks guardamos
y gestionamos las variables entre componentes. Dicho funcionamiento debe ser que 
si el campo esta vacio se efectuara una busqueda general es decir nos mostrará
todos los becarios que nos devuelva el API. En el caso que rellenemos el campo 
tendremos 2 posibilidades que exista ese id y nos devuelva solo un becario o que 
no exista y nos devuelva un error.
### API

El API facilitado por la empresa https://guadaltech-fullstack.herokuapp.com/api/ 
para realizar dicho test.


### `Bootswatch`

Al realizar estas pruebas y proyectos intento siempre probar herramientas nuevas
en este caso informandome un poco acerca de herramientas como bootstrap encontre
bootswatch  https://bootswatch.com/ que practicamente en funcionalidad y demas es
para lo mismo que bootstrap con la diferencias que tiene mas variedad a la hora
de permitirnos elegir colores.

### Componentes

Hemos decidido poner en este caso 3 componentes entre los cuales pasamos algunas variables a traves de los hooks
Formulario para la parte del buscador y el boton, Becarios para la lista de becarios aunqnue en ocasiones es solo
1 y Error para que en el caso de que la busqueda no sea fructuosa aparezca un error y se muestre.

### Implementaciones futuras

Las implementaciones futuras seria a corto plazo añadir 2 columnas al listado de becarios con 2 iconos uno de 
papelera que al pulsarlo permite eliminar ese becario con un ventana emergente que permita confirmar si se quiere
realizar la eliminación y el otro icono una lupa que despliegue un formulario con todos los datos de un becario y
que permita la modificación con un boton de guardar para realizar la modificación de cualquier becario si fuera
necesasrio.

### Conclusion

Proyecto sencillo basico y minimalista que nos permite ver que con poco codigo y usando alguns frameworks o librerias 
se pueden hacer grandes cosas con React.


