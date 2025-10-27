import { Announcement, DashboardSnapshot, LeaderboardEntry, OrganisingUnit, RegistrationWindow, SponsorGroup } from './types';

export const hackathonStats = {
  institutes: 24,
  teams: 96,
  participants: 480,
  problemStatements: 18,
  mentors: 42,
  prizePool: '₹15,00,000'
};

export const sponsorGroups: SponsorGroup[] = [
  {
    tier: 'Tier 1',
    sponsors: [
      {
        name: 'Galactic Labs',
        logo: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Quantum-grade compute for explorers'
      },
      {
        name: 'NeonPay',
        logo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Trustless payments for the metacity'
      }
    ]
  },
  {
    tier: 'Tier 2',
    sponsors: [
      {
        name: 'Aether Networks',
        logo: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Edge connectivity across the stratosphere'
      },
      {
        name: 'Retrobyte',
        logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Synthwave developer tooling'
      },
      {
        name: 'Helix Hardware',
        logo: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Modular robotics and sensor kits'
      }
    ]
  },
  {
    tier: 'Community',
    sponsors: [
      {
        name: 'Open Source Federation',
        logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Community mentors and code credits'
      },
      {
        name: 'Design Dojo',
        logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=320&q=80',
        url: '#',
        tagline: 'Speculative design sprints'
      }
    ]
  }
];

export const roundOneLeaderboard: LeaderboardEntry[] = [
  { position: 1, team: 'Photon Pulse Delhi', institute: 'IIIT Delhi', score: 98, badge: 'Circuit Breaker' },
  { position: 2, team: 'Retro Rockets Manipur', institute: 'IIIT Manipur', score: 95, badge: 'Neon Surge' },
  { position: 3, team: 'Flux Foundry Kancheepuram', institute: 'IIITDM Kancheepuram', score: 92 },
  { position: 4, team: 'Neon Nomads Ranchi', institute: 'IIIT Ranchi', score: 90 }
];

export const roundTwoLeaderboard: LeaderboardEntry[] = [
  { position: 1, team: 'Photon Pulse Delhi', institute: 'IIIT Delhi', score: 97, badge: 'Top Circuit' },
  { position: 2, team: 'Flux Foundry Kancheepuram', institute: 'IIITDM Kancheepuram', score: 94 },
  { position: 3, team: 'Retro Rockets Lucknow', institute: 'IIIT Lucknow', score: 92 },
  { position: 4, team: 'Circuit Dreamers Surat', institute: 'IIIT Surat', score: 89 }
];

export const roundThreeLeaderboard: LeaderboardEntry[] = [
  { position: 1, team: 'Photon Pulse Delhi', institute: 'IIIT Delhi', score: 96, badge: 'Grand Champion' },
  { position: 2, team: 'Flux Foundry Kancheepuram', institute: 'IIITDM Kancheepuram', score: 93, badge: 'Quantum Runner-up' },
  { position: 3, team: 'Circuit Dreamers Vadodara', institute: 'IIIT Vadodara', score: 91 }
];

export const topProjects = [
  {
    title: 'Atmos Array',
    institute: 'IIIT Dharwad',
    description: 'A generative weather sentinel that ensures farmers receive hyperlocal microclimate signals every five minutes.',
    media: 'Holographic climate mesh simulation',
    team: 'Neon Nomads Dharwad'
  },
  {
    title: 'Ledger Lattice',
    institute: 'IIIT Lucknow',
    description: 'A compliance-first governance fabric with neon-clad dashboards and AI-driven grant nudges.',
    media: 'Interactive audit timeline',
    team: 'Retro Rockets Lucknow'
  },
  {
    title: 'Quantum Forge',
    institute: 'IIITDM Kancheepuram',
    description: 'Quantum-optimised cobot scheduling paired with a volumetric digital twin for operators.',
    media: 'Real-time factory twin viewport',
    team: 'Flux Foundry Kancheepuram'
  },
  {
    title: 'Luminous Transit Grid',
    institute: 'IIIT Delhi',
    description: 'Metropolitan crowd orchestration with AR overlays that keep commuters synced and stress-free.',
    media: 'AR commuter guidance reel',
    team: 'Photon Pulse Delhi'
  }
];

export const registrationWindows: RegistrationWindow[] = [
  {
    title: 'Qualifier Submissions',
    opens: '15 May 2024',
    closes: '05 June 2024',
    description: 'Submit your round-one prototype decks and 3-minute experience reels.',
    cta: 'Upload Prototype',
    link: '#'
  },
  {
    title: 'Mentor Sync Week',
    opens: '10 June 2024',
    closes: '17 June 2024',
    description: 'Schedule sprint clinics with design, tech, and policy mentors.',
    cta: 'Book Slots',
    link: '#'
  },
  {
    title: 'Finale Expo Registration',
    opens: '01 July 2024',
    closes: '07 July 2024',
    description: 'Confirm travel rosters, demo gear logistics, and campus access for round three.',
    cta: 'Confirm Delegation',
    link: '#'
  }
];

export const organisingUnits: OrganisingUnit[] = [
  {
    name: 'Mission Control',
    description: 'Core organisers orchestrating every sync, neon panel, and logistic grid.',
    leads: [
      {
        name: 'Niharika Das',
        role: 'Program Director',
        photo: 'https://i.pravatar.cc/180?img=31',
        email: 'mission.control@iiit-hackathon.in'
      },
      {
        name: 'Sudarshan Iyer',
        role: 'Operations Lead',
        photo: 'https://i.pravatar.cc/180?img=12',
        email: 'ops@iiit-hackathon.in'
      }
    ]
  },
  {
    name: 'Dev Strike Team',
    description: 'Rapid response engineers handling portal uptime, scoring engines, and data flows.',
    leads: [
      {
        name: 'Lavanya Gupta',
        role: 'Platform Engineer',
        photo: 'https://i.pravatar.cc/180?img=44',
        email: 'devstrike@iiit-hackathon.in'
      }
    ]
  },
  {
    name: 'Design Syndicate',
    description: 'Crafting the retro-futuristic brand, XR signage, and neon motion identity.',
    leads: [
      {
        name: 'Ritika Bose',
        role: 'Creative Director',
        photo: 'https://i.pravatar.cc/180?img=54',
        email: 'design@iiit-hackathon.in'
      },
      {
        name: 'Aditya Prakash',
        role: '3D Motion Lead',
        photo: 'https://i.pravatar.cc/180?img=22',
        email: 'motion@iiit-hackathon.in'
      }
    ]
  }
];

const announcementBase: Announcement[] = [
  {
    id: 'annc-01',
    title: 'Round Two Briefing Upload',
    time: '09:30 IST',
    content: 'Replay and annotated notes now available inside the mission console. Review before tonight’s checkpoint.',
    category: 'Event'
  },
  {
    id: 'annc-02',
    title: 'Hardware Lab Access',
    time: '10:15 IST',
    content: 'Flux Foundry squads can collect their robotics access tokens from Bay 04 between 14:00-16:00.',
    category: 'Logistics'
  },
  {
    id: 'annc-03',
    title: 'Data Lake Refresh',
    time: '11:45 IST',
    content: 'Synthetic transport datasets patched with anomaly overlays. Pull the new schema before streaming.',
    category: 'Tech'
  }
];

export const dashboardSnapshot: DashboardSnapshot = {
  activeRound: 'Round Two · Immersive Prototype Trials',
  rankingSummary: 'Photon Pulse Delhi maintains a 3-point lead while Flux Foundry and Retro Rockets close the gap with flawless mentor reviews.',
  announcements: announcementBase,
  helpDeskContacts: [
    {
      name: 'Sasha Fernandes',
      role: 'Mission Control',
      photo: 'https://i.pravatar.cc/160?img=63',
      phone: '+91-98111-24024',
      email: 'support@iiit-hackathon.in'
    },
    {
      name: 'Yuvraj Singh',
      role: 'On-ground Ops',
      photo: 'https://i.pravatar.cc/160?img=29',
      phone: '+91-98111-55340',
      email: 'opsdesk@iiit-hackathon.in'
    }
  ]
};
