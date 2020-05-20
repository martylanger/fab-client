<template>
  <div class="col-2 point-card-space">
    <h2>{{ this.points }}</h2>
    <h6>{{ this.pointCard }}</h6>
  </div>
</template>

<script>

export default {
  name: "PointCardSpace",
  props: {
    space: {
      type: String,
      required: true
    },
    pointCard: {
      type: Array,
      required: false
    }
  },
  computed: {
    points: function () {
      return this.pointCard.reduce((a,b) => a + b, 0)
    }
  }
}
</script>

<style>
.point-card-space {
  border: 5px solid #9C6EA4;
  border-radius: 10px;
  height: 120px;
}
/* use $zindex to place fabrics on the card */
</style>
