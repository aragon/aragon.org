<template>
  <component
    :is="visual ? 'div' : 'section'"
    :class="{ large }"
    class="section"
  >
    <div class="content">
      <slot />
    </div>
  </component>
</template>

<script>
  export default {
    props: {
      large: Boolean,
      visual: Boolean
    }
  }
</script>

<style scoped>
  @import '../../shared-styles.css';
  .content {
    margin: 0 auto;
    max-width: var(--cols10);
  }
  .large .content {
    max-width: var(--cols12);
  }
</style>
