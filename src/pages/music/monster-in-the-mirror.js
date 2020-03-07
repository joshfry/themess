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
          <div className="video-container">
            <iframe
              title="Monster in the Mirror"
              width="700"
              height="700"
              src="https://www.youtube.com/embed/pSbuJnAifeo"
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

export default MonsterInTheMirrorPage;
