<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La computación en la nube permite que los consumidores y las empresas gestionen archivos y utilicen aplicaciones sin necesidad de instalarlas, lo cual puede hacerse en cualquier computadora con acceso a internet.
    p Además, es útil como modelo de negocio, puesto que el software reduce los costos mediante servidores centralizados en internet, en lugar de servidores locales, al eliminar gastos de mantenimiento, licencias y hardware necesario para mantener los servidores, permite que las empresas puedan ejecutar aplicaciones fluida y eficientemente. 
    p La computación en la nube hace que sea posible que los usuarios accedan a aplicaciones en servidores centralizados que se basan en la infraestructura de la nube, pudiendo así las aplicaciones funcionar en la nube y facilitando su implementación sin costo alguno, manteniendo varias capas de #[em hardware] y #[em software].
    p.mb-4 El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis es un mapa conceptual que resume aspectos importantes de la computación en la nube. Se divide en tres áreas principales: Fundamentos, que abarca conceptos básicos, servicios y estructura; Rentabilidad, que evalúa ventajas, desventajas y consideraciones económicas para usuarios y proveedores y un área relacionada con amenazas y aspectos contractuales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
