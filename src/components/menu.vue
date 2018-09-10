<template>
  <div class="menu">
    <template v-for="item in items">
      <a :href="item.url" class="menu__item">{{ item.title }}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      items: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'Portfolio',
          url: '/portfolio'
        },
        {
          title: 'Gallery',
          url: '/gallery'
        },
        {
          title: 'Team',
          url: '/team'
        },
        {
          title: 'Contacts',
          url: '/contacts'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
