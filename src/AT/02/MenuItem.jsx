import PropTypes from 'prop-types';

export default function MenuItem({ label }) {
  return (
    <div className="menu-item">
      {label}
    </div>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
};
