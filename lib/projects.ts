export type Credit = {
  label: string;
  value: string;
  href?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  cover: string;
  previewVideo: string;
  gallery: string[];
  credits: Credit[];
  showVideo?: boolean;
};

const img = (name: string) =>
  `/images/${name.replace(/\.(?:jpe?g|png)$/i, ".webp")}`;
const video = (path: string) => path.replace(/\.mp4$/i, ".webm");

export const projects: Project[] = [
  {
    slug: "winter-solstice",
    title: "Winter Solstice",
    category: "Feature film",
    year: "2004",
    description:
      "Landscape gardener Jim Winters is a quiet craftsman who prefers an orderly life. His family, however, is anything but orderly. As his two sons struggle toward uncertain futures, a new neighbor helps Jim find a way to face his own life and his family’s future.",
    cover: img("Josh_Sternfeld-Winter_Solstice-Michelle_Monaghan-06-uai-720x405-1.jpg"),
    previewVideo: video("/videos/previews/solsticethumbnailshort.mp4"),
    gallery: [
      img("Josh_Sternfeld-Winter_Solstice-Aaron_Stanford-08.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Aaron_Stanford-Mark_Webber-04.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Allison_Janney-01.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Anthony_LaPaglia-02.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Anthony_LaPaglia-Mark_Webber-07.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Sound Pictures" },
      { label: "Director of photography", value: "Harlan Bosmajian" },
      { label: "Year", value: "2004" },
    ],
  },
  {
    slug: "meskada",
    title: "Meskada",
    category: "Feature film",
    year: "2010",
    description:
      "Small-town detective Noah Cordin must solve a juvenile homicide committed during a home burglary in affluent Hilliard. His search leads to working-class Caswell, where the community closes ranks to protect the promise of a new factory—and the jobs it would bring.",
    cover: img("Meskada-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/Meskada__Feature_Film_Preview_Thumbnail_-_Josh_Sternfeld_Website.mp4"),
    gallery: [
      img("Josh_Sternfeld-Meskada-Norman_Reedus-05-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Nick_Stahl-Rachel_Nichols-03-2048x1152-1.jpg"),
      img("Josh_Sternfeld-Meskada-Kellan_Lutz-01-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Jonathan_Tucker-08-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Nick_Stahl-02-scaled-1.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Deerjen Films, Monolith Pictures" },
      { label: "Director of photography", value: "Daniel D. Sariano" },
      { label: "Year", value: "2010" },
    ],
  },
  {
    slug: "market-trip",
    title: "Market Trip",
    category: "Short film",
    year: "2014",
    description:
      "A teenage son brings his father, a former doctor living with early-onset Alzheimer’s disease, to the supermarket—and loses him to a fantasy of dementia. Produced with support from the Alzheimer’s Association New York.",
    cover: img("Market_Trip-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/market_trip__short_film__josh_sternfeld_website-1080p.mp4"),
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Four of a Kind Productions" },
      { label: "Director of photography", value: "Jan Reichle" },
      { label: "Year", value: "2014" },
    ],
  },
  {
    slug: "amy-makes-three",
    title: "Amy Makes Three",
    category: "Feature film",
    year: "2020",
    description:
      "A psychological thriller about Carla and Greg Forrest—a loving young couple preparing for the birth of their daughter. But baby Amy’s arrival comes with a spirit and a danger no one could have imagined.",
    cover: img("Amy_Makes_Three-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/amy_makes_three__feature_film_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    gallery: [
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-Mike_Doyle-01-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-03-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Ursula_Parker-06-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Mike_Doyle-05-2048x1152-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-07-1-2048x1152-1.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Monolith Pictures, Tremendous Entertainment" },
      { label: "Director of photography", value: "Jordan T. Parrott" },
      { label: "Year", value: "2020" },
    ],
  },
  {
    slug: "showreel",
    title: "Director Showreel",
    category: "Selected work",
    year: "2022",
    description:
      "A collection of footage from Josh Sternfeld’s narrative work, including Fortress: Sniper’s Eye, Amy Makes Three, Market Trip, Meskada, and Winter Solstice.",
    cover: img("JS-Showreel_Title-768x432.jpg"),
    previewVideo: video("/videos/previews/josh_sternfeld_-_director_showreel-1080p-cutdown.mp4"),
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Format", value: "Narrative reel" },
    ],
  },
  {
    slug: "peloton",
    title: "Peloton",
    category: "Commercial",
    description:
      "A cinematic walkthrough of the specifications and features of the Peloton Bike system.",
    cover: img("Peloton-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/peloton_-_bike_tour__commercial_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Producer", value: "Ryan Hamelin, Best of Both Media" },
      { label: "Director of photography", value: "Jordan T. Parrott" },
    ],
  },
  {
    slug: "fortress-snipers-eye",
    title: "Fortress: Sniper’s Eye",
    category: "Feature film",
    year: "2022",
    description:
      "CIA operative Robert Michaels and his son Paul must stop cyber-terrorist Frederick Balzary, who returns to Fortress Island with his mercenary troop seeking revenge for his lost fortune and estranged wife.",
    cover: img("Fortress-Preview-1st_Frame-uai-720x405-1.jpg"),
    previewVideo: video("/videos/previews/fortress-_snipers_ure_film_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    gallery: [
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Bruce_Willis-01-scaled-1-e1788384344137.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Bruce_Willis-Chad_Michael_Murray-07-2048x1152-1-e1788384354462.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Chad_Michael_Murray-02-2048x1152-1-e1788384397933.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Jesse_Metcalfe-04-scaled-1-e1788384365517.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Natali_Yura-03-scaled-1-e1788384388824.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Alan Horsnail" },
      { label: "Producer", value: "Emmett/Furla/Oasis, Grindstone Entertainment" },
      { label: "Director of photography", value: "Vern Nobles Jr." },
      { label: "Year", value: "2022" },
    ],
  },
  {
    slug: "civic-architecture",
    title: "Civic Architecture",
    category: "Short documentary",
    year: "2023",
    description:
      "A short film about the life and work of world-renowned architect Rafael Viñoly (1944–2023), created for the Viñoly Foundation.",
    cover: img("Josh_Sternfeld-Vinoly_Foundation-Civic_Architecture-Commercial_Preview-768x432.jpg"),
    previewVideo: video("/videos/previews/Civicsss.mp4"),
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Producer", value: "Josh Sternfeld" },
      { label: "Production partner", value: "Motion Principles", href: "https://motionprinciples.com" },
      { label: "Year", value: "2023" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
