import { NavLink, useLoaderData, useParams } from "react-router";
import { getBookData } from "@/lib/utils";

function Chapters() {
    const { chapters } = useLoaderData();
    const { bookID } = useParams()
    const bookData = getBookData(bookID)

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