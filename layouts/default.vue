<template>
  <div>
    <base-styles />
    <ag-header :menuItems="menuItems" />
    <nuxt />
    <pre-footer />
  </div>
</template>

<script>
  import { header as agHeader, baseStyles } from '~/toolkit'
  import preFooter from '~/components/pre-footer/pre-footer'
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
      agHeader, baseStyles, preFooter
    }
  }
</script>
