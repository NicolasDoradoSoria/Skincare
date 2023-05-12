import PublicationLink from "./PublicationLink";
import '../Publication.css';

/*
****************************************************************

PUBLICATIONCONTENT ES EL CONTENEDOR DEL COMPONENTE PUBLICATION ESTE COMPONENTE NECESITA:
A- LA CATEGORIA QUE ES PARA QUE RENDERICE LA URL DE LA MISMA
B- EL NOMBRE QUE ES EL NOMBRE DEL PRODUCTO


****************************************************************
*/

const PublicationContent = ({ children, category, name }) => {
    return (
        <div className="card_container">
            <div className="card_publication">
                <div className="card_link">
                    <PublicationLink title="inicio" />
                    <p> /</p>
                    <PublicationLink title={category.name} />
                    <p> / {name}</p>
                </div>
                {children}
            </div>
        </div>


    );
}

export default PublicationContent;