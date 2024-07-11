import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useEffect, useState } from 'react';
import { addToLS, getBookmarks, setToLS, removeFromLS, getTimeOnRead, setTimeToLS } from './utilities/localStorage';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    console.log(blog);
    addToLS(blog)
    const newBookmarks = getBookmarks();
    setBookmarks(newBookmarks);
  }

  const handleTimeOnRead = (time, id) => {
    const newTime = time + getTimeOnRead();
    setReadingTime(newTime);
    setTimeToLS(newTime);
    console.log(id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
    setToLS(remainingBookmarks);
  }

  useEffect(() => {
    const savedBookmarks = getBookmarks();
    const savedTime = getTimeOnRead();
    if (savedBookmarks) {
      setBookmarks(savedBookmarks);
    }
    if (savedTime) {
      setReadingTime(savedTime);
    }
  }, [bookmarks]);
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleTimeOnRead={handleTimeOnRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
