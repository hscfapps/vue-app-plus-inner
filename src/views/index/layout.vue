<template>
  <div class="about">
    <h1>源项目的index布局</h1>
    <router-link to="/index">index</router-link> |
    <router-link to="/index/foo">foo</router-link> |
    <router-link to="/index/bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
