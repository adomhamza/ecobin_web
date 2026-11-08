/** Later Privacy Policy sections, split so each file stays readable. */
export const privacyLaterSections = [
  {
    id: 'share',
    heading: 'Who we share it with',
    blocks: [
      {
        type: 'ul',
        items: [
          'Google Firebase, to sign you in and deliver push notifications.',
          'Google, if you choose Google sign-in.',
          'Our SMS provider, to send the one-time sign-in code.',
          'Paystack, when you pay.',
          'A GhanaPostGPS lookup service, when you submit a digital address.',
          'EmailJS, to deliver website contact-form messages to us.',
          'YouTube, when you play an educational video. Playback follows YouTube’s own terms and privacy policy.',
          'Other members of your household, for membership and pickup status needed to run that household.',
          'Authorities, when the law requires it.',
        ],
      },
      {
        type: 'p',
        text: 'Service providers may use the information only to do the work we ask them to do.',
      },
    ],
  },
  {
    id: 'keep',
    heading: 'How long we keep it',
    blocks: [
      {
        type: 'p',
        text: 'We keep account information while your account is open. After you delete the account, we delete your login, profile, notification token, points balance, and household membership. We may keep pickup, payment, and redemption records for as long as we need them to operate collection, resolve a dispute, prevent fraud, or meet a legal duty. Those records are no longer used to run your account.',
      },
      {
        type: 'p',
        text: 'Messages sent through the website are kept long enough to reply and to keep a record of the conversation.',
      },
    ],
  },
  {
    id: 'delete',
    heading: 'Delete your account',
    blocks: [
      { type: 'p', text: 'You can delete your account in the app:' },
      {
        type: 'ol',
        items: [
          'Open EcoBin and sign in.',
          'Open Profile, then Settings.',
          'Choose Delete account and confirm.',
        ],
      },
      {
        type: 'p',
        text: 'If you own a household that still has other members, transfer ownership or close the household first. You can also email us from the phone number or email on the account and ask us to delete it.',
      },
    ],
  },
  {
    id: 'choices',
    heading: 'Your choices',
    blocks: [
      {
        type: 'p',
        text: 'You can update your name, email, and address in the app. You can turn notifications off in your phone settings, and you can refuse camera and photo access. You can ask us to access or correct the personal information we hold. You may also contact the Data Protection Commission of Ghana.',
      },
    ],
  },
  {
    id: 'children',
    heading: 'Children',
    blocks: [
      {
        type: 'p',
        text: 'EcoBin is a household waste service. It is not directed at children under 13. You need to be at least 18 to create an account.',
      },
    ],
  },
  {
    id: 'security',
    heading: 'Security',
    blocks: [
      {
        type: 'p',
        text: 'We sign you in through Firebase and transmit account data over encrypted connections. No method of storage or transmission is completely secure.',
      },
    ],
  },
  {
    id: 'changes',
    heading: 'Changes',
    blocks: [
      {
        type: 'p',
        text: 'We will post any update on this page and change the date above. If a change is significant, we will also tell you in the app, or through the contact details on your account, when we can.',
      },
    ],
  },
]
