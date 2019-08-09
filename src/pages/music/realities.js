import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const RealitiesPage = () => (
  <Layout>
    <SEO title="Realities" />
    <Container>
      <ContainerInner narrow>
        <div>
          <div className="video-container">
            <iframe
              title="The Mess - Realities"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/_-_BoNICzng"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <h1>Realities</h1>
          <h2>Stream</h2>
          <ul className="links">
            <li className="links__item">
              <a
                href="https://music.apple.com/us/album/realities-single/1463980458"
                target="external"
              >
                Apple Music
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://open.spotify.com/album/0XGyfREESFtILKrhjbhIZV"
                target="external"
              >
                Spotify
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://www.deezer.com/track/680989742"
                target="external"
              >
                Deezer
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://soundcloud.com/themessrock/realities"
                target="external"
              >
                Soundcloud
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://listen.tidal.com/album/109490901"
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
                href="https://music.apple.com/us/album/realities-single/1463980458?app=itunes"
                target="external"
              >
                iTunes
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://play.google.com/store/music/album?id=B24y6aw3gttuaehtfkwigjz4opi&tid=song-T4x2u7n2up4vtt5wqfneqmzvgrq"
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

export default RealitiesPage;
