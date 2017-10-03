<template>
  <component
    :is="visual? 'div' : 'section'"
    :class="{'section--large': large}"
    class="section"
  >
    <div class="section__in">
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

<style>
  @import '../../shared-styles.css';
  .section__in {
    margin: 0 auto;
    max-width: var(--cols10);
  }
  .section--large .section__in {
    max-width: var(--cols12);
  }
</style>
