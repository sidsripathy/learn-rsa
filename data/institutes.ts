import { Institute, Person, Team } from './types';

const baseInstitutes: Array<Pick<Institute, 'name' | 'shortName' | 'slug' | 'region' | 'summary' | 'coordinates'>> = [
  {
    name: 'Indian Institute of Information Technology Manipur',
    shortName: 'IIIT Manipur',
    slug: 'iiit-manipur',
    region: 'Imphal, Manipur',
    summary: 'Leading the eastern corridor with research in adaptive edge AI and resilient communication systems.',
    coordinates: { lat: 24.817, lng: 93.9368 }
  },
  {
    name: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior',
    shortName: 'IIIT Gwalior',
    slug: 'iiit-gwalior',
    region: 'Gwalior, Madhya Pradesh',
    summary: 'Pioneering cross-disciplinary innovation blending management, design, and high performance computing.',
    coordinates: { lat: 26.2183, lng: 78.1828 }
  },
  {
    name: 'Indian Institute of Information Technology Dharwad',
    shortName: 'IIIT Dharwad',
    slug: 'iiit-dharwad',
    region: 'Dharwad, Karnataka',
    summary: 'Driving western cluster smart mobility initiatives with deep learning and IoT telemetry expertise.',
    coordinates: { lat: 15.4589, lng: 75.0078 }
  },
  {
    name: 'Indian Institute of Information Technology Una',
    shortName: 'IIIT Una',
    slug: 'iiit-una',
    region: 'Una, Himachal Pradesh',
    summary: 'Focused on sustainable systems and quantum inspired optimisation for mountainous terrains.',
    coordinates: { lat: 31.4649, lng: 76.2708 }
  },
  {
    name: 'Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur',
    shortName: 'IIIT Naya Raipur',
    slug: 'iiit-naya-raipur',
    region: 'Naya Raipur, Chhattisgarh',
    summary: 'Synthesising tribal wisdom and modern design systems for inclusive digital experiences.',
    coordinates: { lat: 21.195, lng: 81.7398 }
  },
  {
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram',
    shortName: 'IIITDM Kancheepuram',
    slug: 'iiitdm-kancheepuram',
    region: 'Chennai, Tamil Nadu',
    summary: 'Where cyber-physical systems meet industrial design for next-gen manufacturing intelligence.',
    coordinates: { lat: 12.8239, lng: 80.045 }
  },
  {
    name: 'Indraprastha Institute of Information Technology Delhi',
    shortName: 'IIIT Delhi',
    slug: 'iiit-delhi',
    region: 'New Delhi, Delhi',
    summary: 'Redefining urban life with human-centered computing and large-scale data narratives.',
    coordinates: { lat: 28.7041, lng: 77.1025 }
  },
  {
    name: 'Indian Institute of Information Technology Ranchi',
    shortName: 'IIIT Ranchi',
    slug: 'iiit-ranchi',
    region: 'Ranchi, Jharkhand',
    summary: 'Building resilient rural-tech bridges with cloud-native platforms and sensing networks.',
    coordinates: { lat: 23.3441, lng: 85.3096 }
  },
  {
    name: 'Indian Institute of Information Technology Nagpur',
    shortName: 'IIIT Nagpur',
    slug: 'iiit-nagpur',
    region: 'Nagpur, Maharashtra',
    summary: 'Known for bio-inspired algorithms and ambient computing for citizen services.',
    coordinates: { lat: 21.1458, lng: 79.0882 }
  },
  {
    name: 'Indian Institute of Information Technology Vadodara - International Campus Diu',
    shortName: 'IIIT Vadodara - ICD',
    slug: 'iiit-vadodara-icd',
    region: 'Diu, Daman and Diu',
    summary: 'Experimenting with autonomous systems tuned for coastal smart-city deployments.',
    coordinates: { lat: 20.714, lng: 70.987 }
  },
  {
    name: 'Indian Institute of Information Technology Design and Manufacturing, Kurnool',
    shortName: 'IIITDM Kurnool',
    slug: 'iiitdm-kurnool',
    region: 'Kurnool, Andhra Pradesh',
    summary: 'Specialising in intelligent robotics, additive manufacturing, and rapid prototyping.',
    coordinates: { lat: 15.8281, lng: 78.0373 }
  },
  {
    name: 'Indian Institute of Information Technology Kalyani',
    shortName: 'IIIT Kalyani',
    slug: 'iiit-kalyani',
    region: 'Kalyani, West Bengal',
    summary: 'Transforming agritech with edge inferencing and federated learning pipelines.',
    coordinates: { lat: 22.975, lng: 88.4343 }
  },
  {
    name: 'International Institute of Information Technology, Bhubaneswar',
    shortName: 'IIIT Bhubaneswar',
    slug: 'iiit-bhubaneswar',
    region: 'Bhubaneswar, Odisha',
    summary: 'Crafting resilient civic-tech infrastructure for monsoon-intensive cities.',
    coordinates: { lat: 20.2961, lng: 85.8245 }
  },
  {
    name: 'Indian Institute of Information Technology Tiruchirappalli',
    shortName: 'IIIT Tiruchirappalli',
    slug: 'iiit-tiruchirappalli',
    region: 'Tiruchirappalli, Tamil Nadu',
    summary: 'Blending cultural heritage with AI-driven tourism and logistics experiences.',
    coordinates: { lat: 10.7905, lng: 78.7047 }
  },
  {
    name: 'Indian Institute of Information Technology Raichur',
    shortName: 'IIIT Raichur',
    slug: 'iiit-raichur',
    region: 'Raichur, Karnataka',
    summary: 'Accelerating smart irrigation and energy efficiency through adaptive analytics.',
    coordinates: { lat: 16.212, lng: 77.3439 }
  },
  {
    name: 'Indian Institute of Information Technology Lucknow',
    shortName: 'IIIT Lucknow',
    slug: 'iiit-lucknow',
    region: 'Lucknow, Uttar Pradesh',
    summary: 'Empowering fintech and governance with secure, scalable digital platforms.',
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    name: 'Indian Institute of Information Technology Allahabad',
    shortName: 'IIIT Allahabad',
    slug: 'iiit-allahabad',
    region: 'Prayagraj, Uttar Pradesh',
    summary: 'Renowned for computer vision breakthroughs and multi-sensory interaction design.',
    coordinates: { lat: 25.4358, lng: 81.8463 }
  },
  {
    name: 'Indian Institute of Information Technology Kottayam',
    shortName: 'IIIT Kottayam',
    slug: 'iiit-kottayam',
    region: 'Kottayam, Kerala',
    summary: 'Bringing marine technology insights and privacy-preserving AI to the hackathon.',
    coordinates: { lat: 9.5916, lng: 76.5222 }
  },
  {
    name: 'Indian Institute of Information Technology Vadodara',
    shortName: 'IIIT Vadodara',
    slug: 'iiit-vadodara',
    region: 'Vadodara, Gujarat',
    summary: 'Driving manufacturing intelligence and zero-trust cloud architectures.',
    coordinates: { lat: 22.3072, lng: 73.1812 }
  },
  {
    name: 'Indian Institute of Information Technology Kota',
    shortName: 'IIIT Kota',
    slug: 'iiit-kota',
    region: 'Kota, Rajasthan',
    summary: 'Bridging education-tech and immersive learning for aspirational cities.',
    coordinates: { lat: 25.2138, lng: 75.8648 }
  },
  {
    name: 'Indian Institute of Information Technology Sonepat',
    shortName: 'IIIT Sonepat',
    slug: 'iiit-sonepat',
    region: 'Sonepat, Haryana',
    summary: 'Known for blockchain-led governance pilots and smart campus automation.',
    coordinates: { lat: 28.9288, lng: 77.0913 }
  },
  {
    name: 'Indian Institute of Information Technology Bhopal',
    shortName: 'IIIT Bhopal',
    slug: 'iiit-bhopal',
    region: 'Bhopal, Madhya Pradesh',
    summary: 'Fusing green-tech and ML to reinvent resource planning for tier-2 cities.',
    coordinates: { lat: 23.2599, lng: 77.4126 }
  },
  {
    name: 'Indian Institute of Information Technology Bhagalpur',
    shortName: 'IIIT Bhagalpur',
    slug: 'iiit-bhagalpur',
    region: 'Bhagalpur, Bihar',
    summary: 'Championing riverine analytics and inclusive fintech enablement.',
    coordinates: { lat: 25.3476, lng: 86.982 }
  },
  {
    name: 'Indian Institute of Information Technology Agartala',
    shortName: 'IIIT Agartala',
    slug: 'iiit-agartala',
    region: 'Agartala, Tripura',
    summary: 'Focusing on cross-border commerce and multilingual computing for the northeast.',
    coordinates: { lat: 23.8315, lng: 91.2868 }
  },
  {
    name: 'Indian Institute of Information Technology Surat',
    shortName: 'IIIT Surat',
    slug: 'iiit-surat',
    region: 'Surat, Gujarat',
    summary: 'Delivering high-throughput analytics for textile and logistics ecosystems.',
    coordinates: { lat: 21.1702, lng: 72.8311 }
  }
];

const coordinatorNames = [
  'Dr. Sahana Iyer',
  'Prof. Arvind Kapoor',
  'Dr. Neha Kulkarni',
  'Prof. R. Meenakshi',
  'Dr. Faizal Rahman',
  'Prof. Priyanka Sharma',
  'Dr. Sameer Wagle',
  'Prof. Chitra Banerjee'
];

const spocNames = [
  'Ananya Patel',
  'Mohit Chandra',
  'Rhea Sen',
  'Vikram Saluja',
  'Ishita Menon',
  'Akash Verma',
  'Tanya Deshpande',
  'Karan Sinha'
];

const teamTemplates: Array<{
  teamBase: string;
  track: string;
  project: Team['project'];
  members: Omit<Person, 'photo'>[];
}> = [
  {
    teamBase: 'Photon Pulse',
    track: 'Smart Cities',
    project: {
      title: 'Luminous Transit Grid',
      problemStatement: 'Metro corridors require real-time passenger flow predictions to prevent congestion spikes during peak academic seasons.',
      description:
        'A predictive control system that fuses live IoT sensor data with commuter behaviour modelling to deliver adaptive scheduling and crowd guidance overlays.',
      techStack: ['Next.js', 'TensorFlow', 'WebGL', 'Azure Digital Twins'],
      highlights: ['91% accuracy on congestion spikes', 'Immersive AR overlays for commuters', 'Modular API for city dashboards']
    },
    members: [
      { name: 'Aarav Mishra', role: 'System Architect', tagline: 'Edge-first futurist' },
      { name: 'Dia Fernandes', role: 'XR Storyteller', tagline: 'Designs luminous journeys' },
      { name: 'Harsh Vardhan', role: 'ML Engineer', tagline: 'Predictive analytics lead' },
      { name: 'Saanvi Rao', role: 'Civic Liaison', tagline: 'Policy-compliant rollout' }
    ]
  },
  {
    teamBase: 'Circuit Syndicate',
    track: 'Health Tech',
    project: {
      title: 'PulseSync Telemetry',
      problemStatement: 'Rural clinics lack unified vital tracking, causing delayed escalations and inconsistent records.',
      description:
        'An offline-first health telemetry fabric that unifies biosignal capture, remote triage routing, and AI-based anomaly alerts for clinicians.',
      techStack: ['Next.js', 'Medblocks', 'Supabase', 'Rust WASM'],
      highlights: ['96% anomaly detection recall', 'Hybrid mesh sync protocol', 'FHIR-compliant data vaults']
    },
    members: [
      { name: 'Ibrahim Khan', role: 'Product Navigator', tagline: 'Interoperability evangelist' },
      { name: 'Meera Joseph', role: 'Clinical Analyst', tagline: 'Bridges care and code' },
      { name: 'Ritwik Bose', role: 'Platform Engineer', tagline: 'Writes resilient meshes' },
      { name: 'Gayatri Nand', role: 'UX Futurist', tagline: 'Empathy-led experience' }
    ]
  },
  {
    teamBase: 'Neon Nomads',
    track: 'Climate Tech',
    project: {
      title: 'Atmos Array',
      problemStatement: 'Rapidly shifting microclimates demand hyperlocal forecasts for agriculture and event planning.',
      description:
        'A mesh of nano weather sentinels paired with generative climate simulations to deliver 5-minute resolution forecasts and scenario planners.',
      techStack: ['Next.js', 'Python FastAPI', 'WebGPU', 'Redis Streams'],
      highlights: ['3.5km microclimate granularity', 'Scenario composer for planners', 'Self-healing sensor mesh']
    },
    members: [
      { name: 'Shruti Nair', role: 'Climate Scientist', tagline: 'Forecasting tomorrow' },
      { name: 'Kabir Joshi', role: 'Hardware Lead', tagline: 'Builds resilient rigs' },
      { name: 'Anushka Dey', role: 'Data Alchemist', tagline: 'Weaves generative sims' },
      { name: 'Pratik Shetty', role: 'Community Catalyst', tagline: 'Bootstraps local pilots' }
    ]
  },
  {
    teamBase: 'Retro Rockets',
    track: 'Fintech & Governance',
    project: {
      title: 'Ledger Lattice',
      problemStatement: 'City grants suffer from opacity and delayed audits, leading to fund misallocation.',
      description:
        'A verifiable grant orchestration layer with multi-stakeholder workflows, retro-style visualisations, and AI nudges for compliance.',
      techStack: ['Next.js', 'Hyperledger Besu', 'LangChain', 'D3.js'],
      highlights: ['Immutable audit trails', 'Persona-driven dashboards', 'Autonomous compliance nudges']
    },
    members: [
      { name: 'Raghav Kapoor', role: 'Ledger Engineer', tagline: 'Decentralises trust' },
      { name: 'Simran Kaur', role: 'Policy Strategist', tagline: 'Demystifies governance' },
      { name: 'Yashwant Pillai', role: 'Data Synthesist', tagline: 'Spots anomalies early' },
      { name: 'Anika Bose', role: 'Visual Futurist', tagline: 'Designs neon clarity' }
    ]
  },
  {
    teamBase: 'Flux Foundry',
    track: 'Industry 4.0',
    project: {
      title: 'Quantum Forge',
      problemStatement: 'Manufacturing lines cannot rapidly retune robotics for low-volume custom builds.',
      description:
        'A low-code robotics scheduler that leverages quantum annealing approximations to retask cobots within minutes.',
      techStack: ['Next.js', 'Python', 'Qiskit Runtime', 'Three.js'],
      highlights: ['12x faster retasking', 'Digital twin visual sandbox', 'Self-optimising tool paths']
    },
    members: [
      { name: 'Devika Menon', role: 'Robotics Wrangler', tagline: 'Orchestrates cobots' },
      { name: 'Siddharth Rao', role: 'Quantum Specialist', tagline: 'Solves on the edge' },
      { name: 'Ila Banerjee', role: 'Full-stack Engineer', tagline: 'Codes responsive UIs' },
      { name: 'Hriday Singh', role: 'Ops Sentinel', tagline: 'Keeps uptime maximal' }
    ]
  },
  {
    teamBase: 'Circuit Dreamers',
    track: 'Education & Inclusion',
    project: {
      title: 'Lumina Learn',
      problemStatement: 'Students struggle to access adaptive learning experiences across bandwidth tiers.',
      description:
        'An adaptive learning platform that procedurally generates lessons, avatars, and assessments tuned to device capability.',
      techStack: ['Next.js', 'Supabase', 'Three.js', 'OpenAI APIs'],
      highlights: ['Bandwidth-aware media streams', 'AI mentor companions', 'Curriculum analytics console']
    },
    members: [
      { name: 'Pooja Rathi', role: 'Learning Architect', tagline: 'Designs inclusive flows' },
      { name: 'Tarun Bedi', role: 'Backend Specialist', tagline: 'Builds resilient APIs' },
      { name: 'Nirali Shah', role: 'AI Engineer', tagline: 'Personalises content' },
      { name: 'Kunal Sharma', role: 'Experience Designer', tagline: 'Crafts holo-interfaces' }
    ]
  }
];

const teamCallsigns = ['Alpha', 'Beta', 'Gamma', 'Delta'];

export const institutes: Institute[] = baseInstitutes.map((inst, index) => {
  const coordinatorTemplate = coordinatorNames[index % coordinatorNames.length];
  const spocTemplate = spocNames[index % spocNames.length];

  const coordinator: Person = {
    name: coordinatorTemplate,
    role: 'Faculty Coordinator',
    photo: `https://i.pravatar.cc/240?img=${(index % 70) + 1}`,
    email: `${inst.slug.replace(/-/g, '.')}.faculty@iiit-hackathon.in`,
    phone: `+91-80${(index + 12).toString().padStart(2, '0')}-24${(index + 45).toString().padStart(2, '0')}`,
    tagline: 'Guiding retro-futuristic innovation'
  };

  const spoc: Person = {
    name: spocTemplate,
    role: 'Student Point of Contact',
    photo: `https://i.pravatar.cc/200?img=${((index + 17) % 70) + 1}`,
    email: `${inst.slug.replace(/-/g, '.')}.spoc@iiit-hackathon.in`,
    phone: `+91-90${(index + 4).toString().padStart(2, '0')}-61${(index + 28).toString().padStart(2, '0')}`,
    tagline: 'Your first responder for hackathon ops'
  };

  const shortSuffix = inst.shortName.split(' ').pop();

  const teams: Team[] = teamCallsigns.map((callsign, offset) => {
    const template = teamTemplates[(index * teamCallsigns.length + offset) % teamTemplates.length];

    return {
      name: `${template.teamBase} ${shortSuffix} ${callsign}`,
      track: template.track,
      round: (((index + offset) % 3) + 1) as 1 | 2 | 3,
      project: {
        ...template.project,
        title: `${template.project.title} · ${inst.shortName} ${callsign}`
      },
      members: template.members.map((member, memberIndex) => ({
        ...member,
        photo: `https://i.pravatar.cc/160?img=${(((index * teamCallsigns.length + offset) * 5 + memberIndex) % 70) + 1}`
      })),
      awards: (index + offset) % 5 === 0 ? ['Jury Spotlight'] : undefined
    };
  });

  return {
    ...inst,
    coordinates: inst.coordinates,
    coordinator,
    spoc,
    teams
  };
});
