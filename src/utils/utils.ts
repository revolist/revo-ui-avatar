  /** Random number generator */
  export function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /** Color generator */
  export class Color {
    // default settings preset
    private minHue = 0;
    private maxHue = 230;

    private minSat = 75;
    private maxSat = 100;

    private minLight = 65;
    private maxLight = 70;

    private scaleLight = 15;
    readonly hsl: string;
    constructor(
      private hue?: number,
      private sat?: number,
      private light?: number,
      private opacity?: number,
      private isLight: boolean = true) {


      // if light do drarker
      if (this.isLight) {
        this.minLight = 40;
        this.maxLight = 65;
      }
      // init hue
      this.hue = hue || randomNum(this.minHue, this.maxHue);

      if (this.hue > 288 && this.hue < 316) {
        this.hue = randomNum(316, 360);
      } else if (this.hue > 280 && this.hue < 288) {
        this.hue = randomNum(260, 280);
      }

      this.sat = sat || randomNum(this.minSat, this.maxSat);
      this.light = light || randomNum(this.minLight, this.maxLight);

      if (this.opacity) {
        this.hsl = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, ${this.opacity})`;
      } else {
        this.hsl = `hsl(${this.hue}, ${this.sat}%, ${this.light}%)`;
      }
    }

    changeHue(hue: number, rotate: number) {
      return hue + rotate > this.maxHue ? (hue + rotate) - this.maxHue : hue + rotate;
    }

    changeLight(light: number) {
      return light + this.scaleLight > this.maxLight ? this.maxLight : light + this.scaleLight;
    }
  }
