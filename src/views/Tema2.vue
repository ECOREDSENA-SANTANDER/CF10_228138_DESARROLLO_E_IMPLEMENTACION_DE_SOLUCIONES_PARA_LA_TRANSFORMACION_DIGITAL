<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Rentabilidad de la nube
    
    .row.align-items-center.justify-content-center
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg9.p-4
          p El entorno #[em Cloud], brinda grandes oportunidades para el crecimiento del negocio. Una vez se migra la empresa a este, se debe asegurar que su arquitectura se base en pilares bien definidos, además este entorno, ofrece herramientas que permiten determinar el coste de cualquier recurso desplegado con base a su uso real.
          p.mb-0 Como se indica a continuación, hay varias características que hacen apreciable el almacenamiento en la nube, estas son:
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/imag01.svg', alt='')
    
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Ventajas y desventajas de la Informática en la Nube
    
    .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
      .col-lg-10      
        .bloque-texto-g.color-secundario.p-4.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/t2/imag02.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Son muchas las ventajas que ofrece la computación en la nube,de ahí la importancia y popularidad que ha venido logrando, podemos hablar de una mejora económica, la simplificación o disminución de la complejidad en la administración de los recursos de TI, la escalabilidad, la flexibilidad, y el alto impacto en la conservación del planeta por el uso mejorado y la reducción de la huella de carbono, a continuación, se mencionan de manera muy general estas ventajas: 

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Mejor economía") 
            ul.lista-ul--color.fa-ul
              li 
                i.fas.fa-angle-right
                | Un proceso de planeación de una compañía, junto con la infraestructura requerida para dar soporte a sus proceso misionales, requiere de 1 a 5 años. 
              li 
                i.fas.fa-angle-right
                | Durante esta proyección en tiempo e inversión, es posible calcular la adquisición de los recursos planeados. 
              li 
                i.fas.fa-angle-right
                | Se pueden subutilizar o requerir mayores recursos, por falta de proyección, lo que impacta de manera directa la economía de la empresa.
              li 
                i.fas.fa-angle-right
                | El modelo económico utilizado por las tecnologías de computación en la nube, requiere un pago solo por lo utilizado, a la vez que facilita iniciar con recursos mínimos, e ir incrementando estos a medida que aumenta su necesidad.
              li 
                i.fas.fa-angle-right
                | En la computación en la nube, la inversión inicial no requiere mucho dinero, pues no se necesita adquirir y mantener infraestructuras informáticas costosas, o el pago periódico de administración de la infraestructura como: consumo eléctrico, aire acondicionado, etc.
              li 
                i.fas.fa-angle-right
                span.mb-0 En el caso de las #[em startups] toma mayor importancia porque, al ceder recursos de proceso en concesión, se benefician de reducir el costo inicial y reducir el tiempo de comercialización al crear y poner sus ofertas a disposición del público general.
          p(numero="2" titulo="Administración simplificada de ti") Esta es una ventaja muy importante ya que no se requiere disponer de tiempo, recursos y personal para configurar, usar y mantener los recursos e infraestructura tecnológica de la organización, estos son funciones que son asumidas por el proveedor de servicios de #[em Cloud] y es un factor diferencial en la oferta de valores ofrecidos por los diferentes proveedores al momento de cotizar o adquirir servicios de nube.
          p(numero="3" titulo="Escalabilidad") En la computación tradicional el proceso de adquirir, configurar y poner en funcionamiento recursos de TI suele ser un proceso demorado y no tan ágil, por el contrario los proveedores de servicios #[em Cloud] pueden realizar aprovisionamiento de recursos a medida de la necesidad de cada empresa en cuestión de minutos o horas según lo requerido, esta característica permite que el cliente pueda crecer o decrecer verticalmente según la demanda, esto permite el ahorro de dinero, las nubes tienen una importante característica denominada elasticidad, donde los recursos se pueden aprovisionar y desaprovisionar de forma dinámica o mediante programación para adaptarse a las cargas de trabajo requeridas.
          p(numero="4" titulo="Flexibilidad") Los proveedores de servicios de #[em Cloud] hoy, tienen la posibilidad de ofrecer servicios flexibles, elásticos y modulares que serán provisionados de acuerdo a la necesidad particular de cada cliente que incluye diferentes plataformas tecnológicas, y diferentes sistemas operativos personalizando las instancias, máquinas virtuales o contenedores de acuerdo a cada necesidad específica.
          p(numero="5" titulo="Alto impacto en la conservación del planeta")  Gracias a la informática en la nube se ha mejorado el acceso a los recursos, pues se comparten recursos físicos entre múltiples clientes a través de tecnologías como la virtualización, y los servidores. Ahora se consolidan estos como instancias del sistema operativo que comparten los mismos recursos físicos disponibles, lo que conduce a un ahorro global en energía y refrigeración y reduce la huella de carbono.       
          p(numero="6" titulo="Implementación rápida y global") Al tener una presencia global, todos los proveedores de servicios de #[em Cloud] facilitan el despliegue y presencia rápida y con presencia global, las pequeñas empresas, emprendimientos y #[em startups], pueden llegar más fácilmente a nuevos mercados y competir con otras empresas ya establecidas.
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .cajon.align-items-center.color-custom.p-4
          p.mb-0 Aunque es conocido que los servicios en la nube facilitan el trabajo remoto y ofrecen ciertos niveles de protección, no se debe desconocer algunas desventajas de #[em Cloud computing] relacionados principalmente con los siguientes.
    
    .row.justify-content-center.d-none.d-md-flex(data-aos="fade-down")
      .col-12.col-lg-10
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/imag03.svg' alt='')
          .tarjeta.tarjeta-azul(x="57%" y="7.5%" numero="")
            .p-3
              p.text-white.mb-0.mb-0 El uso de la nube también plantea muchos problemas relacionados con la privacidad. En función de las leyes con las cuales “funcione” un proveedor de servicios en la nube, los gobiernos pueden tener la capacidad de buscar y asumir datos del proveedor sin el consentimiento explícito o notificación del cliente. Además, los clientes no pueden estar totalmente seguros de la confidencialidad de los datos al usar nubes públicas. 
          .tarjeta.tarjeta-azul(x="75%" y="29.5%" numero="")
            .p-3
              p.text-white.mb-0 Si bien la informática en la nube obliga a que los proveedores de estos servicios tomen todas las medidas necesarias para garantizar el correcto funcionamiento y la entrega oportuna y con calidad a sus clientes, no están exentos de presentar problemas de confiabilidad que ocasionaron fallas e indisponibilidades que cuando se tienen en la nube nos pueden afectar y dejar sin acceso a los servicios, en la computación tradicional se puede implementar infraestructuras redundantes y con tolerancia a fallos, pero esto implica mayor costos e inversión, en la computación en la nube este tipo de problemas buscan solucionarse a través de acuerdos de nivel de servicio ofrecidos por el proveedor.
          .tarjeta.tarjeta-azul(x="30%" y="22%" numero="")
            .p-3
              p.text-white.mb-0 Los grandes proveedores de servicios de computación en la nube ofrecen nubes públicas y son de propiedad exclusiva de las empresas que ofrecen el servicio, esto puede llevar a que en determinado momento al adquirir un servicio, un cliente quede de alguna manera “amarrado” a ese proveedor ya que, puede desarrollar aplicaciones o almacenar sus datos en estas nubes, hay muy poca normalización frente a los servicios que se entregan por parte de los proveedores, lo que puede llevar a que si un cliente quisiera migrar sus servicios a otro proveedor se vuelva una tarea demasiado engorrosa y, que en algunas ocasiones acarree gastos innecesarios al tener que recurrir a expertos en hacer migraciones de una plataforma a otra.
          .tarjeta.tarjeta-azul(x="47.5%" y="43%" numero="")
            .p-3
              p.text-white.mb-0 La informática en la nube permite que los datos e información corporativa de una organización salga del espacio físico de la empresa y sea dispuesta en Internet a través de los servicios de #[em Cloud], esto es un riesgo muy alto en cuanto a la seguridad de la información y ciberseguridad, algunas empresas o dominios específicos por sus necesidades particulares y por el tipo de información que soportan, deben de recurrir a nubes privadas o híbridas a fin de garantizar la protección de su información.
    
    .row.justify-content-center.mb-5.d-flex.d-md-none(data-aos="fade-down")
      .bg13.p-4
        .row.mb-3
          img.m-auto.w-75(src='@/assets/curso/temas/t2/ImgInfog2_img1.svg' alt='')
          .tarjeta.bg10.p-3
            p.text-white.mb-0 Los grandes proveedores de servicios de computación en la nube ofrecen nubes públicas y son de propiedad exclusiva de las empresas que ofrecen el servicio, esto puede llevar a que en determinado momento al adquirir un servicio, un cliente quede de alguna manera “amarrado” a ese proveedor ya que, puede desarrollar aplicaciones o almacenar sus datos en estas nubes, hay muy poca normalización frente a los servicios que se entregan por parte de los proveedores, lo que puede llevar a que si un cliente quisiera migrar sus servicios a otro proveedor se vuelva una tarea demasiado engorrosa y, que en algunas ocasiones acarree gastos innecesarios al tener que recurrir a expertos en hacer migraciones de una plataforma a otra.
        .row.mb-3
          img.m-auto.w-75(src='@/assets/curso/temas/t2/ImgInfog2_img2.svg' alt='')
          .tarjeta.bg10.p-3
            p.text-white.mb-0 La informática en la nube permite que los datos e información corporativa de una organización salga del espacio físico de la empresa y sea dispuesta en Internet a través de los servicios de #[em Cloud], esto es un riesgo muy alto en cuanto a la seguridad de la información y ciberseguridad, algunas empresas o dominios específicos por sus necesidades particulares y por el tipo de información que soportan, deben de recurrir a nubes privadas o híbridas a fin de garantizar la protección de su información.
        .row.mb-3
          img.m-auto.w-75(src='@/assets/curso/temas/t2/ImgInfog2_img3.svg' alt='')
          .tarjeta.bg10.p-3
            p.text-white.mb-0 El uso de la nube también plantea muchos problemas relacionados con la privacidad. En función de las leyes con las cuales “funcione” un proveedor de servicios en la nube, los gobiernos pueden tener la capacidad de buscar y asumir datos del proveedor sin el consentimiento explícito o notificación del cliente. Además, los clientes no pueden estar totalmente seguros de la confidencialidad de los datos al usar nubes públicas. 
        .row
          img.m-auto.w-75(src='@/assets/curso/temas/t2/ImgInfog2_img4.svg' alt='')
          .tarjeta.bg10.p-3
            p.text-white.mb-0 Si bien la informática en la nube obliga a que los proveedores de estos servicios tomen todas las medidas necesarias para garantizar el correcto funcionamiento y la entrega oportuna y con calidad a sus clientes, no están exentos de presentar problemas de confiabilidad que ocasionaron fallas e indisponibilidades que cuando se tienen en la nube nos pueden afectar y dejar sin acceso a los servicios, en la computación tradicional se puede implementar infraestructuras redundantes y con tolerancia a fallos, pero esto implica mayor costos e inversión, en la computación en la nube este tipo de problemas buscan solucionarse a través de acuerdos de nivel de servicio ofrecidos por el proveedor.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Rentabilidad de la informática en la nube para los usuarios
    
    p.mb-4(data-aos="fade") Desde el plano económico la computación en la nube beneficia a las empresas, como ya se indicó a nivel de las ventajas que ofrece el #[em Cloud computing],  en primera instancia está el hecho de no requerir una gran inversión en TI de larga duración, reemplazando los gastos de capital por gastos operativos, esto significa que para la organización es más favorable tener una inversión a corto plazo, pagando por los servicios solicitados y utilizados, posibilitando que las organizaciones puedan aprovechar e invertir en otro tipo de necesidades.
    
    .row.align-items-center
      .col-lg-2.col-md-3.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imagref.svg', alt='')
      .col-lg-10.col-md-9(data-aos="fade-left")
        p La informática en la nube nos lleva a lograr tener una transición del modelo de negocio en cuanto a TI se refiere, pasando de CapEx a OpEx. El concepto OpEx son inversiones o gastos recurrentes a corto plazo, lo que permite a las organizaciones agilidad para usar esos recursos financieros haciendo inversiones mucho más rentables. 
    

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Rentabilidad para los proveedores de servicios en la nube
    
    .row.mb-4
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/imag04.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p En el caso de los proveedores de servicios de #[em Cloud] sucede lo contrario que con el cliente, ellos requieren más CapEx toda vez que deben de hacer grandes inversiones en infraestructura creando y dotando más Centros de Datos con tecnologías confiables, de alta disponibilidad y a unos costos que puedan ser amortizados o administrados a partir de tener más usuarios utilizando su infraestructura.
        .cajon.color-custom.bg-9.p-4.mb-4
          p.mb-0 Para el proveedor el camino es crear grandes centros de datos dotados con todas las características y bondades de la computación en la nube a fin de poder entregar y ofrecer un gran volumen de clientes nuevos que hagan rentable la inversión.
    

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Contratos y objetivos de nivel de servicio
    
    .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
      .col-lg-10      
        .bloque-texto-g.color-secundario.p-4.p-sm-4
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t2/imag02.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Se mencionó en un apartado anterior la necesidad de contar con acuerdos de nivel de servicios entre el cliente y el proveedor que entrega el servicio, para lograr esto al momento de planear la migración de servicios de computación tradicional a computación en la nube las organizaciones deben de responder una serie de preguntas que ayudarán a definir los objetivos del nivel del servicio, los interrogantes son:
    
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg10.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-6
              figure
                img(src='@/assets/curso/temas/t2/icono01.svg', alt='')
          h3.text2.text-center Interrogante 1
          p.text-white.text-center.mb-0 ¿Cuáles y en qué cantidad son los servicios a contratar?      
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg10.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-6
              figure
                img(src='@/assets/curso/temas/t2/icono02.svg', alt='')
          h3.text2.text-center Interrogante 2
          p.text-white.text-center.mb-0 ¿Qué nivel de soporte y respuesta a incidentes esperan por parte del proveedor?      
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg10.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-6
              figure
                img(src='@/assets/curso/temas/t2/icono03.svg', alt='')
          h3.text2.text-center Interrogante 3
          p.text-white.text-center.mb-0 ¿Cómo la organización puede validar la calidad en el servicio ofrecido por el proveedor?
    
    .row
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/imag05.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-custom.bg14.p-4.mb-4
          p.mb-0 La respuesta a estas preguntas es lo que permite determinar los objetivos del acuerdo de nivel de servicios o SLA donde se realiza un contrato entre el proveedor (externo o interno) y el cliente, y se establecen los servicios y las características de los mismos que el cliente espera de su proveedor.
        p Un acuerdo de nivel de servicio puede contar entre otras con las siguientes características:
        ul.lista-ul--color.fa-ul
          li 
            i.fas.fa-angle-right
            | Una definición de los servicios que el proveedor de servicios proporcionará al cliente.
          li 
            i.fas.fa-angle-right
            | Métodos para medir el rendimiento (Indicadores de medición). 
          li 
            i.fas.fa-angle-right
            | Protocolos para administrar problemas (métodos y canales de atención y soporte a usuarios, tiempos de respuesta y solución de incidentes)
          li 
            i.fas.fa-angle-right
            | Una lista de tareas de cliente (responsabilidades)
          li 
            i.fas.fa-angle-right
            | Garantías que debe respetar el proveedor de servicios
          li 
            i.fas.fa-angle-right
            | Procedimientos necesarios para la recuperación ante desastres (continuidad del negocio)
          li 
            i.fas.fa-angle-right
            | Proceso y directivas con respecto a la terminación del contrato


    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Amenazas de seguridad en la nube
    
    .row.fondo-t2.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t2/imag05.svg', alt='')
          .col-lg-8(data-aos="fade-left")
            p Las organizaciones en el desarrollo de su actividad o core de negocio reciben, generan, procesan o conservan información considerada como activos de la organización y tienen una afectación desde el plano económico o de negocio, de conocimiento o de propiedad intelectual en el momento de estar expuesta a posibles amenazas que puedan afectar lo antes mencionado.
            p Las amenazas a la seguridad en la computación en la nube van a depender de varios factores
            .tarjeta.bg10.p-4
              h4.text2 Amenazas
              p.text-white El tipo de servicio contratado según los SLA previamente establecidos entre proveedor y cliente donde se determinan las responsabilidades de cada parte.
              p.text-white.mb-0 El tipo de despliegue o puesta en producción de los servicios contratados.
    
    p.mb-4(data-aos="fade") En términos generales son varias las amenazas que afectan la computación en la nube como podemos ver en el siguiente recurso educativo:
    
    .bg2(data-aos="fade-down")
      SlyderA(tipo="b").p-4
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Accesos no autorizados
            p La gran mayoría de los servicios contratados regularmente están en nubes públicas lo que requiere un trabajo conjunto entre el proveedor y el cliente definido y adoptando todas las medidas necesarias para evitar el acceso de personas distintas a la organización a la información sensible.
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag07.svg', alt='')
        .row.justify-content-around.align-items-center
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag08.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Ataques o amenazas internas
            p Esto puede presentarse en las nubes privadas con exempleados o usuarios insatisfechos, quienes pueden ocasionar o provocar situaciones de riesgo por falta de gestión y administración de los permisos, roles y privilegios que deben estar disponibles para el recurso de #[em Cloud].
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Interfaces NO seguras
            p Dependerá de las interfaces de acceso a los recursos y servicios de nube entregados y soportados por el proveedor, o a las aplicaciones desarrolladas y desplegadas en la nube.
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag09.svg', alt='')
        .row.justify-content-around.align-items-center
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag10.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Problemas generados por el uso de tecnologías compartidas
            p Como ya mencionamos los proveedores de servicio hacen grandes inversiones de tipo CapEx a fin de lograr contar con una arquitectura que permita atraer y cada vez lograr prestar los servicios a más usuarios, ahora todos los usuarios comparten los mismos recursos tecnológicos lo que facilita el hecho de que si se tiene una falla de seguridad o una mala configuración en algún cliente pueda ocasionar que clientes de otras empresas puedan acceder a los recursos donde se presente la falla.
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Fuga o robo de información
            p Esta se puede presentar por varias razones entre las cuales se pueden encontrar una mala configuración de seguridad como no cifrar o proteger las comunicaciones, uso de malware o de ingeniería social por parte de un delincuente, esto podría ser utilizado para conseguir información confidencial que pueda ser empleado por cualquier cliente o miembro de la organización con servicios en la nube.
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag11.svg', alt='')
        .row.justify-content-around.align-items-center
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag12.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Suplantación de identidad
            p Esta puede ser provocada por el descuido en el manejo de las credenciales de un usuario, por ataques de fuerza bruta, de ingeniería social lo que permitirá que un delincuente o extraño pueda ingresar suplantando a un usuario real y manipule o robe  información confidencial.
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Desconocimiento de tecnologias #[em Cloud]
            p Al momento de hacer despliegue y configuración de servicios se requiere que la persona encargada de este proceso tenga el suficiente conocimiento y preparación en el entorno o proveedor en el cual se adquirieron los servicios de lo contrario puede llevar a q se configure políticas de seguridad y protección no eficaces.
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag13.svg', alt='')
        .row.justify-content-around.align-items-center
          .col-md-5
            img(src='@/assets/curso/temas/t2/imag14.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 #[em Hacking] a través de diferentes tipos de ataques
            p Esta es una amenaza que siempre estará presente ya que habrá delincuentes generando ataques en búsqueda de debilidades y accesos no protegidos a los recursos dispuestos en la nube.
    

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Control y auditoría de la seguridad en la nube
    
    p.mb-4(data-aos="fade") Si bien la computación en la nube nos brinda numerosas ventajas, uno de los desafíos principales es garantizar y comprobar la confiabilidad de los servicios en la nube. Esta confiabilidad debe ser evaluada tanto por el proveedor como por el cliente, como ya se mencionó en una temática anterior siempre se deben de firmar unos acuerdos de nivel de servicios que permita lograr medir esa confiabilidad el tema es cómo podemos medir esos niveles de acuerdo y de esta manera poder validar la confiabilidad requerida o contratada.

    .row.mb-4
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/imag15.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Usualmente los grandes proveedores de servicios de computación en la nube, como Amazon, Microsoft y Google, contratan auditores externos para que supervisen y hagan las auditorías a sus plataformas en busca de disponibilidad y otros factores, como la seguridad y la confidencialidad de los datos.
        .cajon.color-custom.bg14.p-4.mb-4
          p.mb-0 Los auditores externos o empresas contratadas generan informes de tipo SOC (Auditoría de los Controles de Servicio) el cual es un estándar internacional que permite evaluar los controles de seguridad de un proveedor y las amenazas de ciberseguridad.
        p Estos informes se dividen en diferentes niveles:   
    
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta2-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/t2/icono04.svg', alt='')
          h4.text-center SOC 1
          p.text-center.mb-0 Que cubren los informes financieros. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta2-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/t2/icono05.svg', alt='')
          h4.text-center SOC 2
          p.text-center.mb-0 Que cubren la seguridad, la disponibilidad y la privacidad.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta2-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/t2/icono06.svg', alt='')
          h4.text-center SOC 3
          p.text-center.mb-0 Que también cubren la seguridad, la disponibilidad y la privacidad.
    
    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        .cajon.color-custom.bg14.p-4.mb-4
          p.mb-0 Normalmente estos informes son privados, por lo menos SOC 1 y SOC 2 están disponibles solo para el cliente quien tiene contratado un acuerdo de nivel de servicio, mientras que el SOC 3 está disponible para el público.
        p.mb-4 Los proveedores de servicios de computación en la nube suelen también ofrecer a sus clientes servicios de monitoreo y de esta manera pueden alertar a sus clientes casi en tiempo real si se presentan fallas como la caída de un servidor web, o la caída de una instancia o máquina virtual específica, si bien la disponibilidad de los servicios es responsabilidad del proveedor, el cliente busca alternativas de tolerancia a fallos y alta disponibilidad a fin de garantizar el correcto funcionamiento del servicio.
        p  Dada la naturaleza de los servicios en la nube, es necesaria la auditoría y la supervisión. Esto requiere la supervisión y evaluación en tiempo real para desencadenar una respuesta rápida que permita proteger el servicio y la reputación del cliente. 
      .col-lg-5.col-md-7.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/imag16.png', alt='')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
