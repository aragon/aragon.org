<template>
  <button class="button" :class="{ strong }">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      strong: Boolean
    }
  }
</script>

<style>
  @import '../../shared-styles.css';
  .button {
    position: relative;
    padding: 12px 25px;
    border-radius: 3px;
    color: var(--grey500);
    background: none;
    border: 0;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1px solid var(--grey500);
      opacity: 0.2;
      border-radius: 3px;
    }
    &.strong {
      color: var(--white);
      font-weight: 600;
      background-image: linear-gradient(
        130deg,
        var(--aragon),
        var(--aragonAlt)
      );
      &:after {
        display: none;
      }
    }
  }
</style>
