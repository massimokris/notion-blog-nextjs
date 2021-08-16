import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

const navItems = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'Podcast', link: 'https://open.spotify.com/show/0B154Z7SVUxHWTXdVUgkk9'},
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Massimo Blog</title>
        <meta
          name="Massimo Di Berardino"
          content="Un blog sobre startup, tecnología y desarrollo profesional"
        />
        <meta name="og:title" content="Massimo Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@massimokris" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <a href={link} rel="noopener" target="_blank">
                  {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
