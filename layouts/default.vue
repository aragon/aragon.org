<template>
  <div>
    <base-styles />
    <ag-header :menuItems="menuItems" />
    <nuxt />
  </div>
</template>

<script>
  import { header, baseStyles } from '~/toolkit'
  export default {
    data() {
      return {
        menuItems: [
          ['/core', 'Core'],
          ['/network', 'Network'],
          ['/foundation', 'Foundation'],
          ['/about', 'About'],
          ['/faq', 'FAQs'],
        ].map(item => [...item, item[0] === this.$route.path])
      }
    },
    components: {
      'ag-header': header,
      'base-styles': baseStyles
    }
  }
</script>
