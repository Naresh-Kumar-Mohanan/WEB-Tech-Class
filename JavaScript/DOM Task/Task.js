const marvelCharacters = [
    {
        name: "Iron Man",
        realName: "Tony Stark",
        image: "https://i.pinimg.com/originals/a1/3b/a4/a13ba41f4153db6900693a7c615a9791.jpg",
        abilities: "Genius-level intellect, Powered armor suit, Flight, Superhuman strength",
        affiliation: "Avengers",
        description: "Billionaire industrialist and genius inventor who creates a powered suit of armor to fight evil."
    },
    {
        name: "Captain America",
        realName: "Steve Rogers",
        image: "https://i.pinimg.com/736x/88/4e/35/884e3573a6b343818f056d6055153202.jpg",
        abilities: "Peak human strength, Enhanced speed and agility, Master martial artist, Vibranium shield",
        affiliation: "Avengers",
        description: "A super-soldier from WWII, frozen in time and awakened to lead the Avengers with his unwavering moral compass."
    },
    {
        name: "Thor",
        realName: "Thor Odinson",
        image: "https://i.pinimg.com/736x/a2/e8/3f/a2e83f3674625b1f3c3a444a9ed5172b.jpg",
        abilities: "Superhuman strength and durability, Control over lightning, Flight, Mjolnir/Stormbreaker",
        affiliation: "Avengers",
        description: "The Asgardian God of Thunder, who wields his enchanted hammer to protect both his home and Earth."
    },
    {
        name: "Hulk",
        realName: "Bruce Banner",
        image: "https://i.pinimg.com/originals/f3/7c/4f/f37c4f625906f3627d353982823b1e3b.jpg",
        abilities: "Limitless superhuman strength, Invulnerability, Regenerative healing factor, Genius-level intellect (as Banner)",
        affiliation: "Avengers",
        description: "A brilliant scientist who, after exposure to gamma radiation, transforms into a giant green rage monster when angered."
    },
    {
        name: "Black Widow",
        realName: "Natasha Romanoff",
        image: "https://i.pinimg.com/736x/b5/0e/b1/b50eb1b4b61d369a4897f29a08a554a4.jpg",
        abilities: "Master spy and assassin, Expert martial artist, Peak human agility, Skilled tactician",
        affiliation: "Avengers",
        description: "A former KGB assassin and S.H.I.E.L.D. agent, her espionage skills are second to none."
    },
    {
        name: "Hawkeye",
        realName: "Clint Barton",
        image: "https://i.pinimg.com/originals/e1/f8/4a/e1f84a51c76c59b20d3f2c5d1341c59c.jpg",
        abilities: "Master archer, Exceptional eyesight, Expert tactician, Skilled martial artist",
        affiliation: "Avengers",
        description: "A master archer and S.H.I.E.L.D. agent who never misses a shot with his high-tech bow and arrows."
    },
    {
        name: "Spider-Man",
        realName: "Peter Parker",
        image: "https://i.pinimg.com/736x/37/3b/22/373b22b05f27e57c8d8b9b47e812fbd7.jpg",
        abilities: "Superhuman strength and agility, Wall-crawling, Spider-sense, Web-shooters",
        affiliation: "Avengers",
        description: "A high-school student who gains spider-like abilities after being bitten by a radioactive spider."
    },
    {
        name: "Black Panther",
        realName: "T'Challa",
        image: "https://i.pinimg.com/736x/32/3f/2f/323f2f5341a99a7b7a2d6736c4b2b691.jpg",
        abilities: "Enhanced strength and senses, Vibranium suit, Master martial artist, Genius-level intellect",
        affiliation: "Avengers",
        description: "The king of the technologically advanced African nation of Wakanda, who protects his people as the Black Panther."
    },
    {
        name: "Doctor Strange",
        realName: "Stephen Strange",
        image: "https://i.pinimg.com/736x/17/f1/35/17f135b974b304620f4b321a6e3d2371.jpg",
        abilities: "Mastery of magic and sorcery, Dimensional travel, Time manipulation (Eye of Agamotto), Flight (Cloak of Levitation)",
        affiliation: "Masters of the Mystic Arts",
        description: "A former neurosurgeon who, after a career-ending accident, discovers the mystic arts and becomes the Sorcerer Supreme."
    },
    {
        name: "Captain Marvel",
        realName: "Carol Danvers",
        image: "https://i.pinimg.com/736x/13/ce/0c/13ce0c6d3283f3a8f15b4e8a75e2474f.jpg",
        abilities: "Superhuman strength and flight, Energy projection and absorption, Cosmic awareness, Durability",
        affiliation: "Avengers",
        description: "A former U.S. Air Force pilot who gains incredible cosmic powers and becomes one of the universe's most powerful heroes."
    },
    {
        name: "Scarlet Witch",
        realName: "Wanda Maximoff",
        image: "https://i.pinimg.com/736x/f6/8f/3e/f68f3e09d581335b62b144214470c2f8.jpg",
        abilities: "Reality warping, Chaos magic, Telekinesis, Energy manipulation",
        affiliation: "Avengers",
        description: "A powerful mutant with the ability to alter reality, whose powers are some of the most formidable in the universe."
    },
    {
        name: "Thanos",
        realName: "Thanos",
        image: "https://i.pinimg.com/736x/3b/ab/e5/3babe5f59048a1922c0611e92d9f10b7.jpg",
        abilities: "Superhuman strength and durability, Genius-level intellect, Matter manipulation, Wielder of the Infinity Gauntlet",
        affiliation: "Black Order",
        description: "A powerful cosmic warlord obsessed with 'balancing' the universe by eliminating half of all life."
    },
    {
        name: "Ant-Man",
        realName: "Scott Lang",
        image: "https://i.pinimg.com/736x/f6/18/2e/f6182e0573c5095e7962b46f56176a75.jpg",
        abilities: "Size manipulation (shrinking and growing), Communication with ants, Superhuman strength (when shrunk)",
        affiliation: "Avengers",
        description: "A skilled thief who takes on the mantle of Ant-Man after acquiring a suit that allows him to change size."
    },
    {
        name: "Winter Soldier",
        realName: "Bucky Barnes",
        image: "https://i.pinimg.com/736x/07/37/11/07371195655523a5477319c520847b2c.jpg",
        abilities: "Expert marksman and assassin, Enhanced strength, Cybernetic arm, Master martial artist",
        affiliation: "Avengers",
        description: "Captain America's childhood friend, presumed dead in WWII, who was brainwashed and turned into a super-assassin."
    },
    {
        name: "Star-Lord",
        realName: "Peter Quill",
        image: "https://i.pinimg.com/736x/d9/3e/5a/d93e5a4f47970c6218d2d6c38237b67b.jpg",
        abilities: "Expert marksman, Skilled pilot and strategist, Celestial DNA (latent power), Peak human condition",
        affiliation: "Guardians of the Galaxy",
        description: "An adventurous outlaw who was abducted from Earth as a child and becomes the leader of a ragtag team of heroes."
    },
    {
        name: "Gamora",
        realName: "Gamora",
        image: "https://i.pinimg.com/736x/6f/93/29/6f93297a9f6e527b1321b1b3b24625b0.jpg",
        abilities: "Superhuman strength and agility, Master martial artist and swordswoman, Regenerative healing, Skilled assassin",
        affiliation: "Guardians of the Galaxy",
        description: "The adopted daughter of Thanos, trained to be the deadliest woman in the galaxy, who rebels to fight for good."
    },
    {
        name: "Groot",
        realName: "Groot",
        image: "https://i.pinimg.com/736x/dd/a7/a5/dda7a552e460b540ada2b47f7d45e6d6.jpg",
        abilities: "Superhuman strength, Elasticity and regeneration, Control over plants, Can grow his body to any size",
        affiliation: "Guardians of the Galaxy",
        description: "A tree-like being whose vocabulary is limited to 'I am Groot', but whose loyalty and power are immense."
    },
    {
        name: "Rocket Raccoon",
        realName: "Rocket",
        image: "https://i.pinimg.com/736x/2b/96/12/2b96129648a4369796863583a3734139.jpg",
        abilities: "Expert marksman, Genius-level intellect in mechanics and engineering, Master tactician",
        affiliation: "Guardians of the Galaxy",
        description: "A genetically engineered raccoon who is a weapons expert and master pilot."
    },
    {
        name: "Drax the Destroyer",
        realName: "Drax",
        image: "https://i.pinimg.com/736x/1f/de/a8/1fdea870503f090a9a11680516b7e61e.jpg",
        abilities: "Superhuman strength and durability, Enhanced senses, Skilled in combat with knives",
        affiliation: "Guardians of the Galaxy",
        description: "A warrior seeking revenge against those who destroyed his family, known for his literal interpretation of language."
    },
    {
        name: "Vision",
        realName: "Vision",
        image: "https://i.pinimg.com/736x/3e/1b/4f/3e1b4f491c01991a03f44490ed4b901a.jpg",
        abilities: "Density manipulation (phasing), Flight, Superhuman strength, Energy beams (from Mind Stone)",
        affiliation: "Avengers",
        description: "An android created from a combination of Ultron's programming, JARVIS's AI, and the Mind Stone."
    }
];
