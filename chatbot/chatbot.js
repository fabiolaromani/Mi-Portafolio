
window.ChatbotPortafolio = {
    normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    },

    responder(mensaje) {
        const pregunta = this.normalizar(mensaje);

        const respuestas = [
            {
                palabras: ["semana 1", "semana 01", "primera semana"],
                respuesta: "En la Semana 01 del curso Algoritmo y Estructura de Datos se presentan dos actividades: métodos para trabajar con arreglos y cálculo del promedio de prácticas. Puedes revisar las evidencias en la sección Semana 01 de la Unidad I."
            },
            {
                palabras: ["actividad 1", "actividad uno", "metodos de arreglos", "metodos para trabajar con arreglos"],
                respuesta: "La Actividad 1 trata sobre métodos para trabajar con arreglos. Incluye eliminar, modificar e insertar elementos; sumar sus valores; hallar el menor, el mayor y el promedio; sumar elementos impares; mover el primer elemento al final y mover el primer par al final."
            },
            {
                palabras: ["eliminar elemento", "eliminar del arreglo", "borrar elemento"],
                respuesta: "Eliminar un elemento consiste en quitar un valor del arreglo y reorganizar o actualizar sus posiciones según la implementación. En tu portafolio, este tema aparece en la evidencia 01 de la Actividad 1 de la Semana 01."
            },
            {
                palabras: ["modificar elemento", "cambiar elemento", "actualizar elemento"],
                respuesta: "Modificar un elemento significa reemplazar su valor por otro en una posición determinada del arreglo. Puedes encontrar la evidencia correspondiente en la Actividad 1, evidencia 02 de la Semana 01."
            },
            {
                palabras: ["insertar elemento", "insertar en arreglo", "agregar en una posicion"],
                respuesta: "Insertar un elemento consiste en incorporar un nuevo valor en una posición determinada. Según cómo esté implementado el arreglo, puede ser necesario desplazar los elementos siguientes. Este tema aparece en la evidencia 03 de la Actividad 1."
            },
            {
                palabras: ["sumar elementos", "suma del arreglo", "sumatoria"],
                respuesta: "Para sumar los elementos de un arreglo, se recorre cada posición y se acumula su valor en una variable. Por ejemplo, para [2, 4, 6], la suma es 12. En tu Semana 01 puedes revisar la evidencia 04 de la Actividad 1."
            },
            {
                palabras: ["menor mayor", "numero menor", "numero mayor", "maximo y minimo"],
                respuesta: "Para encontrar el menor y el mayor se recorren los valores y se comparan con los valores mínimo y máximo encontrados hasta ese momento. La evidencia 05 de la Actividad 1 aborda el menor, el mayor y el promedio."
            },
            {
                palabras: ["promedio del arreglo", "promedio de los elementos", "calcular promedio"],
                respuesta: "El promedio se calcula dividiendo la suma de los valores entre la cantidad de elementos. Por ejemplo, con [10, 14, 16], el promedio es (10 + 14 + 16) / 3 = 13,33."
            },
            {
                palabras: ["impares", "sumar impares", "elementos impares"],
                respuesta: "Los números impares son aquellos que no son divisibles exactamente entre 2. Para sumarlos, se recorre el arreglo y se acumulan los valores cuyo residuo al dividirlos entre 2 sea distinto de cero. Este tema corresponde a la evidencia 06 de la Actividad 1."
            },
            {
                palabras: ["primer elemento al final", "mover primer elemento", "primero a la ultima posicion"],
                respuesta: "Esta operación consiste en tomar el primer elemento del arreglo, conservar el orden de los demás y colocar el elemento inicial al final. Puedes consultar la evidencia 07 de la Actividad 1."
            },
            {
                palabras: ["primer par", "mover par al final", "primer par al final"],
                respuesta: "La evidencia 08 de la Actividad 1 trata sobre mover el primer par al final del arreglo. La lógica exacta depende de cómo se haya implementado el método en tu código."
            },
            {
                palabras: ["actividad 2", "actividad dos", "promedio de practicas", "calculo del promedio"],
                respuesta: "La Actividad 2 desarrolla el cálculo del promedio de prácticas. Sus evidencias incluyen ingreso y almacenamiento de notas, eliminación de la práctica con la nota más baja, cálculo del promedio, redondeo y validación del ingreso de datos."
            },
            {
                palabras: ["ingresar notas", "almacenar notas", "registro de notas"],
                respuesta: "Ingresar y almacenar notas permite conservar las calificaciones para procesarlas posteriormente. En tu portafolio, esta operación aparece en la evidencia 01 de la Actividad 2 de la Semana 01."
            },
            {
                palabras: ["nota mas baja", "eliminar nota", "practica mas baja", "menor nota"],
                respuesta: "La evidencia 02 de la Actividad 2 aborda la eliminación de la práctica con la nota más baja. La finalidad es retirar esa calificación antes de realizar el cálculo correspondiente, de acuerdo con las reglas del ejercicio."
            },
            {
                palabras: ["redondear promedio", "promedio redondeado", "redondeo"],
                respuesta: "Redondear un promedio permite mostrarlo con la precisión deseada. Por ejemplo, 14,67 redondeado al entero más cercano es 15. Tu portafolio incluye una evidencia específica sobre mostrar el promedio redondeado."
            },
            {
                palabras: ["validacion", "validar datos", "validar notas", "ingreso de datos"],
                respuesta: "La validación comprueba que los datos ingresados cumplan las condiciones del programa. Para notas, por ejemplo, se puede verificar que se introduzcan números y que estén dentro del rango permitido por el ejercicio. Este tema aparece en la evidencia 05 de la Actividad 2."
            },
            {
                palabras: ["que es un arreglo", "arreglo", "array", "vector"],
                respuesta: "Un arreglo es una estructura que permite organizar varios valores bajo un mismo nombre y acceder a ellos mediante posiciones o índices. En la Semana 01 de tu portafolio se aplican arreglos a operaciones como insertar, eliminar, modificar, sumar y calcular promedios."
            },
            {
                palabras: ["que es algoritmo", "que es un algoritmo", "algoritmo"],
                respuesta: "Un algoritmo es una secuencia ordenada y finita de pasos para resolver un problema. En el curso Algoritmo y Estructura de Datos, los métodos de la Semana 01 permiten practicar la resolución de problemas mediante operaciones sobre arreglos y notas."
            },
            {
                palabras: ["estructura de datos", "estructuras de datos"],
                respuesta: "Una estructura de datos es una forma de organizar y almacenar información para poder utilizarla eficientemente. En la Semana 01 de tu portafolio se trabaja con arreglos, una estructura que permite acceder a sus elementos mediante posiciones."
            },
            {
                palabras: ["curso", "nombre del curso", "que curso"],
                respuesta: "El curso de tu portafolio es Algoritmo y Estructura de Datos. La Semana 01 presenta ejercicios de arreglos y cálculo del promedio de prácticas."
            },
            {
                palabras: ["donde encuentro", "como llego", "navegar", "portafolio", "unidad i", "evidencias"],
                respuesta: "Para revisar tus trabajos, entra en Portafolio, selecciona Unidad I y abre Semana 01. Allí encontrarás las dos actividades y sus evidencias. También puedes regresar al Inicio mediante el menú superior."
            },
            {
                palabras: ["quien hizo", "estudiante", "autora", "autor"],
                respuesta: "Este portafolio académico corresponde a Fabiola Fariza Romani Villanueva, estudiante de Ingeniería de Sistemas y Computación de la Universidad Peruana Los Andes."
            },
            {
                palabras: ["hola", "buenos dias", "buenas tardes", "buenas noches"],
                respuesta: "¡Hola! Soy el asistente del portafolio académico. Puedo explicarte los temas de la Semana 01 y ayudarte a encontrar sus actividades. Prueba preguntarme: «¿Qué es un arreglo?» o «¿Qué contiene la Actividad 2?»."
            }
        ];

        for (const tema of respuestas) {
            if (tema.palabras.some(palabra => pregunta.includes(palabra))) {
                return tema.respuesta;
            }
        }

        return "Puedo ayudarte con los temas registrados de la Semana 01: arreglos, inserción y eliminación de elementos, sumas, menor y mayor, promedio de prácticas y validación de notas. También puedo orientarte para encontrar las evidencias. ¿Sobre cuál de estos temas quieres saber más?";
    }
};
