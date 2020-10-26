import DirectoryUploader from './components/DirectoryUploader.vue'

export default {
    install(Vue) {
        Vue.component('directory-uploader', DirectoryUploader)
    }
}

export { DirectoryUploader }