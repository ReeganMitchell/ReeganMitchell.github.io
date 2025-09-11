<template>
  <div ref="stage"></div>
</template>

<script>
  import * as PIXI from 'pixi.js';

  export default {
    data() {
      return {
        app: new PIXI.Application(), 
      };
    },
    mounted() {
      
      (async () => {
        
        await this.app.init({
          // background: '#FFFFFF',
          backgroundAlpha: 0,
          resizeTo: HTMLElement,
          width:  640,
          height: 480,
          antialias: true, 
          autoDensity: true 
        }); 

        this.$refs.stage.appendChild(this.app.canvas);

        const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        this.app.stage.addChild(bunny);

        bunny.x = this.app.screen.width / 2;
        bunny.y = this.app.screen.height / 2;

        const textColor = '#000000'

        const fill = new PIXI.FillGradient(0, 0, 1, 1);
        fill.addColorStop(0, textColor);
        fill.addColorStop(1, textColor);

        const coordsTextStyle = new PIXI.TextStyle({
            fill,
        });

        const basicText = new PIXI.Text({ text: 'Pixi test', style: coordsTextStyle});
        basicText.anchor.set(0.5);

        basicText.x = this.app.screen.width / 2;
        basicText.y = (this.app.screen.height / 2) + 50; 

        this.app.stage.addChild(basicText);

        this.app.ticker.add((time) => {
            bunny.rotation += 0.01 * time.deltaTime
        });
      })();
    },
};
</script>