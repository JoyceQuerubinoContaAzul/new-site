export interface BadgeData {
  text: string;
  icon?: string;
  iconAlt?: string;
}

export interface FeatureData {
  title: string;
  description: string;
  image: string;
  badges: BadgeData[];
}

export interface FeatureProps {
  data: FeatureData;
  reverse?: boolean;
}

export interface CardFeaturesProps {
  title: string;
  description: string;
  badges: BadgeData[];
  reverse?: boolean;
} 