import styles from './App.module.scss';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Sidebar></Sidebar>
        </div>
    );
}

export default App;
