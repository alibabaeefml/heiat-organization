<template>
  <div class="position-relative">
    <img
      src="@/assets/images/subtitle-bg.png"
      style="object-fit: cover; width: 100%; height: 100%"
      alt=""
    />
    <div
      class="position-absolute h-100 flex-center overflow-hidden"
      style="top: 0; width: 90%; left: 5%"
    >
      <p class="subtitle-anim">to fetch subtitle from database</p>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
@keyframes anim {
  from {
    transform: translate(500px, 0);
  }
  to {
    transform: translate(-500px, 0);
  }
}
.subtitle-anim {
  animation: anim 15s infinite;
  animation-timing-function: linear;
}
</style>
