<template>
  <div class="player" :style="{ color: theme, border: `1px solid ${theme}` }">
    <div class="player-controls" :class="controls_custom_class">
      <div>
        <a v-on:click.prevent="playing = !playing" title="Play/Pause" href="#">
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              v-if="!playing"
              :fill="theme"
              d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
            />
            <path
              v-else
              :fill="theme"
              d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"
            />
          </svg>
        </a>
      </div>
      <div v-if="!$vuetify.display.xs">
        <a v-on:click.prevent="stop" title="Stop" href="#">
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              :fill="theme"
              d="M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"
            />
          </svg>
        </a>
      </div>
      <div
        :class="{ 'w-100': !$vuetify.display.xs }"
        style="display: flex; justify-content: center; flex-direction: column"
      >
        <div
          v-on:click="seek"
          class="player-progress"
          title="Time played : Total time"
          :style="{ backgroundColor: theme }"
        >
          <div
            :style="{ width: this.percentComplete + '%' }"
            class="player-seeker"
          ></div>
        </div>
        <div class="player-time" style="font-size: 0.7rem">
          <div class="player-time-current">{{ currentTime }}</div>
          <div class="player-time-total">{{ durationTime }}</div>
        </div>
      </div>
      <div v-if="!$vuetify.display.xs">
        <a v-on:click.prevent="download" href="#">
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              :fill="theme"
              d="M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"
            />
          </svg>
        </a>
      </div>
      <div>
        <a v-on:click.prevent="innerLoop = !innerLoop" href="#">
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              v-if="!innerLoop"
              :fill="theme"
              d="M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"
            />
            <path
              v-else
              :fill="theme"
              d="M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"
            />
          </svg>
        </a>
      </div>
      <div>
        <a v-on:click.prevent="mute" title="Mute" href="#">
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              v-if="!muted"
              :fill="theme"
              d="M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"
            />
            <path
              v-else
              :fill="theme"
              d="M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"
            />
          </svg>
        </a>
      </div>
      <div>
        <a
          v-on:click.prevent=""
          v-on:mouseenter="showVolume = true"
          v-on:mouseleave="showVolume = false"
          title="Volume"
          class="d-flex align-center"
        >
          <svg
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              :fill="theme"
              d="M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"
            />
          </svg>
          <input
            v-model.lazy.number="volume"
            v-show="showVolume"
            :style="{ color: theme }"
            type="range"
            min="0"
            max="100"
            class="ml-2"
          />
        </a>
      </div>
    </div>
    <audio
      :loop="innerLoop"
      ref="audiofile"
      :src="file"
      preload="auto"
      style="display: none"
    ></audio>
  </div>
</template>

<script>
const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

export default {
  props: {
    file: {
      type: String,
      default: null,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
    },
    controls_custom_class: {},
  },
  data: () => ({
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    innerLoop: false,
    loaded: false,
    playing: false,
    previousVolume: 35,
    showVolume: false,
    volume: 100,
  }),
  computed: {
    currentTime() {
      return convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime() {
      return convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    muted() {
      return this.volume / 100 === 0;
    },
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    volume(value) {
      this.audio.volume = this.volume / 100;
    },
  },
  methods: {
    download() {
      this.stop();
      window.open(this.file, "download");
    },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        return (this.playing = this.autoPlay);
      }

      throw new Error("Failed to load sound file.");
    },
    mute() {
      if (this.muted) {
        return (this.volume = this.previousVolume);
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek(e) {
      if (!this.playing || e.target.tagName === "SPAN") {
        return;
      }

      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;

      this.audio.currentTime = parseInt(this.audio.duration * seekPos);
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    update(e) {
      this.currentSeconds = parseInt(this.audio.currentTime);
    },
  },
  created() {
    this.innerLoop = this.loop;
  },
  mounted() {
    this.audio = this.$el.querySelectorAll("audio")[0];
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
  },
};
</script>

<style scoped>
.player {
  background-color: var(--secondary-3);
  border-radius: 5px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  display: inline-block;
  line-height: 1.5625;
  position: relative;
}
@media (max-width: 600px) {
  
}
.player-controls {
  display: flex;
  align-items: center;
}

.player-controls > div a {
  line-height: 0;
  padding: 1em;
  text-decoration: none;
}
.player-progress {
  cursor: pointer;
  height: 10px;
  min-width: 200px;
  position: relative;
}
.player-progress .player-seeker {
  background-color: #fff;
  opacity: 0.5;
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
}
.player-time {
  display: flex;
  justify-content: space-between;
}
.player-time .player-time-current {
  font-weight: 700;
  padding-left: 5px;
}
.player-time .player-time-total {
  padding-right: 5px;
}

/*
 * 16 February 2022
 * Range Slider Progress in Chrome with pure CSS
 *
 * === This CodePen demonstrates how we can implement range slider "progress fill" in Webkit browsers using a `clip-path` and a `box-shadow` ===
 *
 * === There is an open issue about Standardizing input[type="range"] styling (https://github.com/w3c/csswg-drafts/issues/4410). For all I know, it hasn't been implemented yet ===
 *
 * === This demo is meant for Chrome browsers. But it'll also work in Firefox because Firefox provides the `::-moz-range-progress` pseudo-class ===
 *
 * more info. in the details view
 *
 */

/* === range theme and appearance === */
input[type="range"] {
  font-size: 1.5rem;
  width: 10rem;
}

input[type="range"] {
  --thumb-height: 1rem;
  --track-height: 0.125em;
  --track-color: rgba(0, 0, 0, 0.2);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
}

input[type="range"].win10-thumb {
  color: #2b2d42;
  --thumb-height: 1.375em;
  --thumb-width: 0.5em;
  --clip-edges: 0.0125em;
}

@media (prefers-color-scheme: dark) {
  html {
    background-color: #000;
  }

  html::before {
    background: radial-gradient(circle at center, #101112, #000);
  }

  input[type="range"] {
    color: #f07167;
    --track-color: rgba(255, 255, 255, 0.1);
  }

  input[type="range"].win10-thumb {
    color: #3a86ff;
  }
}

/* === range commons === */
input[type="range"] {
  position: relative;
  background: #fff0;
  overflow: hidden;
}

input[type="range"]:active {
  cursor: grabbing;
}

input[type="range"]:disabled {
  filter: grayscale(1);
  opacity: 0.3;
  cursor: not-allowed;
}

/* === WebKit specific styles === */
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  position: relative;
}

input[type="range"]::-webkit-slider-thumb {
  --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
  --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
  --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
  --clip-further: calc(100% + 1px);
  --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
    100vmax currentColor;

  width: var(--thumb-width, var(--thumb-height));
  background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
    50% calc(var(--track-height) + 1px);
  background-color: currentColor;
  box-shadow: var(--box-fill);
  border-radius: var(--thumb-width, var(--thumb-height));

  filter: brightness(100%);
  clip-path: polygon(
    100% -1px,
    var(--clip-edges) -1px,
    0 var(--clip-top),
    -100vmax var(--clip-top),
    -100vmax var(--clip-bottom),
    0 var(--clip-bottom),
    var(--clip-edges) 100%,
    var(--clip-further) var(--clip-further)
  );
}

input[type="range"]:hover::-webkit-slider-thumb {
  filter: brightness(var(--brightness-hover));
  cursor: grab;
}

input[type="range"]:active::-webkit-slider-thumb {
  filter: brightness(var(--brightness-down));
  cursor: grabbing;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
    100% calc(var(--track-height) + 1px);
}

input[type="range"]:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
}

/* === Firefox specific styles === */
input[type="range"],
input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb {
  appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  background: #fff0;
}

input[type="range"]::-moz-range-thumb {
  background: currentColor;
  border: 0;
  width: var(--thumb-width, var(--thumb-height));
  border-radius: var(--thumb-width, var(--thumb-height));
  cursor: grab;
}

input[type="range"]:active::-moz-range-thumb {
  cursor: grabbing;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  background: var(--track-color);
}

input[type="range"]::-moz-range-progress {
  appearance: none;
  background: currentColor;
  transition-delay: 30ms;
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-progress {
  height: calc(var(--track-height) + 1px);
  border-radius: var(--track-height);
}

input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  filter: brightness(100%);
}

input[type="range"]:hover::-moz-range-thumb,
input[type="range"]:hover::-moz-range-progress {
  filter: brightness(var(--brightness-hover));
}

input[type="range"]:active::-moz-range-thumb,
input[type="range"]:active::-moz-range-progress {
  filter: brightness(var(--brightness-down));
}

input[type="range"]:disabled::-moz-range-thumb {
  cursor: not-allowed;
}
@media (max-width: 600px) {
  input[type="range"] {
    position: absolute !important;
    bottom: -1rem;
    right: 0rem;
    background-color: #fff !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem !important;
    border-radius: 1rem;
  }
}
</style>
