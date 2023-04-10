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

export interface Location {
  name: string;
  url: string;
}

export interface Update {
  title: string;
  content: string;
  date: string;
  img: string;
  link: string;
  linkText: string;
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
}