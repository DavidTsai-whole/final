import Swal from 'sweetalert2'
export function sweetalert2 (res) {
  if (res.data.success) {
    Swal.fire({
      icon: 'success',
      title: res.data.message,
      confirmButtonText: '了解'
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: res.data.message,
      confirmButtonText: '了解'
    })
  }
}
export function sweetalert (res) {
  Swal.fire({
    icon: 'success',
    title: res,
    confirmButtonText: '了解'
  })
}
