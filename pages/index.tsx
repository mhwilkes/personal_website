import Link from 'next/link'
import { Section, Card, Content, Title } from 'rbx'
import Layout from '../components/Layout'
import React from 'react'

const HomePage = () => (
  <Layout>
    <Section>
      <Card>
        <Card.Content>
          <Content>
            <Link href="#">
              <a>
                <Title as="h3">#</Title>
                <p>#</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href="#">
              <a>
                <Title as="h3">#</Title>
                <p>#</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Content>
            <Link href="#">
              <a>
                <Title as="h3">#</Title>
                <p>#</p>
              </a>
            </Link>
          </Content>
        </Card.Content>
      </Card>
    </Section>
  </Layout>
)

export default HomePage
