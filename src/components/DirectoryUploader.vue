<template>
    <!-- Input -->
    <label
        v-if="!drop"
        :for="id"
        class="d-uploader-label"
        :class="{'label-base-style': !cleanStyle}"
        ref="inputloader"
    >
        {{ text }}
    </label>

    <input
        v-if="!drop"
        class="directory-uploader"
        webkitdirectory
        directory
        :id="id"
        :name="id"
        type="file"
        @change="upload"
    />

    <!-- Drop -->
    <div
        v-if="drop"
        class="drop-directory-uploader "
        :class="{'drop-base-style': !cleanStyle}"
        :id="id"
        @dragenter.prevent="dragenter"
        @dragover.prevent="dragover"
        @dragleave.prevent="dragleave"
        @drop="dropload"
        ref="droploader"
    >
        <p>{{ text }}</p>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    name: "",
    emits: ["loaded"],
    props: {
        id: {
            type: String,
            required: true,
        },

        text: {
            type: String,
            default: "Upload Directory",
        },

        style: {
            type: String,
            default: "light",
        },

        drop: {
            type: Boolean,
            default: false,
        },

        cleanStyle: {
            type: Boolean,
            default: false,
        },

        width: {
            type: Number,
        },
        height: {
            type: Number,
        },

        origineEvent: {
            type: Boolean,
            default: false
        }
    },

    setup(props, { emit }) {
        const inputloader = ref(null)
        const droploader = ref(null)
        onMounted(()=>{

            // Initialize geometry
            
            if (props.drop){
                // drop
                if(props.width) droploader.value.style.width = props.width + 'px'
                if(props.height) droploader.value.style.height = props.width + 'px'
            }
            else{
                // input
                if(props.width) inputloader.value.style.width = props.width + 'px'
                if(props.height) inputloader.value.style.height = props.width + 'px'
            }
        })

        const upload = (e) => {
            if (props.origineEvent){
                emit("loaded", e);
            }
            else{
                const data = {
                    files: e.target.files,
                    counts: e.target.files.length,
                    target: e.target,
                }
                emit("loaded", data)
            }
            e.target.value = null;
        };

        const dragenter = (e) => {emit("dragenter", e)};
        const dragleave = (e) => {emit("dragleave", e)};
        const dragover = (e) => {emit("dragover", e)};


        const dropload = (e) => {
            const items = e.dataTransfer.items
            if(!items) return

            if (props.origineEvent){
                emit("loaded", e);
            }
            else{
                let files = []
                for (let i of items){
                    files.push(i.getAsFile())
                }
                emit("loaded", files);
            }
        };

        return {
            upload,
            dragenter,
            dragover,
            dragleave,
            dropload,
            inputloader,
            droploader,
        };
    },
};
</script>

<style lang="scss">

.label-base-style{
    cursor: pointer;
    padding: 5px;
    color: lightslategray;
    border: solid 2px lightslategray;
}

.drop-base-style{
    text-align: center;
    width: 200px;
    height: 200px;
    border: dashed 2px lightslategray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.directory-uploader {
    display: none;
}

</style>
