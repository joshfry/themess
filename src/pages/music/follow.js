import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const FollowPage = () => (
  <Layout>
    <SEO title="Follow" />
    <Container>
      <ContainerInner>
        <div>
          <div className="video-container">
            <iframe
              title="Follow"
              width="700"
              height="700"
              src="https://www.youtube.com/embed/WYCHgXmZwrU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <h1>Follow</h1>
          <h2>Stream</h2>
          <ul className="links">
            <li className="links__item">
              <a
                href="https://music.apple.com/us/album/follow-single/1475679725"
                target="external"
              >
                Apple Music
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://open.spotify.com/album/6vwByXNucVH9ds8DD9CA4V"
                target="external"
              >
                Spotify
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://listen.tidal.com/album/114941537"
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
                href="https://music.apple.com/us/album/follow-single/1475679725?app=itunes"
                target="external"
              >
                iTunes
              </a>
            </li>
            <li className="links__item">
              <a
                href="https://play.google.com/store/music/album?id=Boxancofojxmyuxneobukiggu2u&tid=song-T55fhlyiksmmivjerz53iwul25u&hl=en_US"
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

export default FollowPage;
