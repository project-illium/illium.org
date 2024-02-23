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
      <div className={styles.init}>
        <svg width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.3684 14.9203L36.5698 7.36816H54.7368L47.7767 13.0807H34.5644L31.9291 14.9203H27.3684Z" fill="#000" />
          <path d="M31.9291 14.9203H41.2885L45.5354 19.9997H35.5081L31.9291 14.9203Z" fill="#000" />
          <path d="M27.3684 14.9203L18.1669 7.36816H-6.10352e-05L6.96001 13.0807H20.1724L22.8076 14.9203H27.3684Z" fill="#000" />
          <path d="M22.8076 14.9203H13.4482L9.20139 19.9997H19.2286L22.8076 14.9203Z" fill="#000" />
          <path d="M26.842 16.8421L23.1578 23.9313L26.842 40L30.5263 23.9313L26.842 16.8421Z" fill="#000" />
          <path d="M26.842 9.47368L23.1578 4.8145L26.842 0L30.5263 4.8145L26.842 9.47368Z" fill="#000" />
        </svg>
      </div>

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
