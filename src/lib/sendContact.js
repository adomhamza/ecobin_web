import emailjs from '@emailjs/browser'

export function sendContactMessage({ name, email, phone, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error('EmailJS is not configured'))
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: name.trim(),
      from_email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      reply_to: email.trim(),
    },
    { publicKey },
  )
}
