import { Container } from '../components/Container'
import { Analytics } from '@vercel/analytics/react';
import {Landing} from "../components/Landing";

const Index = () => (
  <Container height="100vh" maxHeight="-webkit-fill-available" backgroundColor="#373737">
      <Landing />
      <Analytics />
      <script
          dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                      console.log('Service worker registration successful');
                    }, function(err) {
                      console.log('Service worker registration failed: ', err);
                    });
                  });
                }
              `,
          }}
      />
  </Container>
)

export default Index
