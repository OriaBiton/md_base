export interface SiteConfig {
  title: string;
  location: Location;
  openingHours: WeeklyHours;
  communication: Communication;
  home: HomeConfig;
  municipality: Municipality;
  footer?: FooterOptions;
}

interface FooterOptions {
  waves?: boolean;
}

interface Location {
  address: string;
  geoName: number;
  navigationUrl: string;
}

interface Municipality {
  name: string;
  url: string;
}

interface Communication {
  phone: string;
  email: string;
  whatsapp?: string;
  youtube?: string;
  facebook?: string;
}

interface HomeConfig {
  updates: Update[];
  services: ServiceCard[];
}

export interface ServiceCard {
  name: 'דברי ברכה' | 'לשכת הרב' | 'כשרות' | 'נישואין' | 'קבורה ואבלות' | 'מקוואות' | 'עירוב שבת' | 'בתי כנסת' | 'זהות יהודית' | 'סת"ם' | 'מדיה' | 'מידע שימושי' | 'משרות ומכרזים' | 'לקהילה האתיופית';
  img: string;
  url: string;
}

type HourRange = [string, string] | [];
export type WeeklyHours = [HourRange[], HourRange[], HourRange[], HourRange[], HourRange[], HourRange[], HourRange[]];

export interface DepartmentContact {
  name: string;
  email: string;
  phone: string;
}

export interface MenuLink {
  name: string;
  to: string;
  external?: boolean;
  download?: string;
}

export interface DepartmentMember {
  name: string;
  position: string;
  phone: string;
}

export interface Navigation {
  name: string;
  url: string;
}

export interface Update {
  title: string;
  content: string;
  date: string;
  img: Image;
  link?: { href: string; text: string; }
}

interface Image {
  src: string;
  position?: string;
}

export interface Step {
  name: string;
  icon: string;
  color?: string;
}

export interface DepartmentWhatsapp {
  text: string;
  phone: string;
  img?: string;
}

export interface Mikve {
  name: string;
  img: string;
  operator: string;
  phone: string;
  address: string;
  navigation: string;
  hours?: string;
  notes?: string;
  men?: boolean;
  closedOnWeekdays?: boolean;
  closedOnShabbatEnd?: boolean;
}