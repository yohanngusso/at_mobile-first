import { Container, Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Feed from './components/Feed';
import FriendsList from './components/FriendsList';
import SuggestionsList from './components/SuggestionsList';
import styles from './App.module.css';
import posts from './data/posts';
import friends from './data/friends';
import suggestions from './data/suggestions';

export default function App() {
    return (
        <Container className={styles.app}>
            <CssBaseline />
            <Header />
            <MainMenu />
            <Box className={styles.mainContent}>
                <Feed posts={posts} />
                <FriendsList friends={friends} />
                <SuggestionsList suggestions={suggestions} />
            </Box>
        </Container>
    );
}