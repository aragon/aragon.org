<template>
  <div>
    <unstoppable-organizations />
    <disintermediating />
    <death-to-paperwork />
    <digital-juridiction />
  </div>
</template>

<script>
  import unstoppableOrganizations from '~/components/home/unstoppable-organizations'
  import disintermediating from '~/components/home/disintermediating'
  import deathToPaperwork from '~/components/home/death-to-paperwork'
  import digitalJuridiction from '~/components/home/digital-juridiction'
  export default {
    components: {
      unstoppableOrganizations,
      disintermediating,
      deathToPaperwork,
      digitalJuridiction
    }
  }
</script>
