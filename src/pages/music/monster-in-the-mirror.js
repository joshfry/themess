import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const MonsterInTheMirrorPage = () => (
  <Layout>
    <SEO title="Monster in the Mirror" />
    <Container>
      <ContainerInner>
        <div>
          <h2>Monster in the Mirror - Coming Soon</h2>
          {/* <div className="video-container">
            <iframe
              title="Heartless"
              width="700"
              height="700"
              src="https://www.youtube.com/embed/L8tWszZNJe4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div> */}
        </div>
      </ContainerInner>
    </Container>
  </Layout>
);

export default MonsterInTheMirrorPage;
