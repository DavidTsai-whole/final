<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">刪除 {{}}</h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>確定要刪除 {{}}?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="emit('update-delete', props.data.id)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import { ref } from '@vue/reactivity'
import { useModal } from '../composition-api' */
import modalMixin from '@/mixins/modal'
export default {
  props: ['data'],
  mixins: [modalMixin],
  setup (props, { emit }) {
    /* const modal = ref(null)
    useModal(modal.value) */
    return {
      props,
      emit
    }
  }

}
</script>
