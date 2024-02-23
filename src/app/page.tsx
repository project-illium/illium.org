import styles from "./page.module.css"
import { Metadata } from 'next'
import { RiArrowRightLine } from "react-icons/ri"

export const metadata: Metadata = {
  title: 'illium: The Endgame Blockchain',
  description: 'Powered by zero knowledge. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
  openGraph: {
    title: ' illium: The Endgame Blockchain',
    description: 'Powered by zero knowledge. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
  },
  twitter: {
    title: 'illium: The Endgame Blockchain',
    description: 'Powered by zero knowledge. Making payments and smart contracts fast, cheap, and private. Launching 2024.',
    site: 'https://illium.org',
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

      <img className={styles.logo} src="./illium-logo-pink.svg" alt="Illium" />

      <div className="flex-h" style={{ width: '100%' }}>
        <div className={styles.top}>
          <div className={styles.logoText}>Illium</div>
          <div className={styles.description}>
            The Endgame Blockchain. Powered by zero knowledge. <br />Making payments and smart contracts fast, cheap, and private. Launching 2024.
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
            <div className="flex-h" style={{ gap: '40px' }}>
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
      </div>

      <div className={styles.logoLarge}>
        <img src="./illium-logo-pink.svg" alt="illium" />
      </div>
      <div className={styles.footer}>
        <div className="flex-h" style={{ gap: '40px' }}>
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
