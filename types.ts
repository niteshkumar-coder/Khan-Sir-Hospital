
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NewsItem {
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  image: string;
}
