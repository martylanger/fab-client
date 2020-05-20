<template>
  <div class="player-name">
    <li>
      {{ player.name }}
      <button @click="$emit('remove', player.id)">
        X
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "PlayerName",
  props: {
    phase: {
      type: String,
      required: false
    },
    player: {
      type: Object,
      required: true
    }
  }
}
</script>
