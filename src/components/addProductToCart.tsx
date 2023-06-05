import { IconButton } from '@mui/material'
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { addProductToCart} from '../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'
import { IProduct } from '../types/IProduct'


const AddProductToCart: React.FC<IProduct> = (product) => {

   
    const dispatch = useDispatch()

    return(
        <>
        <IconButton onClick={(e)=>{
        dispatch(addProductToCart({...product}))
        e.preventDefault()
        }
        }>
        <AddShoppingCartOutlined />
        </IconButton>
        </>
    )
}

export default AddProductToCart