import ForumHeader from './components/ForumHeader';
import PostDetails from './components/PostDetails';
import ReplyList from './components/ReplyList';
import ReplyForm from './components/ReplyForm';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

const post = {
    title: "Tópico Principal do Fórum",
    subtitle: "Subtítulo do Tópico",
    description: "Descrição detalhada do tópico principal.",
    author: "Autor do Tópico",
    date: "01/01/2023",
    likes: 10,
    replies: 5
};

const replies = [
    { author: "Usuário 1", date: "02/01/2023", content: "Resposta 1", likes: 2 },
    { author: "Usuário 2", date: "03/01/2023", content: "Resposta 2", likes: 3 },
    { author: "Usuário 3", date: "04/01/2023", content: "Resposta 3", likes: 1 },
    { author: "Usuário 4", date: "05/01/2023", content: "Resposta 4", likes: 4 },
    { author: "Usuário 5", date: "06/01/2023", content: "Resposta 5", likes: 5 }
];

const recentTopics = ["Tópico 1", "Tópico 2", "Tópico 3", "Tópico 4", "Tópico 5"];
const mostRepliedTopics = ["Tópico 6", "Tópico 7", "Tópico 8", "Tópico 9", "Tópico 10"];
const mostLikedTopics = ["Tópico 11", "Tópico 12", "Tópico 13", "Tópico 14", "Tópico 15"];

export default function App() {
    return (
        <div className={styles.app}>
            <ForumHeader />
            <div className={styles.mainContent}>
                <PostDetails post={post} />
                <ReplyList replies={replies} />
                <ReplyForm user="Usuário Autenticado" />
            </div>
            <Sidebar
                recentTopics={recentTopics}
                mostRepliedTopics={mostRepliedTopics}
                mostLikedTopics={mostLikedTopics}
            />
        </div>
    );
}