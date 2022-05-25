/* eslint-disable */

import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import bookIcon from '../../../static/img/book-icon.png'
import lightningIcon from '../../../static/img/lightning-icon.png'
import communityIcon from '../../../static/img/community-icon.png'

const FeatureList = [
  {
    title: 'Documentation',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: bookIcon,
    description: (
      <>
        <p>
          Read about the governance and software maintained by the Permissionless Software Foundation.
        </p>
        <div>
          <Link
            className='button button--secondary button--lg'
            to='/intro'
          >
            Read Docs
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Video Walkthroughs',
    // Svg: bookIcon,
    img: lightningIcon,
    description: (
      <>
        <p>
          Ready to <i>do</i> something? Jump into our video tutorials, showing how to
          use PSF software.
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='https://psfoundation.cash/video/' target='_blank'
          >
            Videos
          </Link>
        </div>
      </>
    )
  },
  {
    title: 'Community',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: communityIcon,
    description: (
      <>
        <p>
          Join our Telegram and Gitter channels to get community-driven technical support.
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='https://t.me/permissionless_software' target='_blank'
          >
            Telegram
          </Link>
        </div>
      </>
    )
  }
]

function Feature ({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <img src={img} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
