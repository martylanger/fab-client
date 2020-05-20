<template>
  <div class="col-2 point-card-space">
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
  }
}
</script>

<style>
.point-card-space {
  border: 5px solid #9C6EA4;
  border-radius: 10px;
  height: auto;
}
/* use $zindex to place fabrics on the card */
</style>
