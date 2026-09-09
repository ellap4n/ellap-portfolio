// ─────────────────────────────────────────────────────────────────────────
// Centralised project data for the Projects page.
//
// TO ADD A NEW PROJECT: just add a new object to the `projects` array below.
// - Leave `cover`, `mainimage`, `mainvideo`, `image1`, `image2`, `image3` as
//   `null` for anything you haven't uploaded yet — a placeholder graphic
//   will show automatically everywhere that image would've gone.
// - `cover` is what's used as the "album cover" in the archive grid and the
//   project popup. It defaults to `mainimage` if you don't set it
//   explicitly. (The featured carousel now shows its own 3 pre-made case
//   icons directly in featuredCarousel.jsx, in the same order as the
//   `featured: true` projects below — so if you reorder the featured
//   projects here, update that icon order to match.)
// - `featured: true` puts a project in the top carousel. Currently set to
//   exactly 3 projects (Heart Hackathon, Mini-Warman, 2D Pen Plotter), in
//   that order.
// - `current: true` marks the project shown in the bottom "Currently:"
//   player widget. Only set this on ONE project at a time.
// - `category` must be one of the keys in CATEGORIES below ('personal',
//   'uni', 'work'). Add more categories there if you need to.
// - The archive grid displays projects in the order they appear below —
//   put new projects wherever you want them to show up.
// ─────────────────────────────────────────────────────────────────────────

import warman from '../assets/projectphotos/warman.JPG';
import warman1 from '../assets/projectphotos/warman1.JPG';
import warman2 from '../assets/projectphotos/warman2.JPG';
import warmanvid from '../assets/projectphotos/warmanvid.mov';

import mdcvid from '../assets/projectphotos/mdcvid.MOV';
import mdc1 from '../assets/projectphotos/mdc1.JPG';
import mdc2 from '../assets/projectphotos/mdc2.JPG';
import mdc3 from '../assets/projectphotos/mdc3.JPG';

import hearth from '../assets/projectphotos/hh.jpg';
import hearth1 from '../assets/projectphotos/hh1.jpg';
import hearth2 from '../assets/projectphotos/hh2.jpg';
import hearth3 from '../assets/projectphotos/hh3.png';
import hearth4 from '../assets/projectphotos/hh4.png';
import hearth5 from '../assets/projectphotos/hh5.png';
import hearth6 from '../assets/projectphotos/hh6.jpg';

import xy1 from '../assets/projectphotos/IMG_7841.jpg';
import xy2 from '../assets/projectphotos/IMG_7840.jpg';

import portfolioweb from '../assets/projectphotos/portfolioweb.JPG';

// Category definitions — colours match your existing card.module.css values.
// Change a colour here and it updates the legend, archive cards, everywhere.
export const CATEGORIES = {
    personal: { label: 'Personal Project', color: 'rgb(214, 216, 225)' },
    uni: { label: 'Uni Project', color: 'rgb(235, 239, 227)' },
    work: { label: 'Work Project', color: 'rgb(218, 230, 232)' },
};

export const projects = [
    {
        id: 5,
        title: "Heart Hackathon",
        subtitle: "UoA",
        // TODO: fill in your actual date range for this one.
        date: "2026",
        category: "personal",
        featured_description: "Design and Manufacturing a Total Artificial Heart prototype for UoA's first ever Heart Hackathon Team!",
        description:
            "An exciting opportunity to be a part of UoA's first ever Heart Hackathon Team!",
        cover: hearth,
        mainimage: hearth4,
        mainvideo: null,
        image1: hearth1,
        image2: hearth2,
        image3: hearth6,
        featured: true,
    },
    {
        id: 2,
        title: "2D Pen Plotter",
        subtitle: "Inter-sem project",
        date: "July - August 2026",
        category: "uni",
        featured_description: "A project consisting of systems thinking, hardware and software design to build a robust and fail-safe 2D XY Pen Plotter.",
        description:
            "This project was a Mechatronics Design project, where we combined control system thinking, hardware design, and software programming to build a 2D, XY Pen Plotter.",
        cover: xy1,
        mainimage: xy2,
        mainvideo: null,
        image1: null,
        image2: null,
        image3: null,
        featured: true,
    },
    {
        id: 3,
        title: "Mini-Warman Challenge",
        subtitle: "MECHENG235",
        date: "Feb - June 2025",
        category: "uni",
        featured_description: "Problem solving, prototyping, building, and coding in a fast-paced 10 week build project.",
        description:
            "This challenging group course project for MECHENG235 had us problem solving, prototyping, building, and coding in a extremely fast-paced 10 week build project.",
        cover: warman,
        mainimage: null,
        mainvideo: warmanvid,
        image1: warman,
        image2: warman1,
        image3: warman2,
        featured: true,
    },
    {
        id: 1,
        title: "MDC Trophy Design",
        subtitle: "MECHA Club",
        date: "September 2025",
        category: "personal",
        description:
            "I designed a fun little trophy project for my club, MECHA's Design and Build Competition! I self-learnt blender for this, utilising it's 3d sculpting and mesh manipulation capabilities.",
        cover: mdc1,
        mainimage: null,
        mainvideo: mdcvid,
        image1: mdc1,
        image2: mdc2,
        image3: mdc3,
        featured: false,
    },
    {
        id: 4,
        title: "Portfolio Website Build",
        subtitle: "Summer project",
        date: "Jan - Feb 2026",
        category: "personal",
        description:
            "This website you are currently viewing was built from scratch in React and Vite, using Javascript, CSS and HTML. It's a summer project with the goal to improve my web development skills, which I thought were lacking.",
        cover: portfolioweb,
        mainimage: portfolioweb,
        mainvideo: null,
        image1: null,
        image2: null,
        image3: null,
        featured: false,
    },
    {
        id: 0,
        title: "C 'Boxed in' Game",
        subtitle: "ENGGEN 131",
        date: "Aug - Nov 2024",
        category: "uni",
        description:
            "C Language programme. First exposure to coding through my ENGGEN 131 paper.",
        cover: null,
        mainimage: null,
        mainvideo: null,
        image1: null,
        image2: null,
        image3: null,
        featured: false,
    },
    {
        id: 6,
        title: "Amoeba Lighting Sculpture",
        subtitle: "MAW Design",
        // TODO: fill in your actual date range for this one.
        date: "2023",
        category: "work",
        featured_description: null,
        description:
            "Collaboration with ECC Lighting to design and build a lighting sculpture for display in Farmers Lane, Wellington.",
        cover: null,
        mainimage: null,
        mainvideo: null,
        image1: null,
        image2: null,
        image3: null,
        featured: false,
    },

];

export const getProjectById = (id) => projects.find((p) => p.id === Number(id));

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// The "Currently working on..." widget is intentionally separate from the
// `projects` array above — it doesn't need to be a listed project (e.g. a
// hackathon team, a WIP thing with nothing to show yet). Edit this object
// directly whenever what you're currently up to changes.
export const currentlyWorkingOn = {
    title: "Heart Hackathon!",
    subtitle: "UoA",
    description:
        "An exciting opportunity to be a part of UoA's first ever Heart Hackathon Team!",
    cover: null, // set to an imported image whenever you have one
};