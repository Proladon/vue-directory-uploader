<template>
  <DirectoryUploader id="test" 
    :drop="false" 
    :origineEvent="false"/>
</template>

<script>
import DirectoryUploader from './components/DirectoryUploader.vue'

export default {
  name: 'App',
  components: {
    DirectoryUploader,
  },

  setup(){
    //   const getdata = (data) => {}

      return{
        //   getdata
      }
  }
}
</script>

<style>


</style>
