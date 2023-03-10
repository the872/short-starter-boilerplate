import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="https://iili.io/HEwxs7n.png" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <title>Generic Page</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover user-scalable = no" />
                    <meta content='yes' name='apple-mobile-web-app-capable'/>
                    <meta content='yes' name='mobile-web-app-capable'/>
                    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                    <meta name="theme-color" content="#373737" />
                    <meta name="description" content="Generic news, easy to read" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body style={{ background: '#373737' }}>
                {/* Make Color mode to persists when you refresh the page. */}
                <ColorModeScript />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
