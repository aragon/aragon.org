<template>
  <illustrated-section class="death-to-paperwork" illustrationBefore>
    <h1 slot="title">Death to paperwork.</h1>
    <p slot="subtitle">Avoid useless intermediaries.</p>
    <p slot="emphasis">
      Aragon companies are powered by Ethereum, a blockchain global computing
      platform.
    </p>
    <div slot="content">
      <p>
        A blockchain is a distributed, append-only database hardened against
        tampering and revision that provides a single shared source of
        cryptographically verified truth. This ensures that your company will
        always work, even if a government or malicious third party tries to
        tamper with it.
      </p>

      <p>
        In Ethereum, code is immutable and everything is explicitly encoded. It
        is not up to random interpretation.
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
  .death-to-paperwork {
    background: var(--white);
  }
</style>
