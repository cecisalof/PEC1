
## Parte Teorica:

### La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

• ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

El uso de etiquetas semánticas en HTML proporciona varias ventajas cruciales para el desarrollo web moderno. Estas etiquetas están diseñadas específicamente para dar significado y estructura semántica al contenido de una página web, lo que mejora la accesibilidad, la optimización para motores de búsqueda y la mantenibilidad del código. Tres de las ventajas más importantes son:

1.- Mejora la accesibilidad: Las etiquetas semánticas en HTML, como `<header>, <nav>, <main>, <article>, <section>, <footer>`, entre otras, ayudan a los navegadores y dispositivos de asistencia (lectores de pantalla, por ejemplo) a comprender la estructura y jerarquía del contenido de una página web. Esto beneficia a las personas con discapacidades visuales o cognitivas, ya que pueden navegar y comprender el contenido de manera más efectiva. Además, una estructura semántica clara facilita la navegación y la experiencia de usuario para todos.

2.- Optimización para motores de búsqueda (SEO): Los motores de búsqueda, como Google, utilizan etiquetas semánticas para comprender mejor el contenido de una página web y asignar relevancia a diferentes secciones. Utilizar etiquetas semánticas adecuadamente mejora la visibilidad de tu sitio web en los resultados de búsqueda. Por ejemplo, los motores de búsqueda pueden dar prioridad a contenido dentro de un `<article>` como contenido principal, lo que aumenta la posibilidad de que se muestre en los resultados de búsqueda relevantes.

3.- Facilita el mantenimiento y desarrollo colaborativo: Las etiquetas semánticas hacen que el código HTML sea más legible y comprensible para los desarrolladores, lo que facilita el mantenimiento y la colaboración en proyectos web. Al seguir una estructura semántica clara y significativa, los desarrolladores pueden entender rápidamente cómo está organizado el contenido y realizar cambios o actualizaciones de manera más eficiente. Esto es especialmente importante en proyectos web grandes y complejos.

En resumen, el uso de etiquetas semánticas en HTML mejora la accesibilidad, el SEO y la mantenibilidad del código, lo que resulta en una mejor experiencia para los usuarios, una mayor visibilidad en los motores de búsqueda y un proceso de desarrollo más eficiente. Estas ventajas son esenciales para el éxito de cualquier sitio web moderno.

• Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

API Geolocation:
Funcionalidad: La API Geolocation permite a las aplicaciones web acceder a la ubicación geográfica del usuario a través del dispositivo que está utilizando, como un teléfono inteligente o un ordenador. Esto puede utilizarse para proporcionar contenido localizado, direcciones, recomendaciones basadas en la ubicación, y más. La API utiliza datos de GPS, redes Wi-Fi y geolocalización IP para determinar la ubicación del usuario.

API Web Storage (localStorage y sessionStorage):
Funcionalidad: Estas APIs permiten a las aplicaciones web almacenar datos en el navegador del usuario de manera persistente (localStorage) o de sesión (sessionStorage). Esto es útil para almacenar información localmente en el dispositivo del usuario, como configuraciones, preferencias o datos temporales, sin necesidad de utilizar cookies. Los datos almacenados en localStorage permanecen disponibles incluso después de cerrar y reiniciar el navegador, mientras que los datos en sessionStorage se borran cuando se cierra la sesión o se cierra la ventana del navegador.

API de Cámara y Video:
Funcionalidad: Esta API permite a las aplicaciones web acceder a las cámaras y videocámaras del dispositivo del usuario. Puede utilizarse para capturar imágenes, grabar videos o realizar videoconferencias directamente en el navegador, lo que es especialmente útil para aplicaciones de videochat, streaming en vivo y aplicaciones de edición de imágenes en línea.



• Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).


CSS3 ofrece varias opciones para aplicar estilos CSS a un elemento en función del tamaño de pantalla o dispositivo en el que se está visualizando. Una de las opciones más comunes es el uso de "Media Queries" (Consultas de medios).

Puedes utilizar las Media Queries para especificar reglas CSS que se aplicarán solo cuando se cumplan ciertas condiciones relacionadas con el dispositivo, como el ancho de la pantalla. Un ejemplo podría ser:

```
@media (max-width: 768px) {
  /* Color de fondo para pantallas con un ancho máximo de 768px */
  body {
    background-color: lightblue;
  }
}
```

Las Media Queries permiten definir reglas de estilo que se aplicarán solo cuando se cumplan ciertas condiciones específicas, como el ancho de la pantalla del dispositivo. Esto permite crear diseños responsivos y adaptar la apariencia de tu sitio web a diferentes dispositivos y tamaños de pantalla.

Además de las Media Queries, CSS3 también ofrece otras características como Flexbox y Grid Layout que facilitan la creación de diseños flexibles y adaptables a diferentes dispositivos. Estas herramientas permiten controlar la disposición de los elementos en una página web de manera más eficiente en función del espacio disponible en la pantalla.


• Cita al menos 4 de las características principales de TypeScript (importante
superset de JavaScript que trataremos en el siguiente capítulo).

TypeScript es un lenguaje de programación que se considera un "superset" de JavaScript, lo que significa que extiende y mejora las capacidades de JavaScript. A continuación en listo alunas de características principales de TypeScript:

- Tipado Estático: TypeScript proporciona un sistema de tipos estático que permite declarar el tipo de las variables, parámetros de funciones y valores de retorno. Esto ayuda a atrapar errores de tipo en tiempo de compilación, lo que facilita la detección temprana de problemas en el código.

- Interfaces: TypeScript permite definir interfaces que describen la estructura de los objetos. Estas interfaces son útiles para asegurar que los objetos cumplan con ciertas propiedades y métodos específicos.

- Comprobaciones de Tipo: TypeScript realiza comprobaciones de tipo estáticas durante la compilación para garantizar que las operaciones en el código sean coherentes con los tipos declarados. Esto reduce la probabilidad de errores de tiempo de ejecución relacionados con tipos.

- Inferencia de Tipos: TypeScript puede inferir automáticamente los tipos de variables y expresiones cuando no se especifican explícitamente. Esto reduce la necesidad de escribir tipos repetitivos y hace que el código sea más conciso.

- Compatibilidad con JavaScript: TypeScript es un superset de JavaScript, lo que significa que puedes escribir código JavaScript válido en un archivo TypeScript sin ningún problema. Esto facilita la adopción gradual de TypeScript en proyectos existentes y la reutilización de código JavaScript existente.

- Soporte para ES6 y Funcionalidades Futuras: TypeScript es compatible con las características de ECMAScript 6 (ES6) y versiones posteriores de JavaScript, lo que significa que puedes utilizar las últimas características del lenguaje, como clases, módulos, desestructuración y mucho más. Además, TypeScript permite habilitar características futuras de JavaScript antes de que estén disponibles en los navegadores mediante la compilación a versiones más antiguas de JavaScript.

Estas son solo algunas de las características principales de TypeScript. En general, TypeScript se utiliza ampliamente en el desarrollo web y de aplicaciones para mejorar la calidad y la mantenibilidad del código JavaScript, especialmente en proyectos grandes y complejos.


### El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

• Cita al menos 2 de estos preprocesadores.

Los preprocesadores CSS son herramientas que extienden la funcionalidad de las hojas de estilo en cascada (CSS) tradicionales. Estas herramientas permiten a los desarrolladores escribir código CSS de una manera más eficiente y organizada al proporcionar características adicionales que no están disponibles en CSS puro. Los preprocesadores CSS son procesados antes de que el navegador interprete el CSS final, lo que significa que el código generado se convierte en CSS válido y se utiliza en la visualización web.

Algunos de los preprocesadores CSS más populares incluyen:

- Sass (Syntactically Awesome Stylesheets): Sass es uno de los preprocesadores CSS más ampliamente utilizados. Fue creado para abordar algunas de las limitaciones y repeticiones comunes en CSS puro. Sass permite definir variables para almacenar valores reutilizables, como colores, tamaños de fuente y valores numéricos. Estas variables facilitan la actualización y el mantenimiento del código CSS. Así mismo Sass hace posible anidar selectores CSS dentro de otros selectores para una mejor organización y estructura del código. Esto ayuda a evitar la repetición de nombres de clase en el HTML. Sass ayuda a escribir código CSS más modular y mantenible.

- Less es otro preprocesador CSS popular que ofrece características adicionales para mejorar la escritura de código CSS. Al igual que Sass, Less permite extender y mejorar la funcionalidad de CSS mediante una sintaxis especial que se compila en CSS estándar.  Al igual que con Sass, debes compilar los archivos Less en CSS estándar antes de usarlos en un sitio web. Hay herramientas de compilación de Less disponibles, como Less.js (para uso en el lado del cliente) y herramientas de línea de comandos para compilar Less en CSS en el lado del servidor. Less es una opción sólida para quienes buscan un preprocesador CSS que ofrezca funcionalidades adicionales y una sintaxis clara y concisa para mejorar la escritura y el mantenimiento del código CSS.

• Cita al menos 4 ventajas que ofrecen estos preprocesadores.


Los preprocesadores CSS, como Sass y Less, ofrecen varias ventajas que ayudan a mejorar la eficiencia y la calidad del código CSS en proyectos web. Cuatro de las ventajas clave que ofrecen son:

- Variables: Tanto Sass como Less permiten definir variables para almacenar valores reutilizables. Esto facilita la actualización global del estilo al cambiar un valor en un solo lugar, lo que mejora la consistencia y el mantenimiento del código CSS.

- Anidamiento de Selectores: Ambos preprocesadores permiten anidar selectores CSS dentro de otros selectores. Esto ayuda a organizar el código de manera jerárquica y a evitar la repetición de nombres de clase, lo que hace que el código sea más legible y mantenible.

- Mejora de la Organización: Los preprocesadores permiten dividir el código CSS en archivos separados y luego importarlos en un archivo principal. Esto mejora la organización y la modularidad del código, lo que es especialmente beneficioso en proyectos grandes y complejos. Cada archivo puede centrarse en un aspecto específico del diseño, lo que facilita la colaboración y el mantenimiento.

- Detección de Errores Temprana: Los preprocesadores realizan verificaciones de sintaxis y comprobaciones de tipos durante la compilación, lo que ayuda a detectar errores en el código antes de que se implemente en el sitio web. Esto reduce la posibilidad de errores de estilo y de diseño en el sitio en producción.

- Compatibilidad con CSS Estándar: Los preprocesadores generan código CSS estándar como resultado de la compilación, lo que significa que el CSS resultante puede ser interpretado por todos los navegadores web. No se requieren cambios significativos en la infraestructura web para utilizar preprocesadores CSS.


• Explica brevemente en qué consisten los sourcemaps.

Los sourcemaps, en español "mapas de origen", son archivos que contienen información sobre la relación entre el código fuente original y el código generado en un proceso de transformación o compilación, como el que ocurre en el desarrollo web cuando se compila código JavaScript, CSS o preprocesadores como Sass o Less.

La función principal de los sourcemaps es permitir a los desarrolladores depurar y rastrear problemas en el código generado, incluso cuando este código es muy diferente del código fuente original. Los sourcemaps mapean las líneas de código en el código fuente original con las líneas equivalentes en el código generado, lo que permite que las herramientas de desarrollo, como el inspector de código de un navegador, muestren los errores y advertencias en el contexto del código fuente original en lugar del código generado.

En resumen, los sourcemaps son una herramienta crucial en el desarrollo web moderno, ya que facilitan la depuración y la comprensión de problemas en el código, incluso cuando se utilizan preprocesadores, compiladores o herramientas de optimización que generan código diferente al original. Esto acelera el proceso de desarrollo y mejora la calidad del código.

• Explica qué es un transpilador.

Un transpilador, también conocido como transcompilador o simplemente "transpiler", es un tipo de software que toma código fuente escrito en un lenguaje de programación y lo convierte en código fuente equivalente en otro lenguaje de programación, en lugar de traducirlo a un lenguaje de bajo nivel como lo hace un compilador.

La principal diferencia entre un compilador y un transpilador radica en el nivel de abstracción del lenguaje objetivo. Los compiladores traducen código fuente a lenguaje de máquina u otro lenguaje de bajo nivel, mientras que los transpiladores traducen código fuente a un lenguaje de nivel igual o similar. Por lo tanto, el código fuente resultante del proceso de transpilación todavía es legible para los programadores y está destinado a ser utilizado en el mismo nivel de abstracción que el código fuente original.

Un ejemplo común de transpilación es el proceso de convertir código fuente escrito en JavaScript moderno (que utiliza características de ES6, ES7, etc.) en código JavaScript más antiguo y compatible con versiones anteriores de navegadores web que no admiten las últimas características de JavaScript. Las herramientas de transpilación como Babel se utilizan comúnmente en el desarrollo web para este propósito.

En resumen, un transpilador es una herramienta que traduce código fuente de un lenguaje de programación a otro lenguaje de programación de nivel similar, lo que permite la compatibilidad entre diferentes versiones o entornos de un lenguaje o la adopción de características modernas en un lenguaje en versiones anteriores.


### El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

• Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

Git: Git es uno de los sistemas de control de versiones más populares y ampliamente utilizados. Fue desarrollado por Linus Torvalds y es conocido por su velocidad, eficiencia y capacidad de trabajo en entornos distribuidos. Git es especialmente popular en el desarrollo de software y se utiliza para rastrear cambios en el código fuente, colaborar en proyectos y mantener un historial completo de revisiones.

Mercurial: Mercurial (también conocido como "Hg") es un sistema de control de versiones distribuido similar a Git. Es especialmente conocido por su simplicidad y facilidad de uso. Mercurial permite realizar un seguimiento de cambios en el código fuente y gestionar proyectos de manera efectiva, y es una opción popular para proyectos de software y desarrollo colaborativo.

Subversion (SVN): Subversion, también conocido como SVN, es otro sistema de control de versiones que permite rastrear cambios en archivos y directorios a lo largo del tiempo. A diferencia de Git, SVN utiliza un modelo de control de versiones centralizado, lo que significa que hay un repositorio central que almacena el historial completo del proyecto y los desarrolladores sincronizan sus copias locales con ese repositorio central.

La elección entre Git y SVN depende en gran medida de las necesidades específicas del proyecto y las preferencias del equipo de desarrollo. Git es especialmente adecuado para proyectos distribuidos y para aquellos que requieren una mayor flexibilidad en el flujo de trabajo de desarrollo, mientras que SVN es más adecuado para proyectos centralizados y estructuras de desarrollo más tradicionales.

En cuanto a las herramientas de gestión de módulos podría citar: 

* npm (Node Package Manager): npm es la herramienta de gestión de paquetes predeterminada para JavaScript y Node.js. Se utiliza para instalar, administrar y actualizar paquetes de código (módulos) que se utilizan en proyectos de desarrollo de JavaScript. npm se integra estrechamente con el ecosistema de Node.js y es ampliamente utilizado para administrar dependencias en proyectos web y de aplicaciones.

* Yarn: Yarn es otra herramienta de gestión de paquetes para JavaScript que se creó para abordar algunos problemas de rendimiento y seguridad que se experimentaron con npm en el pasado. Ofrece una gestión de dependencias más rápida y eficiente, así como una mayor seguridad. Yarn es compatible con los paquetes de npm y se utiliza para instalar y gestionar dependencias de proyectos de JavaScript y Node.js. Además de resolver problemas de rendimiento, Yarn ofrece otras características, como la instalación en paralelo y un archivo "yarn.lock" para garantizar la reproducibilidad de las dependencias.

Estas herramientas de gestión de módulos son fundamentales en el desarrollo de aplicaciones y sitios web modernos, ya que simplifican la gestión de dependencias externas y aseguran que las bibliotecas y los módulos utilizados sean consistentes y compatibles entre sí.


• Cita y explica al menos 3 comandos de Git.

1. `git clone <repositorio_remoto>`.
Este comando se utiliza para crear una copia local de un repositorio remoto en tu máquina. El <repositorio_remoto> es la URL del repositorio que deseas clonar. Después de ejecutar este comando, tendrás una copia completa del historial de cambios y los archivos del repositorio en tu sistema local. Es el primer paso para colaborar en un proyecto o comenzar a trabajar en un repositorio existente.


2. `git add <archivo(s)>`.
El comando git add se usa para agregar cambios en archivos específicos al área de preparación (staging area) antes de confirmarlos (commit). Puedes especificar archivos individuales o patrones (como . para agregar todos los archivos). Este comando prepara los cambios para que se incluyan en el próximo commit. Por ejemplo, git add archivo.txt agregará archivo.txt al área de preparación.


3. `git commit -m "Mensaje de confirmación"`.
El comando git commit toma los cambios que has agregado previamente al área de preparación (staging area) con git add y crea un nuevo commit en la historia del repositorio. El mensaje de confirmación ("Mensaje de confirmación") es una descripción corta y significativa de los cambios que realizaste en este commit. Los commits son puntos de control en la historia del proyecto que facilitan el seguimiento de los cambios y la colaboración con otros miembros del equipo.

Estos son solo algunos de los comandos básicos de Git. Git es una herramienta muy versátil con muchos otros comandos y opciones que te permiten administrar y colaborar en proyectos de desarrollo de software de manera efectiva.

• Cita y explica brevemente las características más definitorias de WebPack.

Webpack es una herramienta utilizada para la administración de activos y la construcción de proyectos web. Sus características más definitorias son las siguientes:

- Empaquetamiento de Módulos: Webpack es conocido por su capacidad para empaquetar módulos de JavaScript y otros tipos de archivos, lo que facilita la organización y la carga eficiente de dependencias en aplicaciones web. Puede manejar tanto módulos comunes de Node.js como módulos de ECMAScript (ES6) a través de su sistema de "import" y "export".

- Administración de Activos: Webpack permite gestionar y optimizar una variedad de activos, como imágenes, estilos CSS, fuentes y más. Puede transformar y cargar automáticamente estos activos, lo que mejora el rendimiento de una aplicación al reducir las solicitudes de red y al cargar solo lo necesario.

- Cargadores (Loaders): Webpack utiliza cargadores para transformar diferentes tipos de archivos en módulos que pueden ser incluidos en el paquete final. Esto permite la integración de tecnologías como Babel (para transpilación de JavaScript) o Sass (para estilos CSS), entre otros.

- Plugins: Los plugins en Webpack permiten realizar tareas más avanzadas, como la optimización de código, la generación de archivos HTML, la administración de variables de entorno y la eliminación de código no utilizado.

- Amplia Comunidad y Ecosistema de Plugins: Webpack tiene una comunidad activa y un amplio ecosistema de plugins y extensiones, lo que facilita la integración con otras herramientas y marcos de trabajo.

En resumen, Webpack es una herramienta esencial para desarrolladores web que desean organizar, optimizar y empacar activos y código de manera eficiente, lo que contribuye al rendimiento y a una mejor gestión de proyectos web complejos.