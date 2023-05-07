import { useEffect, useMemo, useState } from "react";
import UseContext from "./UseContext";

const LIMIT = 6

const UseProductManagement = () => {
  const [isGrid, setIsGrid] = useState(false)
  // este hooks es para la paginacion
  const [page, setPage] = useState(1)
  // estos 2 hooks son para el sort
  const [sort, setSort] = useState("name")
  const [type, setType] = useState(1)
  const { getProducts, totalPages, searchProducts, loading } = UseContext();

  const gridClick = () => setIsGrid(!isGrid)

  const sortProducts = (e, type) => {
    setType(type)
    setSort(e.currentTarget.value)
  }

  const pageClick = (newPage) => {
    setPage(newPage +1)
  }

  const nextPaginationDisabled = () => {
    return page >= totalPages
  }

  const previousPaginationDisabled = () => {
    return 1 >= page
  }

  const searchProductsChange = (e) => {
    if (e.target.value === "") getProducts({ sort, type, LIMIT, page })
    else searchProducts(e.target.value)
  }


  useEffect(() => {
    getProducts({ sort, type, LIMIT, page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sort])

  return {
    gridClick,
    isGrid,
    sortProducts,
    pageClick,
    page,
    totalPages,
    nextPaginationDisabled,
    previousPaginationDisabled,
    searchProducts,
    searchProductsChange,
    loading,
  };
}

export default UseProductManagement;