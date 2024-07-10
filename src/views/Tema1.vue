<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los servicios de TI en la Nube
    
    .row.align-items-center.justify-content-center
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag01.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg1.p-4
          p.mb-0 La nube o #[em cloud computing], es una de las soluciones tecnológicas de servicio más completa, pues, ofrece una alternativa informática basada en internet por medio de un intercambio de servicios. Este servicio en la nube se ha extendido a todos los sectores, tanto en empresas como en usuarios individuales.
    

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos, términos y definiciones
    
    .col-lg-11.mx-auto.mb-4(data-aos="fade-down")
      .tarjeta.bg3.p-4.p-lg-0
        .row.align-items-center
          .col-lg-2
            img.mb-3.mb-lg-0(src='@/assets/curso/temas/icono01.svg' alt='' , style="width:115px; display:block; margin:0 auto;")
          .col-lg-9
            img.d-none.d-lg-block(src='@/assets/curso/temas/comillas.svg' alt='' style='width:65px;margin: 0 -1rem').mb-2
            h5.align-14 #[b Según  Del Vecchio, J. F., Paternina, F. J., & Henriquez Miranda, C. (2015)]
            h5.align-14 #[b #[em “La computación en la nube es el modelo que permite el acceso a una red bajo demanda de un conjunto de servicios informáticos configurables tales como infraestructura, aplicaciones y almacenamiento.”]]
            .floatRight.alreves
              img.d-none.d-lg-block(src='@/assets/curso/temas/comillas.svg' alt='' style='width:95px;margin: 0 -1rem').mb-0
    
    p(data-aos="fade") Durante los últimos años, la computación en la nube ha permitido que las empresas logren tener presencia corporativa en la #[em web], y que la adquisición de recursos tecnológicos informáticos sea una inversión económica muy cómoda o razonable a manera de pago por servicios. 
    p.mb-4(data-aos="fade") Ahora no es necesario adquirir equipos o infraestructura física para suplir necesidades de organización, administración o mantenimiento. A continuación, se detallan las diferentes tecnologías de computación en la nube:

    .row.justify-content-center.d-none.d-md-flex.mb-5(data-aos="fade-down")
      .col-lg-9
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/infografia.svg')
          .tarjeta.color-primario.p-3(x="4%" y="50%" numero="")
            .row.space-between.img-infog1.align-items-center.text-white.mb-0
              .col-md-10.col-9
                h4 Servicios de infraestructura
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 01
            p.text-white.mb-0 Los servicios de infraestructura en la Nube, conocido como #[em IaaS] por sus siglas en inglés; se presentan como aplicaciones de autoservicio creadas para el acceso, control y gestión de infraestructuras remotas.
          .tarjeta.bg4.p-3(x="28%" y="50%" numero="")
            .row.space-between.img-infog1.align-items-center.text-white.mb-0
              .col-md-10.col-9
                h4  Plataformas en la nube
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 02
            p.text-white.mb-0 Las Plataformas en la Nube son tan flexibles y versátiles que se usan para desarrollar aplicaciones y sistemas complejos para impulsar los entornos virtuales. De hecho; los sistemas #[em PaaS] proporcionan marcos virtuales donde los especialistas desarrollan y personalizan sus sistemas los propietarios y las aplicaciones.
          .tarjeta.color-primario.p-3(x="51.7%" y="50%" numero="")
            .row.space-between.img-infog1.align-items-center.text-white.mb-0
              .col-md-10.col-9
                h4 #[em Software] como servicio
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 03
            p.text-white.mb-0 Los Servicios de Aplicaciones en la Nube, o mejor conocidos como #[em Software] como Servicio (#[em SaaS]) se enfocan en el uso de la web para entregar aplicaciones para todo y todos. Esta es la razón por la cual los #[em SaaS] representan el mayor mercado de servicios y sistemas en la Nube.
          .tarjeta.bg4.p-3(x="76%" y="50%" numero="")
            .row.space-between.img-infog1.align-items-center.text-white.mb-0
              .col-md-10.col-9
                h4 ¿Para quienes?
              .col-md-2.col-3
                h2.numeroTarjeta.mb-0 04
            p.text-white.mb-0 Los #[em IaaS] están pensados para ingenieros de sistemas, #[em PaaS] para desarrolladores #[em web] y #[em SaaS] para los consumidores directos.

    .row.justify-content-center.d-flex.d-md-none.mb-5(data-aos="fade-down")
      .row.mb-2
        img.mb-n15.z-999.px-5(src='@/assets/curso/temas/t1/imgInfog1-1.svg')
        .tarjeta.color-primario.p-3
          .row.space-between.img-infog1.align-items-center.text-white.mb-0
            .col-md-10.col-9
              h4 Servicios de infraestructura
            .col-md-2.col-3
              h2.numeroTarjeta.mb-0 01
          p.text-white.mb-0 Los servicios de infraestructura en la Nube, conocido como LaaS por sus siglas en inglés; se presentan como aplicaciones de autoservicio creadas para el acceso, control y gestión de infraestructuras remotas.
      .row.mb-2
        img.mb-n8.z-999.px-5(src='@/assets/curso/temas/t1/imgInfog1-2.svg')
        .tarjeta.bg4.p-3
          .row.space-between.img-infog1.align-items-center.text-white.mb-0
            .col-md-10.col-9
              h4  Plataformas en la nube
            .col-md-2.col-3
              h2.numeroTarjeta.mb-0 02
          p.text-white.mb-0 Las Plataformas en la Nube son tan flexibles y versátiles que se usan para desarrollar aplicaciones y sistemas complejos para impulsar los entornos virtuales. De hecho; los sistemas PaaS proporcionan marcos virtuales donde los especialistas desarrollan y personalizan sus sistemas los propietario y las aplicaciones.
      .row.mb-2
        img.mb-n15.z-999.px-5(src='@/assets/curso/temas/t1/imgInfog1-3.svg')
        .tarjeta.color-primario.p-3
          .row.space-between.img-infog1.align-items-center.text-white.mb-0
            .col-md-10.col-9
              h4 #[em Software] como servicio
            .col-md-2.col-3
              h2.numeroTarjeta.mb-0 03
          p.text-white.mb-0 Los Servicios de Aplicaciones en la Nube, o mejor conocidos como #[em Software] como Servicio (SaaS) se enfocan en el uso de la web para entregar aplicaciones para todo y todos. Esta es la razón por la cual los SaaS representan el mayor mercado de servicios y sistemas en la Nube.
      .row.mb-2
        img.mb-n8.z-999.px-5(src='@/assets/curso/temas/t1/imgInfog1-4.svg')
        .tarjeta.bg4.p-3
          .row.space-between.img-infog1.align-items-center.text-white.mb-0
            .col-md-10.col-9
              h4 ¿Para quienes?
            .col-md-2.col-3
              h2.numeroTarjeta.mb-0 04
          p.text-white.mb-0 Los LaaS están pensados para ingenieros de sistemas, PaaS para desarrolladores web y SaaS para los consumidores directos.


    #menu1.row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-12
        img(src='@/assets/curso/temas/menu.png')
      .col-lg-11    
        .tarjeta.fondo-menu.mt-n5.p-4
          p.mb-5 Si bien en la mayoría de las ocasiones no es fácil identificar todas las opciones posibles, cuantas más alternativas se generen es más probable obtener una que resulte significativamente satisfactoria.
          //.row
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono02.svg' alt='')
                a(href="#1", title="Redes de datos").mb-0 Redes de datos
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono03.svg' alt='')
                a.indicador__container(href="#2", title="Modelos de referencia" @mouseover="mostrarIndicador = false").mb-0 Modelos de referencia
                  .indicador--click(v-if="mostrarIndicador")
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono04.svg' alt='')
                a(href="#3", title="Modelo de referencia TCP /IP").mb-0 Modelo de referencia TCP /IP
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono05.svg' alt='')
                a(href="#4", title="Protocolos de comunicación").mb-0 Protocolos de comunicación
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono06.svg' alt='')
                a(href="#5", title="Puertos de comunicación").mb-0 Puertos de comunicación
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono07.svg' alt='')
                a(href="#6", title="Medios de transmisión").mb-0 Medios de transmisión
            .menu7.mb-3
              .caja.p-3
                img.m-auto.mb-3(src='@/assets/curso/temas/icono07.svg' alt='')
                a(href="#7", title="Recursos compartidos").mb-0 Recursos compartidos

    
    p.mb-5(data-aos="fade") Cuando hablamos de computación en la nube se mencionan una serie de componentes que hacen parte del conjunto dentro de los cuales se destacan:

    #1.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Redes de datos

    .row.align-items-end.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imagredes.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Las redes de datos tienen por función potenciar e incrementar la productividad de las organizaciones al permitir que todos los dispositivos que se encuentran conectados puedan acceder a los recursos que se encuentran compartidos, en los últimos años la tecnología ha entrado a jugar un papel preponderante en el desarrollo y evolución de las organizaciones y cada vez está más inmersa en todos los procesos y actividades empresariales, personales y cotidianas.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-0 Las redes han permitido que los servicios y el acceso a estos recursos sea cada vez más necesario ya que se requiere tener en todo momento trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos, esto es lo que conocemos como el #[em networking]. Para que dichas redes pueden interconectarse y trabajar en red se requiere de una serie de componentes desde el punto de vista físico y lógico dentro de los cuales destacamos los siguientes:
    
    .row.mb-5(data-aos="fade-down")
      .col-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bx-shadow.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-5.col-lg-7
              figure
                img(src='@/assets/curso/temas/tarjeta1.svg', alt='')
          h4.text-center.mb-0 Modelos de referencia
      .col-6.col-lg
        .tarjeta.bx-shadow.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-5.col-lg-7
              figure
                img(src='@/assets/curso/temas/tarjeta2.svg', alt='')
          h4.text-center.mb-0 Protocolos de comunicación
      .col-6.col-lg
        .tarjeta.bx-shadow.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-5.col-lg-7
              figure
                img(src='@/assets/curso/temas/tarjeta3.svg', alt='')
          h4.text-center.mb-0 Puertos de comunicación
      .col-6.col-lg
        .tarjeta.bx-shadow.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-5.col-lg-7
              figure
                img(src='@/assets/curso/temas/tarjeta4.svg', alt='')
          h4.text-center.mb-0 Medios de transmisión
      .col-6.col-lg
        .tarjeta.bx-shadow.p-4
          .row.justify-content-center.mb-3
            .col-8.col-md-5.col-lg-7
              figure
                img(src='@/assets/curso/temas/tarjeta5.svg', alt='')
          h4.text-center.mb-0 Recursos compartidos 

    #2.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Modelo de referencia
    
    .row.align-items-center.mb-4
      .col-lg-2.col-md-3.col-7.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imagref.svg', alt='')
      .col-lg-10.col-md-9(data-aos="fade-left")
        p Al inicio del desarrollo de la tecnología y más propiamente de la computación, los diferentes fabricantes construían sus equipos y dispositivos para que fueran compatibles con dispositivos de sus propias marcas lo que no facilitaba la interconexión de equipos y dispositivos de fabricantes distintos.
    
    p(data-aos="fade") Esto llevó a la necesidad de estandarizar de manera que se permita la interconexión de una amplia gama de dispositivos sin importar fabricante o tipo se #[em software]. Para que el intercambio de información sea posible se requiere el establecimiento de una serie de estándares.
    p.mb-4(data-aos="fade") Estos estándares son construidos por una serie de organizaciones que son las siguientes:
    
    .row.align-items-center.mb-5
      .col-lg-7.col-12.mb-5.mb-md-0(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="ISO (Organización Internacional de Normas)") ISO definió un modelo de referencia como estándar para posibilitar las comunicaciones electrónicas a nivel global, conocido como el modelo #[em OSI] (Interconexión de Sistemas Abiertos).
          p(numero="2" titulo="IEEE (Instituto de ingenieros electrónicos y eléctricos)") Este organismo es encargado de fijar los estándares para los elementos físicos de una red, cables, conectores e interfaces.
          p(numero="3" titulo="ANSI (Instituto Nacional Americano de Normalización)") Es una organización sin fines de lucro que supervisa el desarrollo de estándares para productos, servicios, procesos y sistemas en los Estados Unidos.        
          p(numero="4" titulo="EIA (Asociación de Industrias Electrónicas)") Es una organización formada por la asociación de las compañías electrónicas y de alta tecnología de los Estados Unidos, cuya misión es promover el desarrollo de mercado y la competitividad de la industria de alta tecnología de los Estados Unidos con esfuerzos locales e internacionales de la política.
          p(numero="5" titulo="TIA (Asociación de Industrias Telecomunicaciones)") Es una asociación comercial acreditada por el Instituto Nacional Estadounidense de Estándares (ANSI), con el fin de desarrollar normas industriales, tanto voluntarias como basadas en el consenso, sobre una amplia variedad de productos de las tecnologías de la información y la comunicación (TIC), y actualmente representa a casi 400 empresas. El Departamento de Estándares y Tecnología de TIA opera doce comités de ingeniería, que desarrollan pautas para equipos de radio privados, antenas celulares, terminales de datos, satélites, equipos de terminales telefónicos, accesibilidad, dispositivos VoIP, cableado estructurado, centros de procesamiento de datos, comunicaciones de dispositivos móviles, multidifusión multimedia, telemática vehicular, TIC utilizadas en el cuidado de la salud, comunicaciones M2M y redes de servicios inteligentes.        
          p(numero="6" titulo="UIT (Unión Internacional de Telecomunicaciones)") La Unión Internacional de Telecomunicaciones es el organismo especializado en telecomunicaciones de la Organización de las Naciones Unidas, encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Su sede se encuentra en la ciudad de Ginebra.
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-left")
        img(src='@/assets/curso/temas/imaglinea.png', alt='')

    
    .row.justify-content-center.t1-1.mb-5(data-aos="fade-down")
      .col-lg-10      
        .bloque-texto-g.color-secundario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/imag02.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Los modelos de referencia se basan en la definición de una serie de capas las cuales tienen sus propias funciones y características que se encargan de resolver un problema diferente en la comunicación, tienen como propósito asistir en la comprensión más clara y sencilla de las funciones y los procesos involucrados en la interconexión de los diferentes dispositivos de red, para ello se establecen una serie de capas con un orden específico y cada una se sustenta en la capa anterior, y más que entrar en los detalles de las especificaciones técnicas requeridas en cada una de ellas, el modelo de referencia ayuda en la comprensión de lo que sucede, ayudándonos a lograr un mejor entendimiento de las funciones y procesos involucrados.

    .container.px-4.pt-4.fondo-1.mb-4(data-aos="fade-down")
      p.mb-4 El modelo de referencia para las redes de comunicaciones es el modelo OSI -Interconexión de Sistemas Abiertos, el cual se explica a continuación:
      .row.justify-content-around.align-items-end
        .col-12.col-lg-7
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img.m-3(src='@/assets/curso/temas/t1/piramide_sn.svg')
            
            .tarjeta.tarjeta-blanca(x="52%" y="12%" numero="01")
              h5.bg-color-1 Física - Señalización y transmisión binaria
              .p-3.pt-2
                h5.mb-5 Transmisión binaria: cables, conectores, voltajes, velocidades de datos
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:1rem 6.4rem;")
                p.mb-0 Los protocolos de capa física describen los medios mecánicos, eléctricos,  funcionales y de procedimiento para activar, mantener y desactivar conexiones físicas para la transmisión de #[em bits] hacia un dispositivo de red y desde el.
            .tarjeta.tarjeta-blanca(x="52%" y="25.2%" numero="02")
              h5.bg-color-1 Enlace de datos - Direccionamiento físico
              .p-3.pt-2
                h5.mb-5 Acceso a los medios
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 Los productos de capa de enlace de datos describen los métodos para intercambiar tramas de datos entre dispositivos en un medio común.
            .tarjeta.tarjeta-blanca(x="52%" y="37%" numero="03")
              h5.bg-color-1 Red - Determinación de ruta y direccionamiento lógico
              .p-3.pt-2  
                h5.mb-5 Direccionamiento y mejor ruta
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 La capa de red, proporciona servicios para intercambiar los datos individuales en la red entre dispositivos finales identificados.
            .tarjeta.tarjeta-blanca(x="52%" y="48%" numero="04")
              h5.bg-color-1 Transporte - Conexión de extremo a extremo y confiabilidad
              .p-3.pt-2  
                h5.mb-5 Conexiones de extremo a extremo
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 La capa de transporte, define los servicios para segmentar, transferir y rearmar los datos para las comunicaciones individuales entre dispositivos finales.
            .tarjeta.tarjeta-blanca(x="52%" y="60.2%" numero="05")
              h5.bg-color-1 Sesión - Comunicación entre dispositivos de red
              .p-3.pt-2  
                h5.mb-5 Comunicación entre #[em hosts]
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 La capa de sesión, proporciona servicios a la capa de presentación para organizar su diálogo y administrar el intercambio de datos.                
            .tarjeta.tarjeta-blanca(x="52%" y="74.5%" numero="06")
              h5.bg-color-1 Presentación - Representación de datos y encriptación
              .p-3.pt-2  
                h5.mb-5 Representación de datos
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 La capa de red, proporciona una representación común de los datos transferidos entre los servicios de la capa de aplicación.
            .tarjeta.tarjeta-blanca(x="52%" y="91.4%" numero="07")
              h5.bg-color-1 Aplicación - Servicios de red a aplicaciones
              .p-3.pt-2  
                h5.mb-5 Procesos de red a aplicaciones
                  .pRelative_1
                    .backtoTop_1
                      figure
                        img(src='@/assets/curso/temas/linea.svg' alt='' , style="width:7px; display:block; margin:2.5rem 6.4rem; height: 140px;")
                p.mb-0 La capa de red, proporciona los medios para la conectividad de extremo a extremo entre individuos de la red humana mediante redes de datos.          
        .col-lg-2.d-none.d-lg-flex
          img(src="@/assets/curso/temas/imag03.svg" alt="")

    
    p.mb-4(data-aos="fade") Para que los paquetes de datos puedan viajar desde el origen hasta su destino, cada capa del modelo #[b OSI] en el origen debe comunicarse con su capa igual en el lugar destino. Esta forma de comunicación se conoce como comunicaciones de par-a-par, y en cada una de estas capas la información cambia de nombre, es decir que usan un PDU (#[em Protocol Data Unit]) diferente.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Unidades de datos de protocolo por capa
        .tabla-a.color-primario.mb-5 
          table.text-center
            thead
              tr.bg6
                th.text-white #[b Capa Número]
                th.text-white #[b Nombre de Capa]
                th.text-white #[b PDU]
            tbody
              tr
                td 7
                td Aplicación
                td #[em Bits]
              tr.bg7
                td 6
                td Presentación
                td Tramas
              tr
                td  5
                td Sesión
                td Paquetes
              tr.bg7
                td 4
                td Transporte
                td Segmentos
              tr
                td 3
                td Red
                td Datos
              tr.bg7
                td 2
                td Enlace de Datos
                td Datos
              tr
                td 1
                td Física
                td Datos

    p.mb-5 El modelo OSI es el modelo de referencia de internetwork más conocido. Es utilizado para el diseño de redes de datos, especificaciones de funcionamiento y la resolución de problemas ya que permite ir descartando en cada capa el posible problema.
    
    #3.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Modelo de referencia TCP /IP

    .row.align-items-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag04.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Fue el primer modelo de protocolo en capas para comunicaciones de red. Fue desarrollado a principios de la década de los 70 por el departamento de defensa de los EE. UU., y se conoce con el nombre de modelo de Internet, su objetivo fue el de crear una red de comunicaciones que funcionara incluso en condiciones de guerra.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p Aunque el modelo OSI es universalmente reconocido, el estándar histórica y técnicamente reconocido para Internet es el modelo TCP/IP (Protocolo de Control de Transferencia / Protocolo de Internet).
          p.mb-0 Define cuatro categorías de funciones que deben existir para que las comunicaciones sean exitosas. La arquitectura de la #[em suite] de protocolos TCP/IP sigue la estructura de este modelo. Por esto, es común que al modelo de Internet se le conozca como modelo TCP/IP.

    p.mb-4(data-aos="fade") El modelo consta de cuatro capas como se presenta en la figura a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6.col-md-7.col-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span  Modelo de referencia TCP/IP
        img.mb-3.d-lg-flex.d-none(src="@/assets/curso/temas/imag05.svg" alt="El diagrama describe el modelo TCP/IP y sus 4 capas de la siguiente manera: Capa 4, aplicación, representa datos para el usuario más el control de codificación y de dialogo. Capa 3, trasporte, admite la comunicación entre distintos dispositivos de distintas redes. Capa 2, internet, determina la mejor ruta a través de la red. Capa 1, acceso a la red, controla los dispositivos de hardware y los medios que forman la red.")
        img.mb-3.d-flex.d-lg-none(src="@/assets/curso/temas/t1/fig1-mob.svg" alt="El diagrama describe el modelo TCP/IP y sus 4 capas de la siguiente manera: Capa 4, aplicación, representa datos para el usuario más el control de codificación y de dialogo. Capa 3, trasporte, admite la comunicación entre distintos dispositivos de distintas redes. Capa 2, internet, determina la mejor ruta a través de la red. Capa 1, acceso a la red, controla los dispositivos de hardware y los medios que forman la red.")
        figcaption 
          p.mb-0 #[b Fuente.] Adaptado de https://bit.ly/32BgN6J

    
    #4.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Protocolos de comunicación
    
    p.mb-4(data-aos="fade") Las comunicaciones en general requieren de una serie de elementos y actores que intervienen dentro de los cuales podemos encontrar:

    .row.justify-content-center.align-items-center
      .col-lg-4.d-lg-flex.d-none(data-aos="fade-right")
        img.mb-4(src="@/assets/curso/temas/imag08.svg")
      .col-10.col-lg-8.col-md-10(data-aos="fade-left")
        .row.justify-content-center.mb-5
          .col-lg-7
            SlyderF.t1-1
              .tarjeta.p-4.borde-gris
                .row.justify-content-center
                  .col-6.col-md-5.col-lg-4.mb-4.mb-md-3
                    img(src='@/assets/curso/temas/icono08.svg' alt='').mx-auto        
                  .col-md-10
                    .text-center
                      h3.mb-2 Emisor
                      p Origen del mensaje (personas y/o dispositivos).
              .tarjeta.p-4.borde-gris
                .row.justify-content-center
                  .col-6.col-md-5.col-lg-4.mb-4.mb-md-3
                    img(src='@/assets/curso/temas/icono09.svg' alt='').mx-auto         
                  .col-md-10
                    .text-center
                      h3.mb-2 Destino
                      p Receptor del mensaje (personas y/o dispositivos).
              .tarjeta.p-4.borde-gris
                .row.justify-content-center
                  .col-6.col-md-5.col-lg-4.mb-4.mb-md-3
                    img(src='@/assets/curso/temas/icono10.svg' alt='').mx-auto          
                  .col-md-10
                    .text-center
                      h3.mb-2 Canal
                      p Medios por los que el mensaje viaja.
              .tarjeta.p-4.borde-gris
                .row.justify-content-center
                  .col-6.col-md-5.col-lg-4.mb-4.mb-md-3
                    img(src='@/assets/curso/temas/icono11.svg' alt='').mx-auto        
                  .col-md-10
                    .text-center
                      h3.mb-2 Código
                      p Lenguaje utilizado para formar el mensaje.
              .tarjeta.p-4.borde-gris
                .row.justify-content-center
                  .col-6.col-md-5.col-lg-4.mb-4.mb-md-3
                    img(src='@/assets/curso/temas/icono12.svg' alt='').mx-auto         
                  .col-md-10
                    .text-center
                      h3.mb-2 Mensaje
                      p Elemento a transmitir. 
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Todas las comunicaciones deben contar con un emisor, un mensaje a enviar y un código que permite que el mensaje viaje por un canal. Para que ambos actores puedan interactuar requieren contar con un código o lenguaje común, que permita que puedan entenderse, ese estándar o lenguaje común es lo que conocemos como un protocolo de comunicaciones, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos #[em hardware] y #[em software] que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares la comunicación resultaría caótica y por tanto imposible.


    p.mb-4(data-aos="fade") Dependiendo de los servicios a los cuales accedemos a través de las redes de computadores será el protocolo que se deberá emplear en la comunicación entre el usuario que solicita y accede al servicio y el dispositivo quien se lo entrega, en general en la transmisión y recepción de los datos podemos encontrar dos grandes familias de protocolos que se resumen en:
    
    TabsB.color-acento-botones.mb-4(data-aos="fade-down")
      .bg8.py-4.py-md-5(titulo="Protocolos orientados a la conexión" :icono="require('@/assets/curso/temas/icono13.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Estos requieren un modo de comunicación de redes donde se debe establecer una conexión antes de transferir datos. Se identifica el flujo de tráfico con un identificador de conexión en lugar de utilizar explícitamente las direcciones de la fuente y el destino.
            p.mb-4 Se dice que un servicio de comunicación entre dos dispositivos es orientado a conexión cuando antes de iniciar la comunicación se valida el cumplimiento de ciertas variables como (disponibilidad, alcance, origen, destino, etc.) entre estos dispositivos y se negocian unas credenciales para hacer esta conexión más segura y eficiente.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Servicios orientados a conexión 
            figure
              img(src='@/assets/curso/temas/imag09.svg', alt='Se presenta un diagrama donde un equipo A(emisor), establece una conexión con el equipo B(receptor) a través de el paquete 1 que lleva el mensaje, y el paquete B que asegura su recepción en el destino.')
      .bg8.py-4.py-md-5(titulo="Protocolos no orientados a la conexión" :icono="require('@/assets/curso/temas/icono14.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Sucede cuando una comunicación entre dos puntos finales de una red en los que un mensaje puede ser enviado desde un punto inicial o de origen a otro punto o dispositivo de la red sin acuerdo previo. El dispositivo en un extremo de la comunicación transmite los datos al otro, sin tener que asegurarse de que el receptor esté disponible y listo para recibir los datos. El emisor simplemente envía un mensaje dirigido al receptor.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Servicios de red no orientados a conexión 
            figure
              img(src='@/assets/curso/temas/imag10.svg', alt='Se presenta un diagrama donde el equipo A(emisor) envía un mensaje a través de dos paquetes 1 y 2, sin asegurar su llegada al equipo B (receptor)')

    p.mb-4(data-aos="fade") En la figura que se encuentra a continuación, se evidencian algunos ejemplos de los protocolos que son usados en los servicios que normalmente utilizamos en la comunicación entre las redes de datos.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6.col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ejemplos de protocolos
        figure
          img.mb-3(src="@/assets/curso/temas/tabla.svg" alt="La figura presenta una comparación entre el modelo OSI y el modelo TCP/IP, mencionando también los diferentes conjuntos de protocolos utilizados en sus funciones y que son compartidos por ambos modelos.")
        figcaption 
          p.mb-0 #[b Fuente.] https://interpolados.files.wordpress.com/2017/03/17.png 


    #5.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Puertos de comunicación

    p.mb-4(data-aos="fade") Un puerto de comunicaciones es una interfaz a través de la cual los diferentes dispositivos que intervienen en una comunicación de red pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico (#[em hardware]) o lógicos (#[em software]), a continuación, se ofrece una breve explicación al respecto:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .col-lg-9.col-xl-9(data-aos="fade")
          .titulo-sexto.color-acento-contenido
            h5 Figura 5. 
            span Puertos de comunicaciones
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/imag12.svg" alt="La figura presenta un diagrama de flujo que conecta de manera secuencial los siguientes conceptos: solicitud de intercambio de texto, Servisio SMTP (protocolo TCP), puerto lógico (25), puerto físico (RJ-45), red local (LAN)")
            
            .tarjeta.tarjeta-azul(x="59.5%" y="65.5%" numero="")
              .head_tar.mt-0.p-2
              .p-3
                h4.text2.mb-3 Puertos lógicos
                p.text3.mb-4 Los puertos lógicos son aquellos que utilizan un espacio de la memoria principal del dispositivo (RAM) que se asocia con un puerto físico o un canal de comunicación, y que proporciona un espacio para el almacenamiento temporal de la información que se va a transferir entre la localización de memoria y el canal de comunicación.
                figure
                  img(src='@/assets/curso/temas/imag13.svg' alt='')
            .tarjeta.tarjeta-azul(x="90.5%" y="65.5%" numero="")
              .head_tar.mt-0.p-2
              .p-3
                h4.text2.mb-3 Puertos físicos
                p.text3.mb-4 Los puertos físicos permiten la conexión de diferentes componentes tanto internos como externos los que llamamos comúnmente periféricos, 
                figure
                  img(src='@/assets/curso/temas/imag14.svg' alt='')
    
    p.mb-5(data-aos="fade") Para que se establezca una comunicación entre un origen y un destino se requiere entonces que tanto el emisor como el receptor utilicen el mismo protocolo de comunicaciones, pero además se requiere de un puerto de comunicación que facilite que los datos enviados desde el origen vayan por un canal exclusivo.


    #6.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Medios de transmisión
    
    .row.align-items-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag15.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Para que la comunicación entre un emisor y un receptor se realice se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos. Los medios de transmisión se pueden categorizar en dos grandes tipos que son los medios guiados y no guiados.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-4 Los medios guiados conducen (guían) las señales a través de un camino físico, tal como se muestra en la figura 6, dentro de los cuales podemos encontrar:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-md-6.col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta_blue.p-4.h-100
          .row.align-items-center.justify-content-between
            .col-6.mb-3
              h4.text2 Fibra óptica
            .col-2.col-md-3.mb-3 
              img(src='@/assets/curso/temas/icono15.svg' alt='')
          p.text-white.mb-0 Las señales que transportan la fibra óptica corresponden a pulsos de luz, no eléctricos.
      .col-12.col-md-6.col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta_blue.p-4.h-100
          .row.align-items-center.justify-content-between
            .col-6.mb-3
              h4.text2 Cobre (Trenzado o coaxial)
            .col-2.col-md-3.mb-3 
              img(src='@/assets/curso/temas/icono16.svg' alt='')
          p.text-white.mb-0 Las señales que transportan el cobre son impulsos eléctricos.
      
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Medios de transmisión guiados
      .col-12.col-lg-10.mb-3.d-md-flex.d-none
        img(src="@/assets/curso/temas/imag16.svg" alt="En la imagen se presentan tres fotografías de cables: par trenzado, coaxial y fibra óptica.")
      .col-12.col-lg-10.mb-3.d-flex.d-md-none
        img(src="@/assets/curso/temas/t1/fig3-mob.svg" alt="En la imagen se presentan tres fotografías de cables: par trenzado, coaxial y fibra óptica.")
      .col-lg-10.mb-4
        figcaption 
          p.mb-0 #[b Fuente.] Adaptado de https://bit.ly/3CPjaPq

    p(data-aos="fade") Los medios de transmisión no guiados son aquellos sin cable, transportan ondas electromagnéticas sin usar un conductor físico, sino que se radian a través del aire, por lo que están disponibles para cualquiera que tenga un dispositivo capaz de aceptarlas.
    p(data-aos="fade") Normalmente utilizan el aire como el medio a través del cual viajan las señales en frecuencias electromagnéticas, por lo que generalmente requieren de una antena que permita transmitir y recibir datos de diferentes tipos.
    p.mb-4(data-aos="fade") Dentro de los medios de transmisión no guiados podemos encontrar:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Medios de transmisión no guiados.
        figure
          img(src='@/assets/curso/temas/t1/fig7.svg', alt="La figura enuncia los siguientes tipos de transmisión: radiofrecuencias, microondas, infrarrojos, bluetooth, wifi y satelital.")  
        //.row
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico1.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center Radiofrecuencias    
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico2.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center #[em Bluetooth]
        //.row
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico3.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center Microondas    
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico4.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center Wifi
        //.row
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico5.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center Infrarojos    
          .col-md-6.mb-3
            .tarjeta.bg9
              .row.align-items-center
                .col-md-4.col-4
                  .tarjeta.bg-white.borde-gris.p-3
                    img.h-35(src="@/assets/curso/temas/t1/t1-1_ico6.svg" alt="")
                .col-md-8.col-8
                  h3.mb-0.text-center Satelital
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src="@/assets/curso/temas/imag18.svg" alt="")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        //.titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ejemplos de medios de transmisión no guiados
        img(src="@/assets/curso/temas/imag19.svg" alt="La imagen muestra una serie de cinco iconos en línea, cada uno representando diferentes tipos de medios de transmisión inalámbricos. Estos iconos son: torre de transmisión con ondas de radio que se alejan, representando una transmisión de radio de larga distancia. Globo con meridianos y paralelos con puntos conectados por líneas, simbolizando la cobertura de red global, posiblemente satelital. Icono de señal inalámbrica, que suele representar la conectividad WiFi. Router inalámbrico, con ondas que indican la emisión de una señal WiFi. Dos pantallas de dispositivos con un símbolo de enlace, indicando una conexión de red sin cables entre ellos. Todos estos iconos ilustran las diferentes formas de comunicación inalámbrica en redes informáticas.")

    
    #7.subtitulo.mb-4(data-aos="fade")
      h3.mb-0 Recursos compartidos
     
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 Como ya hemos mencionado, las redes de datos facilitan y potencian el trabajo en red entre los diferentes usuarios y dispositivos, de tal manera que se pueda acceder a dispositivos y recursos compartidos, cuando indicamos los recursos, nos referimos a todos esos elementos tanto hardware como #[em software] que pueden compartidos y utilizados por los diferentes dispositivos conectados, estos recursos pueden ser desde el punto de vista del #[em hardware]:
        .row.justify-content-center
          .col-md-4.col-6.mb-3 
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/impresora.svg' alt='')
              h5.mb-0.text-cemter Impresora
          .col-md-4.col-6.mb-3
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/escaner.svg' alt='')
              h5.mb-0 #[em Scanner]
          .col-md-4.col-6.mb-3
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/almacenamiento.svg' alt='')
              h5.mb-0 Almacenamiento
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/imag20.svg',)
    
    p.mb-4(data-aos="fade") Desde el punto de vista lógico podemos compartir recursos como:

    .row.justify-content-center
      .col-md-6.col-lg-3.mb-3
        .tarjeta.bg10
          .row.align-items-center
            .col-md-4.col-4
              .tarjeta.bg-white.borde-gris.p-3
                img.h-45(src="@/assets/curso/temas/t1/t1-1_ico2_1.svg" alt="")
            .col-md-8.col-8
              h3.mb-0.text-center.text-white Archivos   
      .col-md-6.col-lg-3.mb-3
        .tarjeta.bg10
          .row.align-items-center
            .col-md-4.col-4
              .tarjeta.bg-white.borde-gris.p-3
                img.h-45(src="@/assets/curso/temas/t1/t1-1_ico2_2.svg" alt="")
            .col-md-8.col-8
              h3.mb-0.text-center.text-white Bases de datos 
      .col-md-6.col-lg-3.mb-3
        .tarjeta.bg10
          .row.align-items-center
            .col-md-4.col-4
              .tarjeta.bg-white.borde-gris.p-3
                img.h-45(src="@/assets/curso/temas/t1/t1-1_ico2_3.svg" alt="")
            .col-md-8.col-8
              h3.mb-0.text-center.text-white Aplicaciones 
      .col-md-6.col-lg-3.mb-3
        .tarjeta.bg10
          .row.align-items-center
            .col-md-4.col-4
              .tarjeta.bg-white.borde-gris.p-3
                img.h-45(src="@/assets/curso/temas/t1/t1-1_ico2_4.svg" alt="")
            .col-md-8.col-8
              h3.mb-0.text-center.text-white Servicios 


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Servicios propietarios
    
    p.mb-5(data-aos="fade") Antes de la llegada de la computación en la nube, los servicios, infraestructura, plataformas y en general los recursos de TI debían ser instalados, configurados y administrados en su totalidad por la empresa lo que conlleva varios inconvenientes entre los cuales se pueden mencionar los siguientes:

    .row.align-items-center.position-relative(data-aos="fade-down")
      .avatar
        img(src="@/assets/curso/temas/t1/img-1.2.svg", alt="alt").img250
      .crd.crd--avatarHorizontal.crd--first.py-4
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/t1/tarj-conect1.svg", alt="").img100
          .col
            p El almacenamiento de los datos se hace de manera local en dispositivos como discos duros y servidores locales, este trae consigo el problema de que si llegase a fallar el servidor se corre el riesgo de la pérdida de información o perdida de acceso a los servicios.
      .crd.crd--avatarHorizontal.py-4
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/t1/tarj-conect2.svg", alt="").img100
          .col
            p La administración de los recursos, que se relaciona con: el suministro de energía, aire acondicionado, sistemas de protección UPS y el mantenimiento preventivo y/o correctivo de los dispositivos, sin mencionar el hecho de que la tecnología en cuanto a infraestructura, va perdiendo su valor y se va devaluando rápidamente debido al constante desarrollo y evolución.
      .crd.crd--avatarHorizontal.crd--third.py-4
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/t1/tarj-conect3.svg", alt="").img100
          .col
            p A nivel de aplicaciones se tiene el inconveniente de tener que administrarse no solo la aplicación si no la plataforma de desarrollo, adicionalmente si se cuenta con aplicaciones no web sino tipo escritorio se obliga a tener que estar actualizando el servidor y los clientes que acceden a estas, una razón más para disponer de aplicaciones como servicio ofrecidas a través de la nube.
      .crd.crd--avatarHorizontal.crd--last.py-4
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/t1/tarj-conect4.svg", alt="").img100
          .col
            p A nivel de conectividad en la mayoría de las ocasiones el acceso a los servicios, aplicaciones y recursos normalmente está restringido a un acceso local, puesto que disponer de estrategias de conexión remotas requiere tener adicionalmente dispositivos de protección perimetral como #[em firewalls] y requerirá un nivel adicional de protección y administración desde el punto de vista de la ciberseguridad.

    //.row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Paso 1") El almacenamiento de los datos se hace de manera local en dispositivos como discos duros y servidores locales, este trae consigo el problema de que si llegase a fallar el servidor se corre el riesgo de la pérdida de información o perdida de acceso a los servicios.
          p(numero="2" titulo="Paso 2") La administración de los recursos, que se relaciona con: el suministro de energía, aire acondicionado, sistemas de protección UPS y el mantenimiento preventivo y/o correctivo de los dispositivos, sin mencionar el hecho de que la tecnología en cuanto a infraestructura, va perdiendo su valor y se va devaluando rápidamente debido al constante desarrollo y evolución.
          p(numero="3" titulo="Paso 3") A nivel de aplicaciones se tiene el inconveniente de tener que administrarse no solo la aplicación si no la plataforma de desarrollo, adicionalmente si se cuenta con aplicaciones no web sino tipo escritorio se obliga a tener que estar actualizando el servidor y los clientes que acceden a estas, una razón más para disponer de aplicaciones como servicio ofrecidas a través de la nube.        
          p(numero="4" titulo="Paso 4") A nivel de conectividad en la mayoría de las ocasiones el acceso a los servicios, aplicaciones y recursos normalmente está restringido a un acceso local, puesto que disponer de estrategias de conexión remotas requiere tener adicionalmente dispositivos de protección perimetral como firewalls y requerirá un nivel adicional de protección y administración desde el punto de vista de la ciberseguridad.
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-left")
        img(src='@/assets/curso/temas/imag21.png', alt='')


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3 La evolución de la informática en la nube
    
    .row.align-items-end.mb-4
      .col-lg-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/compu.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Si bien la computación en la nube es un término que se popularizó como un nuevo paradigma en el acceso a servicios e infraestructura en los años 2008 y 2009, desde la década del 60 ya se hablaba de este paradigma y, es a John McCarthy a quien se le atribuye la definición y el concepto tanto de cómputo en la nube como el de inteligencia artificial.
        .cajon.color-secundario.bg-9.p-4.mb-4
          p.mb-0 Posteriormente surgen nuevos autores como Joseph Carl Robnett Licklider, quien en sus conceptos siempre habló de contar con una tecnología que permitiera que todo el mundo estuviera interconectado y que de esta manera  pudiera acceder a la información desde cualquier lugar sin límites de distancias ni fronteras, este sueño dio origen a la computación en la nube, la cual se crea con el propósito de poder descentralizar los recursos de cómputo y almacenamiento para distribuirlos alrededor del mundo y facilitar el acceso a la información cada vez a más personas.
    
    .row.justify-content-center.t1-3.mb-5(data-aos="fade-down")
      .col-lg-10      
        .bloque-texto-g.color-secundario.p-4.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/cielo.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Los orígenes del término “nube”, comúnmente se asocian al término que se derivó de una metáfora que tomaba como base al dibujo de nubes que se utilizaban en el pasado para representar a la red telefónica, y que posteriormente algunos comenzaron a representar al Internet.
    
    h5.mb-4(data-aos="fade") Podemos resumir la evolución en las siguientes fases:
    
    .row.fondo-t1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .row.mb-5.mb-md-4.mb-lg-0
            .col-lg-1.col-img.d-none.d-lg-flex
              img(src='@/assets/curso/temas/t1/lineaTiempo.svg', alt='')
              .linea_dots
            .col-lg-8.pt-md-4.pb-lg-4
              h5 Primera Etapa- Década de los 60
              p Joseph Carl Robnett Licklider informático estadunidense, conceptualiza por primera vez la idea y concepto de la computación en la nube.  
            .col-lg-3.col-md-8.col-10
              img(src='@/assets/curso/temas/t1/lineaTiempo_img1.png', alt='')
          .row
            .col-lg-1.col-img.d-none.d-lg-flex
              img(src='@/assets/curso/temas/t1/lineaTiempo.svg', alt='')
              .linea_dots
            .col-lg-11
              .row.pt-md-4
                .col-lg-9
                  h5 Segunda Etapa- Inicia sobre los 90 y va hasta 2006
                  p Empieza y se desarrolla el proceso de masificación del acceso a internet, pasando a ser una tecnología exclusiva, costosa y de acceso limitado para pocos, posteriormente se popularizó, facilitando el acceso cada vez, a más empresas, este mecanismo permitió que a través de internet se originara lo que hoy conocemos con el término de aplicaciones como servicio.
                  .cajon.bg9.p-4.mb-4
                    p.mb-0 Dentro de esta etapa podemos destacar como uno de los mayores avances computacionales cuando se afianzó el concepto de virtualización a finales de esa década, nace Salesforce empresa que desarrolla la primera ola de nube cuando propone ofrecer aplicaciones empresariales a través de un acceso #[em web] sencillo y simple.
                .col-lg-3.col-md-8.col-10.mb-3.mb-lg-0
                  img(src='@/assets/curso/temas/t1/lineaTiempo_img2.png', alt='')
              p.pb-4 Si bien en esta etapa no se había consolidado la computación en la nube, la infraestructura, tecnologías y desarrollo tecnológico propio del internet fue fundamental para el crecimiento y evolución a lo que hoy conocemos como computación en la nube.              
          .row.mb-4
            .col-lg-1.col-img.d-none.d-lg-flex
              img(src='@/assets/curso/temas/t1/lineaTiempo.svg', alt='')
              .linea_dots
            .col-lg-11.pt-md-4
              h5 Tercera Etapa – Reconocida históricamente en el 2007
              p Se desarrolla la tecnología de poner “línea” (internet) en toda la plataforma e infraestructura tecnológica requerida por una empresa, incluyendo #[em hardware], #[em software] e #[em internetworking].
              .row
                .col-lg-9
                  .cajon.bg9.p-4.mb-4
                    p.mb-0 Nacen las grandes empresas como Google,  Amazon AWS, Apple Cloud, Microsoft Azure, Alibaba Cloud, que trabajan a partir del uso de internet y de servidores centralizados, con facilidades de acceso a servicios e infraestructura de manera remota, descentralizada y por demanda.
                  p La computación en la nube en la última década pasó de ser el servicio que grandes empresas de tecnologías ofrecían como una alternativa tecnológica a sus clientes, para convertirse en un factor preponderante en la transformación digital y adopción de buenas prácticas que toda empresa necesita, la cuarta revolución industrial, la popularización y cada vez más necesaria adopción de tecnologías como IoT, IA, #[em Big Data], #[em Machine Learning] entre otros hace necesario que se migre y se adopten estos servicios en la nube, ya no solo desde los servicios tradicionales si no que a medida que se van adoptando estas tecnologías irán surgiendo y desarrollando una nueva oferta de servicios que transforman y mejoran los procesos de negocio.
                .col-lg-3.col-md-8.col-10
                  img(src='@/assets/curso/temas/t1/lineaTiempo_img3.png', alt='')




    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4 Bloques de creación en la nube
    
    .row.justify-content-center.align-items-center
      .col-12.col-md-12.col-lg-8(data-aos="fade-right")
        p.mb-4 La computación en la nube permite el uso de recursos y servicios tecnológicos a través de la Red, en este caso internet, la nube da la posibilidad de que cada empresa pueda acceder a los servicios requeridos, es decir que no todos utilizarán los mismos servicios o las mismas tecnologías de la información, y las comunicaciones se conviertan en un factor potenciador y necesario para que las empresas, sin importar el tipo, funcionen de una manera eficaz y efectiva de acuerdo con su #[em core] de negocio. En general los recursos de TI se pueden clasificar en tres componentes, como se presenta en la figura 8.
        .cajon.color-custom.p-4.mb-4
          p.mb-0 Estos componentes de igual manera requieren una serie de tareas asociadas, estas son:
        .row.justify-content-center.mb-4.mb-lg-0
          .col-md-3.col-6.mb-3 
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-4_ico1.svg' alt='')
              h5.mb-0.text-cemter Adquisición
          .col-md-3.col-6.mb-3
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-4_ico2.svg' alt='')
              h5.mb-0 Configuración
          .col-md-3.col-6.mb-3
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-4_ico3.svg' alt='')
              h5.mb-0 Operación
          .col-md-3.col-6.mb-3
            .caja2.p-3.h-100
              img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-4_ico4.svg' alt='')
              h5.mb-0 Mantenimiento
      .col-10.col-md-7.col-lg-4.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Componentes de TI
        img(src="@/assets/curso/temas/t1/fig8.svg" alt="La figura menciona tres conceptos: software de aplicación, plataformas de desarrollo, infraestructura.")
    
    p(data-aos="fade") Toda organización que requiera implementar cualquier solución de TI deberá desarrollar las anteriores tareas, si la organización tiene además sus propios desarrollos o procesos de desarrollo #[em in house], se debe agregar las tareas anteriormente mencionadas las plataformas de desarrollo.
    p.mb-4(data-aos="fade") En general los bloques de creación en la nube los podemos catalogar en 4 niveles que son:
    
    .bg2.mb-4(data-aos="fade-down")
      SlyderA(tipo="b").p-4
        .row.justify-content-around
          .col-md-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/Slider1.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Nivel de infraestructura
            p Son los recursos utilizados por la empresa en un servicio en la nube, estos recursos pueden ser:
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-angle-right
                | Almacenamiento, 
              li 
                i.fas.fa-angle-right
                | Procesamiento, 
              li 
                i.fas.fa-angle-right
                span.mb-0 #[em Networking],
              li 
                i.fas.fa-angle-right
                span.mb-0 #[em Software] de administración de la infraestructura.
        .row.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 Uso compartido de recursos
            p Normalmente asociados a la consolidación y uso de tecnologías como la virtualización que permite un entorno compartido donde se pueden ejecutar varias máquinas virtuales o contenedores en un mismo servidor, se proporcionan servicios como:
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-angle-right
                span.mb-0 #[em Software]
              li 
                i.fas.fa-angle-right
                | Red 
              li 
                i.fas.fa-angle-right
                | Almacenamiento
          .col-md-5
            img(src='@/assets/curso/temas/Slider2.svg', alt='')
        .row.justify-content-around
          .col-md-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/Slider3.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Plataformas de desarrollo
            p Esta capa permite a los desarrolladores de #[em software] construir aplicaciones a través de las interfaces de programación de aplicaciones (API), esto suministrado por el proveedor de servicios en la nube, a través de las API, el desarrollador puede acceder a servicios de:
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-angle-right
                | Autenticación 
              li 
                i.fas.fa-angle-right
                | Bases de datos  
              li 
                i.fas.fa-angle-right
                | Almacenamiento y
              li 
                i.fas.fa-angle-right
                | Otros módulos o servicios disponibles.
        .row.justify-content-around
          .col-md-6.mb-4.mb-md-0
            h4 #[em Software] de aplicaciones
            p Son todas aquellas aplicaciones desarrolladas #[em in house] o adquiridas. Utilizadas por las organizaciones para el cumplimiento de sus procesos misionales, son las aplicaciones que utiliza el usuario final.
          .col-md-5
            img(src='@/assets/curso/temas/Slider4.svg', alt='')

    p.mb-4(data-aos="fade") A continuación, se ilustra el modelo de Bloques y sus diferentes niveles.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-5.col-10.col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span  Modelo de Bloques de creación en la Nube
      .row.justify-content-center
        .col-lg-5.col-10.col-md-8(data-aos="fade")
          img.mb-2(src="@/assets/curso/temas/t1/fig9.svg" alt="La figura presenta, apilados uno sobre otro,  los siguientes nombres (comenzando en la base): Infraestructura, uso compartido de recursos, plataformas de desarrollo, software de aplicación")
          figcaption
            p.mb-0 #[b Fuente.] Adaptado de https://bit.ly/3cJyHp

    
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.5 Tipos de nubes
    
    p.mb-4(data-aos="fade") Para acceder a los servicios de computación en la nube existen varios modelos de entrega o despliegue de la nube los cuales pueden ser:

    .row.justify-content-around.align-items-center
      .col-8.col-lg-5.d-none.d-lg-flex.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/imag23.svg")
      .col-10.col-lg-5.col-md-8.mb-4(data-aos="fade-left")
        SlyderF.t1-1
          .tarjeta.borde-gris
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/nube.svg' alt='' style='width:105px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3 Nube pública
                p.text-center Los servicios e infraestructura son gestionados por un proveedor de tecnológico el cual ofrece estos servicios al público en general. 
          .tarjeta.borde-gris
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/nube1.svg' alt='' style='width:105px').mx-auto         
              .col-md-10.py-3
                h3.text-center.mb-3 Nube privada
                p.text-center En este tipo de nube los servicios y la infraestructura es gestionada específicamente por una organización y no se ofrecen estos servicios al público en general.
          .tarjeta.borde-gris
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/nube2.svg' alt='' style='width:105px').mx-auto          
              .col-md-10.py-3
                h3.text-center.mb-3 Nube híbrida
                p.text-center.px-2.px-md-0 Son nubes que combinan las características de dos nubes privadas, las nubes públicas o compartidas, se caracterizan por que permiten el poder compartir servicios e infraestructura entre ambas nubes.
          .tarjeta.borde-gris
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-2.p-0
                img.mt-3(src='@/assets/curso/temas/nube3.svg' alt='' style='width:105px').mx-auto        
              .col-md-10.py-3
                h3.text-center.mb-3 Nube comunitaria
                p.text-center Este es un tipo de nube que es creada para un propósito o fin específico donde se accede y comparte servicios e infraestructura entre los integrantes de la nube, normalmente son administradas por alguno de los miembros de la comunidad organizada en la nube.


    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Principales proveedores de servicios en la nube
    
    .row.mb-4
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/imag24.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg1.bx-shadow.p-4
          p.mb-0 Debido a la masificación y cada vez mayor adopción de tecnologías de #[em cloud computing], han sido muchos los nuevos proveedores que han ido surgiendo y posicionando sus ofertas de servicios, sin embargo, en el mundo occidental podemos mencionar los siguientes como los más grandes y más importantes proveedores de servicios en la nube.
    

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="fade-down")
      .row.justify-content-center(titulo="<em>Amazon Web Services</em> (AWS)")
        .col-lg-10
          .tarjeta.bg-white.p-3.mb-4
            .row
              .col-md-4.col-lg-4.mb-4
                img(src='@/assets/curso/temas/amazon.png', alt='')
              .col-md-8.col-lg-8.mb-4
                img.w-50(src='@/assets/curso/temas/logoamazon.svg', alt='')
                .linea.my-4
                p #[b #[em Amazon Web Services (AWS),]] es quizá el líder en la oferta de varios servicios a través de la nube en este caso pública, esta empresa empezó ofreciendo servicios como el conocido S3, servicio dedicado al almacenamiento de objetos y posteriormente agregó a su oferta los servicios de EC2, la nube de proceso elástico o por demanda donde se puede acceder a máquinas virtuales, contenedores y virtualización en general. 
            .cajon.color-custom.p-4.mb-3
              p.mb-0 AWS es quizá la nube más grande con #[em datacenter] de alta disponibilidad distribuidos alrededor del mundo proporcionando redundancia y disponibilidad en más de 22 regiones distintas, (figura 10) cada zona de disponibilidad constituye una partición totalmente aislada de la infraestructura de AWS que consta de centros de datos discretos con alimentación, redes y conectividad redundantes.
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 10.  
            span  Regiones con Centros de Datos AWS
          img.mb-2(src="@/assets/curso/temas/mapa.svg" alt="La figura presenta un mapa mundial con pequeños círculos en color azul distribuidos por todos los continentes, los cuales señalan los centros de datos de AWS y círculos en color naranja que señalan regiones donde estarán próximamente.")
          figcaption.mb-5
            p.mb-0 #[b Fuente.] Adaptado de https://bit.ly/3JteDTS
        .bg11.p-3
          h4.text-center.mb-0 Amazon ofrece más de 100 servicios distribuidos entre los cuales podemos mencionar:
        .row.justify-content-around.fondo-15
          .col-lg-6
            img.w-50.mb-4(src='@/assets/curso/temas/logoamazon.svg', alt='')
            .row.justify-content-center
              .col-md-4.mb-3 
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico1.svg' alt='')
                  h5.mb-0.text-cemter Procesamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico2.svg' alt='')
                  h5.mb-0 Almacenamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico3.svg' alt='')
                  h5.mb-0 Redes
          .col-lg-5.my-3
            SlyderF.t1-1
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de procesamiento
                p Procesamiento a través de máquinas virtuales, contenedores o instancias de diferentes configuraciones las cuales pueden ser alquiladas por horas, días o por un largo tiempo, este servicio es conocido como Ec2.
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de almacenamiento
                p Es el servicio de almacenamiento que puede ser elástico (EBS) o servicios de almacenamiento simple (S3), incluye almacenamiento de objetos, bases de datos, almacenamiento y recuperación de objetos binarios (BLOB), entre múltiples servicios adicionales relacionados con el almacenamiento de información.
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de redes
                p En este servicio es muy popular la Ruta 53 de Amazon, la cual ofrece el servicio de interconexión y conectividad entre las diferentes instancias o con otras redes externas, incluye además servicios como Nube privada virtual (VPC), #[em Elastic Load Balancer] (EBL).

      .row.justify-content-center(titulo="<em>Microsoft Azure</em>")
        .col-lg-10
          .tarjeta.bg-white.p-3.mb-4
            .row
              .col-md-4.col-lg-4.mb-4
                img(src='@/assets/curso/temas/imag25.png', alt='')
              .col-md-8.col-lg-8.mb-4
                img.w-50(src='@/assets/curso/temas/azurelogo.svg', alt='')
                .linea.my-3
                p Es la nube de la empresa #[em Microsoft, Azure] es quizá la plataforma con crecimiento más rápido en el mercado de #[em Cloud], tiene más de 50 centros de datos distribuidos alrededor de más de 140 países (figura 11) a través de servicios como #[em Azure Stack] permite que una organización pueda crear su nube privada y posteriormente integrar a la nube pública de #[em Azure] y de esta manera poder interactuar con todas las bondades, características y servicios de #[em Azure].
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11.  
            span  Regiones con Centros de Datos #[em Microsoft Azure]
          img.mb-2(src="@/assets/curso/temas/mapa1.png" alt="En la figura se señalan, sobre un mapa mundial y con círculos azules, todos los países donde existen centros de datos de microsoft Azure.")
          figcaption.mb-5 
            p.mb-0 #[b Fuente.] Adaptado de https://bit.ly/313Kblk
        .bg11.p-3
          h4.text-center.mb-0 Dentro de los más de 100 servicios ofrecidos por #[em Microsoft Azure] podemos mencionar:
        .row.justify-content-around.fondo-16
          .col-lg-6
            img.w-50.mb-4(src='@/assets/curso/temas/t1/m-azure.png', alt='')
            .row.justify-content-center
              .col-md-4.mb-3 
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico1.svg' alt='')
                  h5.mb-0.text-cemter Procesamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico2.svg' alt='')
                  h5.mb-0 Almacenamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico3.svg' alt='')
                  h5.mb-0 Redes
          .col-lg-5.my-3
            SlyderF.t1-1
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de procesamiento 
                p En este servicio #[em Azure] ofrece: 
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Azure Virtual Machines] con instancias de distintos tipos, soportando #[em Windows] y algunas versiones o distribuciones de Linux.
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Azure Storage]
              .tarjeta.borde-gris.bg-white.p-4
                h3.text-center.mb-3.bg-color-1 Servicios de almacenamiento
                p El servicio es conocido como #[em Azure Storage] este servicio incluye:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Azure blobs] para el almacenamiento de objetos binarios grandes (BLOBS).
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Azure Tables] para el almacenamiento de bases de datos No SQL.
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Azure Files] que son servicios de almacenamiento compatibles con #[em Windows] (SMB), al igual que ofrece todos los servicios de almacenamiento de bases de datos relacionales a través de #[em Azure SQL Database].
              .tarjeta.borde-gris.bg-white.p-4
                h3.text-center.mb-3.bg-color-1 Servicios de redes
                p A través del servicio de #[em Azure virtual network] ofrece redes privadas virtuales, ofrece el servicio de #[em Azure Traffic Manager] para enrutar y administrar la conectividad y acceso a sus instancias y redes externas.
  
      .row.justify-content-center(titulo="<em>Google Cloud Platform</em> (GCP)")
        .col-lg-10
          .tarjeta.bg-white.p-3.mb-4
            .row
              .col-md-4.col-lg-4.mb-4
                img(src='@/assets/curso/temas/google.png', alt='')
              .col-md-8.col-lg-8.mb-4
                img.w-50(src='@/assets/curso/temas/logogoogle.svg', alt='')
                .linea.my-3
                p Es una plataforma que ha ido evolucionando en su oferta de servicios como respuesta al crecimiento de sus competidores, Google cuenta con aproximadamente 60 centros de datos en más de 20 regiones alrededor del mundo, como puede observarse en la figura 12.
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 12.  
            span Regiones de Google Cloud
          img.mb-2(src="@/assets/curso/temas/mapa2.svg" alt="La figura presenta un mapa mundial donde se señalan y enumeran los diferentes países donde se encuentran centros de datos de Google. ")
          figcaption.mb-5
            p.mb-0 #[b Fuente.] Adaptado de https://tcrn.ch/3r8c7iL
        .bg11.p-3
          h4.text-center.mb-0 Dentro de los servicios de #[em Google Cloud Platform] #[b (GCP)], se destacan los siguientes:
        .row.justify-content-around.fondo-17
          .col-lg-6
            img.w-75.mb-4(src='@/assets/curso/temas/t1/gcp.png', alt='')
            .row.justify-content-center
              .col-md-4.mb-3 
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico2_1.svg' alt='')
                  h5.mb-0.text-cemter Procesamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico2_2.svg' alt='')
                  h5.mb-0 Almacenamiento
              .col-md-4.mb-3
                .caja2.p-3.h-100
                  img.m-auto.mb-3.w-50(src='@/assets/curso/temas/t1/t1-6_ico2_3.svg' alt='')
                  h5.mb-0 Redes
          .col-lg-5.my-3
            SlyderF.t1-1
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de procesamiento
                p A través de su servicio #[em Google Compute Engine] (GCE), ofrece máquinas virtuales e instancias de diferentes tipos con sistema operativo Linux.
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de almacenamiento
                p #[em Google Cloud] cuenta con tres servicios de almacenamiento principales: 
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Google Cloud Storage], un servicio de almacenamiento de objetos similar a AWS S3 y #[em Azure Blobs]. 
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Google Cloud Datastore] es un servicio administrado de almacén de datos NoSQL. 
                  li 
                    i.fas.fa-angle-right
                    span.mb-0 #[em Cloud SQL] servicio que proporciona el almacenamiento de bases de datos tradicionales SQL.
              .tarjeta.borde-gris.bg-white.p-4
                h4 Servicios de redes
                p Google ofrece varios productos de red para administrar las conexiones entre los servicios en la nube de Google y el mundo exterior, es decir, el equilibrio de carga, la interconexión y los servicios DNS. Toda la infraestructura de Google es neutral en carbono y sus centros de datos consumen un 50% menos de energía que los centros de datos habituales.
              
        
    p.mb-4(data-aos="fade") A continuación, se presenta una tabla resumen con los principales servicios ofrecidos por cada uno de los proveedores antes mencionados.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Servicios ofrecidos por cada proveedor de #[em Cloud]
        .tarjeta.tarjeta--gris.p-4
          .bg-white.p-3
            .tabla-a.color-primario.mb-5 
              table.t1-6.text-center
                tbody
                  tr
                    td 
                    td 
                      img.m-auto.w-50(src='@/assets/curso/temas/t1/Amazon_Web_Services_Logo.png' alt='')
                    td
                      img.m-auto.w-75(src='@/assets/curso/temas/t1/Microsoft_Azure_Logo.png' alt='')
                    td
                      img.m-auto.w-75(src='@/assets/curso/temas/t1/Google_Cloud.png' alt='')
                  tr
                    td.text-right.br Compute:
                    td.br.bb EC2 Instance
                    td.br.bb Virtual Machine (VM)
                    td.bb Compute Engine VMs
                  tr
                    td.text-right.br Object Storage
                    td.br.bb S3
                    td.br.bb Blob Storage
                    td.bb Cloud Storage
                  tr
                    td.text-right.br Logical Data Centre:
                    td.br.bb VPC
                    td.br.bb VNet
                    td.bb VPC
                  tr
                    td.text-right.br Private Connectivity (L2):
                    td.br.bb Direct Connect
                    td.br.bb ExpressRoute
                    td.bb Interconnect
                  tr
                    td.text-right.br Gateways:
                    td.br TGW, VGW, DGW
                    td.br VNet Gateway
                    td Cloud Router



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
