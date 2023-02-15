import { Container } from '../components/Container'
import { Analytics } from '@vercel/analytics/react';
import {Landing} from "../components/Landing";

const Index = () => (
  <Container height="100vh" maxHeight="-webkit-fill-available" backgroundColor="#9B76AA">
      <Landing />
      <Analytics />
  </Container>
)

export default Index
