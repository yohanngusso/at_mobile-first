import { List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';


export default function FriendsList({ friends }) {
    return (
        <List>
            {friends.map((friend, index) => (
                <ListItem key={index}>
                    <ListItemText primary={friend.name} />
                </ListItem>
            ))}
        </List>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};