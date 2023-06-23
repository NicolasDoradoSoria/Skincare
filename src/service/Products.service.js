import clienteAxios from "../config/axios";


export const getProductsService = async (data) => {
  let query = ""
  if (data) {
    query = `?header=${data.header}&type=${data.type}&page=${data.page}&limit=${data.LIMIT}`
  }
  return await clienteAxios.get(`/api/products${query}`);
}

export const getProductService = async (id) => {
  return await clienteAxios.get(`api/products/${id}`)
}

export const postAddProductService = async (productNew, images, productPercentageUpload) => {

  const formData = new FormData();
  const { name, descripcion, price, stock, category, checkedOffer, originalPrice } = productNew
  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]);
  }
  formData.append('name', name);
  formData.append('descripcion', descripcion);
  formData.append('price', price);
  formData.append('checkedOffer', checkedOffer);
  formData.append('originalPrice', originalPrice);
  formData.append('stock', stock);
  formData.append('category', category);
  const result = await clienteAxios.post('/api/products/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onDownloadProgress(progressEvent) {
      const { total, loaded } = progressEvent
      productPercentageUpload(parseInt((loaded * 100) / total))
    }
  });
  return result
}
export const postSearchProducts = async (data) => {
  return await clienteAxios.post("/api/products/searchProducts", data)
}

export const deleteProductService = async (id) => {
  return await clienteAxios.delete(`/api/products/${id}`)
}

export const putUpdateProductService = async (data) => {
  return await clienteAxios.put(`api/products/${data._id}`, data)
}