import styles from "./page.module.css"
import { Metadata } from 'next'
import { RiArrowRightLine } from "react-icons/ri"

export const metadata: Metadata = {
  title: 'Illium: The Endgame Blockchain',
  description: 'Powered by zero knowledge tech. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
  openGraph: {
    title: 'Illium: The Endgame Blockchain',
    description: 'Powered by zero knowledge tech. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
    images: 'https://illium.org/illium-logo-rectangle.png'
  },
  twitter: {
    title: 'Illium: The Endgame Blockchain',
    description: 'Powered by zero knowledge tech. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
    site: 'https://illium.org',
    images: 'https://illium.org/illium-logo-rectangle.png',
    card: 'summary'
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="https://github.com/project-illium/ilxd/releases" target="_blank">
        <div className={styles.announcement}>
          Alpha testing happening now&nbsp;<RiArrowRightLine size={18} />
        </div>
      </a>

      <div>
        <img className={styles.logo} src="./illium-logo-pink.svg" alt="Illium" />
      </div>

      <div className={styles.top}>
        <div className={styles.logoText}>Illium</div>
        <div className={styles.description}>
          The Endgame Blockchain. Powered by zero knowledge tech. Making payments and smart contracts fast, cheap, and private. Launching 2024.
        </div>

        <div className={styles.ctas}>
          <a href="https://discord.gg/Grh8dA9R" target="_blank">
            <div className={styles.button1}>Join the community</div>
          </a>
          <a href="https://docs.illium.org/" target="_blank">
            <div className={styles.button2}>View documentation</div>
          </a>
        </div>

        <div className={styles.socials}>
          <div className="flex-h" style={{ gap: '38px' }}>
            <a href="https://github.com/project-illium/" target="_blank">
              <div className={styles.icon}><img src="./icon-github.svg" alt="Github" /></div>
            </a>
            <a href="https://twitter.com/illiumcrypto" target="_blank">
              <div className={styles.icon}><img src="./icon-x.svg" alt="X" /></div>
            </a>
            <a href="https://discord.gg/Grh8dA9R" target="_blank">
              <div className={styles.icon}><img src="./icon-discord.svg" alt="Discord" /></div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.logoLarge}>
        <img src="./illium-logo-pink.svg" alt="illium" />
      </div>
      <div className={styles.footer}>
        <div className="flex-h" style={{ gap: '38px' }}>
          <a href="https://github.com/project-illium/" target="_blank">
            <div className={styles.icon}><img src="./icon-github.svg" alt="Github" /></div>
          </a>
          <a href="https://twitter.com/illiumcrypto" target=" _blank">
            <div className={styles.icon}><img src="./icon-x.svg" alt="X" /></div>
          </a>
          <a href="https://discord.gg/Grh8dA9R" target="_blank">
            <div className={styles.icon}><img src="./icon-discord.svg" alt="Discord" /></div>
          </a>
        </div>
      </div>
    </main >
  )
}
