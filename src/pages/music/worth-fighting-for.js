import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const WorthFightingForPage = () => (
  <Layout>
    <SEO title="Worth Fighting For" />
    <Container>
      <ContainerInner>
        <div>
          <div className="video-container">
            <iframe
              title="The Mess - Worth Fighting For"
              width="700"
              height="700"
              src="https://www.youtube.com/embed/b4Ht1nbsskk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <h1>Worth Fighting For</h1>
          <h2>Stream</h2>
          <ul className="links">
            <li className="links__item">
              <a
                href="https://music.apple.com/us/album/worth-fighting-for-single/1471726180"
                target="external"
              >
                Apple Music
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://open.spotify.com/album/3dRQBk1mOJLp56palNkW50"
                target="external"
              >
                Spotify
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://listen.tidal.com/album/112753766"
                target="external"
              >
                Tidal
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Buy</h2>
          <ul className="links">
            <li className="links__item">
              <a
                href="https://music.apple.com/us/album/worth-fighting-for-single/1471726180?app=itunes"
                target="external"
              >
                iTunes
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://play.google.com/store/music/album?id=Bog3tmuzrwmqzd6t4vgtb6veeqe&tid=song-Tsgrtfggjrll3gtu6bkhi4zjm3y&hl=en_US"
                target="external"
              >
                Google Play
              </a>
            </li>
          </ul>
        </div>
      </ContainerInner>
    </Container>
  </Layout>
);

export default WorthFightingForPage;
