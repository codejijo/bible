import { RootURL } from "@/main";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Chapters() {
    const { bookID } = useParams();
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        const fetchChapters = async () => {
            const response = await fetch(`${RootURL}/web/${bookID}`);
            const data = await response.json();
            setChapters(data.chapters);
        };
        fetchChapters();
    }, [bookID]);
    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center">
            {chapters.map((chapter) => (
                <div className="flex justify-center items-center h-12 w-12 rounded-lg bg-muted/50 text-center text-xl font-bold text-muted-foreground" key={chapter.chapter}>
                    <span>{chapter.chapter}</span>
                </div>
            ))}
        </div>
    )
}

export default Chapters;
// This component fetches and displays chapters for a given book ID from a Bible API. It uses React hooks to manage state and side effects, and the useParams hook from react-router to extract the book ID from the URL. The fetched chapters are stored in the Chapters state variable and displayed in a flex container.