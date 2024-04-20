/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart,increaseQuantity,decreaseQuantity,removeItem } from '../Redux/cartSlice';



export default function Cart(){
    const cartItems = useSelector(store=>store.cart.items)
    const dispatch = useDispatch()
    const handleRemove = (id) => {
           dispatch(removeItem(id));
     };
     const cartClear = ()=>{
        dispatch(clearCart())
     } 

    const handleIncrement = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decreaseQuantity(id));
    }

    
    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    return(
        <>
        <div className='p-2 bg-secondary text-light center'>
            <h4>TotalAmount: Rs. {cartTotal}</h4>
            </div>
        <div className='m-3'>
        {cartItems.map(product => {
        return ( 
        <Card  className="card mb-3" style={{maxWidth:"600px"}} key={product.id} >
            <div className='row'>
                <div className='col-md-4'>
            <Card.Img className="image-container" variant="top" src={product.images} /></div>
            <div className="col-md-8">
            <Card.Body >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <div>
                    <p>{product.description}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Price: Rs.{product.price}</p></div>
                </Card.Text>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-secondary" onClick={()=>handleDecrement(product.id)} >-</button>
                    <button type="button" className="btn btn-secondary">{product.quantity}</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>handleIncrement(product.id)} >+</button>
                    </div>
                    <div>
                        <h5>Subtotal:{product.quantity * product.price}</h5></div>
                        <div>
                            <button onClick={()=>handleRemove(product.id)}> Remove item</button>
                        </div>
                    </Card.Body></div></div>
        </Card> ); })}
        </div>
        
            <div>
                <button className='m-5 btn btn-secondary btn-lg btn-block' onClick={()=>cartClear()}> Clear Cart</button>
            </div>
        </>
    )       
}
