export type ProjectCategory =
  | "featured"
  | "client-collab"
  | "prototype";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "paused"
  | "volunteer";

export type Project = {
  slug: string;

  title: string;

  category: ProjectCategory;
  status: ProjectStatus;

  platform: string;

  short_description: string;
  description: string;

  technologies?: string[];

  tools?: string[];

  points?: string[];

  videos?: {
    src: string;
    poster?: string;
  }[];

  images?: string[];

  github?: string;

  link?: string;
};

export const projects: Project[] = [
  // =========================================================
  // FEATURED PROJECTS
  // =========================================================

  {
    slug: "echoes-of-the-museum",

    title: "Echoes of the Museum",

    category: "featured",
    status: "completed",

    platform: "Unity · Desktop · VR (ongoing)",

    short_description:
      "Interactive museum experience blending environment storytelling, music and immersive exploration.",

    description: `
    Echoes of the Museum is an interactive virtual museum experience set in a vintage-inspired artistic environment.

    Players can freely explore the space, interact with artworks and objects, and uncover audiovisual narratives through sound and environmental storytelling.

    The project combines immersive exploration, music systems, cinematic sequences, and interactive art installations into a cohesive experience.

    Technical features include:
    - Object-oriented gameplay architecture
    - Centralized GameManager system
    - MIDI piano synchronization
    - Spatial audio interactions
    - Timeline cinematic sequences
    - Interactive object systems
    - UI built with Unity Canvas

    Future improvements include VR support, mobile adaptation, and advanced audio simulation systems.
    `,

    technologies: ["Unity", "C#", "Desktop", "VR"],

    tools: ["Unity", "C#", "DryWetMIDI Library"],

    points: [
      "Immersive exploration",
      "Audio-driven storytelling",
      "Interactive environment systems",
      "Cinematic sequencing",
    ],

    videos: [
      {
        src: "/videos/TraillerCutWithMusicCompressed.mp4",
        poster: "/imageCoverMuseum.png",
      },
    ],

    images: ["/imageCoverMuseum.png"],

    github: "https://github.com/Trophaigle/Museum",
  },

  {
    slug: "xr-weather-forecast-visualization-ar",

    title: "XR Weather Forecast Visualization",

    category: "featured",
    status: "completed",

    platform: "Unity · Augmented Reality · Meta Quest 3",

    short_description:
      "AR weather visualization experience using real-time forecast data and immersive environmental effects.",

    description: `
    Interactive XR application designed to visualize weather forecasts directly inside the user's environment.

    The project combines Unity AR, OpenWeatherMap APIs, Unity WebSocket and immersive visual effects to transform weather data into spatial augmented reality experiences.

    The experience focuses on intuitive environmental visualization and real-time interaction systems for XR devices.
    `,
    /*Real-time AR weather visualization system developed in Unity XR with Python backend integration and immersive interactive data visualization.
Integrated OpenMeteo API data through a Python FastAPI backend with real-time WebSocket communication.
Designed interactive XR histogram visualizations with responsive hand-tracking interactions and immersive weather feedback.
Optimized real-time rendering, data streaming, and visual effects for performant cross-platform XR experiences. */

    technologies: ["Unity", "XR", "AR", "Meta Quest 3"],

    tools: [
      "Unity",
      "C#",
      "FastAPI (Python)",
      "OpenWeatherMap API",
      "Meta Quest 3",
    ],

    videos: [
      {
        src: "/videos/WeatherXRDemo.mp4",
        poster: "/WeatherXR/CoverImageDemo.png",
      },
      {
        src: "/videos/WeatherXRTechBreakdown.mp4",
        poster: "/WeatherXR/CoverImageTechnicalBreakdown.png",
      },
    ],

    images: ["/WeatherXR/weatherXRImage.png"],

    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
    github:" https://github.com/Trophaigle/MR_Data_Display"
  },

  {
    slug: "ue5-top-down-shooter",

    title: "UE5 Top Down Shooter",

    category: "featured",
    status: "completed",

    platform: "Unreal Engine 5 · Desktop",

    short_description:
      "Gameplay-focused Unreal Engine 5 prototype exploring Blueprint architecture, combat systems and level design.",

    description: `
    Unreal Engine 5 prototype developed to explore production workflows, gameplay systems, and Blueprint architecture.

    The project includes:
    - Top down combat systems
    - AI interactions
    - UI implementation
    - Input management
    - Camera systems
    - Gameplay architecture
    - Level design workflows

    This project also reflects the transition from Unity to Unreal Engine and a deeper understanding of Unreal production pipelines.
    `,

    technologies: ["Unreal Engine 5", "Blueprints", "Gameplay Systems"],

    tools: ["Unreal Engine 5", "Blueprints"],

    videos: [
      {
        src: "/videos/TopDownShooterFormationTrailer.mp4",
        poster: "/TopDownShooterTrailerImage.png",
      },
    ],

    images: ["/TopDownShooterTrailerImage.png"],

    github: "https://github.com/Trophaigle/TopDownShooterFormationUE",

    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
{
  slug: "ar-peephole-diorama",

  title: "AR Peephole Diorama",

  category: "featured",
  status: "completed",

  platform: "Unity · AR · Meta Quest 3",

  short_description:
    "Research-oriented AR project exploring remote collaboration through spatial diorama interaction.",

  description: `
End-of-studies XR research project developed during an internship at the Institut de Recherche en Informatique de Toulouse (IRIT).

Exploration of remote collaborative workspaces through augmented reality peephole interactions, enabling users to observe and interact with a distant virtual workspace in real time.

Development of a targeted spatial representation of the remote environment including:
  - Virtual screens
  - User avatars
  - Gesture visualization
  - Shared spatial interactions

Design of an interactive diorama system used to control the visibility and occlusion of remote virtual elements inside the user’s field of view.

The diorama acts as a spatial filtering interface, improving readability, focus, and spatial perception in collaborative AR environments.

Implementation of a client-server architecture using Unity Netcode:
  - Clients connect to a centralized server
  - Virtual workspace elements and diorama states are generated server-side
  - Synchronization and interaction updates are distributed through Unity RPCs

Research topics addressed by the project:
  - Spatial perception in mixed reality
  - Remote collaboration and presence
  - Immersive interaction design
  - Distributed XR systems
  `,

  technologies: ["Unity", "AR", "Research", "Networking"],

  tools: [
    "Unity",
    "Netcode for GameObjects",
    "C#",
    "Meta Interaction Toolkit",
    "Meta Quest 3",
  ],

  images: ["/diorama.jpg"],
  videos: [
    {
      src: "/videos/VirtualisationEcranDiorama.mp4"
    },
    {
      src: "/videos/controlsVideoDiorama.mp4"
    }
  ],

  link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
},

  // =========================================================
  // CLIENT & COLLABORATIVE WORK
  // =========================================================
{
  slug: "risk-prevention-escape-game",

  title: "Risk Prevention Escape Game",

  category: "client-collab",
  status: "paused",

  platform: "Unity · NextJS · Desktop (prototype exploration)",

  short_description:
    "Digitalisation of a pedagogical escape game focused on professional risk prevention, blending serious gameplay with immersive and playful learning.",

  description: `
This project is an ongoing collaboration with a risk prevention agency aiming to transform a physical educational escape game into a digital interactive experience.

The core objective is to preserve the original pedagogical intent while enhancing engagement through immersive gameplay, interactivity, and narrative-driven puzzle design.

The experience is structured around a sequence of puzzles and interactive challenges that teach workplace risk awareness in a playful, fluid and immersive way.

Several technical directions are currently being explored:
- Unity-based 3D interactive version
- Web-based interactive prototype (WebGL / browser experience)

My current contribution includes research and development of early prototypes:
- Unity prototype exploring gameplay systems and interaction design
- Web-based prototype awaiting client feedback (currently on hold)

The project is currently paused by the client, pending review and validation of the web prototype direction.
  `,

  technologies: [
    "Unity",
    "Web Development",
    "Serious Game",
    "Interactive Learning",
    "WebGL",
  ],

  tools: ["Unity", "NextJS", "WebGL"],

  images: ["/escapeGameScreenShot.png"],

  link:
    "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
},
{
  slug: "eventokenx",

  title: "EventokenX",

  category: "client-collab",
  status: "volunteer",

  platform: "Unity · Next.js · Full-stack (WIP)",

  short_description:
    "Volunteer hybrid project combining a social platform and a connected game where real-world interactions influence digital progression.",

  description: `
EventokenX is a volunteer project exploring the connection between real-world social activity and interactive digital experiences.

The goal is to design a hybrid ecosystem combining a social application and a connected game, where user engagement outside the game can influence in-game progression in a meaningful and playful way.

The project is currently in an early POC and structuring phase, focusing on core systems, feasibility, and overall user experience direction.

My contribution is centered around Unity development and gameplay experimentation, as part of a collaborative team exploring the concept from both technical and design perspectives.

The long-term vision is to create a unified experience linking social interaction and gameplay in a seamless and engaging way.
  `,

  technologies: [
    "Unity",
    "Next.js",
    "Full-stack Concept",
    "Interactive Systems",
  ],

  tools: ["Unity", "Next.js", "C#"],

  images: [],

  points: [
    "Hybrid game + social platform concept",
    "Real-world interaction driven progression (conceptual)",
    "Early-stage prototype (POC)",
    "Collaborative volunteer project",
  ],
},


  // =========================================================
  // PROTOTYPES & EXPERIMENTS
  // =========================================================
  {
    slug: "risk-awareness-training-module",

    title: "Risk Awareness Training Module",

    category: "prototype",
    status: "completed",

    platform: "Unity · Desktop · WebGL · Mobile",

    short_description:
      "Interactive 3D serious game focused on identifying and mitigating workplace risks.",

    description: `
    Interactive training experience designed to improve risk identification and prevention inside simulated environments.

    The project focuses on user interaction, educational gameplay systems, and accessible deployment across multiple platforms.
    `,

    technologies: ["Unity", "Serious Game", "WebGL", "Mobile"],

    tools: ["Unity", "C#"],

    images: ["/image2.png"],

    link:
      "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
  },
  {
    slug: "safepath-risk-assessment-prototype",

    title: "SafePath Risk Assessment",

    category: "prototype",
    status: "completed",

    platform: "Unity · Desktop · WebGL · Mobile",

    short_description:
      "Gameplay-oriented prototype mixing racing mechanics and risk identification systems.",

    description: `
    Experimental serious game prototype where players identify and mitigate risks while navigating dynamic environments.

    The project explores gameplay pacing, educational interaction systems, and modular architecture patterns.
    `,

    technologies: ["Unity", "Gameplay Prototype"],

    tools: [
      "Unity",
      "C#",
      "Cinemachine",
      "Scriptable Objects",
    ],

    images: ["/image.png"],

    link:
      "https://play.unity.com/fr/games/4685d6a6-a22f-4fe2-bf0d-d94da52bf4b2/safepath-risk-assessment-proto",
  },

  {
    slug: "northern-lights-vr",

    title: "Northern Lights VR",

    category: "prototype",
    status: "completed",

    platform: "Unity · VR",

    short_description:
      "Visual VR experiment recreating dynamic northern lights using shaders and procedural animation.",

    description: `
    Experimental VR visual experience focused on atmospheric rendering, shader-based animation, and immersive environmental effects.

    Developed using Unity Shader Graph and custom animated visual systems.
    `,

    technologies: ["Unity", "VR", "Shaders"],

    tools: [
      "Unity",
      "C#",
      "Shader Graph",
      "Blender",
      "Meta Quest 3",
    ],

    videos: [
      {
        src: "/videos/NorthernLights.mp4",
        poster: "/NorthernLights.jpg",
      },
    ],

    images: ["/NorthernLights.jpg"],

    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },

  {
    slug: "training-project-2-unreal-engine",

    title: "Unreal Engine Gameplay Experiments",

    category: "prototype",
    status: "completed",

    platform: "Unreal Engine 5 · Desktop",

    short_description:
      "Collection of gameplay and technical experiments developed while learning Unreal Engine workflows.",

    description: `
    Series of Unreal Engine gameplay experiments exploring Blueprint systems, gameplay logic, level design, and engine architecture.

    The project focuses on rapid prototyping and technical experimentation.
    `,

    technologies: ["Unreal Engine 5", "Blueprints"],

    tools: ["Unreal Engine 5", "Blueprints"],

    videos: [
      {
        src: "/videos/TopDownShooterFormationTrailer.mp4",
        poster: "/TopDownShooterTrailerImage.png",
      },
    ],

    images: [],

    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
  
  {
    slug: "glassware-safety-in-lab-vr",

    title: "Glassware Safety in Lab VR",

    category: "prototype",
    status: "completed",

    platform: "Unity · VR · Meta Quest 3",

    short_description:
      "VR training experience focused on laboratory safety and glassware risk prevention.",

    description: `
    Virtual reality training environment designed to teach laboratory safety procedures and identify hazardous situations involving chemistry glassware.

    The experience focuses on immersive interaction and spatial learning in VR.
    `,

    technologies: ["Unity", "VR", "Meta Quest 3"],

    tools: [
      "Unity",
      "C#",
      "Meta Interaction Toolkit",
      "Meta Quest 3",
    ],

    images: ["/labVR.jpg"],

    link: "https://sidequestvr.com/app/55057/glasslab-vr",
  },
];

// =========================================================
// HELPERS
// =========================================================

export const featuredProjects = projects.filter(
  (project) => project.category === "featured"
);

export const clientAndCollaborativeProjects = projects.filter(
  (project) => project.category === "client-collab"
);

export const prototypeProjects = projects.filter(
  (project) => project.category === "prototype"
);