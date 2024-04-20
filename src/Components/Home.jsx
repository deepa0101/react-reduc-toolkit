import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Products from "../Products";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';

export default function Home(){
    const dispatch = useDispatch()
    const [products,setProducts] = useState([...Products]);
    const handleAdd=(product)=>{
        dispatch(addItem(product))
    }
    return(
        <>
        <div className="home-container d-flex flex-wrap ">
        {products.map(product => {
        return ( 
        <Card  bg='dark' text='light' className="col-lg-3 col-md-3  col-sm-12 col-xs-12" key={product.id} >
            <Card.Img className="image-container" variant="top" src={product.images} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text><Card.Text> <b>Rating:</b>{product.rating}</Card.Text>
                <Card.Text style={{color:"Red"}}>Price: Rs.{product.price}</Card.Text>
                <Button variant='info'onClick={()=>handleAdd(product)}>Add to cart</Button>
            </Card.Body>
        </Card> ); })}
        </div>
        </>
    )

}