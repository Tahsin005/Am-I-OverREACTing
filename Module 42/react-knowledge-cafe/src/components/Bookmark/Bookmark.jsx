import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-300 rounded-xl p-5 mb-5">
            <h1>{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;