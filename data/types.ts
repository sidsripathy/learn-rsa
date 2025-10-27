export type Person = {
  name: string;
  role: string;
  photo: string;
  email?: string;
  phone?: string;
  tagline?: string;
};

export type Project = {
  title: string;
  problemStatement: string;
  description: string;
  techStack: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type Team = {
  name: string;
  track: string;
  round: 1 | 2 | 3;
  project: Project;
  members: Person[];
  awards?: string[];
};

export type Institute = {
  name: string;
  shortName: string;
  slug: string;
  region: string;
  coordinator: Person;
  spoc: Person;
  teams: Team[];
  summary: string;
};

export type LeaderboardEntry = {
  position: number;
  team: string;
  institute: string;
  score: number;
  badge?: string;
};

export type SponsorGroup = {
  tier: 'Tier 1' | 'Tier 2' | 'Community' | 'In-kind';
  sponsors: {
    name: string;
    logo: string;
    url: string;
    tagline: string;
  }[];
};

export type Announcement = {
  id: string;
  title: string;
  time: string;
  content: string;
  category: 'Logistics' | 'Tech' | 'Event';
};

export type RegistrationWindow = {
  title: string;
  opens: string;
  closes: string;
  description: string;
  cta: string;
  link: string;
};

export type OrganisingUnit = {
  name: string;
  description: string;
  leads: Person[];
};

export type DashboardSnapshot = {
  activeRound: string;
  rankingSummary: string;
  announcements: Announcement[];
  helpDeskContacts: Person[];
};
