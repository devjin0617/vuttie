import Vuttie from './components/Vuttie.vue'
const version = require('../package.json').version

const components = [
  Vuttie
]
const install = function (Vue, otps = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version,
  install,
  Vuttie
}
