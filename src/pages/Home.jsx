import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import Journey from '../components/Journey.jsx'
import QuestBoard from '../components/QuestBoard.jsx'
import Skills from '../components/Skills.jsx'
import GTMOS from '../components/GTMOS.jsx'
import TroubleshootingLab from '../components/TroubleshootingLab.jsx'
import Playbook from '../components/Playbook.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <QuestBoard />
      <Skills />
      <GTMOS />
      <Journey />
      <TroubleshootingLab />
      <Playbook />
      <Contact />
    </>
  )
}
