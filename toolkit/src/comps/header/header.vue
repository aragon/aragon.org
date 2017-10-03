<template>
  <div class="header">
    <div class="header__in">
      <div>
        <a href="/" class="header__logo">
          <img alt="Aragon" src="./assets/logo.svg" v-once />
        </a>
        <nav class="header__nav">
          <ul>
            <li v-for="item in menuItems">
              <a :href="item[0]" :class='{active: item[2]}'>
                {{item[1]}}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <agn-button>Try web version</agn-button>
        <agn-button strong>Download Aragon</agn-button>
      </div>
    </div>
  </div>
</template>

<script>
  import button from '../button/button'

  export default {
    components: {
      'agn-button': button
    },
    props: {
      menuItems: Array
    }
  }
</script>

<style>
  @import '../../shared-styles.css';
  .header {
    background: var(--white);
    & .button {
      margin-left: 10px;
    }
  }
  .header__in {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 70px;
    max-width: 1140px;
    margin: 0 auto;
  }
  .header__in > div {
    display: flex;
    align-items: center;
  }
  .header__in > div:first-child {
    align-items: stretch;
  }
  .header__logo {
    display: flex;
    align-items: center;
  }
  .header__logo img {
    height: 50px;
  }
  .header__nav {
    display: flex;
    align-items: stretch;
    & ul {
      display: flex;
      align-items: stretch;
      list-style: none;
      margin-left: 30px;
    }
    & li {
      display: flex;
      align-items: stretch;
    }
    & a {
      display: flex;
      align-items: center;
      padding: 0 30px;
      text-decoration: none;
      font-size: 15px;
      color: var(--grey500);
      &.active {
        color: var(--turquoise);
      }
    }
  }
</style>
