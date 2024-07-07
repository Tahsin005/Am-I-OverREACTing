const getBookmarks = () => {
    const bookmarkString = localStorage.getItem('bookmarks');
    if (bookmarkString) {
        return JSON.parse(bookmarkString);
    }
    return [];
}
const getTimeOnRead = () => {
    const timeString = localStorage.getItem('time');
    if (timeString) {
        return JSON.parse(timeString);
    }
    return 0;
}

const setToLS = (bookmarks) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
const setTimeToLS = (time) => {
    localStorage.setItem('time', JSON.stringify(time));
}

const addToLS = (bookmark)  => {
    const bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    setToLS(bookmarks);
}
const removeFromLS = (id) => {
    const bookmarks = getBookmarks();
    const updatedbookmarks = bookmarks.filter((idx) => idx !== id);
    setToLS(updatedbookmarks);
}
export { addToLS, setToLS, getBookmarks, removeFromLS, getTimeOnRead, setTimeToLS };