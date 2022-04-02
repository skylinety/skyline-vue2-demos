<script>
export default {
  name: 'InfoWindow',
  props: {
    detail: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  methods: {},
  render() {
    return (
      <div class='info_window'>
        <dl class='content-list'>
          {Object.entries(this.detail).map(([k, v]) => {
            return (
              <dd>
                <span>{k}：</span>
                <span>{v}</span>
              </dd>
            )
          })}
        </dl>
      </div>
    )
  },
}
</script>
<style lang="scss">

.info_window {
  color: #ffffff;
  padding: 18px;
  min-width: 424px;
  font-size: 16px;
  .content-list {
    dd {
      margin-top: 14px;
      span {
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        &:first-child {
          color: #cccccc;
        }
        &:last-child {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
