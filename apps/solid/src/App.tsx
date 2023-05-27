import logo from './logo.svg';
import styles from './App.module.css';
import { MyComponent } from './Test';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header + ' bg-gradient-to-r from-green-900 to-blue-500'}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyComponent />
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
