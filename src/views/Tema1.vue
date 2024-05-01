<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los servicios de TI en la Nube
    
    .row.align-items-end.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag01.svg', alt='')
      .bg1.col-lg-8(data-aos="fade-left")
        p.text1 La nube o cloud computing, es una de las soluciones tecnológicas de servicio más completa, pues, ofrece una alternativa informática basada en internet por medio de un intercambio de servicios. Este servicio en la nube se ha extendido a todos los sectores, tanto en empresas como en usuarios individuales.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1 Conceptos términos y definiciones
    
    .col-lg-11.mx-auto.d-none.d-lg-block.mb-4
      .tarjeta.fcs
        .row.align-items-center
          .col-lg-2(data-aos="fade-right")
            img.my-4(src='@/assets/curso/temas/icono01.svg' alt='' , style="width:115px; display:block; margin:0 auto;").mx-0.mx-md-3
          .col-lg-9(data-aos="fade-left")
            img(src='@/assets/curso/temas/comillas.svg' alt='Cita' style='width:65px;margin: 0 -1rem').mb-2
            h5.align-14 #[b Según  Del Vecchio, J. F., Paternina, F. J., & Henriquez Miranda, C. (2015)]
            h5.align-14 #[b #[em “La computación en la nube es el modelo que permite el acceso a una red bajo demanda de un conjunto de servicios informáticos configurables tales como infraestructura, aplicaciones y almacenamiento.”]]
            .floatRight
              img(src='@/assets/curso/temas/cuadrado.svg' alt='cuadrado' style='width:65px;margin: 0 -1rem').mb-2
    
    p.mb-4 Este tipo de tecnología durante los últimos años ha permitido que las empresas logren tener presencia corporativa en la web y, la adquisición de recursos tecnológicos informáticos en una inversión económica muy cómoda o razonable a manera de pago por servicios, sin la necesidad de adquirir físicamente equipos o infraestructura como antes era requerido por parte de las organizaciones, administración y mantenimiento, como se detalla a continuación:

    .row.justify-content-center.mb-md-3.mb-5
      .col-lg-10(data-aos="fade")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/infografia.svg')

          .tarjeta.color-primario.p-3.tarjeta--azul_1-1(x="4%" y="50%" numero="")
            .row.space-between.align-items-center.mb-0
              .col-md-10.col-9
                h3 Servicios de infraestructura
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 01
            p.text-alinear.mb-0.text-small Los servicios de infraestructura en la Nube, conocido como LaaS por sus siglas en inglés; se presentan como aplicaciones de autoservicio creadas para el acceso, control y gestión de infraestructuras remotas.
          .tarjeta.color-primario.p-3.tarjeta-violeta1(x="28%" y="50%" numero="")
            .row.space-between.align-items-center.mb-0
              .col-md-10.col-9
                h3  Plataformas en la nube
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 02
            p.text-alinear.mb-0.text-small Las Plataformas en la Nube son tan flexibles y versátiles que se usan para desarrollar aplicaciones y sistemas complejos para impulsar los entornos virtuales. De hecho; los sistemas PaaS proporcionan marcos virtuales donde los especialistas desarrollan y personalizan sus sistemas los propietario y las aplicaciones.
          .tarjeta.color-primario.p-3.tarjeta--azul_1-2(x="51.7%" y="50%" numero="")
            .row.space-between.align-items-center.mb-0
              .col-md-10.col-9
                h3 <i>Software</i> Los Servicios de Aplicaciones en la Nube, o mejor conocidos como Software como Servicio(SaaS) se enfocan en el uso de la web para entregar aplicaciones para todo y todos. Esta es la razón por la cual los SaaS representan el mayor mercado de servicios y sistemas en la Nube.
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 03
            p.text-alinear.mb-0.text-small Los Servicios de Aplicaciones en la Nube, o mejor conocidos como Software como Servicio(SaaS) se enfocan en el uso de la web para entregar aplicaciones para todo y todos. Esta es la razón por la cual los SaaS representan el mayor mercado de servicios y sistemas en la Nube.
          .tarjeta.color-primario.p-3.tarjeta-violeta2(x="76%" y="50%" numero="")
            .row.space-between.align-items-center.mb-0
              .col-md-10.col-9
                h3 ¿Para quienes?
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 04
            p.text-alinear.mb-0.text-small Los LaaS están pensados para ingenieros de sistemas, PaaS para desarrolladores web y SaaS para los consumidores directos.

    #menu1.row.justify-content-center
      .col-lg-12(data-aos="fade")
        .contenedor-total1-1
          figure
            img(src='@/assets/curso/temas/menu.png')
          
          .row.justify-content-center.px-2.py-2.p-md-4
            .col-auto.d-none.d-lg-block
              .contenedor-text-1.mb-0
                p.aling-8.mb-md-4.mb-0 Si bien en la mayoría de las ocasiones no es fácil identificar todas las opciones posibles, cuantas más alternativas se generen es más probable obtener una que resulte significativamente satisfactoria.
            .col-auto.d-block.d-lg-none
              .contenedor-text-1.mb-0
                p.mb-0 Si bien en la mayoría de las ocasiones no es fácil identificar todas las opciones posibles, cuantas más alternativas se generen es más probable obtener una que resulte significativamente satisfactoria.                
      .row.d-none.d-lg-block.mt-3
        .flex-container
          .caja 
            img.my-3(src='@/assets/curso/temas/icono02.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#1", title="Redes de datos") <b>Redes de datos</b> 
          a.caja.indicador__container(href="#2", title="Modelos de referencia" @mouseover="mostrarIndicador = false") 
            img.my-3(src='@/assets/curso/temas/icono03.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            <b>Modelos de referencia</b>
            .indicador--click(v-if="mostrarIndicador")
          .caja 
            img.my-3(src='@/assets/curso/temas/icono04.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#3", title="Modelo de referencia TCP /IP") <b>Modelo de referencia TCP /IP</b>  
          .caja 
            img.my-3(src='@/assets/curso/temas/icono05.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#4", title="Protocolos de comunicación") <b>Protocolos de comunicación</b> 
          .caja 
            img.my-3(src='@/assets/curso/temas/icono06.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#5", title="Puertos de comunicación") <b>Puertos de comunicación</b>
          .caja 
            img.my-3(src='@/assets/curso/temas/icono07.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#6", title="Medios de transmisión") <b>Medios de transmisión</b>
          .caja 
            img.my-3(src='@/assets/curso/temas/icono07.svg' alt='' , style="width:50px; display:block; margin:auto 0;").m-auto
            a(href="#7", title="Recursos compartidos") <b>Recursos compartidos</b>


    p.mb-4 Cuando hablamos de computación en la nube se mencionan una serie de componentes que hacen parte del conjunto dentro de los cuales se destacan:
    
    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Redes de datos

    .row.align-items-end.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imagredes.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Las redes de datos tienen por función potenciar e incrementar la productividad de las organizaciones al permitir que todos los dispositivos que se encuentran conectados puedan acceder a los recursos que se encuentran compartidos, en los últimos años la tecnología ha entrado a jugar un papel preponderante en el desarrollo y evolución de las organizaciones cada vez está más inmersa en todos los procesos y actividades empresariales, personales y cotidianas. 
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-0 Las redes han permitido que los servicios y el acceso a estos recursos sea cada vez más necesario ya que se requiere tener en todo momento trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos, esto es lo que conocemos como el networking. Para que dichas redes pueden interconectarse y trabajar en red se requiere de una serie de componentes desde el punto de vista físico y lógico dentro de los cuales destacamos los siguientes:
    
    .row.mb-5
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjeta1.svg', alt='Texto que describa la imagen')
          h3.text-center Modelos de referencia

      .col-sm-6.col-lg
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjeta2.svg', alt='Texto que describa la imagen')
          h3.text-center Protocolos de comunicación
      .col-sm-6.col-lg
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjeta3.svg', alt='Texto que describa la imagen')
          h3.text-center Puertos de comunicación
      .col-sm-6.col-lg
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjeta4.svg', alt='Texto que describa la imagen')
          h3.text-center Medios de transmisión
      .col-sm-6.col-lg
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjeta5.svg', alt='Texto que describa la imagen')
          h3.text-center Recursos compartidos 

    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Modelo de referencia
    
    .row.align-items-end.mb-4
      .col-lg-2.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imagref.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p.mb-4 Al inicio del desarrollo de la tecnología y más propiamente de la computación, los diferentes fabricantes construían sus equipos y dispositivos para que fueran compatibles con dispositivos de sus propias marcas lo que no facilitaba la interconexión de equipos y dispositivos de fabricantes distintos.
    
    p.mb-4 Esto llevó a la necesidad de estandarizar de manera que se permita la interconexión de una amplia gama de dispositivos sin importar fabricante o tipo se software, para que el intercambio de información sea posible se requiere el establecimiento de una serie de estándares.
    p.mb-4 Estos estándares son construidos por una serie de organizaciones que son las siguientes:
    
    .row.align-items-end.mb-5
      .col-lg-7.col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="ISO (Organización Internacional de Normas)") ISO definió un modelo de referencia como estándar para posibilitar las comunicaciones electrónicas a nivel global, conocido como el modelo OSI (Interconexión de Sistemas Abiertos).

          p.text-small(numero="2" titulo="IEEE (Instituto de ingenieros electrónicos y eléctricos)") Este organismo es encargado de fijar los estándares para los elementos físicos de una red, cables, conectores e interfaces.
        
          p.text-small(numero="3" titulo="ANSI (Instituto Nacional Americano de Normalización)") Es una organización sin fines de lucro que supervisa el desarrollo de estándares para productos, servicios, procesos y sistemas en los Estados Unidos.
        
          p.text-small(numero="4" titulo="EIA (Asociación de Industrias Electrónicas)") Es una organización formada por la asociación de las compañías electrónicas y de alta tecnología de los Estados Unidos, cuya misión es promover el desarrollo de mercado y la competitividad de la industria de alta tecnología de los Estados Unidos con esfuerzos locales e internacionales de la política.

          p.text-small(numero="5" titulo="TIA (Asociación de Industrias Telecomunicaciones)") Es una asociación comercial acreditada por el Instituto Nacional Estadounidense de Estándares (ANSI), con el fin de desarrollar normas industriales, tanto voluntarias como basadas en el consenso, sobre una amplia variedad de productos de las tecnologías de la información y la comunicación (TIC), y actualmente representa a casi 400 empresas. El Departamento de Estándares y Tecnología de TIA opera doce comités de ingeniería, que desarrollan pautas para equipos de radio privados, antenas celulares, terminales de datos, satélites, equipos de terminales telefónicos, accesibilidad, dispositivos VoIP, cableado estructurado, centros de procesamiento de datos, comunicaciones de dispositivos móviles, multidifusión multimedia, telemática vehicular, TIC utilizadas en el cuidado de la salud, comunicaciones M2M y redes de servicios inteligentes.
        
          p.text-small(numero="6" titulo="UIT (Unión Internacional de Telecomunicaciones)") La Unión Internacional de Telecomunicaciones es el organismo especializado en telecomunicaciones de la Organización de las Naciones Unidas, encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Su sede se encuentra en la ciudad de Ginebra.
      .col-lg-5
        img(src='@/assets/curso/temas/imaglinea.png', alt='')
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/imag02.png', alt='')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los modelos de referencia se basan en la definición de una serie de capas las cuales tienen cada una sus propias funciones y características que se encargan de resolver un problema diferente en la comunicación, tienen como propósito asistir en la comprensión más clara y sencilla de las funciones y los procesos involucrados en la interconexión de los diferentes dispositivos de red, para ello se establecen una serie de capas con un orden específico y cada una se sustenta en la capa anterior, y más que entrar en los detalles de las especificaciones técnicas requeridas en cada una de ellas, el modelo de referencia ayuda en la comprensión de lo que sucede, ayudándonos a lograr un mejor entendimiento de las funciones y procesos involucrados.
    
    .container.bg-color-1.p-4.p-md-5.fondo-1.mg-top-1.mb-4
      p.mb-3 El modelo de referencia para las redes de comunicaciones es el modelo OSI -Interconexión de Sistemas Abiertos, el cual se explica a continuación, veamos:
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-6.col-xl-6(data-aos="fade-right")
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img.m-3(src='@/assets/curso/temas/piramide.svg')
              
              .tarjeta.tarjeta-blanca.infog1-perso(x="52%" y="12%" numero="")
                h5.bg-color-1.text-white Física - Señalización y transmisión binaria
                .p-3
                  h5.mb-5 Transmisión binaria: cables, conectores, voltajes, velocidades de datos
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:1rem 6.4rem;")
                  p.mt-5 Los protocolos de capa física describen los medios mecánicos, eléctricos,  funcionales y de procedimiento para activar, mantener y desactivar conexiones físicas para la transmisión de <i>bits</i> hacia un dispositivo de red y desde el.

              .tarjeta.tarjeta-blanca(x="52%" y="25%" numero="")
                h5.bg-color-1.text-white Enlace de datos - Direccionamiento físico
                .p-3
                  h5.mb-5 Acceso a los medios
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5 Los productos de capa de enlace de datos describen los métodos para intercambiar tramas de datos entre dispositivos en un medio común.
                
              .tarjeta.tarjeta-blanca(x="52%" y="37%" numero="")
                h5.bg-color-1.text-white Red - Determinación de ruta y direccionamiento lógico
                .p-3  
                  h5.mb-5 Direccionamiento y mejor ruta
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5 La capa de red, proporciona servicios para intercambiar los datos individuales en la red entre dispositivos finales identificados.
                
              .tarjeta.tarjeta-blanca(x="52%" y="48%" numero="")
                h5.bg-color-1.text-white Transporte - Conexión de extremo a extremo y confiabiidad
                .p-3  
                  h5.mb-5  Conexiones de extremo a extremo
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5  La capa de transporte, define los servicios para segmentar, transferir y rearmar los datos para las comunicaciones individuales entre dispositivos finales.

              .tarjeta.tarjeta-blanca(x="52%" y="60%" numero="")
                h5.bg-color-1.text-white Sesión - Comunicación entre dispositivos de red
                .p-3  
                  h5.mb-5 Comunicación entre <i>hosts</i>
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5 La capa de sesión, proporciona servicios a la capa de presentación para organizar su diálogo y administrar el intercambio de datos.
                
              .tarjeta.tarjeta-blanca(x="52%" y="75%" numero="")
                h5.bg-color-1.text-white Presentación - Representación de datos y encriptación
                .p-3  
                  h5.mb-5 Representación de datos
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5 La capa de red, proporciona una representación común de los datos transferidos entre los servicios de la capa de aplicación.

              .tarjeta.tarjeta-blanca(x="52%" y="91%" numero="")
                h5.bg-color-1.text-white Aplicación - Servicios de red a aplicaciones
                .p-3  
                  h5.mb-5 Procesos de red a aplicaciones
                    .pRelative_1
                      .backtoTop_1
                        figure
                          img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                  p.mt-5 La capa de red, proporciona los medios para la conectividad de extremo a extremo entre individuos de la red humana mediante redes de datos.
            
          .col-12.col-md-4.col-lg-3.col-xl-3(data-aos="fade-left")
            img.img-a.img-t(src="@/assets/curso/temas/imag03.svg" alt="")

    p.mb-4 Para que los paquetes de datos puedan viajar desde el origen hasta su destino, cada capa del modelo OSI en el origen debe comunicarse con su capa igual en el lugar destino. Esta forma de comunicación se conoce como comunicaciones de par-a-par en cada uno de estas capas la información cambia de nombre es decir usa un PDU (Protocol Data Unit).
    
    .row.justify-content-center
        .col-lg-8(data-aos="fade")
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1 
            span Unidades de datos de protocolo por capa

          .tabla-a.color-primario.mb-5 
            table(style="min-width:200px;")
              thead
                tr
                  th.text-center.text_2 <b>Capa Número</b>
                  th.text-center.text_2 <b>Nombre de Capa</b>
                  th.text-center.text_2 <b>PDU</b>
              tbody
                tr
                  td.text-center 7
                  td.text-center Aplicación
                  td.text-center <i>Bits</i>
                tr
                  td.text-center.tp 6
                  td.text-center.tp Presentación
                  td.text-center.tp Tramas
                tr
                  td.text-center  5
                  td.text-center Sesión
                  td.text-center Paquetes
                tr
                  td.text-center.tp 4
                  td.text-center.tp Transporte
                  td.text-center.tp Segmentos
                tr
                  td.text-center 3
                  td.text-center Red
                  td.text-center Datos
                tr
                  td.text-center.tp 2
                  td.text-center.tp Enlace de Datos
                  td.text-center.tp Datos
                tr
                  td.text-center 1
                  td.text-center Física
                  td.text-center Datos

    p.mb-4 El modelo OSI es el modelo de referencia de internetwork más conocido. Es utilizado para el diseño de redes de datos, especificaciones de funcionamiento y la resolución de problemas ya que permite ir descartando en cada capa el posible problema.
    
    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Modelo de referencia TCP /IP
    
    .row.align-items-end.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag04.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Fue el primer modelo de protocolo en capas para comunicaciones de red. Fue desarrollado a principios de la década de los 70 por el departamento de defensa de los EEUU, y se conoce con el nombre de modelo de Internet, su objetivo fue el de crear una red de comunicaciones que funcionara incluso en condiciones de guerra.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-4 Aunque el modelo OSI es universalmente reconocido, el estándar histórica y técnicamente reconocido para Internet es el modelo TCP/IP (Protocolo de Control de Transferencia / Protocolo de Internet).
          p.mb-4 Define cuatro categorías de funciones que deben existir para que las comunicaciones sean exitosas. La arquitectura de la suite de protocolos TCP/IP sigue la estructura de este modelo. Por esto, es común que al modelo de Internet se le conozca como modelo TCP/IP.

    p.mb-4 El modelo consta de cuatro capas como se observa en la figura a continuación:

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span  Modelo de referencia TCP/IP
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade")
          img.mb-3(src="@/assets/curso/temas/imag05.svg" alt="", style="width:600px; display:block; margin:auto 0;")
          figcaption 
            p.mb-0 #[b Nota.] daptado de https://bit.ly/32BgN6J

    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Protocolos de comunicación
    
    p.mb-4 Las comunicaciones en general requieren de una serie de elementos y actores que intervienen dentro de los cuales podemos encontrar:

    .row.justify-content-center.align-items-center
      .col-8.col-lg-6.my-3(data-aos="fade-right")
        img.img-a.img-t.m-1(src="@/assets/curso/temas/imag08.svg").mb-4
      .col-12.col-lg-6.my-3(data-aos="fade-left")
        SlyderF
          .tarjeta.tarjeta--blanca-5.boxShadow.p-5.h-100
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/icono08.svg' alt='imagen relacionada' style='width:105px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3  Emisor
                p.text-center Origen del mensaje (personas y/o dispositivos).
          .tarjeta.tarjeta--blanca-5.boxShadow.p-5.h-100
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/icono09.svg' alt='imagen relacionada' style='width:105px').mx-auto         
              .col-md-10.py-3
                h3.text-center.mb-3  Destino
                p.text-center Receptor del mensaje (personas y/o dispositivos).
          .tarjeta.tarjeta--blanca-5.boxShadow.p-5.h-100
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/icono10.svg' alt='imagen relacionada' style='width:105px').mx-auto          
              .col-md-10.py-3
                h3.text-center.mb-3  Canal
                p.text-center.px-2.px-md-0 Medios por los que el mensaje viaja.
          .tarjeta.tarjeta--blanca-5.boxShadow.p-5.h-100
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/icono11.svg' alt='imagen relacionada' style='width:105px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3  Código
                p.text-center Lenguaje utilizado para formar el mensaje.
          .tarjeta.tarjeta--blanca-5.boxShadow.p-5.h-100
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/icono12.svg' alt='imagen relacionada' style='width:105px').mx-auto         
              .col-md-10.py-3
                h3.mb-3.text-center Mensaje
                p.text-center Elemento a transmitir. 

        .cajon.color-secundario.p-4.mt-3.mb-4
          p.mb-0 Como se evidencia en la figura, toda comunicación requiere contar con un emisor un mensaje a enviar y un código que permite que el mensaje viaje por un canal, para que ambos actores puedan interactuar requieren contar con un código o lenguaje común, que permita que puedan entenderse, ese estándar o lenguaje común es lo que conocemos como un protocolo de comunicaciones, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos, hardware y software que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares la comunicación resultaría caótica y por tanto imposible. 

    p.mb-4 Dependiendo de los servicios a los cuales accedemos a través de las redes de computadores será el protocolo de comunicación que se deberá emplear en la comunicación entre el usuario que solicita y accede al servicio y el dispositivo quien se lo entrega, en general en la transmisión y recepción de los datos podemos encontrar dos grandes familias de protocolos que se resumen en:
    
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Protocolos orientados a la conexión" :icono="require('@/assets/curso/temas/icono13.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Estos requieren un modo de comunicación de redes donde se debe establecer una conexión antes de transferir datos. Se identifica el flujo de tráfico con un identificador de conexión en lugar de utilizar explícitamente las direcciones de la fuente y el destino.
            p.mb-4 Se dice que un servicio de comunicación entre dos dispositivos es orientado a conexión cuando antes de iniciar la comunicación se valida el cumplimiento de ciertas variables como (disponibilidad, alcance, origen, destino, etc.) entre estos dispositivos y se negocian unas credenciales para hacer esta conexión más segura y eficiente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imag09.svg', alt='')
      .py-4.py-md-5(titulo="Protocolos no orientados a la conexión" :icono="require('@/assets/curso/temas/icono14.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Sucede cuando una comunicación entre dos puntos finales de una red en los que un mensaje puede ser enviado desde un punto inicial o de origen a otro punto o dispositivo de la red sin acuerdo previo. El dispositivo en un extremo de la comunicación transmite los datos al otro, sin tener que asegurarse de que el receptor esté disponible y listo para recibir los datos. El emisor simplemente envía un mensaje dirigido al receptor.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imag10.svg', alt='')
    
    p.mb-4 En la figura que se encuentra a continuación, se evidencian algunos ejemplos de los protocolos que son usados en los servicios que normalmente utilizamos en la comunicación entre las redes de datos.
    
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span  Ejemplos de protocolos
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade")
          img.mb-3(src="@/assets/curso/temas/imag11.svg" alt="", style="width:600px; display:block; margin:auto 0;")
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade")
          img.mb-3(src="@/assets/curso/temas/tabla.svg" alt="", style="width:600px; display:block; margin:auto 0;")
          figcaption 
            p.mb-0 #[b Nota.] https://interpolados.files.wordpress.com/2017/03/17.png 

    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Puertos de comunicación

    p.mb-4 Un puerto de comunicaciones es una interfaz a través de la cual los diferentes dispositivos que intervienen en una comunicación de red pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico (hardware) o lógicos (software), a continuación, se ofrece una breve explicación al respecto:
    
    .row.justify-content-center.align-items-center.mb-3
        .col-lg-9.col-xl-9.mb-5(data-aos="fade")
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/imag12.svg")
            
            .tarjeta.tarjeta-azul(x="59.5%" y="65.5%" numero="")
              .head_tar.mt-0.p-2
              .p-3
                h2.text2.mb-3 Puertos lógicos
                p.text3.text-alinear.mb-0 Los puertos lógicos son aquellos que utilizan un espacio de la memoria principal del dispositivo (RAM) que se asocia con un puerto físico o un canal de comunicación, y que proporciona un espacio para el almacenamiento temporal de la información que se va a transferir entre la localización de memoria y el canal de comunicación.
                  figure
                    img(src='@/assets/curso/temas/imag13.svg' alt='' , style="width:350px")

            .tarjeta.tarjeta-azul(x="90.5%" y="65.5%" numero="")
              .head_tar.mt-0.p-2
              .p-3
                h2.text2.mb-3 Puertos físicos
                p.text3.text-alinear.mb-0 Los puertos físicos permiten la conexión de diferentes componentes tanto internos como externos los que llamamos comúnmente periféricos, 
                  figure
                    img(src='@/assets/curso/temas/imag14.svg' alt='' , style="width:350px")

    p.mb-4 Para que se establezca una comunicación entre un origen y un destino se requiere entonces que tanto el emisor como el receptor utilicen el mismo protocolo de comunicaciones, pero además se requiere de un puerto de comunicación que facilite que los datos enviados desde el origen vayan por un canal exclusivo.
    
    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Medios de transmisión
    
    .row.align-items-end.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag15.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Para que la comunicación entre un emisor y un receptor se realice se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos. Los medios de transmisión se pueden categorizar en dos grandes tipos que son los medios guiados y no guiados.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-4 Los medios guiados conducen (guían) las señales a través de un camino físico, tal como se muestra en la figura 3, dentro de los cuales podemos encontrar:

    .row.justify-content-center.align-items-center.my-5.fondo-20_1
      .col-12.col-lg-8
        .row.justify-content-evenly
          .col-lg-6.col-md-6
            .tarjeta.tarjeta_blue.h-100.px-0.my-3
              .row.mb-3.p-3
                .col-lg-8.mb-4
                  h4.text2.text-center.mb-0 
                    strong Fibra óptica
                .col-lg-4.mb-3
                  img.img-a(src='@/assets/curso/temas/icono15.svg' alt='')
                p.text3.mb-0 Las señales que transportan la fibra óptica corresponden a pulsos de luz, no eléctricos.
              
          .col-lg-6.col-md-6
            .tarjeta.tarjeta_blue.h-100.px-0.my-3(data-aos="fade-right")
              .row.mb-3.p-3
                .col-lg-8.mb-4
                  h4.text2.text-center Cobre Trenzado coaxial
                .col-lg-4.mb-3(data-aos="fade-left")
                  img.img-a(src='@/assets/curso/temas/icono16.svg' alt='')
                p.text3.mb-0 Las señales que transportan el cobre son impulsos eléctricos.
      
    .row.justify-content-center.mt-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Medios de transmisión guiados

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.col-xl-10.mb-4
        img.my-3(src="@/assets/curso/temas/imag16.svg" alt="")
    
    p.mb-4 Los medios de transmisión no guiados son aquellos sin cable, transportan ondas electromagnéticas sin usar un conductor físico, sino que se radian a través del aire, por lo que están disponibles para cualquiera que tenga un dispositivo capaz de aceptarlas.
    p.mb-4 Normalmente utilizan el aire como el medio a través del cual viajan las señales en frecuencias electromagnéticas, por lo que generalmente requieren de una antena que permita transmitir y recibir datos de diferentes tipos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.col-xl-6
        .cajon.p-3.my-5
          p.mb-0 Dentro de los medios de transmisión no guiados, como se observa en la figura 4, podemos encontrar: 
        img(src="@/assets/curso/temas/imag17.svg" alt="")(data-aos="fade-right")
      .col-12.col-md-4.col-lg-6.col-xl-6.my-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/imag18.svg" alt="")(data-aos="fade-left")
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Ejemplos de medios de transmisión no guiados
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.col-xl-10.mb-4
        img.my-3(src="@/assets/curso/temas/imag19.svg" alt="")
    
    .subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Recursos compartidos
    
    .container.bg-white.p-md-4.fondo-20_1  
      .row.mb-5
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p.aling-18.mb-4 Como ya hemos mencionado, las redes de datos facilitan y potencian el trabajo en red entre los diferentes usuarios y dispositivos, de tal manera que se pueda acceder a dispositivos y recursos compartidos, cuando indicamos los recursos, nos referimos a todos esos elementos tanto hardware como software que pueden compartidos y utilizados por los diferentes dispositivos conectados, estos recursos pueden ser desde el punto de vista del hardware:
          .row.justify-content-center
            .col-md-4 
              img.img-a.img-t(src='@/assets/curso/temas/impresora.svg'  alt='')
            .col-md-4
              img.img-a.img-t(src='@/assets/curso/temas/escaner.svg' alt='imagen relacionada')
            .col-md-4
              img.img-a.img-t(src='@/assets/curso/temas/almacenamiento.svg' alt='')
        .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
          img.img-a.img-t(src='@/assets/curso/temas/imag20.svg',)
    
    p.mb-4  Desde el punto de vista lógico podemos compartir recursos como:

    .row.justify-content-center.align-items-center(data-aos="fade")

      .col-lg--md-6.my-3
        img.img-a.img-t(src="@/assets/curso/temas/escaner.svg" alt="")
      .col-lg--md-6.my-3
        img.img-a.img-t(src="@/assets/curso/temas/escaner.svg" alt="")
      .col-lg--md-6.my-3
        img.img-a.img-t(src="@/assets/curso/temas/escaner.svg" alt="")
      .col-md-6.my-3
        img.img-a.img-t(src="@/assets/curso/temas/escaner.svg" alt="")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2 Servicios propietarios
    
    p.mb-4 Antes de la llegada de la computación en la nube, los servicios, infraestructura, plataformas y en general los recursos de TI debían ser instalados, configurados y administrados en su totalidad por la empresa lo que conlleva varios inconvenientes entre los cuales se pueden mencionar los siguientes:

    .row.align-items-end.mb-5
      .col-lg-7.col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Paso 1") El almacenamiento de los datos se hace de manera local en dispositivos como discos duros y servidores locales, este trae consigo el problema de que si llegase a fallar el servidor se corre el riesgo de la pérdida de información o perdida de acceso a los servicios.

          p.text-small(numero="2" titulo="Paso 2") La administración de los recursos, que se relaciona con: el suministro de energía, aire acondicionado, sistemas de protección UPS y el mantenimiento preventivo y/o correctivo de los dispositivos, sin mencionar el hecho de que la tecnología en cuanto a infraestructura, va perdiendo su valor y se va devaluando rápidamente debido al constante desarrollo y evolución.
        
          p.text-small(numero="3" titulo="Paso 3") A nivel de aplicaciones se tiene el inconveniente de tener que administrarse no solo la aplicación si no la plataforma de desarrollo, adicionalmente si se cuenta con aplicaciones no web sino tipo escritorio se obliga a tener que estar actualizando el servidor y los clientes que acceden a estas, una razón más para disponer de aplicaciones como servicio ofrecidas a través de la nube.
        
          p.text-small(numero="4" titulo="Paso 4") A nivel de conectividad en la mayoría de las ocasiones el acceso a los servicios, aplicaciones y recursos normalmente está restringido a un acceso local, puesto que disponer de estrategias de conexión remotas requiere tener adicionalmente dispositivos de protección perimetral como firewalls y requerirá un nivel adicional de protección y administración desde el punto de vista de la ciberseguridad.
      .col-lg-5
        img(src='@/assets/curso/temas/imag21.png', alt='')
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3 La evolución de la informática en la nube

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
