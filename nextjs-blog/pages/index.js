import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! Im Ryan, a front-end software developer.</p>
        <p>
          Here is my{' '}
          <a href='https://twitter.com/_0xRyan' target='blank'>
            Twitter
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
