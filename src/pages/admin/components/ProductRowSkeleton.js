import {Skeleton } from '@mui/material'
import React from 'react'

function ProductRowSkeleton() {
    return (
        <>
            <div className="product-cell image">
                <Skeleton variant="rectangular" width={"100%"} height={100} />
            </div>
            <div className="product-cell category">
                <Skeleton variant="rectangular" width={"100%"} height={100} />
            </div>
            <div className="product-cell status-cell">
                <Skeleton variant="rectangular" width={"100%"} height={100} />
            </div>
            <div className="product-cell stock">
                <Skeleton variant="rectangular" width={"100%"} height={100} />
            </div>
            <div className="product-cell price">
                <Skeleton variant="rectangular" width={"100%"} height={100} />
            </div>
           
        </>
    )
}

export default ProductRowSkeleton