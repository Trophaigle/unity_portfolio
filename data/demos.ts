export type Project = {
  slug: string;
  title: string;
  platform: string;
  short_description: string;
  description: string;

  videos?: {
    src: string;
    poster?: string;
  }[];

  images?: string[];
  github?: string;
  tools?: string[];
  points?: string[];
  link?: string;
};

export const unityDemos: Project[] = [
  {
    slug: "echoes-of-the-museum",
    title: "Echoes of the Museum",
    platform: "Unity - Desktop (VR ongoing...)",
    short_description: "Explore an interactive museum where art and music come alive. Listen closely and uncover hidden stories through sound.",
    description: `
    This project is an interactive virtual museum experience set in a vintage, old-style interior environment inspired by classical artistic spaces.

    The player can freely explore the room, discover artworks, and interact with objects to trigger visual and audio feedback.

    The goal of this project is to create a fully immersive audiovisual experience, blending environment storytelling, music, and interactivity. (All artwork is my creation)

    Features include art exploration with interactive paintings, audio-triggering objects such as piano, gramophone, and radio, and a cinematic introduction guiding the player through the environment using camera transitions, music, and timeline-based sequences.

    The project is built with a strong technical foundation in C#, using object-oriented architecture, interfaces, and a centralized GameManager to optimize gameplay logic and reduce unnecessary update loops.

    Additional systems include a UI built with Unity Canvas, a MIDI-based piano system with real-time key synchronization, and a spatial audio system for enhanced immersion.

    Future improvements include VR support, mobile adaptation, and advanced audio simulation using tools like Wwise.
    `,
    videos: [{ src: "/videos/TraillerCutWithMusicCompressed.mp4",
        poster: "/imageCoverMuseum.png",
     }],
    github: "https://github.com/Trophaigle/Museum",
    tools: ["Unity", "C#", "DrywetMIDI Library"],
    images: ["/imageCoverMuseum.png"],
    link: "https://sidequestvr.com/app/55057/glasslab-vr",
    points: ["Immersive navigation", "Visual / Audio-driven storytelling"],
  },
  {
    slug: "risk-awareness-training-module",
    title: "Risk awareness training module",
    platform: "Desktop · WebGL . Mobile",
    short_description: "Interactive 3D environment designed to identify, evaluate and mitigate risks.",
    description: "Interactive 3D environment designed to identify, evaluate and mitigate risks.",
    images: ["/image2.png"],
    tools: ["Unity", "C#"],
    link: "https://play.unity.com/fr/games/1827c35f-1c75-4c38-8ae1-94567c9d0776/hazard-spotting-unity-demo",
  },
 /* {
    slug: "cybersecurity-training-module",
    title: "Cybersecurity training module",
    platform: "Desktop · WebGL . Mobile",
    description:
      "Scenario-based simulation focused on identifying and mitigating cybersecurity threats in a simulated corporate workstation.",
    images: ["/cybersecuMailFile.png"],
    link: "https://play.unity.com/fr/games/8726d29d-574e-49e8-bfa6-b3ccdeddfbd4/cyber-desk-threat-detection",
  },*/
  {
    slug: "safepath-risk-assessment-prototype",
    title: "SafePath: Risk Assessment - Prototype",
    platform: "Desktop · WebGL . Mobile",
    short_description: "Immersive 3D racing game where players identify and mitigate risks on a dynamic track.",
    description:
      "Immersive 3D racing game where players identify and mitigate risks on a dynamic track. (cinemachine, interfaces, scriptable object, inheritance)",
    images: ["/image.png"],
    tools: ["Unity", "C#"],
    link: "https://play.unity.com/fr/games/4685d6a6-a22f-4fe2-bf0d-d94da52bf4b2/safepath-risk-assessment-proto",
  }
];

export const xrDemos: Project[] = [ {
    slug: "xr-weather-forecast-visualization-ar",
    title: "XR Weather Forecast Visualization - AR",
    platform: "Augmented Reality",
    short_description:"Interactive AR experience for visualizing weather forecasts in real-time, using Unity's AR Foundation and OpenWeatherMap API to create immersive weather visualizations in the user's environment",
    description:
      "Interactive AR experience for visualizing weather forecasts in real-time, using Unity's AR Foundation and OpenWeatherMap API to create immersive weather visualizations in the user's environment.",
    images: ["/WeatherXR/weatherXRImage.png"],
    videos: [{ src: "/videos/WeatherXRDemo.mp4", poster: "/WeatherXR/CoverImageDemo.png" }, { src: "/videos/WeatherXRTechBreakdown.mp4", poster: "/WeatherXR/CoverImageTechnicalBreakdown.png" }],
    tools: ["Unity", "C#", "FastAPI (Python)", "OpenWeatherMap API", "Meta Quest 3"],
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
  {
    slug: "ar-peephole-diorama-end-of-studies-project",
    title: "AR peephole diorama - End of Studies project",
    platform: "Augmented Reality",
    short_description: "Explore a remote collaborator’s multi-screen workspace through an augmented reality peephole diorama, enabling a shared, real-time perception of the environment.",
    description:
      "This project consists of exploring a remote collaborator’s multi-screen workspace through an augmented reality peephole diorama, where users are connected over a network to enable a shared, real-time perception of the environment.",
    images: ["/diorama.jpg"],
    tools: ["Unity", "C#", "Meta Interaction Toolkit (SDK)", "Meta Quest 3"],
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
   {
    slug: "glassware-safety-in-lab-vr",
    title: "Glassware safety in lab - VR",
    platform: "Virtual Reality",
    short_description: "Interactive 3D virtual environment designed to secure glassware risks in a chemistry lab.",
    description:
      "Interactive 3D virtual environment designed to secure glassware risks in a chemistry lab.",
    images: ["/labVR.jpg"],
    tools: ["Unity", "C#", "Meta Interaction Toolkit (SDK)", "Meta Quest 3"],
    link: "https://sidequestvr.com/app/55057/glasslab-vr",
  },
  {
    slug: "northern-lights-vr",
    title: "Northern Lights - VR",
    platform: "Virtual Reality",
    short_description: "Experience the mesmerizing beauty of the Northern Lights in a virtual reality environment, created using Unity, Blender, and Shader Graphs for dynamic colors and animations.",
    description:
      "Northern Lights made with Unity / Blender (mesh) and Shader Graphs for colors and animations",
    videos: [{ src: "/videos/NorthernLights.mp4", poster: "/NorthernLights.jpg" }],
    images  : ["/NorthernLights.jpg"],
    tools: ["Unity","C#", "Shader Graph", "Meta Interaction Toolkit (SDK)", "Meta Quest 3"],
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
];

export const unrealDemos: Project[] = [
  {
    slug: "training-project-1-unreal-engine",
    title: "Training project 1 - Unreal Engine",
    platform: "Unreal Engine - Desktop",
    short_description: "Unreal Engine training project focused on mastering the engine's core features, including level design, Blueprint scripting, ...",
    description:
      `This project is a deep exploration of Unreal Engine 5, focused on understanding both core fundamentals and production workflows. It covers key game development systems such as level design, gameplay architecture, UI, input systems, animation, materials, and performance optimization. 
      
      The result is a fully playable Top Down Shooter prototype built using Blueprints and Unreal’s component-based architecture, combining gameplay logic, AI interactions, and a complete input and camera system. 
      
      Beyond implementation, the project also reflects a learning transition from Unity to Unreal Engine, highlighting differences in workflow, architecture, and engine philosophy, while strengthening skills toward production-ready interactive experiences.`,
    videos: [{ src: "/videos/TopDownShooterFormationTrailer.mp4", poster: "/TopDownShooterTrailerImage.png" }],
    images: ["/TopDownShooterTrailerImage.png"],
    tools: ["Unreal Engine", "Blueprints"],
    github: "https://github.com/Trophaigle/TopDownShooterFormationUE",
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL",
  },
  {
    slug: "training-project-2-unreal-engine",
    title: "Training project 2 - Unreal Engine",
    platform: "Unreal Engine - Desktop",
    short_description: "Unreal Engine training project focused on mastering the engine's core features, including level design, Blueprint scripting, ...",
    description:
      "Unreal Engine training project focused on mastering the engine's core features, including level design, Blueprint scripting, ...",
    videos: [{ src: "/videos/TopDownShooterFormationTrailer.mp4", poster: "/TopDownShooterTrailerImage.png" }],
    images: ["/TopDownShooterTrailerImage.png"],
    tools: ["Unreal Engine", "Blueprints"],
    link: "https://www.youtube.com/watch?v=IMhJPF-WwJM&list=LL", //lien github ?
  },
];

export const projects: Project[] = [
  ...xrDemos,
  ...unityDemos,
  ...unrealDemos,
];