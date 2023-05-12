import { Link } from "react-router-dom";
import '../Publication.css';

const PublicationLink = ({title}) => {
    return (
        <Link to={"/"} className="card_link_title" style={{ textDecoration: 'none', color: "black", fontSize: 20 }}>{title}</Link>
     );
}
 
export default PublicationLink;