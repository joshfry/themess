import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const AnchorsIIPage = () => (
  <Layout>
    <SEO title="Anchors II" />
    <Container>
      <ContainerInner>
        <div>
          <div className="video-container">
            <iframe
              title="AnchorsII"
              width="700"
              height="700"
              src="https://www.youtube.com/embed/qzOJ9VpbStY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </ContainerInner>
    </Container>
  </Layout>
);

export default AnchorsIIPage;
