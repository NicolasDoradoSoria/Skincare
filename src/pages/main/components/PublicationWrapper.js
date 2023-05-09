import { useParams } from "react-router-dom";
import Publication from "../views/Publication";
const PublicationWrapper = () => {
    const { id } = useParams();

    return (
        <>
            <Publication id={id} />
        </>
    );
}

export default PublicationWrapper;