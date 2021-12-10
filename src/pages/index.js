import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta name="description" content="_" />
        <meta name="title" property="og:title" content="David Kremenitzer - Software Engineer" />
        <meta property="og:type" content="Portfolio Website" />
        <meta name="image" property="og:image" content="https://flic.kr/ps/3Y1oT1" />
        <meta name="description" property="og:description" content="_" />
        <meta name="author" content="Kremenitzer Portfolio" />
      </Helmet>
      <App />
    </>
  );
};
