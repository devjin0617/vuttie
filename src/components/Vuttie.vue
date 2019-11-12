<template>
  <div ref="vuttieContainer" style="width:100px; height:100px;"></div>
</template>

<script>
import lottie from 'lottie-web'
import jsonFile from '../assets/sample.json'
export default {
  name: 'Vuttie',
  mounted () {
    lottie.loadAnimation({
      container: this.$refs.vuttieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: jsonFile,
      rendererSettings: {}
    })
  }
}
</script>

<style></style>
