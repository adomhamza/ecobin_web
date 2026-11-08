import { privacyLaterSections } from './privacyLaterSections.js'
import { company } from '../lib/company.js'

/** Privacy Policy copy for the EcoBin app and website. */
export const privacyPolicy = {
  path: '/privacy',
  title: 'Privacy Policy',
  description:
    'How ECOBIN LTD collects, uses, and deletes information in the EcoBin app and on ecobin.eco.',
  updated: '8 November 2026',
  intro: `This policy explains what ${company.legalName} (“EcoBin”, “we”) collects when you use the EcoBin app or ${company.siteUrl}, why we collect it, and how you can access or delete it.`,
  sections: [
    {
      id: 'who',
      heading: 'Who we are',
      blocks: [
        {
          type: 'p',
          text: `${company.legalName} is a waste-collection company registered in Accra, Ghana. This policy covers the EcoBin app on the App Store and Google Play, and the website at ${company.siteUrl}.`,
        },
      ],
    },
    {
      id: 'you-give',
      heading: 'Information you give us',
      blocks: [
        { type: 'p', text: 'Depending on how you use EcoBin, you may give us:' },
        {
          type: 'ul',
          items: [
            'Your phone number, so we can create your account and send a one-time sign-in code.',
            'Your first and last name.',
            'An email address, if you add one or sign in with Google.',
            'A Ghana Post digital address, if you add one for a household, organisation, or bin.',
            'Household or organisation details, including the name, address, and the people you invite or approve.',
            'Pickup requests, bin names, and the location text you enter for a bin.',
            'Your name, email, phone number, and message, if you use the contact form on this website.',
          ],
        },
      ],
    },
    {
      id: 'automatic',
      heading: 'Information collected as you use the app',
      blocks: [
        {
          type: 'ul',
          items: [
            'A sign-in identifier from phone verification or from Google, if you choose Google sign-in.',
            'A device token, if you allow notifications, so we can send pickup, bin, points, and household alerts.',
            'Points, lesson and quiz progress, and reward redemptions.',
            'The result of a payment you make: amount, currency, status, and payment reference.',
          ],
        },
        {
          type: 'p',
          text: 'Paystack processes card and mobile-money payments. EcoBin does not store your full card number or mobile-money PIN.',
        },
      ],
    },
    {
      id: 'camera',
      heading: 'Camera and photos',
      blocks: [
        {
          type: 'p',
          text: 'The waste scanner uses your camera, or a photo you choose, to suggest how to sort an item. Identification runs on your phone. We do not receive that photo. You can refuse camera and photo access and still use the rest of the app.',
        },
      ],
    },
    {
      id: 'location',
      heading: 'Location',
      blocks: [
        {
          type: 'p',
          text: 'The app does not ask for your phone’s GPS location. If you enter a Ghana Post digital address, we send that address to a GhanaPostGPS lookup service and store the address and the coordinates it returns, so we can place a household or bin for collection.',
        },
      ],
    },
    {
      id: 'use',
      heading: 'How we use information',
      blocks: [
        {
          type: 'ul',
          items: [
            'Create and secure your account.',
            'Run household membership, bin monitoring, and pickup requests.',
            'Send service notifications you have allowed.',
            'Take payment and keep a record of it.',
            'Run points and rewards.',
            'Reply to messages you send us.',
            'Protect the service from misuse and meet legal duties.',
          ],
        },
        { type: 'p', text: 'We do not sell your personal information.' },
      ],
    },
    ...privacyLaterSections,
  ],
}
