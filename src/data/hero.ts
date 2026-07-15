export interface HeroData {
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
}

export const heroData: HeroData = {
  name: 'Jacopo Manenti',
  role: 'AI & ML Engineer',
  company: 'European Central Bank',
  location: 'Frankfurt, Germany',
  image: '/portrait.jpeg',
};