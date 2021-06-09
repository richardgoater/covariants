import React from 'react'

import { Col, Row } from 'reactstrap'
import styled from 'styled-components'

import { ClusterButtonPanel } from 'src/components/ClusterButtonPanel/ClusterButtonPanel'
import { VariantsPageContainer } from 'src/components/Common/ClusterSidebarLayout'
import { Editable } from 'src/components/Common/Editable'
import { Layout } from 'src/components/Layout/Layout'

import HomeContent from '../../../../content/Home.md'

const Title = styled.h1`
  font-size: 4rem;
  color: #8e3c04;
  margin: 2rem 0;
  > :first-child {
    color: #75a932;
  }
  letter-spacing: none;
`

export function HomePage() {
  return (
    <Layout>
      <VariantsPageContainer fluid>
        <Row noGutters>
          <Col>
            <Title className="text-center">
              <span>CoV</span>ariants
            </Title>
          </Col>
        </Row>

        <Row noGutters>
          <Col lg={5}>
            <ClusterButtonPanel />
          </Col>

          <Col lg={7}>
            <Editable githubUrl="blob/master/content/Home.md">
              <HomeContent />
            </Editable>
          </Col>
        </Row>
      </VariantsPageContainer>
    </Layout>
  )
}
