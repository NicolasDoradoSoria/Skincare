import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseContext from './UseContext'
const UseAddEditProduct = () => {

    const navigate = useNavigate();

    const {addProduct, getCategory, categories} = UseContext()
   
    //hook de imagen seleccionada 
    const [selectedImage, setSelectedImage] = useState("")
    const [images, setImages] = useState([])

    // hook de productNew se usa inicializa las propiedades
    const [productNew, setProductNew] = useState({
        name: "",
        price: 0,
        descripcion: "",
        stock: 0,
        category: null,
        checkedOffer: false,
        originalPrice: 0,
    });

    const { name, price, descripcion, category, checkedOffer, originalPrice } = productNew;

    const isEmpty = (aField) => aField === "";

    //desabilita el boton de eliminar Imagen 
    const imageButtonDisabled = () => isEmpty(selectedImage)

    //selecciona una imagen del producto haciendo click
    const selectImage = (image) => setSelectedImage(image)

    const imageChange = (e) => setImages(images.concat(e.target.files[0]));

    const deleteImage = () => setImages(images.filter(image => image !== selectedImage))

    // checkbox
    const checkedOfferChange = (e) => setProductNew({ ...productNew, [e.target.name]: e.target.checked });

    // desabilitar el boton de agregar producto si alguno de los campos no fue completado
    const productButtonDisabled = () => images.length === 0 || (isEmpty(name) || isEmpty(descripcion) || isEmpty(category))

    // guarda en el hooks de productNew los campos
    const productChange = (e) => {
        setProductNew({
            ...productNew,
            [e.target.name]: e.target.value,
        });
    };

    const productSubmit = (e) => {
        e.preventDefault();
        addProduct(productNew, images);
        navigate("/")
    }

    useEffect(() => {
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        checkedOfferChange,
        images,
        imageButtonDisabled,
        selectImage,
        imageChange,
        selectedImage,
        deleteImage,
        checkedOffer,
        productChange,
        productButtonDisabled,
        categories,
        name,
        price,
        descripcion,
        category,
        originalPrice,
        productSubmit
    };
}

export default UseAddEditProduct;