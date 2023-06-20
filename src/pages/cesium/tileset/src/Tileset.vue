<template>
  <div>
    <div id="tileset" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
// import { defineComponent } from "vue"
import "cesium/Build/Cesium/Widgets/widgets.css";
// import { option } from "./option.ts";
import { Viewer,Ion, createOsmBuildings,Cartesian3,Math,createWorldTerrain, createWorldImagery } from "cesium";
export default {
  name: 'Tileset',
  meta: {
    col: 12,
    title: 'Cesium白膜'
  },
  props: {
    src: {
      type: String,
      default: 'default.png',
    },
    size: {
      default: 16,
    },
  },
  methods: {
    init() {
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYzlhNzJjYS04M2JhLTRkM2ItODY2ZC0yNTljNjMxYjdmZWUiLCJpZCI6MTQ3Nzg1LCJpYXQiOjE2ODcxNjQ4Mzl9.XP1TZIUYCfGjTesr9yUv5yI3W7X81VLNsGeRPSgiytA';
    var viewer = new Viewer('tileset', {
      requestRenderMode: true,
      maximumRenderTimeChange: Infinity,
      timeline: false,
      animation: false,
      baseLayerPicker: false,
      sceneModePicker: false,
      terrainProvider: createWorldTerrain(),
      imageryProvider: createWorldImagery()
    })

      // var layerProvider = new Cesium.ArcGisMapServerImageryProvider({
      //     url: 'http://11.23.2.104:8040/tcloud/rest/services/Image_CGCS2000/MapServer?access_token=AT-179-RW4snqetDvH9dSyExQ-F5AWlCD7YqG5O'
      // });
      // 添加
      //  viewer.scene.imageryLayers.addImageryProvider(layerProvider);
      // viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
      //   url: 'http://11.23.2.104:8040/tcloud/rest/services/BaiMo_3DTiles/SceneServer/tileset.json?access_token=AT-179-RW4snqetDvH9dSyExQ-F5AWlCD7YqG5O',

      // }))
      // Add Cesium OSM Buildings, a global 3D buildings layer.
      viewer.scene.primitives.add(createOsmBuildings());
      viewer.camera.flyTo({
        destination : Cartesian3.fromDegrees(119.296313, 26.074306, 400),
        orientation : {
          heading : Math.toRadians(0.0),
          pitch : Math.toRadians(-15.0),
        }
      });
    },
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss" scoped>
// .sk-img-icon {
//   display: inline-block;
//   vertical-align: middle;
//   background-size: contain !important;
// }
</style>
