<template>
  <div id="stage" ref="stage"></div>
</template>

<script lang="ts">
import * as PIXI from 'pixi.js'

export default {
  data() {
    return {
      app: new PIXI.Application()
    }
  },
  mounted() {
    ;(async () => {
      const stage = document.getElementById('stage')
      const stageHeight = (stage.offsetWidth / 4) * 3

      await this.app.init({
        // background: '#00FFFF',
        backgroundAlpha: 0,
        width: stage.offsetWidth,
        height: stageHeight,
        antialias: false,
        autoDensity: true
      })
      ;(this.$refs.stage as any).appendChild(this.app.canvas)

      const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png')
      const bunny = new PIXI.Sprite(texture)
      bunny.anchor.set(0.5)
      this.app.stage.addChild(bunny)

      bunny.x = this.app.screen.width / 2
      bunny.y = this.app.screen.height / 2

      const textColor = '#000000'

      const fill = new PIXI.FillGradient(0, 0, 1, 1)
      fill.addColorStop(0, textColor)
      fill.addColorStop(1, textColor)

      const coordsTextStyle = new PIXI.TextStyle({
        fill
      })

      const basicText = new PIXI.Text({ text: 'Pixi test', style: coordsTextStyle })
      basicText.anchor.set(0.5)

      basicText.x = this.app.screen.width / 2
      basicText.y = this.app.screen.height / 2 + 50

      this.app.stage.addChild(basicText)

      this.app.ticker.add((time) => {
        console.log(time)
        bunny.rotation += 0.01 * time.deltaTime
      })
    })()
  }
}
</script>
