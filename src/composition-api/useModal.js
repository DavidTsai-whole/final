import Modal from 'bootstrap/js/dist/modal'
import { ref, watch } from 'vue'

export function useModal (modal) {
  const newModal = ref('')

  const openModal = () => {
    newModal.value.show()
  }
  const hideModal = () => {
    newModal.value.hide()
  }

  watch(modal, () => {
    if (modal.value) {
      return
    }
    newModal.value = new Modal(modal)
  })
  return {
    openModal,
    hideModal
  }

  /* methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  } */
}
