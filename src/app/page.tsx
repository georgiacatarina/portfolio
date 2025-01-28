import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.bio}>
            <figure className={styles.imageContainer}>
              <Image
                aria-hidden
                src="/perfil-2.jpg"
                alt="Imagem de perfil"
                width={300}
                height={300}
                className={styles.image}
              />
            </figure>
            <div className={styles.content}>
              <h2 className={styles.title}>
                Olá, eu sou a{" "}
                <strong className={styles.gradientText}>Georgia!</strong>
              </h2>
              <p className={styles.text}>
                Sou desenvolvedora <strong>há mais de 10 anos</strong> onde tive
                a oportunidade de atuar em TVs, startups e agências, sempre
                buscando entregar soluções criativas, de qualidade e explorando
                formas de inovar e melhorar os processos. Atualmente, faço parte
                do time do ge.globo, com desenvolvimento Front-end de aplicações
                para o portal e ferramentas web para os times de editores e
                redação.
                <br />
                Minha trajetória envolve o desenvolvimento de sites, SPAs e apps
                web, com domínio de HTML5, CSS3, JavaScript (TS), frameworks
                como Vue.js e libs como React, além de ferramentas como Vite,
                Webpack e Git. Tenho experiência na integração com APIs REST,
                como GraphQL e backend em PHP e Python, além de aplicar práticas
                de acessibilidade web (WCAG) nos projetos em que participo.
              </p>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.iconsContainer}>
              <Image
                height="30"
                width="40"
                alt="react"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="javascript"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <Image
                height="30"
                width="40"
                alt="Jest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              />
              <Image
                height="30"
                width="40"
                alt="redux"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="nextjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="graphql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
              />
              <Image
                height="30"
                width="40"
                alt="storybook"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="materialui"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="html5"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="css3"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="sass"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <Image
                height="30"
                width="40"
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
            </div>
          </div>
          <div className={styles.carreer}>
            <h2 className={styles.title}>Trajetória Profissional</h2>
            <div className={styles.content}>
              <h3 className={styles.subTitle}>Software Developer</h3>
              <p className={styles.text}>
                <strong>Globo</strong> -
                <a
                  href="https://ge.globo.com/"
                  target="_blank"
                  title="Site do ge.globo, abre em nova janela"
                >
                  {" "}
                  ge.globo
                </a>
                <br />
                Abr 2022 - Atual
              </p>
              <br />
              <h3 className={styles.subTitle}>Front-end Developer</h3>
              <p className={styles.text}>
                <a
                  href="https://www.linkedin.com/company/samurai-experts/"
                  target="_blank"
                  title="Linkedin, abre em nova janela"
                >
                  {" "}
                  <strong>Samurai Experts</strong>
                </a>
                <br />
                Jan 2021 - Abr 2022
              </p>
              <br />
              <h3 className={styles.subTitle}>Front-end Developer</h3>
              <p className={styles.text}>
                <a
                  href="https://enube.me/"
                  target="_blank"
                  title="Site da Enube, abre em nova janela"
                >
                  {" "}
                  <strong>eNube</strong>
                </a>
                <br />
                Set 2020 - Abr 2022
              </p>
              <br />
              <h3 className={styles.subTitle}>Front-end Developer</h3>
              <p className={styles.text}>
                <a
                  href="https://espiralinterativa.com/"
                  target="_blank"
                  title="Site da Espiral, abre em nova janela"
                >
                  {" "}
                  <strong>Espiral Interativa</strong>
                </a>
                <br />
                Jan 2020 - Set 2020
              </p>
            </div>
            {"..."}
          </div>
        </div>
      </main>
    </div>
  );
}
