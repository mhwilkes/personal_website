import Link from 'next/link'
import {
  Generic,
  Container,
  Content,
  Navbar,
  Section,
  Hero,
  Title,
  Footer,
} from 'rbx'
import React from 'react'

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <Generic>
      <Navbar color="primary">
        <Navbar.Brand>
          <Navbar.Item href="/">Mike</Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Link href="/">
              <Navbar.Item>Home</Navbar.Item>
            </Link>
            <Link href="/about">
              <Navbar.Item>About</Navbar.Item>
            </Link>
            <Link href="/featured">
              <Navbar.Item>Featured</Navbar.Item>
            </Link>
            <Link href="/portfolio">
              <Navbar.Item>Portfolio</Navbar.Item>
            </Link>
            <Link href="/contact">
              <Navbar.Item>Contact</Navbar.Item>
            </Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Section backgroundColor="primary">
        <Hero>
          <Hero.Body>
            <Container>
              <Title as="h1" align="center" color="white">
                Software Engineer
              </Title>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer>
        <Content textAlign="centered">
          <p>Made with ❤️by Mike</p>
        </Content>
      </Footer>
    </Generic>
  )
}

export default Layout
