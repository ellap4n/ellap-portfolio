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
import silicone from '../assets/projectphotos/siliconechamber.jpeg';
import hhsketch from '../assets/projectphotos/hhsketch.png';
import hhsketch2 from '../assets/projectphotos/hhsketch2.png';
import hhinitial1 from '../assets/projectphotos/hhinitial1.png';
import hhinitial2 from '../assets/projectphotos/hhinitial2.png';
import hhinitial3 from '../assets/projectphotos/hhinitial3.png';

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

import housecover from '../assets/projectphotos/housecover.jpeg';
import house1 from '../assets/projectphotos/house1.jpeg';
import house2 from '../assets/projectphotos/house2.jpeg';
import house3 from '../assets/projectphotos/house3.jpeg';
import house4 from '../assets/projectphotos/house4.jpeg';
import house5 from '../assets/projectphotos/house5.jpeg';

import lampcover from '../assets/projectphotos/lampcover.jpeg';
import lampwip1 from '../assets/projectphotos/lampwip1.jpeg';
import lampwip2 from '../assets/projectphotos/lampwip2.jpeg';
import lampwip3 from '../assets/projectphotos/lampwip3.jpeg';

import armcover from '../assets/projectphotos/armcover.jpeg';
import arm1 from '../assets/projectphotos/arm1.jpeg';
import arm2 from '../assets/projectphotos/arm2.jpeg';
import arm3 from '../assets/projectphotos/arm3.jpeg';
import arm4 from '../assets/projectphotos/arm4.jpeg';
import arm5 from '../assets/projectphotos/arm5.jpeg';


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
        date: "2026",
        category: "personal",
        featured_description: "Designing the chambers and outer casing of a Total Artificial Heart prototype as part of UoA's first Heart Hackathon.",
        description:
            "Selected for UoA's first ever Heart Hackathon Team, designing and manufacturing a Total Artificial Heart (TAH) prototype.",
        cover: hearth,
        mainimage: hearth4,
        mainvideo: null,
        body: [
            {
                type: 'text',
                content: "As part of the mechanical team, I'm responsible for the TAH's blood chambers, pumping diaphragm, and outer casing to satisfy strict biocompatibility, hydraulic, and anatomical fit requirements. My contributions have been across concept and physical modelling through to CAD, manufacturing, and validation."
            },
            {
                type: 'list', items: [
                    'Led the ideation and geometry design of the blood chambers: I reviewed the working heart and existing TAH models, resulting in a ventricle-only relying on valves for one-way flow, then developed a vortex-inspired internal geometry drawing on flow patterns in shark intestines and the natural heart.',
                    'Took the chamber from sculpted clay model to physical prototype: 3D-scanned and cleaned the sculpted mesh, then rebuilt it in Fusion 360 with a shelled wall and standardised inlet/outlet ports. A 3D-printed volume prototype validated the design against our 50-100 mL stroke-volume requirement, measuring 62 mL.',
                    'Designed and iterated the pumping diaphragm through two geometries, moving from a cup profile (higher volume but prone to tearing under cyclic motion) to a concaved-cone profile for better self-alignment and reduced stress concentration.',
                    'Identified the hard-to-soft chamber-diaphragm interface as the key failure risk, since clamping and bolting both introduced failure modes across a very tight bond area. Resolved it by redesigning the chamber as an enveloped soft membrane, structurally supported by an external rigid casing that removes the joint entirely.',
                    'Currently leading the design of the external casing, which evolved from a purely structural motor/electronics enclosure into a load-bearing component after a moulding failure exposed the chamber glued seam as a weak point.',
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
                content: "After iterating from a simple bolted ring through a full bounding solid, the casing settled on a four-piece, modular housing. Key design decisions include:"
            },
            {
                type: 'list', items: [
                    'Rounded edges to reduce puncture risk against the adjacent lungs.',
                    'A circular cross-section to distribute blunt-force impact more evenly than flat faces.',
                    'Internal fasteners to keep bolts from being exposed.',
                    'A modular top/bottom/central split to simplify surgical access without disturbing the chamberscompressive support.',
                ]
            },
            {
                type: 'text',
                content: "Manufacturing has been an equally valuable part of this project, giving me hands-on experience with silicone injection molding for complex, hollow geometry. Early molds needed three to four pieces to capture the inlet/outlet pieces. This experience has sharpened my understanding of how material choice, tooling, and geometry trade off against each other in manufacturing practice.",
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
                    { src: hearth5, caption: 'Mold Tool CAD' },
                    { src: silicone, caption: 'First Silicone Chamber Prototype' },
                ],
            },
            {
                type: 'text',
                content: "This project has been my first real exposure to designing for the human body. I learnt alot about designing for patient needs, whether that's puncture risk against the lungs or how a surgeon would actually access the device. With the casing design still in progress, our next steps are finite element stress analysis on the chambers, physical durability testing, and testing with the Hemaloop team to properly validate the performance of the TAH.",
            },
            {
                type: 'image',
                images: [
                    { src: hhinitial1 },
                    { src: hhinitial2, caption: 'Initial Working Sketches of the TAH' },
                    { src: hhinitial3 },
                ],
            },
            {
                type: 'image',
                images: [
                    { src: hhsketch, caption: 'Further Sketches and Ideation' },
                    { src: hhsketch2, caption: 'Initial Scotch Yoke Mechanism' },
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
            {
                type: 'image',
                images: [
                    { src: xy2, caption: 'Final XY Plotter Design', height: '80vh' },
                ],
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
                    { src: warman1, caption: 'Testing the drive train' },
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
        id: 11,
        title: "Ceramic Lamp",
        subtitle: "FINEARTS 231",
        date: "October 2025",
        category: "uni",
        description:
            "I extended my Fine Arts Final Project (final piece in gallery page), soldering and wiring a LED light to make it a functional lamp. This was technically quite simple, but the difficulty lay in the consideration of the part to not affect functionality nor aesethetics of the piece. I also had to consider the safety of the lamp, and how to make it safe for use in a home environment.",
        cover: lampcover,
        mainimage: null,
        body: [
            {
                type: 'text',
                content:
                    "I extended my Fine Arts Final Project (final piece in gallery page), soldering and wiring a LED light to make it a functional lamp. This was technically quite simple, but the difficulty lay in the consideration of the part to not affect functionality nor aesethetics of the piece. I also had to consider the safety of the lamp, and how to make it safe for use in a home environment.",
            },
            {
                type: 'image',
                images: [
                    { src: lampwip1, caption: 'Pre Fired' },
                    { src: lampwip2, caption: 'Post Fired' },
                    { src: lampwip3, caption: 'Hand Coiled Structure' },
                ],
            },
            {
                type: 'text',
                content:
                    "The lamp itself was sculpted using a hand-coil technique, which required a surprising amount of structural consideration to ensure that the piece would not collapse while drying, or in the kiln. The next step would be to test the LED light and wiring to ensure that it is safe for a home environment.",
            }
        ],
        featured: false,
    },
    {
        id: 10,
        title: "Sleepout Building Construction",
        subtitle: "Personal Project",
        date: "2019-2021",
        category: "personal",
        description:
            "Built a sleepout in my backyard, from the ground up. This was a project completed with my dad, where we worked from design plans till completion.",
        cover: housecover,
        mainimage: null,
        body: [
            {
                type: 'text',
                content:
                    "Built a sleepout in my backyard, from the ground up. This was a project completed with my dad, where we worked from design plans till completion. It was constructed underneath private build restrictions, and I was in charge of the planning, verifying, and resourcing materials for the construction.",
            },
            {
                type: 'list',
                items: [
                    'This was a turning point in my life that directed me towards consideration of a engineering career. I enjoyed the process of designing, all the way to construction, discovering my passion for practical applicated work.',
                    'All the construction was completed by hand, and I learnt, and am confident in the use of tools such as a bench/hand saws, drills, mains wiring, constructing piles for foundation and more.',
                    'I also painted and furnished the sleepout, which was a great opportunity to learn about interior design and how to create a comfortable and functional space.',
                ],
            },
            {
                type: 'image',
                images: [
                    { src: house2, caption: 'Window Frame Installation', height: '50vh' },
                    { src: house3, caption: 'Painting the interior', height: '50vh' },
                ],
            },
            {
                type: 'image',
                images: [
                    { src: house5, caption: 'My Dad and I in front of the sleepout deck steps in 2021!', height: '90vh' },
                ],
            },
            {
                type: 'text',
                content: 'A extension of this was the design of our new kitchen in 2022. I drafted the plans using floorplanner and revit, and worked with the engineer to ensure the design was feasible given the existing structure. I also got to assist the builders in some fun odd jobs! I enjoyed learning to lay tiles, install cabinets and gutter connections, and more.'
            },
            {
                type: 'image',
                images: [
                    { src: house1, caption: 'Demolishing Old Kitchen Walls', height: '50vh' },
                    { src: house4, caption: 'Kitchen Design 3D Render', height: '50vh' },
                ],
            }
        ],
        featured: false,
    },
    {
        id: 12,
        title: "Clay Hand Sculpture",
        subtitle: "Work for Exhibition",
        date: "Jan - Feb 2026",
        category: "personal",
        description:
            "This was a personal piece for an exhibition, where the clay is sculpted around an embedded wire armature. (See Final Art Piece in Gallery). I self-taught, through experimentation, how to use a wire armature as a structural, and form support for a clay sculpture.",
        cover: armcover,
        mainimage: null,
        body: [
            {
                type: 'text',
                content:
                    "This was a personal piece for an exhibition, where the clay is sculpted around an embedded wire armature. (See Final Art Piece in Gallery). I self-taught, through experimentation, how to use a wire armature as a structural, and form support for a clay sculpture.",
            },
            {
                type: 'image',
                images: [
                    { src: arm1, caption: 'Wire Armature' },
                    { src: arm2, caption: 'Foil Wrapping' },
                    { src: arm3, caption: 'Adding Clay over the Armature' },
                ],
            },
            {
                type: 'image',
                images: [
                    { src: arm4, caption: 'Before Surface texturing', height: '50vh' },
                    { src: arm5, caption: 'Working on the Forearm Section', height: '50vh' },
                ],
            },
            {
                type: 'list',
                items: [
                    'Anatomic studies were conducted to understand the underlying bone structure for armature, and muscle structure for the foil elements.',
                    'Key learning was the use of materials for the correct job. This applies to both Art and Engineering - my sculpture started to crack, for which was able to be resolved artistically, but would have been a structural failure in an engineering application. This highlighted the importance of understanding the material properties, and how to use them effectively.',
                    'I like to also mention that I used force and moment calculations to calibrate the maximum lean angle of the arm for it to be a self supporting structure. This was a bit more difficult than your average static application, as the volume mass of clay is not uniform, and constantly being added and removed, so the approximate angle to set the armature was first calculated to about 12 degrees.',
                    'This was then adjusted once the clay had been sculpted. The challenge here was to make the structural support clay regions blend seamlessly with the lifelike form of the sculpture.',

                ]
            }
        ],
        featured: false,
    },
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