import foodSvg from '../assets/food.svg'
import othersSvg from '../assets/others.svg'
import servicesSvg from '../assets/services.svg'
import transportSvg from '../assets/transport.svg'
import accomodationSvg from '../assets/accommodation.svg'

export const CATEGORIES = {
  food: {
    name: "Food",
    icon: foodSvg,
  },
  others: {
    name: "Others",
    icon: othersSvg,
  },
  services: {
    name: "Services",
    icon: servicesSvg,
  },
  transport: {
    name: "Transport",
    icon: transportSvg,
  },
  accomodation: {
    name: "Accommodation",
    icon: accomodationSvg,
  }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>