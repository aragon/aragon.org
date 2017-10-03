<template>
  <illustrated-section class="aragon-network" illustrationBefore>
    <h1 slot="title">The Aragon Network</h1>
    <p slot="subtitle">A digital jurisdiction.</p>
    <p slot="emphasis">
      The Aragon Network (AN) will be the first DAO whose goal is to act as a
      digital jurisdiction that makes it extremely easy and friendly for
      organizations, entrepreneurs and investors to operate.
    </p>
    <div slot="content">
      <p>
        Aragon organizations will be able to be seamlessly upgraded and solve
        human disputes using a decentralized court system.
      </p>
      <p>
        The Aragon Network has its own token, ANT, which will be used to govern
        every single aspect of its functioning.
      </p>
    </div>
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
  .aragon-network {
    background: var(--white);
  }
</style>
