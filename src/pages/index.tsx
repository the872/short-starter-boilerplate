import { Scroller } from '../components/Scroller'
import { Container } from '../components/Container'
import { Analytics } from '@vercel/analytics/react';

const Index = () => (
  <Container height="100vh" maxHeight="-webkit-fill-available">
      <Scroller />
      <Analytics />
  </Container>
)

export default Index
