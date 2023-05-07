import { Button } from "@mui/material";
import UseProductManagement from "../hooks/UseProductManagement";

export const Pagination = () => {
    const { totalPages, page, pageClick, nextPaginationDisabled, previousPaginationDisabled } = UseProductManagement()

    return (
        <div className="pagination_body">
            <div className="pagination_container xlarge">
                <div className="pagination">
                    <ul>
                        <li className="previous"><Button variant="contained" onClick={() =>pageClick(page -1)} disabled={previousPaginationDisabled()}>Previous</Button></li>
                        {[...Array(totalPages)].map((value, i) => (
                            <li key={i} className={page === (i + 1) ? "active" : null}><button onClick={() => pageClick(i)}>{i +1}</button></li>
                        ))}
                        <li className="next"><Button variant="contained"  onClick={() =>pageClick( page +1)} disabled={nextPaginationDisabled()}>Next</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination;