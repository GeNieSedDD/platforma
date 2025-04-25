// module/script/usePopup.js
import { ref } from 'vue'

const visible = ref(false)
const type = ref('success')
const heading = ref('')
const message = ref('')

export function usePopup() {
  return { visible, type, heading, message }
}

export function popup(newType, newHeading, newMessage) {
  type.value = newType
  heading.value = newHeading
  message.value = newMessage
  visible.value = true

  // Автоматически скрываем через 2 секунды
  setTimeout(() => {
    visible.value = false
  }, 2000)
}