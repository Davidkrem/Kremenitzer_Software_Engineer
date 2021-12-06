import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'David Kremenitzer | Software Engineer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'David Kremenitzer',
  subtitle: `I'm a Software Engineer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Kremenitzer.JPG',
  paragraphOne: 'Voice-Over Artist turned Software Engineer',
  paragraphTwo: `You’ll soon know my code, but you’ve definitely heard my voice. For the past 25 years, I have been a professional commercial/voice-over actor with A3 Artists Agency. I was the voice of the 'bacon dog' in Purina's national commercials, the voice of Subway, and most recently dubbed Tom Holland's voice in post production ADR for his films.`,
  paragraphThree: 'I live in NYC',
  resume: 'https://drive.google.com/file/d/1mhBj9MkAwhuIDfbXP50x3hH_1IwqS8fH/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Blocks.png',
    title: 'Blocks',
    info: 'A globally encrypted file sharing platform',
    info2: ` Security in Blocks comes from the decentralized process through the Ethereum Blockchain. Through this process, your files will be safely stored in the IPFS (The InterPlanetary File System) utilizing Solidity Smart Contracts, into a unique hash password that can be shared via text, email or even by QR Code.`,
    url: 'coming soonn',
    repo: 'https://github.com/FullStack-Capstone-2109-KFT/Blocks',
  },
  {
    id: nanoid(),
    img: 'amazonClone.png',
    title: 'Amazon Clone',
    info: 'Cloned Amazon.com with full E-commerce functionality',
    info2:
      'React Router v6, React Hooks , React Context API and Cloud Functions with Serverless Architecture',
    url: 'https://clone-a85db.web.app/',
    repo: 'https://github.com/Davidkrem/amazon-clone',
  },
  {
    id: nanoid(),
    img: 'UniswapERC20.png',
    title: 'ERC-20 Token on the Ethereum Network',
    info: `This project contains a blockchain smart contract that was used to deploy a new cryptocurrency Token KREM, an (ERC-20) on the Ethereum network, and successfully traded through the crypto decentralized exchange Uniswap.`,
    info2: `Tested on The Kovan Network exploring smart contract patterns`,
    url: 'https://www.youtube.com/watch?v=9mvfxJ1pIr4',
    repo: 'https://github.com/Davidkrem/Krem-ERC-20',
  },
  {
    id: nanoid(),
    img: 'CoinbaseClone.png',
    title: 'Coinbase Clone',
    info: `Cloned Coinbase's UI using React Native`,
    info2: '',
    url: 'Coming Soon',
    repo: 'https://github.com/Davidkrem/coinbase-clone/tree/main/components', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'KremPortfolio.png',
    title: `Entertainment Portfolio`,
    info: `David Kremenitzer's Commercial/Voice-Over Portfolio Website`,
    info2: '',
    url: 'https://www.kremenitzer.com/',
    repo: 'https://github.com/Davidkrem/Kremenitzer.com', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kremenitzer',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dkremenitzer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Davidkrem',
    },
  ],
};

export const githubButtons = {
  isEnabled: true,
};
