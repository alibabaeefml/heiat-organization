<template>
  <router-link
    :to="{ name: route_name }"
    :class="{
      'nav-item': true,
      'd-flex': true,
      'flex-column': true,
      'align-center': true,
      active: active,
    }"
  >
    <div class="icon">
      <slot></slot>
    </div>
    <p>{{ name }}</p>
  </router-link>
</template>

<script setup>
const props = defineProps(["name", "route_name", "active"]);
</script>

<style scoped>
.nav-item{
    color:var(--primary);
    fill:var(--primary);
    text-decoration: none;
    transition: .3s;
}
.nav-item:hover,
.nav-item.active {
    color: var(--secondary-2);
    fill: var(--secondary-2);
    border-bottom: 3px solid var(--secondary-2);
}
</style>
