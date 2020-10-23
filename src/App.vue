<template>
  <DirectoryUploader id="test" :drop="true" />
</template>

<script>
import DirectoryUploader from './components/DirectoryUploader.vue'

export default {
  name: 'App',
  components: {
    DirectoryUploader,
  }
}
</script>

<style>
@import './assets/css/style.css';

</style>
