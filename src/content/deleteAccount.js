import { company } from '../lib/company.js'

/**
 * Google Play “Delete account URL” page for the EcoBin app.
 * Steps and data retention are at the top so the page meets Play Console rules.
 */
export const deleteAccount = {
  path: '/delete-account',
  title: 'Delete your EcoBin account',
  description:
    'How to delete your EcoBin account and associated data, what ECOBIN LTD removes, and what may be kept.',
  updated: '8 November 2026',
  intro: `This page is for the EcoBin app published by ${company.legalName}. Use it to delete your EcoBin account and the personal data linked to that account.`,
  sections: [
    {
      id: 'steps',
      heading: 'How to delete your account in the EcoBin app',
      blocks: [
        {
          type: 'p',
          text: 'The fastest way is inside the EcoBin app:',
        },
        {
          type: 'ol',
          items: [
            'Open the EcoBin app and sign in.',
            'Open Profile.',
            'Open Settings.',
            'Tap Delete account.',
            'Confirm the deletion.',
          ],
        },
        {
          type: 'p',
          text: 'If you own a household that still has other members, transfer ownership or close the household before you delete the account. The app will tell you if that step is still needed.',
        },
      ],
    },
    {
      id: 'email',
      heading: 'Request deletion by email',
      blocks: [
        {
          type: 'p',
          text: `If you cannot use the app, email ${company.email} from the phone number or email address on the account. Put “Delete EcoBin account” in the subject line and include that phone number or email so we can find the account. We will delete the account within 30 days of verifying the request.`,
        },
      ],
    },
    {
      id: 'deleted',
      heading: 'Data we delete',
      blocks: [
        {
          type: 'p',
          text: 'When deletion finishes, we remove:',
        },
        {
          type: 'ul',
          items: [
            'Your EcoBin login and authentication account.',
            'Your profile: name, phone number, email, and Ghana Post digital address.',
            'Your device notification tokens.',
            'Your points balance and quest or challenge progress.',
            'Your household or organisation membership on that account.',
          ],
        },
        {
          type: 'p',
          text: 'Uninstalling EcoBin from your phone does not delete your account. Use the steps above.',
        },
      ],
    },
    {
      id: 'kept',
      heading: 'Data we may keep, and for how long',
      blocks: [
        {
          type: 'p',
          text: 'After your account is deleted, these records are no longer used to run your account. We may keep them for the periods below:',
        },
        {
          type: 'ul',
          items: [
            'Pickup history linked to the former account: kept for up to 24 months for collection operations, disputes, and fraud prevention.',
            'Payment records (amount, currency, status, and payment reference): kept for up to 7 years to meet accounting, tax, and dispute duties in Ghana. We do not keep your full card number or mobile-money PIN.',
            'Reward redemption records: kept for up to 24 months for fraud prevention and programme audits.',
          ],
        },
        {
          type: 'p',
          text: 'If a legal claim, investigation, or authority request is open when those periods end, we may keep the related records until that matter is closed.',
        },
      ],
    },
  ],
}
