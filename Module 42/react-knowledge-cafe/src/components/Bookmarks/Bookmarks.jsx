import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 ps-5 mt-20">
            <h2 className="text-2xl text-purple-600 bg-gray-200 border-4 border-purple-500 rounded-xl text-center py-5 font-semibold mb-4">Spent time on read: {readingTime}</h2> 
            <h2 className="text-2xl bg-gray-400 rounded-xl text-center py-5 font-semibold">Bookmarked Blogs: {bookmarks.length}</h2> 
            <div className="bg-slate-400 p-5 rounded-xl mt-4">
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }  
            </div>      
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;