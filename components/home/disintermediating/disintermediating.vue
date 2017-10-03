<template>
  <illustrated-section class="disintermediating" dark>
    <h1 slot="title">Disintermediating human trade  and business</h1>
    <p slot="subtitle">
      It’s the first step towards a more fair, efficient world.
    </p>
    <p slot="emphasis">
      We believe decentralized organizations can solve the world’s worst
      problems. That's why we are building Aragon.
    </p>
    <p slot="content">
      Aragon lets you manage entire organizations using the blockchain. This
      makes Aragon organizations more efficient than their traditional
      counterparties. By making it possible for everyone in the world to
      organize, we are enabling the borderless, permissionless creation of
      value.
    </p>
    <img slot="illustration" src="./assets/illustration.svg" alt="" />
  </illustrated-section>
</template>

<script>
  import { illustratedSection } from '~/toolkit'
  export default {
    components: { illustratedSection }
  }
</script>

<style scoped>
  @import '../../../toolkit/src/shared-styles.css';
  .disintermediating {
    position: relative;
    z-index: 1;
    margin-top: -110px;
    background: var(--grey800) url('./assets/background.svg') no-repeat 50% 0;
  }
</style>
