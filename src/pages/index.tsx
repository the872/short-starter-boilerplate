import { Scroller } from '../components/Scroller'
import { Container } from '../components/Container'
import { Analytics } from '@vercel/analytics/react';

const Index = () => (
  <Container height="100vh" maxHeight="-webkit-fill-available" backgroundColor="#9B76AA">
      <Scroller />
      <Analytics />
  </Container>
)

export default Index
