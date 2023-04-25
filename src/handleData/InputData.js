export const entities = [
  {
    id: 'HKU',
    name:"University of Hong Kong",
    code:"HKU",
    url:"https://www.hku.hk/",
    LOs: [
      {
        shortName: "LO 1",
        name: " Pursuit of academic/professional excellence, critical intellectual inquiry and life-long learning",
        descriptions: [
          "Develop in-depth knowledge of specialist disciplines and professions",
          "Maintain highest standards of intellectual rigor and academic integrity",
          "Critique and apply received knowledge from multiple perspectives",
          "Sustain intellectual curiosity and enthusiasm for learning"
        ]
      },
      {
        shortName: "LO 2",
        name: "Tackling novel situations and ill-defined problems",
        descriptions: [
          "Respond positively to unanticipated situations and problems",
          "Identify and define problems in unfamiliar situations",
          "Generate and evaluate innovative solutions to problem"
        ]
      },
      {
        shortName: "LO 3",
        name: "Critical self-reflection, greater understanding of others, and upholding personal and professional ethics",
        descriptions: [
          "Maintain highest standards of personal integrity and ethical practice in academic, social and professional settings",
          "Heighten awareness of personal strengths and weaknesses",
          "Respect individual differences and preferences"
        ]
      },
      {
        shortName: "LO 4",
        name: "Intercultural communication, and global citizenship",
        descriptions: [
          "Heighten awareness of own culture and other cultures",
          "Develop cultural sensitivity and interpersonal skills for engagement with people of diverse cultures",
          "Perform social responsibilities as a member of the global community"
        ]
      },
      {
        shortName: "LO 5",
        name: "Communication and collaboration",
        descriptions: [
          "Communicate effectively in academic, professional and social settings, making appropriate use of available technology",
          "Work with others and make constructive contributions"
        ]
      },
      {
        shortName: "LO 6",
        name: " Leadership and advocacy for the improvement of the human condition",
        descriptions: [
          "Play a leading role in improving the well-being of fellow citizens and humankind",
          "Uphold the core values of a democratic society: human rights, justice, equality and freedom of speech",
          "Participate actively in promoting the local and global social, economic and environmental sustainability"
        ]
      }
    ]
  },
  {
    id: 'engg',
    name:"Faculty of Engineering",
    code:"engg",
    url:"https://engg.hku.hk/",
    relationship:{
      parent:{target:"HKU",content:""}
    }
  },
  {
    id: 'cs',
    name:"Department of Computer Science",
    code:"cs",
    url:"https://www.cs.hku.hk/",
    relationship:{
      parent:{target:"HKU",content:""}
    }
  }
]

export const programmes=[
  {
    id: 'BEng(CompSc)',
    name:"BEng in Computer Science",
    code:"BEng(CompSc)",
    url:"https://www.cs.hku.hk/programmes/beng-compsc/programme-structure",
    relationship:{
      parent:{target:"cs",content:""},
      mapping:{target:"HKU",content:""},
      category:[
        {target:"UG5 Requirements",content:""},
        {target:"Engineering Core Courses",content:""},
        {target:"Discipline Core Courses (Introductory)",content:""},
        {target:"Discipline Core Courses (Advanced)",content:""},
        {target:"Capstone Experience and Internship",content:""},
        {target:"Discipline Elective Courses",content:""},
        {target:"Elective Courses",content:""}
      ]
    }
  },
  {
    id: 'Minor in CS',
    name:"Minor in CS",
    code:"Minor in CS",
    url:"https://www.cs.hku.hk/programmes/beng-compsc/programme-structure",
    relationship:{
      parent:{target:"cs",content:""}
    }
  },
  {
    id: '2nd Major in CS',
    name:"2nd Major in CS",
    code:"2nd Major in CS",
    url:"https://www.cs.hku.hk/programmes/beng-compsc/programme-structure",
    relationship:{
      parent:{target:"cs",content:""}
    }
  }
]

export const categories = [
  {
    id: 'UG5 Requirements',
    name:"UG5 Requirements",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'Engineering Core Courses',
    name:"Engineering Core Courses",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'Discipline Core Courses (Introductory)',
    name:"Discipline Core Courses (Introductory)",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'Discipline Core Courses (Advanced)',
    name:"Discipline Core Courses (Advanced)",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'Capstone Experience and Internship',
    name:"Capstone Experience and Internship",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'Discipline Elective Courses',
    name:"Discipline Elective Courses",
    relationship:{
      category:{target:"BEng(CompSc)",content:""}
      // category:[
      //   {target:"Elective Courses",content:""},
      //   {target:"AI & Robotics",content:""},
      //   {target:"Big HandleData Analytics",content:""},
      //   {target:"Financial Computing",content:""},
      //   {target:"Systems & Networking",content:""},
      //   {target:"Theoretical Computer Science",content:""},
      // ]
    }
  },
  {
    id: 'Elective Courses',
    name:"Elective Courses",
    relationship:{
      category:{target:"BEng(CompSc)",content:""},
    }
  },
  {
    id: 'AI & Robotics',
    name:"AI & Robotics",
    relationship:{
      category:{target:"Discipline Elective Courses",content:""},
      // course:[
      //   {target:"COMP3317",content:""},
      //   {target:"COMP3270",content:""},
      //   {target:"COMP3356",content:""},
      //   {target:"COMP3359",content:""},
      //   {target:"COMP3414",content:""},
      //   {target:"COMP3340",content:""},
      // ]
    }
  },
  {
    id: 'Big HandleData Analytics',
    name:"Big HandleData Analytics",
    relationship:{
      category:{target:"Discipline Elective Courses",content:""}
    }
  },
  {
    id: 'Financial Computing',
    name:"Financial Computing",
    relationship:{
      category:{target:"Discipline Elective Courses",content:""}
    }
  },
  {
    id: 'Systems & Networking',
    name:"Systems & Networking",
    relationship:{
      category:{target:"Discipline Elective Courses",content:""}
    }
  },
  {
    id: 'Theoretical Computer Science',
    name:"Theoretical Computer Science",
    relationship:{
      category:{target:"Discipline Elective Courses",content:""}
    }
  },
]

export const courses = [
  {
    id: 'COMP3317',
    code:"COMP3317",
    relationship:{
      course:{target:"AI & Robotics",content:""},
      mapping:{target:"BEng(CompSc)",content:""}
    }
  },
  {
    id: 'COMP3270',
    code:"COMP3270",
    relationship:{
      course:{target:"AI & Robotics",content:""}
    }
  },
  {
    id: 'COMP3356',
    code:"COMP3356",
    relationship:{
      course:{target:"AI & Robotics",content:""}
    }
  },
  {
    id: 'COMP3359',
    code:"COMP3359",
    relationship:{
      course:{target:"AI & Robotics",content:""}
    }
  },
  {
    id: 'COMP3414',
    code:"COMP3414",
    relationship:{
      course:{target:"AI & Robotics",content:""}
    }
  },
  {
    id: 'COMP3340',
    code:"COMP3340",
    relationship:{
      course:{target:"AI & Robotics",content:""}
    }
  },
]