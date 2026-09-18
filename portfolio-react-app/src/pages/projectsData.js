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
//
// FIELD REFERENCE (see the annotated Mini-Warman entry below for a live
// example of every field in use):
//   title, subtitle, date               → shown in the project popup
//   description                         → the overlay text next to this
//                                          project's case in the carousel,
//                                          if featured: true. NOT shown in
//                                          the popup anymore — that's what
//                                          `body` (below) is for.
//   body                                → popup's main content: an ordered
//                                          array of blocks — { type: 'text',
//                                          content }, { type: 'image',
//                                          images: [{src, caption}] } (1-3
//                                          images per row), or { type:
//                                          'video', src }. Arrange in
//                                          whatever order tells the story.
//   sections                            → named write-up sections below the
//                                          body, e.g. a "Reflection" —
//                                          array of { heading, content }
//   cover                               → archive grid thumbnail AND the
//                                          popup's big cover image
//   mainimage, featured_description,
//   mainvideo, image1/2/3 (old fields) → NOT read by ProjectPopup.jsx
//                                          anymore now that it uses
//                                          body/sections. Any project still
//                                          using only these old fields will
//                                          show cover/title/subtitle/date in
//                                          its popup but nothing else, until
//                                          migrated to body/sections like
//                                          Mini-Warman below.
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
import homing from '../assets/projectphotos/homing.png';

import amoeba from '../assets/projectphotos/amoeba.jpg';
import amoeba2 from '../assets/projectphotos/amoeba2.png';
import amoeba3 from '../assets/projectphotos/detail.jpeg';
import amoeba4 from '../assets/projectphotos/plan.jpeg';

import elec299 from '../assets/projectphotos/motor299.jpeg';

import portfolioweb from '../assets/projectphotos/portfolioweb.JPG';

import cadcomp from '../assets/projectphotos/cadcomp.png';
import cadcomp2 from '../assets/projectphotos/cadcomp2.png';
import cadcomp3 from '../assets/projectphotos/cadcomp3.png';

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
        subtitle: "Manawa Mechanics Team",
        // TODO: fill in your actual date range for this one.
        date: "2026",
        category: "personal",
        featured_description: "Design and Manufacturing a Total Artificial Heart prototype for UoA's first ever Heart Hackathon Team!",
        description:
            "An exciting opportunity to be a part of UoA's first ever Heart Hackathon Team!",
        cover: hearth,
        mainimage: hearth4,
        mainvideo: null,
        body: [
            {
                type: 'text',
                content: "I am part of the mechanical team, working to design the TAH's chambers, pumping actuator, and outer casing. \n My role in the team included:"
            },
            {
                type: 'list', items: [
                    'Ideation and design of the TAH chambers, review of the working heart model to create a effective geometry for the chambers. For this, I was inspired by the Vortexal pattern of shark intestines and natural human heart.',
                    'I proposed a design for the pumping actuator, which is a diaphragm that will be actuated by a linear actuator to pump the blood through the chambers. I designed the diaphragm to be made of silicone, with a specific geometry to ensure effective pumping and durability.',
                    'Modeling of the chambers with clay, before transferring it to a digital mesh, and CAD model using Autodesk Fusion 360. This was done in preparation for manufacturing, visualisation, and design validation through CFD simulations.',
                    'The external casing of the TAH is my final design responsibility, which is currently being worked on. The aim of this is to provide compressive strength to the chambers, and enclose all internal components to provide a barrier to the body. ',
                ]
            },
            {
                type: 'image',
                images: [
                    { src: hearth6, caption: 'Initial Clay Chamber Prototype' },
                    { src: hearth4, caption: 'First Digital CAD Model of the Left Chamber' },
                ],
            },
            {
                type: 'text',
                content: 'I also assisted in the manufacturing aspect of the TAH, which is done using silicone molding techniques. This was a team effort, and I was able to learn a lot about the process of silicone molding, and how to create effective molds for complex geometries.',
            },
            {
                type: 'image',
                images: [
                    { src: hearth1, caption: 'Molding process' },
                    { src: hearth2, caption: 'Vacuum Chamber used to remove air from the molds' },
                    { src: hearth3, caption: 'Sectional View of the external casing' },
                ],
            },
            {
                type: 'image',
                images: [
                    { src: hearth5, caption: 'Mold Tool CAD', height: '80vh' },
                ],
            }
        ],
        featured: true,
    },
    // {
    //     id: 8,
    //     title: "2026 MDC Competition",
    //     subtitle: "MECHA Event",
    //     date: "September 2026",
    //     category: "personal",
    //     description:
    //         "A one-day Design and Build Competition, where we had 5 hours to design and solve a given problem with limited resources."
    // },
    {
        id: 2,
        title: "2D Pen Plotter",
        subtitle: "MECHENG306 Mechatronics Design Project",
        date: "July - September 2026",
        category: "uni",
        featured_description: "A project consisting of systems thinking, hardware and software design to build a robust and fail-safe 2D XY Pen Plotter.",
        description:
            "This project was a Mechatronics Design project, where we combined control system thinking, hardware design, and software programming to build a 2D, XY Pen Plotter.",
        cover: xy1,
        mainimage: xy2,
        body: [
            {
                type: 'text',
                content: "This design project implemented a robust and reliable closed-loop control system for a 2-axis X-Y plotter. The designed system is capable of receiving G01 (moving), G28(homing) and M999(fault) commands, executing precise motion with a position tolerance of +/- 0.054mm."
            },
            {
                type: 'list',
                items: [
                    'I oversaw the software and hardware design of the failure mechanisms, which included limit switches, FSM implementations, and further consderation of safety and risk in an hypothetical upgraded laser cutter.',
                    'Assisted with the testing and validation of the PD Control loop, which read encoder feedback in a speed and position control loop.',
                    'I also implemented a non-blocking homing sub-FSM, which allowed the system to home itself without blocking the main control loop.',

                ],
            },
            {
                type: 'image',
                images: [
                    { src: homing, caption: 'Homing FSM Diagram', height: '120vh' },
                ],
            },
            {
                type: 'text',
                content:
                    "This project taught me the importance of systems thinking and the interactions between different components in a complex system, particulary in software and hardware. It also highlighted the significance of thorough testing and debugging to ensure the reliability of the final product.",
            },
            {
                type: 'list',
                items: [
                    'Software is a difficult skill for me personally, so this project was extremely beneficial to understand the practical applications of key concepts such as delay, fault propagation, blocking vs non-blocking implementations, and hardware noise and interference.',
                    'Another key learning was how to actually implement control elements to achieve a precise and reliable system. This included understanding the limitations of the hardware, - such as motor power, component physical characteristics, and operational risks - and how to design the software to work within those limitations.',
                ]
            },
        ],
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

        body: [
            {
                type: 'text',
                content:
                    "This challenging group course project for MECHENG235 had us problem solving, prototyping, building, and coding in a extremely fast-paced 10 week build project. We were tasked with designing and building a robot to collect and deposit pods in a competition arena. The robot had to be able to navigate the arena, collect pods, and deposit them in a designated area. The robot was also required to be able to operate autonomously, without any human intervention. We were quite successful in this, completing the course in7.6 seconds, 6th out of 60 teams",
            },
            {
                type: 'list', items: [
                    'I also oversaw the electrical design, as well as the initial software testing of the components.  I fronted this by creating the initial circuit diagrams, power calculations and worked out how each component would be used. ',
                    'My main mechanical contribution was the design and construction of two offset rigid arms, securely mounted using bolted brackets to collect pods as the robot drives past. The lower arm is equipped with a bump switch to detect contact and confirm successful collection. ',
                    'This project taught me problem solving, teamwork, self-directed research, fast prototyping, and how to apply theory concepts into a real life application. ',
                ],
            },
            {
                type: 'image',
                images: [
                    { src: warman1, caption: 'Testing the drivetrain' },
                    { src: warman2, caption: 'Final build, ready to compete' },
                ],
            },
            {
                type: 'text',
                content:
                    " I learnt the importance of proper planning, and how small considerations such as mounts and supports can make or break a system. It was my first time building something of this scale, so I also heavily underestimated the technical requirements and time required for the build. Time-management is a vital skill in a career with tight deadlines, and can really affect how the quality of the project is finished. However, I think the biggest learning curve for me was that theory does not always equate to real life. Our first design looked good on paper, but there were multitudes of errors (of quality, weight etc.) that we did not consider. We built it too late having full confidence in its theory, so when we ran into the issues, we did not have enough time to fix them. As a big picture kind of person, I personally also missed a lot of small details, but luckily had my team to back me up with the details. I have learnt alot from working with the others and seeing the difference in the way that they approach similar problems - opening my creative problem solving mind as an engineer.",
            },
            {
                type: 'video',
                src: warmanvid,
            }
        ],
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
        cover: mdc2,
        mainimage: null,
        body: [
            {
                type: 'text',
                content:
                    "I designed a fun little trophy project for my club, MECHA's Design and Build Competition! I self-learnt blender for this, utilising it's 3d sculpting and mesh manipulation capabilities.",
            },
            {
                type: 'image',
                images: [
                    { src: mdc1, caption: 'Trophy design in progress' },
                    { src: mdc2, caption: 'Final trophy design' },
                    { src: mdc3, caption: 'Trophy design rendered in Blender' },
                ],
            }
        ],
        featured: false,
    },
    // {
    //     id: 4,
    //     title: "Portfolio Website Build",
    //     subtitle: "Summer project",
    //     date: "Jan - Feb 2026",
    //     category: "personal",
    //     description:
    //         "This website you are currently viewing was built from scratch in React and Vite, using Javascript, CSS and HTML. It's a summer project with the goal to improve my web development skills, which I thought were lacking.",
    //     cover: portfolioweb,
    //     mainimage: portfolioweb,
    //     mainvideo: null,
    //     image1: null,
    //     image2: null,
    //     image3: null,
    //     // TODO: not migrated to body/sections yet.
    //     featured: false,
    // },
    {
        id: 6,
        title: "Electromagnetic Motor",
        subtitle: "MECHTRON299",
        date: "March 2025",
        category: "uni",
        description:
            "Electromagnetic motor build, with the aim of practising practical manufacturing skills such as soldering, milling, turning, 3d printing, and more.",
        cover: elec299,
        body: [
            {
                type: 'text',
                content:
                    "University Project for MECHTRON299, where we built an electromagnetic motor from scratch. The aim of this project was to practise practical manufacturing skills such as soldering, milling, turning, 3d printing, and more.",
            },
            {
                type: 'list',
                items: [
                    'This project was extremely beneficial to my practical manufacturing skillset. I learnt how to laser cut, 3D print, mill, weld, turn, and solder components to create a functional electromagnetic motor.',
                    'A big personal focus was on the actual techniques used in the project. As a Mechatronics Engineer, I need to be able to utilise these skills in my future work.',
                    'I also learnt how to wrap a electromagnetic coil. This was the most challenging practical task in the project, as it required a lot of patience and precision. Through this, I understood how the coil quality itself can actually significantly affect the performance of the motor.',
                ],
            }
        ],
        featured: false,
    },
    {
        id: 9,
        title: "CAD Competition",
        subtitle: "ENGGEN 115",
        date: "August 2024",
        category: "personal",
        description:
            "A extended competition as part of our ENGGEN 115 Engineering Design course, where we had to design and CAD a Miniature playset for the given theme: Past, Present, Future.",
        cover: cadcomp,
        body: [
            {
                type: 'text',
                content:
                    "A extended competition as part of our ENGGEN 115 Engineering Design course, where we had to design and CAD a Miniature playset for the given theme: Past, Present, Future. I designed a miniture lego playset of a contrasted futuristic, and historic train carriage.",
            },
            {
                type: 'image',
                images: [
                    { src: cadcomp2, caption: 'Model in CAD', height: '80vh' },
                ],
            },
            {
                type: 'text',
                content: 'The design was a great opportunity to practise my CAD skills, and I learnt to use a multitude of different CAD tools on Autodesk inventor to model more complex geometries. An example of this was the futuristic seat design, which was lofted from 2 asymmetrical profiles to create a smooth and organic shape. I also learnt how to use the assembly tools in Autodesk Inventor to create a functional assembly of the playset, to simulate simple dynamic behaviour.',
            },
            {
                type: 'image',
                images: [
                    { src: cadcomp3, caption: 'Lofted Seat Design' },
                ],
            }
        ],
        featured: false,
    },
    // {
    //     id: 0,
    //     title: "C 'Boxed in' Game",
    //     subtitle: "ENGGEN 131",
    //     date: "Aug - Nov 2024",
    //     category: "uni",
    //     description:
    //         "C Language programme. First exposure to coding through my ENGGEN 131 paper.",
    //     cover: null,
    //     mainimage: null,
    //     mainvideo: null,
    //     image1: null,
    //     image2: null,
    //     image3: null,
    //     featured: false,
    // },
    {
        id: 7,
        title: "Amoeba Lighting Sculpture",
        subtitle: "MAW Design",
        date: "2022 - 2023",
        category: "work",
        featured_description: null,
        description:
            "Collaboration with ECC Lighting to design and build a lighting sculpture for display in Farmers Lane, Wellington.",
        cover: amoeba,
        body: [
            {
                type: 'text',
                content:
                    "Collaboration with ECC Lighting to design and build a lighting sculpture for display in Farmers Lane, Wellington. The aim was to create a visually striking and interactive piece that would engage the public and enhance the urban environment. The sculpture recieved an  award of commendation from IESANZ was awarded in 2024."
            },
            {
                type: 'list',
                items: [
                    'I was responsible for the design and fabrication of the sculpture, which involved creating a 3D model of the sculpture, selecting appropriate materials, and assisting inthe construction process.',
                    'I also worked closely with ECC Lighting to ensure that the lighting elements were integrated seamlessly into the sculpture, and that the final product met all safety and regulatory requirements such as public disturbance, electrical safety, and bird safety.',
                    'This project was a excellent application of both aesthetic and functionality in design, and I learnt a lot about the importance of collaboration and communication in a multidisciplinary project. It also highlighted the importance of considering the end user experience, as this was the first time a design that I have worked on was displayed/interacted with by the public.'
                ]
            },
            {
                type: 'image',
                images: [
                    { src: amoeba2, caption: 'Final design of the Amoeba Lighting Sculpture', height: '80vh' },
                ],
            },
            {
                type: 'image',
                images: [
                    { src: amoeba3, caption: 'Detail drawing section of a extrusion of the Light', height: '50vh' },
                    { src: amoeba4, caption: 'Cable and connector details', height: '50vh' },
                ],
            },
        ],
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