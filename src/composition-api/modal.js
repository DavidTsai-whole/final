import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref } from 'vue'

export function modal (modal) {
  const newModal = ref('')
  const openModal = () => {
    newModal.value.show()
  }
  const hideModal = () => {
    newModal.value.hide()
  }

  onMounted(() => {
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
