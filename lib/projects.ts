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
  detailVideo?: string;
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
      "Landscape gardener Jim Winters is a quiet craftsman, a soft-spoken man who prefers an orderly life. His family, however, is anything but orderly. Older son Gabe is planning his escape to Florida, leaving behind any shot at a stable future with his girlfriend. Younger son Pete has retreated into a private world of anger, drift and disappointment. Jim struggles watching his sons make choices he views as disastrous compromises. It is only when he meets his new neighbor, Molly, that Jim finds a way to deal with his own life and his family’s future.",
    cover: img("Josh_Sternfeld-Winter_Solstice-Michelle_Monaghan-06-uai-720x405-1.jpg"),
    previewVideo: video("/videos/previews/solsticethumbnailshort.mp4"),
    gallery: [
      img("Josh_Sternfeld-Winter_Solstice-Anthony_LaPaglia-Mark_Webber-07.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Anthony_LaPaglia-02.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Allison_Janney-01.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Aaron_Stanford-Mark_Webber-04.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Aaron_Stanford-08.jpg"),
      img("Josh_Sternfeld-Winter_Solstice-Michelle_Monaghan-06-uai-720x405-1.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Sound Pictures" },
      { label: "DP", value: "Harlan Bosmajian" },
      { label: "Year", value: "2004" },
      { label: "Link", value: "Imdb.com", href: "https://www.imdb.com/video/vi4026335513/?playlistId=tt0365938&ref_=tt_ov_pr_ov_vi" },
    ],
  },
  {
    slug: "meskada",
    title: "Meskada",
    category: "Feature film",
    year: "2010",
    description:
      "Small-town detective Noah Cordin must solve a juvenile homicide that occurred during a home burglary in his affluent town of Hilliard. The dead boy’s mother, Allison Connor, is a member of the Meskada County Board of Commissioners, and a powerful woman in Hilliard. The working-class town of Caswell rallies together in solidarity – not to support Detective Cordin’s efforts to find the killers (who appear to have come from Caswell) but to keep the way clear for a new factory with many jobs coming to town.",
    cover: img("Meskada-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/Meskada__Feature_Film_Preview_Thumbnail_-_Josh_Sternfeld_Website.mp4"),
    gallery: [
      img("Josh_Sternfeld-Meskada-Nick_Stahl-Rachel_Nichols-04-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Nick_Stahl-02-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Kellan_Lutz-01-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Nick_Stahl-Rachel_Nichols-03-2048x1152-1.jpg"),
      img("Josh_Sternfeld-Meskada-Norman_Reedus-05-scaled-1.jpg"),
      img("Josh_Sternfeld-Meskada-Jonathan_Tucker-08-scaled-1.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Deerjen Films, Monolith PIctures" },
      { label: "DP", value: "Daniel D. Sariano" },
      { label: "Year", value: "2010" },
      { label: "Link", value: "imdb.com", href: "https://www.imdb.com/video/vi2675808537/?playlistId=tt1461249&ref_=tt_ov_ov_vi" },
    ],
  },
  {
    slug: "market-trip",
    title: "Market Trip",
    category: "Short film",
    year: "2014",
    description:
      "A teenage son brings his father, a former doctor who now has Early-Onset Alzheimer’s disease, to the supermarket – and loses him to a fantasy of dementia. Produced with support from the Alzheimer’s Association New York.",
    cover: img("Market_Trip-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/market_trip__short_film__josh_sternfeld_website-1080p.mp4"),
    detailVideo: "/videos/Market-Trip-full.webm",
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Four of a Kind Productions" },
      { label: "DP", value: "Jan Reichle" },
      { label: "Year", value: "2014" },
      { label: "Link", value: "imdb.com", href: "https://www.imdb.com/title/tt3359178/" },
    ],
  },
  {
    slug: "amy-makes-three",
    title: "Amy Makes Three",
    category: "Feature film",
    year: "2020",
    description:
      "A psychological thriller about Carla and Greg Forrest – a loving young couple preparing for the birth of their beautiful daughter. However, baby Amy’s birth comes with a spirit and danger that no one could have imagined.",
    cover: img("Amy_Makes_Three-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/amy_makes_three__feature_film_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    gallery: [
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-Mike_Doyle-01-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-Mike_Doyle-02-2048x1152-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-03-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Mike_Doyle-05-2048x1152-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Ursula_Parker-06-scaled-1.jpg"),
      img("Josh_Sternfeld-Amy_Makes_Three-Torrey_DeVitto-07-1-2048x1152-1.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Josh Sternfeld" },
      { label: "Producer", value: "Monolith Pictures, Tremendous Entertainment" },
      { label: "DP", value: "Jordan T. Parrott" },
      { label: "Year", value: "2020" },
      { label: "Link", value: "imdb.com", href: "https://www.imdb.com/title/tt4799058/" },
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
      "A walkthrough video of the specs and features of the new Peloton Bike system.",
    cover: img("Peloton-Preview-1st_Frame-768x432.jpg"),
    previewVideo: video("/videos/previews/peloton_-_bike_tour__commercial_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    detailVideo: "/videos/Peloton-full.webm",
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Producer", value: "Ryan Hamelin, Best of Both Media" },
      { label: "DP", value: "Jordan T. Parrott" },
    ],
  },
  {
    slug: "fortress-snipers-eye",
    title: "Fortress: Sniper’s Eye",
    category: "Feature film",
    year: "2022",
    description:
      "In the sequel to Fortress, CIA operative Robert Michaels and his son Paul must stop the deadly cyber-terrorist Frederick Balzary; who returns to Fortress Island with his mercenary troop, seeking revenge for his lost fortune and estranged wife.",
    cover: img("Fortress-Preview-1st_Frame-uai-720x405-1.jpg"),
    previewVideo: video("/videos/previews/fortress-_snipers_ure_film_preview_thumbnail_-_josh_sternfeld_website-1080p.mp4"),
    gallery: [
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Bruce_Willis-01-scaled-1-e1788384344137.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Bruce_Willis-Chad_Michael_Murray-07-2048x1152-1-e1788384354462.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Jesse_Metcalfe-04-scaled-1-e1788384365517.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Gabrielle_Haugh-05-2048x1152-1-e1788384377890.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Natali_Yura-03-scaled-1-e1788384388824.jpg"),
      img("Josh_Sternfeld-Fortress_Snipers_Eye-Chad_Michael_Murray-02-2048x1152-1-e1788384397933.jpg"),
    ],
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Writer", value: "Alan Horsnail" },
      { label: "Producer", value: "Emmett/Furla/Oasis, Grindstone Entertainment" },
      { label: "DP", value: "Vern Nobles Jr." },
      { label: "Year", value: "2022" },
      { label: "Link", value: "imdb.com", href: "https://www.imdb.com/video/vi3276915481/?playlistId=tt14577304&ref_=tt_ov_ov_vi" },
    ],
  },
  {
    slug: "civic-architecture",
    title: "Civic Architecture",
    category: "Short documentary",
    year: "2023",
    description:
      "A short film about the life and work of world-renowned architect Rafael Viñoly (1944-2023), for the Viñoly Foundation.",
    cover: img("Josh_Sternfeld-Vinoly_Foundation-Civic_Architecture-Commercial_Preview-768x432.jpg"),
    previewVideo: video("/videos/previews/Civicsss.mp4"),
    detailVideo: "/videos/Civic-Architecture-full.webm",
    gallery: [],
    showVideo: true,
    credits: [
      { label: "Director", value: "Josh Sternfeld" },
      { label: "Producer", value: "Josh Sternfeld" },
      { label: "Producer Link", value: "motionprinciples.com", href: "https://motionprinciples.com" },
      { label: "Year", value: "2023" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
