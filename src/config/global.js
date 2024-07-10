export default {
  global: {
    componenteFormativo: 'Generalidades de la computación en la Nube',
    descripcionCurso:
      'La computación en la nube es una tecnología cada vez con mayor uso e impacto en el despliegue y acceso a servicios toda vez que facilita el acceso remoto desde cualquier parte del mundo a través de tecnologías de internet a procesamiento y almacenamiento de datos, en el presente componente formativo hablaremos de sus características, generalidades y conceptos más importantes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de los servicios TI en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos, términos y definiciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Servicios propietarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evolución de la informática en la nube',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Evolución de la informática en la nube',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipos de nubes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Principales proveedores de nube',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Rentabilidad de la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ventajas y desventajas de la informática en la nube',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Rentabilidad de la informática en la nube para los usuarios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Rentabilidad para los proveedores de servicios en la nube',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Contratos y objetivos de nivel de servicio',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Amenazas de seguridad en la nube',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Control y auditoría de la seguridad en la nube',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF10_228138_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de los servicios TI en la nube',
      referencia:
        'Amanecer en las redes [video] YouTube. Accedido 19 noviembre 2021 ',
      tipo: 'Video',
      link: 'https://youtu.be/D8YG2zfdag0',
    },
  ],
  glosario: [
    {
      termino: '<em>Azure</em>',
      significado: 'Servicios de computación en la nube de <em>Microsoft</em>.',
    },
    {
      termino: '<em>AWS</em>',
      significado:
        ' <em>Amazon Web Services</em>: servicios de cloud ofrecidos por Amazon.',
    },
    {
      termino: '<em>CapEx</em>',
      significado:
        'En los sistemas de TI es una inversión a largo plazo que inmoviliza una gran suma de dinero en una sola inversión.',
    },
    {
      termino: '<em>GCP</em>',
      significado: ' <em>Google Cloud Platform</em>.',
    },
    {
      termino: 'ISO',
      significado: ' Organización de estándares internacionales.',
    },
    {
      termino: 'Medio de transmisión',
      significado:
        'Para que la comunicación entre un emisor y un receptor se realice se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos.',
    },
    {
      termino: '<em>Networking</em>',
      significado:
        'Trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos que permiten potenciar y maximizar el potencial de las redes de datos.',
    },
    {
      termino: '<em>OpEx</em>',
      significado:
        'Es un gasto recurrente que podría dotar a la compañía de la agilidad de usar los fondos en otras inversiones rentables.',
    },
    {
      termino: 'OSI',
      significado: ' Interconexión de sistemas abiertos.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Estándar o lenguaje común, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos, <em>hardware</em> y <em>software</em> que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares la comunicación resultaría caótica y por tanto imposible.',
    },
    {
      termino: 'Redes de Datos',
      significado:
        'Conjunto equipos (computadoras y dispositivos) conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, para compartir información (archivos) recursos (discos, impresoras, programas, etc.) y servicios (acceso a una base de datos, internet, correo electrónico, chat, juegos, etc.)',
    },
    {
      termino: 'TCP/IP',
      significado: ' Protocolo de control de transmisión/ Protocolo IP.',
    },
  ],
  referencias: [
    {
      referencia:
        'Del Vecchio, J. F., Paternina, F. J., & Henríquez Miranda, C. (2015). La computación en la nube: un modelo para el desarrollo de las empresas. Prospectiva, 13(2), 81-87',
    },
    {
      referencia: 'Fernández Barcell, M. (2014). Medios de transmisión.',
    },
    {
      referencia:
        'Giraldo, L. A. (2021, noviembre 11). ¿Cómo ha evolucionado la computación en la nube a través del tiempo?',
      link:
        'https://www.pragma.com.co/blog/como-ha-evolucionado-la-computacion-en-la-nube-a-traves-del-tiempo',
    },
    {
      referencia:
        'Padilla Aguilar, J. J., & Pinzón Castellanos, J. (2015). Estándares para Cloud Computing: estado del arte y análisis de protocolos para varias nubes.',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
    },
    {
      referencia:
        'Softchris. (2021, noviembre 16). Definición de informática en la nube - Learn.',
      link:
        'https://docs.microsoft.com/es-es/learn/modules/cmu-cloud-admin-overview/01-define-cloud-computing',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., & Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 6ª edición. Prentice-Hall.',
    },
    {
      referencia:
        'Ternero, M. D. C. R., & Mondéjar, J. B. El Modelo de referencia OSI (ISO 7498).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma ',
          cargo: 'Instructor',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y Corrección de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Producción audiovisual',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
