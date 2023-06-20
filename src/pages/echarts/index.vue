<script>

import page from "@/mixins/page";
const files = require.context('./', true, /.*src\/[^/]*\.vue$/)

let modules = {}
files.keys().forEach((key) => {
  console.log('page.js第5行:::key', key);
  let obj = files(key).default || files(key)
  console.log('page.js第7行:::[obj.name]', [obj.name]);
  modules = { ...modules, [obj.name]: obj }
})

export default {
  name: 'Echarts',
  components: {
    ...modules,
  },
  data() {
    return {
      modules
    }
  },
  mixins: [page],
  methods: {
  },
  created() {
  },

  render() {
    console.log('index.vue第16行:::redned', );
    return this.renderFrame()
  },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  height: 33vh;
}
</style>
