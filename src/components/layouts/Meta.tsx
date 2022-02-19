import Head from 'next/head';

type Props = {
  title: string;
};

const Meta = ({ title }: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="shortcut icon" href={'/public/favicon.webp'} />
  </Head>
);

export default Meta;
