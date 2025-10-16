import { useEffect } from "react";
//mengubah title page
export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};