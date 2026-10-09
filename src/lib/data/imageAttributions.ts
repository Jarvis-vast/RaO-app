export interface ImageCredit {
  id: string;
  destination: string;
  title: string;
  author: string;
  sourceName: string;
  sourceUrl: string;
  licenseName: string;
  licenseUrl: string;
  modificationsNote?: string;
}

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    id: "kolhapur",
    destination: "Kolhapur",
    title: "Mahalakshmi temple, Kolhapur",
    author: "Public Domain (Wikimedia Commons)",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mahalakshmi_temple,_Kolhapur.jpg",
    licenseName: "Public Domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    modificationsNote: "Optimized web resolution crop.",
  },
  {
    id: "vaishno-devi",
    destination: "Vaishno Devi",
    title: "Shri Mata Vaishno Devi Bhawan, Katra Jammu & Kashmir INDIA",
    author: "KDhruv406",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_Mata_Vaishno_Devi_Bhawan,_Katra_Jammu_%26_Kashmir_INDIA.jpg",
    licenseName: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    modificationsNote: "Cropped to responsive header aspect ratio.",
  },
  {
    id: "coorg",
    destination: "Coorg",
    title: "Plantation road Coorg Karnataka",
    author: "Dcrjsr",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plantation_road_Coorg_Karnataka.jpg",
    licenseName: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    modificationsNote: "Cropped for card layout.",
  },
  {
    id: "hampi",
    destination: "Hampi",
    title: "Stone Chariot at Vitthala Temple, Hampi",
    author: "Basavaraj M",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hampi_Vitthala_Temple_3465.jpg",
    licenseName: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    modificationsNote: "Cropped for card layout under CC BY-SA 4.0 terms.",
  },
  {
    id: "gokarna",
    destination: "Gokarna",
    title: "Om beach Gokarna",
    author: "Axis of eran",
    sourceName: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Om_beach_Gokarna.JPG",
    licenseName: "CC0 1.0 (Public Domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    modificationsNote: "Web optimized resolution.",
  },
  {
    id: "ujjain",
    destination: "Ujjain",
    title: "Shri Mahakaleshwar Temple",
    author: "RaO Travel Agency (Om Bhagwat)",
    sourceName: "RaO Official Site",
    sourceUrl: "https://rao-ashy.vercel.app/",
    licenseName: "RaO Proprietary Asset",
    licenseUrl: "https://rao-ashy.vercel.app/terms",
    modificationsNote: "Original photography owned by RaO Travel Agency.",
  },
];
