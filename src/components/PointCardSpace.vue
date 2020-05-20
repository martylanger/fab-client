<template>
  <div class="col-2 point-card-space">
    <PointCard :pointCard="this.props.pointCard"/>
  </div>
</template>

<script>
import PointCard from "./PointCard.vue"

export default {
  name: "PointCardSpace",
  props: {
    space: {
      type: Number,
      required: true
    }
    pointCardId: {
      type: Number,
      required: false
    }
  }
}
</script>

<style>
.point-card-space {
  border: 5px solid #9C6EA4;
  border-radius: 10px;
}
/* use $zindex to place fabrics on the card */
</style>
