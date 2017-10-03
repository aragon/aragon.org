<template>
  <div>
    <unstoppable-organizations />
    <disintermediating />
    <logos-bar />
    <death-to-paperwork />
    <ready-to-try />
    <aragon-network />
  </div>
</template>

<script>
  import {
    aragonNetwork,
    deathToPaperwork,
    disintermediating,
    logosBar,
    readyToTry,
    unstoppableOrganizations
  } from '~/components/home'
  export default {
    components: {
      aragonNetwork,
      deathToPaperwork,
      disintermediating,
      logosBar,
      readyToTry,
      unstoppableOrganizations
    }
  }
</script>
