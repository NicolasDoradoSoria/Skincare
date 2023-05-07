import { Skeleton } from "@mui/material";
import '../ProductSkeleton.css';

const ProductSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((item, i) =>
            <div className="card_skeleton_item" key={i}>
                <div>
                    <Skeleton variant="rectangular" width={"100%"} height={200} />
                </div>
                <div className="card_skeleton_title">
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                </div>
                <div className="card_skeleton_price">
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={"45%"} />
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={"45%"} />
                </div>

                 <div className="card_skeleton_buttom">
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} width={"30%"}/>
                </div> 
            </div>
        )
    );
}

export default ProductSkeleton;