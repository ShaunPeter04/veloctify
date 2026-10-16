import joelPhoto from '../assets/team/joel.png'
import annetPhoto from '../assets/team/annet.png'
import ayyappaPhoto from '../assets/team/ayyappan.png'
import shaunPhoto from '../assets/team/shaun.png'
import sivaniPhoto from '../assets/team/sivani.png'
import sajanaPhoto from '../assets/team/sajana.png'
import liyaPhoto from '../assets/team/liya.png'

export interface TeamMember { name: string; role?: string; initials: string; focus: string; description: string; image: string }

// Keep image empty for members whose portraits have not been supplied.
export const teamMembers: TeamMember[] = [
  {
    "name": "Ayyappahari P R",
    "role": "Team Captain",
    "initials": "AP",
    "focus": "Visionary Direction & Team Alignment",
    "description": "Steering group momentum with clarity, active listening, and decisive consensus building.",
    "image": ayyappaPhoto
  },
  {
    "name": "Annet Paul T",
    "role": "Vice Captain",
    "initials": "AT",
    "focus": "Agile Cohesion & Emotional Intelligence",
    "description": "Fostering deep mutual trust, synchronizing tasks, and championing inclusive dialogue.",
    "image": annetPhoto
  },
  {
    "name": "Shaun Peter",
    "initials": "SP",
    "focus": "Creative Catalyst & Lateral Thinking",
    "description": "Injecting dynamic, unconventional perspectives that spark innovative team breakthroughs.",
    "image": shaunPhoto
  },
  {
    "name": "Joel Jacob",
    "initials": "JJ",
    "focus": "Articulate Communication & Logic Flow",
    "description": "Translating complex syndicate strategies into structured, persuasive presentation narratives.",
    "image": joelPhoto
  },
  {
    "name": "Sivani R Anil",
    "initials": "SA",
    "focus": "Empathetic Resonance & Active Support",
    "description": "Harmonizing group discussions, maintaining constructive harmony, and encouraging peer confidence.",
    "image": sivaniPhoto
  },
  {
    "name": "Sajana S kuttiyil",
    "initials": "SK",
    "focus": "Strategic Adaptability & Focus",
    "description": "Navigating evolving requirements with composure, precision, and relentless team dedication.",
    "image": sajanaPhoto
  },
  {
    "name": "Liya Sebastian",
    "initials": "LS",
    "focus": "Dynamic Execution & Creative Harmony",
    "description": "Bringing artistic polish, synchronizing fine details, and keeping collective morale at its peak.",
    "image": liyaPhoto
  }
]
