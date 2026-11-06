export const faqItems = [
  {
    question: 'Where do you operate?',
    paragraphs: [
      'EcoBin is a Ghana-focused waste management service currently developing its operations and expanding into selected communities. We are starting with selected areas and plan to expand as our services grow. Contact us or download the app to confirm whether your location is currently covered.',
    ],
  },
  {
    question: 'How much do you charge?',
    paragraphs: [
      'Our charges depend on your location, household needs and the waste collection service required. We aim to provide affordable and transparent pricing. Contact us or register your interest through the app to find out the available service options and applicable charges.',
    ],
  },
  {
    question: 'How does the service work?',
    paragraphs: ['Getting started with EcoBin is simple:'],
    steps: [
      'Register your household through the EcoBin app.',
      'Get access to the appropriate waste collection service.',
      'Separate recyclable materials from other household waste using the provided guidance.',
      'We monitor collection needs and arrange pickups when required.',
      'Your waste is collected and directed towards appropriate disposal or recovery channels.',
    ],
    closing:
      'Our goal is to make waste collection more convenient while encouraging responsible disposal and recycling.',
  },
  {
    question: 'How is payment done?',
    paragraphs: [
      'EcoBin aims to make payments convenient and transparent. Available payment options and applicable charges will be communicated during registration or displayed through the app. You will be able to keep track of your service and payment information.',
    ],
  },
  {
    question: 'Do you recycle?',
    paragraphs: [
      "Yes! Recycling and waste recovery are important parts of EcoBin's mission. We encourage households to separate recyclable materials such as plastics, paper, cardboard and metals so they can be recovered and processed where suitable facilities are available.",
      'We also aim to explore better ways of recovering value from other waste materials rather than sending everything to landfills. Our goal is to reduce waste and support a more circular economy.',
    ],
  },
  {
    question: 'Do I need to separate my waste before collection?',
    paragraphs: [
      'Yes, we encourage households to separate recyclable materials from other waste. This makes it easier to recover valuable materials, reduce the amount of waste sent to landfills and promote responsible waste management. EcoBin provides educational resources to help households understand what can and cannot be recycled.',
    ],
  },
]

export function faqAnswerText(item) {
  const steps = item.steps?.map((step, index) => `${index + 1}. ${step}`) ?? []
  return [...item.paragraphs, ...steps, item.closing].filter(Boolean).join(' ')
}
