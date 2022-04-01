const files = require.context('../pages', true, /.*src\/[^/]*\.vue$/)
let modules = {}
files.keys().forEach((key) => {
  let obj = files(key).default || files(key)
  modules = { ...modules, [obj.name]: obj }
})

console.log('page.js第8行:::modules', modules)
export default {
  components: {
    ...modules,
  },
  methods: {
    renderFrame() {
      return (
        <el-row gutter={20}>
          {Object.values(modules).map((v) => {
            const {
              meta: { col, title },
              name,
            } = v
            return (
              <el-col span={col} gutter={20}>
                <el-card
                  header={title}
                  scopedSlots={{
                    default: () => {
                      return (
                        <div class='content-wrapper'>
                          <name></name>
                        </div>
                      )
                    },
                  }}
                ></el-card>
              </el-col>
            )
          })}
        </el-row>
      )
    },
  },
}
