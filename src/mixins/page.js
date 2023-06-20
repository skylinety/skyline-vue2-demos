// const files = require.context('../pages', true, /.*src\/[^/]*\.vue$/)

// let modules = {}
// files.keys().forEach((key) => {
//   console.log('page.js第5行:::key', key);
//   let obj = files(key).default || files(key)
//   console.log('page.js第7行:::[obj.name]', [obj.name]);
//   modules = { ...modules, [obj.name]: obj }
// })

export default {
  // components: {
  //   ...modules,
  // },
  methods: {
    renderFrame() {
      console.log('page.js第17行:::render', );
      return (
        <el-row gutter={20}>
          {Object.values(this.modules).map((v) => {
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
