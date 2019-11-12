import Vuttie from './components/Vuttie.vue'

const components = [
  Vuttie
]
const install = function (Vue, otps = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  Vuttie
}
