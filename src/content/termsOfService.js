import { termsLaterSections } from './termsLaterSections.js'
import { company } from '../lib/company.js'

/** Terms of Service copy for the EcoBin app and website. */
export const termsOfService = {
  path: '/terms',
  title: 'Terms of Service',
  description:
    'The terms that apply when you use the EcoBin app, request a collection, or use ecobin.eco.',
  updated: '8 November 2026',
  intro: `These terms are an agreement between you and ${company.legalName}. They apply when you use the EcoBin app, request a collection, or use ${company.siteUrl}. The Privacy Policy explains how we handle personal information.`,
  sections: [
    {
      id: 'agreement',
      heading: 'Agreement',
      blocks: [
        {
          type: 'p',
          text: 'By creating an account or using EcoBin, you agree to these terms. If you do not agree, do not create an account and do not use the service.',
        },
      ],
    },
    {
      id: 'service',
      heading: 'The service',
      blocks: [
        {
          type: 'p',
          text: 'EcoBin helps households and organisations request waste collection, follow bin status, learn how to sort waste, and earn points for lessons in the app. Collection is available only in areas we cover. A request does not mean your area is served yet.',
        },
      ],
    },
    {
      id: 'account',
      heading: 'Your account',
      blocks: [
        {
          type: 'p',
          text: 'You sign in with your phone number or with Google. You must give your real name and, where you add them, a real email and Ghana Post address. You are responsible for activity on your account. Do not share the one-time code we send you. You need to be at least 18 to create an account.',
        },
      ],
    },
    {
      id: 'households',
      heading: 'Households',
      blocks: [
        {
          type: 'p',
          text: 'A household owner invites or approves members and is responsible for that household’s collection account. If other people are still members, the owner must transfer ownership or close the household before deleting their own account. Members must follow the household’s instructions for sorting and set-out.',
        },
      ],
    },
    {
      id: 'fees',
      heading: 'Pickups and fees',
      blocks: [
        {
          type: 'p',
          text: 'Fees depend on your location and the service you request. The app shows the fee before you confirm a paid request. You agree to pay the fee shown for a request you confirm. We may refuse or reschedule a pickup if access is blocked, the waste is unsafe, or the address is outside the area we cover.',
        },
      ],
    },
    {
      id: 'payments',
      heading: 'Payments',
      blocks: [
        {
          type: 'p',
          text: 'Paid requests are charged in Ghana cedis through Paystack. You authorise Paystack to charge the method you choose. EcoBin records the amount, status, and reference. A failed payment leaves the request unpaid until you pay again.',
        },
      ],
    },
    ...termsLaterSections,
  ],
}
