<template>
  <div>
    <unstoppable-organizations />
    <disintermediating />
    <death-to-paperwork />
    <aragon-network />
  </div>
</template>

<script>
  import unstoppableOrganizations from '~/components/home/unstoppable-organizations'
  import disintermediating from '~/components/home/disintermediating'
  import deathToPaperwork from '~/components/home/death-to-paperwork'
  import aragonNetwork from '~/components/home/aragon-network'
  export default {
    components: {
      unstoppableOrganizations,
      disintermediating,
      deathToPaperwork,
      aragonNetwork
    }
  }
</script>
