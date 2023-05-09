import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseContext from "../../../hooks/UseContext";

const LIMIT = 6

const UseProductManagement = () => {
  const [isGrid, setIsGrid] = useState(false)
  // este hooks es para la paginacion
  const [page, setPage] = useState(1)
  // estos 2 hooks son para el sort
  const [sort, setSort] = useState("name")
  const [type, setType] = useState(1)
  const { getProducts, totalPages, searchProducts, loading, openSnackbar, msg } = UseContext();
  const navigate = useNavigate();

  const gridClick = () => setIsGrid(!isGrid)

  const sortProducts = (e, type) => {
    setType(type)
    setSort(e.currentTarget.value)
  }

  const pageClick = (newPage) => {
    const currentPage = page + newPage
    setPage(currentPage)
    localStorage.setItem('currentPage', currentPage.toString())
  }

  const nextPaginationDisabled = () => {
    return page >= totalPages
  }

  const previousPaginationDisabled = () => {
    return 1 >= page
  }

  const searchProductsChange = (e) => {
    (e.target.value === "") ? getProducts({ sort, type, LIMIT, page }) : searchProducts(e.target.value)
  }
// navega 
  const onAddProductClick = () => {
    navigate("/agregar-producto")
  }

  
  useEffect(() => {
    const storedPage = parseInt(localStorage.getItem('currentPage'))

    storedPage ? setPage(storedPage) : setPage(1)

    getProducts({ sort, type, LIMIT, page: storedPage || 1 })

    if (msg) {
      openSnackbar(msg.msg, msg.category)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sort, msg])

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
    onAddProductClick
  };
}

export default UseProductManagement;