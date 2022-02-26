import React from 'react'
import Head from 'next/head'

export default function SEO({ title, description, image, url, meta }) {
  const metaData = [
    {
        name: 'description',
        content: description,
    },
    {
        property: 'og:title',
        content: title,
    },
    {
        property: 'og:description',
        content: description,
    },
    {
        property: 'og:type',
        content: 'website',
    },
    {
        property: 'og:image',
        content: image,
    },
    {
        property: 'og:url',
        content: url,
    },
    {
        property: 'og:site_name',
        content: 'Đảo Hòn Tằm',
    },
    {
        property: 'og:locale',
        content: 'vi_VN',
    },
    {
        name: 'twitter:card',
        content: 'summary',
    },
    {
        name: 'twitter:creator',
        content: '@daohontam',
    },
    {
        name: 'twitter:title',
        content: title,
    },
    {
        name: 'twitter:description',
        content: description,
    },
    {
        name: 'twitter:image',
        content: image,
    },
    {
        name: 'twitter:url',
        content: url,
    },
    {
        name: 'twitter:site',
        content: '@daohontam',
    },
  ].concat(meta)

    return (
        <Head>
            <title>{title}</title>
            {metaData.map((meta, index) => (
                <meta key={index} {...meta} />
            ))}
        </Head>
    )
}

SEO.defaultProps = {
    lang: `vi`,
    meta: [],
}
