import { Link } from "react-router-dom";

const Dropdown = ({name, path}) => {
    return ( 
        <li className="dropdown_item">
            <Link to={`${path}`} className="dropdown_link">{name}</Link>
        </li>
     );
}
 
export default Dropdown;