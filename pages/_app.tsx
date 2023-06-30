import { AppProps } from "next/app";
import Head from "next/head";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { MantineProvider } from "@mantine/core";
import { ruRU } from "@clerk/localizations";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<ClerkProvider
			appearance={{

				baseTheme: dark

			}}
			localization={ruRU}
		>
			<Head>
				<title>Page title</title>
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: "dark",
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</ClerkProvider>
	);
}
