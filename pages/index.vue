<template>
  <div>
    <unstoppable-organizations />
    <disintermediating />
    <death-to-paperwork />
    <ready-to-try />
    <aragon-network />
  </div>
</template>

<script>
  import {
    unstoppableOrganizations,
    disintermediating,
    deathToPaperwork,
    aragonNetwork,
    readyToTry
  } from '~/components/home'
  export default {
    components: {
      unstoppableOrganizations,
      disintermediating,
      deathToPaperwork,
      aragonNetwork,
      readyToTry
    }
  }
</script>
