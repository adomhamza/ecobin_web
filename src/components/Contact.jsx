import { useState } from 'react'
import { LuMapPin, LuPhone } from 'react-icons/lu'

const initial = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 9) errors.phone = 'Enter a valid phone number.'
  if (values.message.trim().length < 10) errors.message = 'Tell us a bit more in your message.'
  return errors
}

function Field({ id, label, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-slate-600">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-sm text-red-600">{error}</p> : null}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-ink outline-none placeholder:text-slate-400'

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 py-8 pb-16 sm:px-6">
        <p className="text-center text-slate-500">Still have a question</p>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          Let’s Get in touch
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex h-full flex-col rounded-[28px] bg-[#f4f6fb] p-8 sm:p-10">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">How to reach us?</h3>
            <ul className="mt-auto space-y-6 pt-16">
              <li>
                <a href="tel:+233559681654" className="flex items-center gap-4 text-slate-800">
                  <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                    <LuPhone className="size-5" aria-hidden="true" />
                  </span>
                  +233 55 968 1654
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Accra+Kasoa+Ghana"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-slate-800"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                    <LuMapPin className="size-5" aria-hidden="true" />
                  </span>
                  Accra, Kasoa
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] bg-[#f4f6fb] p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-72 flex-col justify-center">
                <h3 className="text-2xl font-bold">Message sent</h3>
                <p className="mt-3 max-w-md text-muted">
                  Thanks {values.name.trim().split(' ')[0]}. We will reply to {values.email.trim()}{' '}
                  from the EcoBin team in Accra.
                </p>
                <button
                  type="button"
                  className="mt-6 w-fit rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
                  onClick={() => {
                    setSent(false)
                    setValues(initial)
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <Field id="name" label="Full Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={update}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </Field>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field id="email" label="Email Address" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={update}
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </Field>
                  <Field id="phone" label="Phone Number" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={update}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <Field id="message" label="Message" error={errors.message} className="mt-4">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={values.message}
                    onChange={update}
                    placeholder="Type message"
                    className={inputClass}
                  />
                </Field>
                <button
                  type="submit"
                  className="mt-5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
