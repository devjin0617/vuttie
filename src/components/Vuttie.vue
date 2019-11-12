<template>
  <canvas v-if="type === 'canvas'" ref="vuttieContainer" style="width:100px;"></canvas>
  <div v-else ref="vuttieContainer" style="width:100px; height:100px;"></div>
</template>

<script>
import lottie from 'lottie-web'
import jsonFile from '../assets/sample.json'
export default {
  name: 'Vuttie',
  props: ['loop', 'autoplay', 'data', 'options'],
  mounted () {
    lottie.loadAnimation({
      container: this.$refs.vuttieContainer,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.data || jsonFile,
      rendererSettings: this.options
    })
  }
}
</script>

<style></style>
