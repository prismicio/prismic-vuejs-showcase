<template>
  <div id="app" v-if="layoutData">
    <default-layout :layout="layoutData">
      <router-view/>
    </default-layout>
  </div>
</template>

<script>

import DefaultLayout from './views/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout,
  },
  data: () => ({
    layoutData: null,
  }),
  async created() {
    const layout = await this.$prismic.client.getSingle('layout');
    this.layoutData = layout;
  },
};
</script>

<style src="./reset.scss" lang="scss"></style>

<style lang="scss">
.l-wrapper {
  max-width: 1190px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.wio-link {
  position: fixed;
  bottom: 30px;
  right: 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #121212;
  color: white;
  font-family: "Font Awesome 5 Free";
  font-size: 18px;
  font-style: normal;
  font-variant: normal;
  font-weight: 900;
  line-height: 1;
  text-rendering: auto;

  &::before {
    content: "\f303";
  }

  img {
    display: none;
  }
}

.a-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 32px;
  border: 1px solid #121212;
  border-radius: 2px;
  color: #121212;
  font-weight: 500;
  white-space: nowrap;
  transition-property: background-color, color;
  transition-duration: 150ms;

  &:hover {
    background-color: #121212;
    color: white;
  }
}

.a-button--filled {
  background-color: #121212;
  color: white;

  &:hover {
    background-color: white;
    color: #121212;
  }
}
</style>
