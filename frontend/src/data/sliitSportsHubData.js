const buildContact = (name, email, phone = '+94 7X XXX XXXX') => ({
  name,
  email,
  phone
})

export const publicNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'Sports & Clubs', to: '/sports-clubs' },
  { label: 'Join a Team', to: '/join-team' },
  { label: 'Matches', to: '/matches' },
  { label: 'Players', to: '/players' },
  { label: 'Facilities', to: '/facilities' }
]

export const homeStats = [
  { label: 'Sports', value: '21' },
  { label: 'Clubs & Societies', value: '9' },
  { label: 'Teams', value: '40+' },
  { label: 'Athletes', value: '500+' },
  { label: 'Platform', value: '1' }
]

export const featureHighlights = [
  {
    title: 'Sports, Clubs & Teams',
    description: 'One structured hub for every university sporting pathway and student-led group.',
    icon: '🏟️'
  },
  {
    title: 'Clubs & Societies Directory',
    description: 'Browse verified leadership contacts and find the right society for your interests.',
    icon: '🧭'
  },
  {
    title: 'Match Schedules & Live Results',
    description: 'Track live fixtures, upcoming contests, and recent scores across the calendar.',
    icon: '📅'
  },
  {
    title: 'Player Information',
    description: 'Search captains, vice captains, and active players by name or sport.',
    icon: '🧑‍💼'
  },
  {
    title: 'Join a Team',
    description: 'Contact captains and vice captains directly to ask about trials and practice sessions.',
    icon: '📩'
  },
  {
    title: 'Facilities Booking',
    description: 'See availability for courts, grounds, and gym facilities before making a request.',
    icon: '🏋️'
  },
  {
    title: 'Structured Navigation',
    description: 'Move between sports, schedules, players, and facilities through a clear public layout.',
    icon: '🗂️'
  }
]

export const sports = [
  {
    id: 'badminton',
    name: 'Badminton',
    icon: '🏸',
    team: 'SLIIT Shuttle Force',
    description: 'A fast-paced competitive squad focused on singles and doubles excellence across inter-university meets.',
    captain: buildContact('Sadeepa Jayakody', 'sadeepa.badminton@sliit.lk', '+94 71 246 5184'),
    viceCaptain: buildContact('Hasini Edirisinghe', 'hasini.badminton@sliit.lk', '+94 77 320 6182'),
    secretary: buildContact('Yasasmi Gunawardena', 'yasasmi.badminton@sliit.lk', '+94 76 458 2114'),
    president: buildContact('Sajith Malinda', 'sajith.badminton@sliit.lk', '+94 75 619 2471')
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: '🏀',
    team: 'SLIIT Hoops',
    description: 'A high-energy basketball program developing quick transitions, tactical play, and competitive depth.',
    captain: buildContact('Kavisha Senarath', 'kavisha.basketball@sliit.lk', '+94 77 451 2230'),
    viceCaptain: buildContact('Tharusha Hettiarachchi', 'tharusha.basketball@sliit.lk', '+94 71 408 6641'),
    secretary: buildContact('Yenuli Samarasinghe', 'yenuli.basketball@sliit.lk', '+94 76 312 5582'),
    president: buildContact('Dineth Maduranga', 'dineth.basketball@sliit.lk', '+94 75 550 9314')
  },
  {
    id: 'carrom',
    name: 'Carrom',
    icon: '🎯',
    team: 'SLIIT Carrom Circle',
    description: 'Precision-focused indoor competitors representing SLIIT in tactical board sport championships.',
    captain: buildContact('Ruchira Wijesekara', 'ruchira.carrom@sliit.lk', '+94 71 620 4831'),
    viceCaptain: buildContact('Bimasha Perera', 'bimasha.carrom@sliit.lk', '+94 77 296 4005'),
    secretary: buildContact('Kanishka Abeysinghe', 'kanishka.carrom@sliit.lk', '+94 76 573 6241'),
    president: buildContact('Dulanga Fernando', 'dulanga.carrom@sliit.lk', '+94 75 742 3169')
  },
  {
    id: 'chess',
    name: 'Chess',
    icon: '♟️',
    team: 'SLIIT Grandmasters',
    description: 'Analytical and strategic thinkers competing in rapid, blitz, and classic university chess events.',
    captain: buildContact('Vihanga Bandaranayake', 'vihanga.chess@sliit.lk', '+94 71 238 9174'),
    viceCaptain: buildContact('Sachini Peiris', 'sachini.chess@sliit.lk', '+94 77 432 5139'),
    secretary: buildContact('Nuwan Wickremaarachchi', 'nuwan.chess@sliit.lk', '+94 76 621 1278'),
    president: buildContact('Tharushi Rajapakse', 'tharushi.chess@sliit.lk', '+94 75 383 8407')
  },
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    team: 'SLIIT Cricketers',
    description: 'A flagship university cricket side balancing competitive fixtures, skill development, and team culture.',
    captain: buildContact('Malith Fernando', 'malith.cricket@sliit.lk', '+94 71 234 5678'),
    viceCaptain: buildContact('Chathura Gunasekara', 'chathura.cricket@sliit.lk', '+94 77 345 6789'),
    secretary: buildContact('Isuri Perera', 'isuri.cricket@sliit.lk', '+94 76 452 1190'),
    president: buildContact('Nadeesha Iddamalgoda', 'nadeesha.cricket@sliit.lk', '+94 75 618 4276')
  },
  {
    id: 'football',
    name: 'Football',
    icon: '⚽',
    team: 'SLIIT FC',
    description: 'The university football program bringing together disciplined training, league competition, and team spirit.',
    captain: buildContact('Ravindu Silva', 'ravindu.football@sliit.lk', '+94 71 672 3385'),
    viceCaptain: buildContact('Kasun Niroshan', 'kasun.football@sliit.lk', '+94 77 309 8472'),
    secretary: buildContact('Nimesha Jayasena', 'nimesha.football@sliit.lk', '+94 76 665 4179'),
    president: buildContact('Thaveesha Kulasekara', 'thaveesha.football@sliit.lk', '+94 75 204 9511')
  },
  {
    id: 'futsal',
    name: 'Futsal',
    icon: '🥅',
    team: 'SLIIT Indoor Strikers',
    description: 'Compact, high-intensity futsal specialists trained for quick movement, pressure play, and sharp finishing.',
    captain: buildContact('Janidu Ranasinghe', 'janidu.futsal@sliit.lk', '+94 71 357 2491'),
    viceCaptain: buildContact('Piumi Karunarathne', 'piumi.futsal@sliit.lk', '+94 77 421 9382'),
    secretary: buildContact('Akeel Nazeer', 'akeel.futsal@sliit.lk', '+94 76 592 3071'),
    president: buildContact('Savin Ekanayake', 'savin.futsal@sliit.lk', '+94 75 811 2640')
  },
  {
    id: 'hockey',
    name: 'Hockey',
    icon: '🏑',
    team: 'SLIIT Stick Masters',
    description: 'A technically sharp hockey squad focusing on teamwork, speed, and disciplined defensive structures.',
    captain: buildContact('Umeshka Peris', 'umeshka.hockey@sliit.lk', '+94 71 516 4832'),
    viceCaptain: buildContact('Ruvindi Senanayake', 'ruvindi.hockey@sliit.lk', '+94 77 310 5724'),
    secretary: buildContact('Dilhara Nanayakkara', 'dilhara.hockey@sliit.lk', '+94 76 641 9328'),
    president: buildContact('Charuka Dissanayake', 'charuka.hockey@sliit.lk', '+94 75 462 1837')
  },
  {
    id: 'karate',
    name: 'Karate',
    icon: '🥋',
    team: 'SLIIT Karate Dojo',
    description: 'A disciplined martial arts team building strength, timing, and technique through structured training.',
    captain: buildContact('Thisara Jayawardena', 'thisara.karate@sliit.lk', '+94 71 288 5326'),
    viceCaptain: buildContact('Buvini Rodrigo', 'buvini.karate@sliit.lk', '+94 77 498 2504'),
    secretary: buildContact('Madhusha Weerakoon', 'madhusha.karate@sliit.lk', '+94 76 341 6078'),
    president: buildContact('Ravishka Lakshan', 'ravishka.karate@sliit.lk', '+94 75 390 2716')
  },
  {
    id: 'mma',
    name: 'MMA',
    icon: '🥊',
    team: 'SLIIT Fight Lab',
    description: 'A mixed martial arts program for students training in conditioning, grappling fundamentals, and striking.',
    captain: buildContact('Omalka Jayasinghe', 'omalka.mma@sliit.lk', '+94 71 606 4415'),
    viceCaptain: buildContact('Keshani Alwis', 'keshani.mma@sliit.lk', '+94 77 259 3354'),
    secretary: buildContact('Maneesha De Zoysa', 'maneesha.mma@sliit.lk', '+94 76 753 1488'),
    president: buildContact('Dinura Weerasekara', 'dinura.mma@sliit.lk', '+94 75 615 4893')
  },
  {
    id: 'netball',
    name: 'Netball',
    icon: '🏐',
    team: 'SLIIT Netball Squad',
    description: 'A competitive netball unit known for pace, structured transitions, and strong court communication.',
    captain: buildContact('Shalani Wickramasuriya', 'shalani.netball@sliit.lk', '+94 71 451 6308'),
    viceCaptain: buildContact('Imesha Gunarathne', 'imesha.netball@sliit.lk', '+94 77 567 2240'),
    secretary: buildContact('Tharuka Karunatilake', 'tharuka.netball@sliit.lk', '+94 76 315 9291'),
    president: buildContact('Nethmi Abeynayake', 'nethmi.netball@sliit.lk', '+94 75 723 8864')
  },
  {
    id: 'pickleball',
    name: 'Pickleball',
    icon: '🏓',
    team: 'SLIIT Pickleball Club',
    description: 'An emerging racket sport community mixing sharp reflexes, accessibility, and social competition.',
    captain: buildContact('Nethma Jayasooriya', 'nethma.pickleball@sliit.lk', '+94 71 913 6024'),
    viceCaptain: buildContact('Ravindu Perera', 'ravindu.pickleball@sliit.lk', '+94 77 305 2281'),
    secretary: buildContact('Dilini Bandara', 'dilini.pickleball@sliit.lk', '+94 76 470 1638'),
    president: buildContact('Sethmi Malwarachchi', 'sethmi.pickleball@sliit.lk', '+94 75 286 9041')
  },
  {
    id: 'rifle-shooting',
    name: 'Rifle Shooting',
    icon: '🎯',
    team: 'SLIIT Sharpshooters',
    description: 'A precision-focused team emphasizing control, mental focus, and consistent marksmanship.',
    captain: buildContact('Hashen Rajakaruna', 'hashen.rifle@sliit.lk', '+94 71 392 6801'),
    viceCaptain: buildContact('Yashoda Mendis', 'yashoda.rifle@sliit.lk', '+94 77 504 9176'),
    secretary: buildContact('Pasindu Amarasinghe', 'pasindu.rifle@sliit.lk', '+94 76 742 6355'),
    president: buildContact('Chamodi Liyanage', 'chamodi.rifle@sliit.lk', '+94 75 604 4829')
  },
  {
    id: 'rugby',
    name: 'Rugby',
    icon: '🏉',
    team: 'SLIIT Thunder Rugby',
    description: 'A tough, resilient rugby outfit built on physical preparation, teamwork, and leadership on the field.',
    captain: buildContact('Gehan Dilhara', 'gehan.rugby@sliit.lk', '+94 71 410 5028'),
    viceCaptain: buildContact('Mihin Siriwardena', 'mihin.rugby@sliit.lk', '+94 77 627 1385'),
    secretary: buildContact('Shanaka Kumara', 'shanaka.rugby@sliit.lk', '+94 76 519 4067'),
    president: buildContact('Tharushi Pathirana', 'tharushi.rugby@sliit.lk', '+94 75 301 5543')
  },
  {
    id: 'swimming',
    name: 'Swimming',
    icon: '🏊',
    team: 'SLIIT Aquatics',
    description: 'An aquatic sports group covering pool training, endurance work, and meet preparation across strokes.',
    captain: buildContact('Dineshka Gamage', 'dineshka.swimming@sliit.lk', '+94 71 333 6920'),
    viceCaptain: buildContact('Hirushi Samaranayake', 'hirushi.swimming@sliit.lk', '+94 77 574 2380'),
    secretary: buildContact('Akila Wijeratne', 'akila.swimming@sliit.lk', '+94 76 230 4851'),
    president: buildContact('Thilina Basnayake', 'thilina.swimming@sliit.lk', '+94 75 812 3992')
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    icon: '🏓',
    team: 'SLIIT Spin Masters',
    description: 'A quick-reaction table tennis unit focused on precision placement, control, and tournament play.',
    captain: buildContact('Vidura Herath', 'vidura.tabletennis@sliit.lk', '+94 71 781 2216'),
    viceCaptain: buildContact('Pabasari Ekanayaka', 'pabasari.tabletennis@sliit.lk', '+94 77 613 8205'),
    secretary: buildContact('Kusal Devapriya', 'kusal.tabletennis@sliit.lk', '+94 76 428 5163'),
    president: buildContact('Nipunika Sandaruwani', 'nipunika.tabletennis@sliit.lk', '+94 75 492 7140')
  },
  {
    id: 'taekwondo',
    name: 'Taekwondo',
    icon: '🥋',
    team: 'SLIIT Taekwondo Unit',
    description: 'A martial arts team developing discipline, flexibility, and striking technique through regular sessions.',
    captain: buildContact('Shavindu Madushanka', 'shavindu.taekwondo@sliit.lk', '+94 71 459 1750'),
    viceCaptain: buildContact('Nethmi Weerasinghe', 'nethmi.taekwondo@sliit.lk', '+94 77 380 9217'),
    secretary: buildContact('Chamathka Pathiraja', 'chamathka.taekwondo@sliit.lk', '+94 76 614 7402'),
    president: buildContact('Ishara Dilrukshi', 'ishara.taekwondo@sliit.lk', '+94 75 570 4184')
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: '🎾',
    team: 'SLIIT Court Elite',
    description: 'A balanced tennis program for singles and doubles competitors training for university circuit events.',
    captain: buildContact('Kaveen Mahindapala', 'kaveen.tennis@sliit.lk', '+94 71 217 8832'),
    viceCaptain: buildContact('Yasangi Dias', 'yasangi.tennis@sliit.lk', '+94 77 641 5924'),
    secretary: buildContact('Rashmi Warnakulasuriya', 'rashmi.tennis@sliit.lk', '+94 76 507 2460'),
    president: buildContact('Shehan Wickramatilake', 'shehan.tennis@sliit.lk', '+94 75 368 7512')
  },
  {
    id: 'track-and-field',
    name: 'Track And Field',
    icon: '🏃',
    team: 'SLIIT Track Stars',
    description: 'A broad athletics program spanning sprints, relays, field events, endurance, and performance coaching.',
    captain: buildContact('Nisal Peramuna', 'nisal.track@sliit.lk', '+94 71 690 2144'),
    viceCaptain: buildContact('Keshara Illangakoon', 'keshara.track@sliit.lk', '+94 77 538 9021'),
    secretary: buildContact('Dewmini Karaliyadda', 'dewmini.track@sliit.lk', '+94 76 279 8653'),
    president: buildContact('Kasuni Dahanayake', 'kasuni.track@sliit.lk', '+94 75 406 1387')
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    icon: '🏐',
    team: 'SLIIT Spikers',
    description: 'An energetic volleyball squad developing sharp rotations, fast attacks, and resilient defense.',
    captain: buildContact('Vikum Rathnayaka', 'vikum.volleyball@sliit.lk', '+94 71 534 4478'),
    viceCaptain: buildContact('Gihani Nawarathna', 'gihani.volleyball@sliit.lk', '+94 77 284 6192'),
    secretary: buildContact('Dulaj Samarakoon', 'dulaj.volleyball@sliit.lk', '+94 76 753 4112'),
    president: buildContact('Thilini Bandara', 'thilini.volleyball@sliit.lk', '+94 75 563 2070')
  },
  {
    id: 'water-polo',
    name: 'Water Polo',
    icon: '🤽',
    team: 'SLIIT Aqua Warriors',
    description: 'A physically demanding aquatic team focused on tactical movement, endurance, and fast-paced play.',
    captain: buildContact('Lasith De Alwis', 'lasith.waterpolo@sliit.lk', '+94 71 884 2451'),
    viceCaptain: buildContact('Hiruni Ranasinghe', 'hiruni.waterpolo@sliit.lk', '+94 77 472 1930'),
    secretary: buildContact('Kavinda Senanayake', 'kavinda.waterpolo@sliit.lk', '+94 76 315 0084'),
    president: buildContact('Amandi Cooray', 'amandi.waterpolo@sliit.lk', '+94 75 648 3205')
  }
]

export const clubs = [
  {
    id: 'sliit-aiesec',
    name: 'SLIIT AIESEC',
    icon: '🌍',
    description: 'Global youth leadership organization focused on leadership development and international exchange programs.',
    president: buildContact('Tharindu Wickramasinghe', 'president.aiesec@sliit.lk'),
    secretary: buildContact('Dilini Perera', 'secretary.aiesec@sliit.lk')
  },
  {
    id: 'sliit-leo-club',
    name: 'SLIIT LEO Club',
    icon: '🦁',
    description: 'Community service and volunteering club under Lions International, focused on youth development.',
    president: buildContact('Kasun Bandara', 'president.leo@sliit.lk'),
    secretary: buildContact('Nimasha Fernando', 'secretary.leo@sliit.lk')
  },
  {
    id: 'foc-media-unit',
    name: 'SLIIT Faculty Of Computing Media Unit',
    icon: '📸',
    description: 'Official media unit handling photography, videography, and content for Faculty of Computing events.',
    president: buildContact('Kavindu Rathnayake', 'president.focmedia@sliit.lk'),
    secretary: buildContact('Sanduni Jayawardena', 'secretary.focmedia@sliit.lk')
  },
  {
    id: 'foe-media-unit',
    name: 'SLIIT Faculty Of Engineering Media Unit',
    icon: '🎥',
    description: 'Official media unit handling photography, videography, and content for Faculty of Engineering events.',
    president: buildContact('Tharaka Bandara', 'president.foemedia@sliit.lk'),
    secretary: buildContact('Nimesha Cooray', 'secretary.foemedia@sliit.lk')
  },
  {
    id: 'ieee-student-branch',
    name: 'IEEE Student Branch of SLIIT',
    icon: '⚡',
    description: 'Technical society for engineering and technology students, organizing workshops, seminars, and competitions.',
    president: buildContact('Ravindu Jayasena', 'president.ieee@sliit.lk'),
    secretary: buildContact('Sachini Rathnayake', 'secretary.ieee@sliit.lk')
  },
  {
    id: 'engineering-research-club',
    name: 'SLIIT Engineering Research and Innovation Club',
    icon: '🔬',
    description: 'Promotes research, innovation, and entrepreneurship among engineering students.',
    president: buildContact('Ashen Wickramasinghe', 'president.eric@sliit.lk'),
    secretary: buildContact('Dulani Herath', 'secretary.eric@sliit.lk')
  },
  {
    id: 'art-circle-sliit',
    name: 'Art Circle SLIIT',
    icon: '🎨',
    description: 'Creative arts club for students interested in drawing, painting, digital art, and visual expression.',
    president: buildContact('Dilanka Silva', 'president.artcircle@sliit.lk'),
    secretary: buildContact('Hiruni Perera', 'secretary.artcircle@sliit.lk')
  },
  {
    id: 'sliit-drama-society',
    name: 'SLIIT Drama Society',
    icon: '🎭',
    description: 'Performing arts club focused on theatre, stage productions, and dramatic arts.',
    president: buildContact('Chamara De Silva', 'president.drama@sliit.lk'),
    secretary: buildContact('Oshadi Kumara', 'secretary.drama@sliit.lk')
  },
  {
    id: 'sliit-student-chapter',
    name: 'SLIIT Student Chapter',
    icon: '🎓',
    description: 'Official student representative body coordinating student activities and welfare.',
    president: buildContact('Piyumi Kodithuwakku', 'president.studentchapter@sliit.lk'),
    secretary: buildContact('Ruwan De Silva', 'secretary.studentchapter@sliit.lk')
  }
]

export const matches = [
  {
    id: 'match-live-football',
    sport: 'Football',
    homeTeam: 'SLIIT FC',
    awayTeam: 'UoM Rangers',
    score: '2-1',
    status: 'live',
    liveNote: "63'",
    date: 'Thu 26 Mar',
    time: '6:30 PM',
    venue: 'SLIIT Main Ground'
  },
  {
    id: 'match-live-basketball',
    sport: 'Basketball',
    homeTeam: 'SLIIT Hoops',
    awayTeam: 'IIT Eagles',
    score: '58-52',
    status: 'live',
    liveNote: 'Q3',
    date: 'Thu 26 Mar',
    time: '5:45 PM',
    venue: 'Indoor Arena'
  },
  {
    id: 'match-live-water-polo',
    sport: 'Water Polo',
    homeTeam: 'SLIIT Aqua Warriors',
    awayTeam: 'NSBM Waves',
    score: '4-3',
    status: 'live',
    liveNote: 'Q2',
    date: 'Thu 26 Mar',
    time: '4:30 PM',
    venue: 'Aquatic Complex'
  },
  {
    id: 'match-upcoming-volleyball',
    sport: 'Volleyball',
    homeTeam: 'SLIIT Volleyball',
    awayTeam: 'Mora Strikers',
    status: 'upcoming',
    date: 'Sat 29 Mar',
    time: '2:00 PM',
    venue: 'SLIIT Sports Hall'
  },
  {
    id: 'match-upcoming-badminton',
    sport: 'Badminton',
    homeTeam: 'SLIIT Badminton',
    awayTeam: 'CINEC Smashers',
    status: 'upcoming',
    date: 'Sun 30 Mar',
    time: '10:00 AM',
    venue: 'Indoor Courts'
  },
  {
    id: 'match-upcoming-pickleball',
    sport: 'Pickleball',
    homeTeam: 'SLIIT Pickleball Club',
    awayTeam: 'IIT Smashers',
    status: 'upcoming',
    date: 'Tue 01 Apr',
    time: '3:00 PM',
    venue: 'Outdoor Court 2'
  },
  {
    id: 'match-result-football',
    sport: 'Football',
    homeTeam: 'SLIIT FC',
    awayTeam: 'Sabaragamuwa FC',
    score: '3-0',
    status: 'result',
    date: '22 Mar',
    time: '4:00 PM',
    venue: 'University League Ground'
  },
  {
    id: 'match-result-chess',
    sport: 'Chess',
    homeTeam: 'SLIIT Chess',
    awayTeam: 'NSBM Grandmasters',
    score: '4.5-1.5',
    status: 'result',
    date: '18 Mar',
    time: '9:00 AM',
    venue: 'Student Centre'
  },
  {
    id: 'match-result-swimming',
    sport: 'Swimming',
    homeTeam: 'SLIIT Aquatics',
    awayTeam: 'UoC Waves',
    score: '1st Place',
    status: 'result',
    date: '15 Mar',
    time: '8:00 AM',
    venue: 'Aquatic Championship Pool'
  }
]

const playerMembers = [
  {
    id: 'member-football-1',
    name: 'Lahiru Perera',
    sport: 'Football',
    role: 'Member',
    batch: 'IT22',
    email: 'lahiru.member@sliit.lk'
  },
  {
    id: 'member-cricket-1',
    name: 'Dinuka Peiris',
    sport: 'Cricket',
    role: 'Member',
    batch: 'IT23',
    email: 'dinuka.member@sliit.lk'
  },
  {
    id: 'member-basketball-1',
    name: 'Yashoda Abeykoon',
    sport: 'Basketball',
    role: 'Member',
    batch: 'IT21',
    email: 'yashoda.member@sliit.lk'
  },
  {
    id: 'member-swimming-1',
    name: 'Chethmi Jayasinghe',
    sport: 'Swimming',
    role: 'Member',
    batch: 'IT22',
    email: 'chethmi.member@sliit.lk'
  },
  {
    id: 'member-rugby-1',
    name: 'Sahan Madusanka',
    sport: 'Rugby',
    role: 'Member',
    batch: 'IT20',
    email: 'sahan.member@sliit.lk'
  },
  {
    id: 'member-track-1',
    name: 'Savini Gunatilake',
    sport: 'Track And Field',
    role: 'Member',
    batch: 'IT24',
    email: 'savini.member@sliit.lk'
  }
]

export const players = [
  ...sports.flatMap((sport) => ([
    {
      id: `${sport.id}-captain`,
      name: sport.captain.name,
      sport: sport.name,
      role: 'Captain',
      email: sport.captain.email,
      phone: sport.captain.phone
    },
    {
      id: `${sport.id}-vice-captain`,
      name: sport.viceCaptain.name,
      sport: sport.name,
      role: 'Vice Captain',
      email: sport.viceCaptain.email,
      phone: sport.viceCaptain.phone
    }
  ])),
  ...playerMembers
]

export const facilityOverview = [
  {
    title: 'Book grounds and courts',
    description: 'Students can reserve football grounds, futsal courts, badminton courts, and tennis spaces for supervised practice.'
  },
  {
    title: 'Reserve gym access',
    description: 'View peak periods, choose preferred windows, and submit booking requests for the university gym.'
  },
  {
    title: 'Check available slots',
    description: 'Use the availability board to see open, limited, and booked time slots before planning your session.'
  }
]

export const facilityAvailability = [
  {
    facility: 'Main Ground',
    slots: [
      { time: '6:00 AM', status: 'Open' },
      { time: '9:00 AM', status: 'Booked' },
      { time: '4:00 PM', status: 'Limited' }
    ]
  },
  {
    facility: 'Indoor Court 1',
    slots: [
      { time: '8:00 AM', status: 'Limited' },
      { time: '1:00 PM', status: 'Open' },
      { time: '6:00 PM', status: 'Booked' }
    ]
  },
  {
    facility: 'Gym Floor',
    slots: [
      { time: '7:00 AM', status: 'Open' },
      { time: '12:00 PM', status: 'Open' },
      { time: '5:00 PM', status: 'Limited' }
    ]
  },
  {
    facility: 'Aquatic Complex',
    slots: [
      { time: '6:30 AM', status: 'Booked' },
      { time: '2:00 PM', status: 'Limited' },
      { time: '7:00 PM', status: 'Open' }
    ]
  }
]

export const featuredSports = [sports[4], sports[5], sports[11], sports[20]]
export const featuredClubs = [clubs[0], clubs[4], clubs[6]]
