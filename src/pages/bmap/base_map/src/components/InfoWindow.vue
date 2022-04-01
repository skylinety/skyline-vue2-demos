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
 .BMap_shadow {
    display: none;
  }

  .BMap_pop {
    > img {
      display: none;
    }

    > div {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(3) {
        display: none;
      }

      &:nth-child(5) {
        display: none;
      }

      &:nth-child(7) {
        display: none;
      }

      &:nth-child(8) {
        height: 30px !important;
        z-index: 16 !important;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #3e5e7b;
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          bottom: 1px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #26cbfe;
        }
        img {
          display: none;
        }
      }

      &:nth-child(9) {
        background: rgba(15, 43, 102, 0.8);
        border: 1px solid;
        border-image: linear-gradient(
            180deg,
            rgba(42, 204, 254, 0),
            #00beff 52%,
            #2accfe
          )
          1 1;
        box-shadow: 0px 0px 30px 0px rgba(0, 163, 255, 0.7) inset;
        overflow: visible !important;
        top: 28px !important;
        clip-path: inset(0 0 round 4px);
      }
    }

    .BMap_top {
      border-top: none;
      background-color: transparent;
    }

    .BMap_center {
      border-left: none;
      border-right: none;
      background-color: transparent;
    }

    .BMap_bottom {
      border-bottom: none;
      background-color: transparent;
    }
  }
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
