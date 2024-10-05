import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

export default function Feed({ posts }) {
    return (
        <div>
            {posts.map((post, index) => (
                <Card key={index} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="body2">{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

Feed.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};