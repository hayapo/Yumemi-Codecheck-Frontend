import { PrefectureSelect } from "components/organisms/PrefectureSelect"
import Head from "next/head"
import styles from "styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ゆめみ コードチェック課題</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.title}>ゆめみ コードチェック課題</div>
        <section id="Prefecture Select Section">
          <h2>都道府県を選択する</h2>
          <PrefectureSelect />
        </section>
      </div>
    </div>
  )
}
