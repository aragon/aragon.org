<script>
  export default {
    render() {
      return null
    }
  }
</script>

<style>
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
  :root {
    --mainColor: red;
  }
  body {
    background: #eef7f8;
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
  h6 {
    font-family: overpass, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
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
</style>
