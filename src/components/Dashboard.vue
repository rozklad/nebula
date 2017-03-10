<template>
  <div class="dashboard">
    <transition name="slide-fade">
      <div class="cols" v-show="loaded">
        <div v-for="indicator in kpi" class="dashboard-block kpi">
          <div class="dashboard-block__inner cols">
            <div class="dashboard-block__panel">
              <h3 class="dashboard-block__title kpi__title">{{ indicator.name }}</h3>
              <div class="dashboard-block__value">{{ indicator.value }}</div>
            </div>
            <div class="dashboard-block__content">
              <!-- Sample chart -->
              <svg width="155" height="30">
                <defs>
                  <linearGradient id="gradient-75957095" x1="0" x2="0" y1="1" y2="0">
                    <stop offset="10%" stop-color="#42b983"></stop>
                    <stop offset="33%" stop-color="#42b983"></stop>
                    <stop offset="66%" stop-color="#42b983"></stop>
                    <stop offset="90%" stop-color="#42b983"></stop>
                  </linearGradient>
                  <mask id="sparkline-75957095" x="0" y="0" width="155" height="28">
                    <polyline transform="translate(0, 28) scale(1,-1)" points="0,1.0 3,1.0 6,1.0 9,1.0 12,1.0 15,1.0 18,1.0 21,1.0 24,1.0 27,1.0 30,1.0 33,1.0 36,1.0 39,1.0 42,1.0 45,1.0 48,1.0 51,1.0 54,1.0 57,1.0 60,1.0 63,1.0 66,1.0 69,1.0 72,1.0 75,1.0 78,1.0 81,1.0 84,1.0 87,1.0 90,1.0 93,1.0 96,1.0 99,1.0 102,1.0 105,1.0 108,1.0 111,1.0 114,1.0 117,1.0 120,1.0 123,1.0 126,1.0 129,15.42 132,12.88 135,5.24 138,6.09 141,7.79 144,1.85 147,29.0 150,13.73 153,9.48 " fill="transparent" stroke="#8cc665" stroke-width="2">
                    </polyline></mask>
                </defs>

                <g transform="translate(0, 2.0)">
                  <rect x="0" y="-2" width="155" height="30" style="stroke: none; fill: url(#gradient-75957095); mask: url(#sparkline-75957095)"></rect>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    mounted() {
      this.loaded = true;
    },
    data() {
      return {
        loaded: false,
        kpi: [
          {
            name: 'Items',
            value: 362113,
          },
          {
            name: 'Assets',
            value: 8536,
          },
          {
            name: 'Bins',
            value: 30127,
          },
          {
            name: 'Events',
            value: 30122,
          },
        ],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../variables';

  .dashboard {
    .cols {
      padding-left: $padding;
      padding-right: $padding;
      padding-top: $padding;
      & > .dashboard-block {
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  .dashboard-block {
    padding-right: $padding;
  }

  .dashboard-block__inner {
    padding: $padding;
    border: 1px solid $border-color;
  }

  .dashboard-block__title {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: $font-size-interface;
    text-transform: uppercase;
  }

  .dashboard-block__value {
    font-size: $font-size-interface;
  }
</style>
