<template>
    <div class="modal_overlay" @click.self="$emit('close')" role="dialog" aria-modal="true">
        <div class="modal_holder">
            <div class="modal_heading_holder inter font_size_xs">
                <span>&nbsp;Attention!</span>
                <button class="modal_close_button" @click="$emit('close')">&times;</button>
            </div>
            <div class="modal_content_holder inter font_size_xs" v-html="errorMessage"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    errorMessage: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.modal_overlay {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1000;
}

.modal_holder {
    width: 90%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.modal_heading_holder {
    width: 100%;
    padding: 0.3rem;
    background-color: #87bfba;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal_close_button {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    transition: transform 0.2s ease, color 0.2s ease;
}

.modal_content_holder {
    width: 80%;
    padding: 1rem;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-word;
}
</style>