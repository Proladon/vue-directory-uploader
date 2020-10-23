<template>
    
    <!-- Input -->
    <label v-if="!drop"
        :for="id"
        class="d-uploader-label light"
    >
        {{ text }}
    </label>
    
    <input v-if="!drop"
        class="directory-uploader" 
        webkitdirectory directory
        :id="id"
        :name="id"
        type="file" 
        @change="upload"
    >
    
    <!-- Drop -->
    <div v-if="drop"
        class="drop-directory-uploader"
        :id="id"
        @dragenter.prevent="dragenter"
        @dragover.prevent="dragover"
        @drop="dropload"
    >
        {{ text }}
    </div>

</template>

<script>
   export default {
       name: '',
       props:{
           
           id: {
               type: String,
               required: true,
           },

           text:{
               type: String,
               default: 'Upload Directory'
           },

           style:{
               type: String,
               default: 'light'
           },

           drop: {
               type: Boolean,
               default: false
           },
            
           cleanStyle: {
               type: Boolean,
               default: false
           },
       },

       setup(){
           const upload = (e) =>{
               console.log("yes")
               e.target.value = null
           }

           const dragenter = () => {

           }

           const dragover = () => {

           }

           const dropload = (e) => {
               console.log(e)
               console.log("13")
           }

           return{
               upload,
               dragenter,
               dragover,
               dropload,
           }
       }
   }
</script>

<style scoped>

    .d-uploader-label{
    }
   .directory-uploader{
       display: none;
   }

   .drop-directory-uploader{
       height: 50px;
       background: palegreen;
   }
</style>