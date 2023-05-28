import { Router, Routes, Route } from '@solidjs/router';
import { AppRoutes } from '@nx-solid/solid-app/domain';

import { Home } from './Home';
import { Header } from './shell/Header';
import { Footer } from './shell/Footer';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path={AppRoutes.home} component={Home} />
          <Route path={AppRoutes.about} component={Home} />
          <Route path={AppRoutes.contact} component={Home} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
