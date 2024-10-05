import { List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';


export default function SuggestionsList({ suggestions }) {
    return (
        <List>
            {suggestions.map((suggestion, index) => (
                <ListItem key={index}>
                    <ListItemText primary={suggestion.name} />
                </ListItem>
            ))}
        </List>
    );
}

SuggestionsList.propTypes = {
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};