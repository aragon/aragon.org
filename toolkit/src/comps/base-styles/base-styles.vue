<script>
  export default {
    render() {
      return null
    }
  }
</script>

<style>
  @import url('../../shared-styles.css');
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-thin.woff2') format('woff2'),
      url('assets/overpass/overpass-thin.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-light.woff2') format('woff2'),
      url('assets/overpass/overpass-light.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-semibold.woff2') format('woff2'),
      url('assets/overpass/overpass-semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body,
  button,
  select,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    font-family: overpass, sans-serif;
    @apply --text-normal;
  }
  body,
  a,
  button,
  select,
  input {
    color: var(--grey600);
  }
  strong,
  b {
    font-weight: 600;
  }
  body,
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  body {
    background: #eef7f8;
  }
</style>
