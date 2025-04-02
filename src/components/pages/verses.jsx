import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";
import { RootURL } from "@/main";
import { useBook } from "@/context/book-context";

function Verses() {
    const bookData = useBook()
    const { chapterID } = useParams()
    const [verses, setVerses] = useState([]);
    useEffect(() => {
        const fetchVerses = async () => {
            const response = await fetch(`${RootURL}/web/${bookData.id}/${chapterID}`);
            const data = await response.json();
            setVerses(data.verses);
        };
        fetchVerses();
    }, [chapterID]);

    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center">
            <h2 className="w-full text-center text-7xl mb-5 font-semibold">{bookData?.name}</h2>
            {verses.map((verse) => (
                <div key={`Verse-${verse.verse}`} className="h-auto w-full rounded-lg bg-muted/50 flex items-center">
                    <span className="h-full min-w-12 bg-secondary rounded-lg text-2xl flex items-center justify-center text-justify">{verse.verse}</span>
                    <span className="p-2">{verse.text}</span>
                </div>
            ))}
        </div>
    )
}

export default Verses;
// This component fetches and displays chapters for a given book ID from a Bible API. It uses React hooks to manage state and side effects, and the useParams hook from react-router to extract the book ID from the URL. The fetched chapters are stored in the Chapters state variable and displayed in a flex container.