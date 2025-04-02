import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { RootURL } from "@/main";
import { useBook } from "@/context/book-context";

function Chapters() {
    const bookData = useBook()
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        const fetchChapters = async () => {
            const response = await fetch(`${RootURL}/web/${bookData.id}`);
            const data = await response.json();
            setChapters(data.chapters);
        };
        fetchChapters();
    }, [bookData.id]);
    
    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center">
            <h2 className="w-full text-center text-7xl mb-5 font-semibold">{bookData?.name}</h2>
            {chapters.map((chapter) => (
                <NavLink key={"Chapter-" + chapter.chapter} to={`/${bookData.id}/${chapter.chapter}`} className="flex justify-center items-center h-12 w-12 rounded-lg bg-muted/50 text-center text-xl font-bold text-muted-foreground">
                    <span>{chapter.chapter}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default Chapters;
// This component fetches and displays chapters for a given book ID from a Bible API. It uses React hooks to manage state and side effects, and the useParams hook from react-router to extract the book ID from the URL. The fetched chapters are stored in the Chapters state variable and displayed in a flex container.