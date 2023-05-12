import { useParams } from "react-router-dom";
import Publication from "../views/Publication";
/*
************************************************************************************************
ESTE COMPONENTE ES LLAMADO DESDE LAS ROUTES Y COMO PUBLICATION NECESITA UN ID ESTE EL PROPOSITO DE ESTE MISMO



************************************************************************************************
*/
const PublicationWrapper = () => {
    const { id } = useParams();

    return <Publication id={id} />
       
}

export default PublicationWrapper;