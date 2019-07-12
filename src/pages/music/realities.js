import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
              <a href="https://music.apple.com/us/album/realities-single/1463980458">
                Apple Music
              </a>
            </li>
            <li className="links__item">
              <a href="https://open.spotify.com/album/0XGyfREESFtILKrhjbhIZV">
                Spotify
              </a>
            </li>
            <li className="links__item">
              <a href="https://www.deezer.com/track/680989742">Deezer</a>
            </li>
            <li className="links__item">
              <a href="https://soundcloud.com/themessrock/realities">
                Soundcloud
              </a>
            </li>
            <li className="links__item">
              <a href="https://listen.tidal.com/album/109490901">Tidal</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Buy</h2>
          <ul className="links">
            <li className="links__item">
              <a href="https://music.apple.com/us/album/realities-single/1463980458?app=itunes">
                iTunes
              </a>
            </li>
            <li className="links__item">
              <a href="https://play.google.com/store/music/album?id=B24y6aw3gttuaehtfkwigjz4opi&tid=song-T4x2u7n2up4vtt5wqfneqmzvgrq">
                Google Play
              </a>
            </li>
          </ul>
        </div>
      </ContainerInner>
    </Container>
  </Layout>
);

export default IndexPage;

// import React from 'react';
// import { Link } from 'gatsby';

// import Layout from 'components/Layout';
// import Image from 'components/image';
// import SEO from 'components/SEO';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// );

// export default IndexPage;
