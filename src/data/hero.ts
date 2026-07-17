export interface HeroData {
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
}

export const heroData: HeroData = {
  name: 'Jacopo Manenti',
  role: 'AI Engineer & Researcher',
  company: 'European Central Bank',
  location: 'Frankfurt, Germany',
  image: '/portrait.jpeg',
};