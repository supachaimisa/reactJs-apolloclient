import React from 'react';
import { useHistory } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Col 
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faShoppingBag , faHeart , faStar } from '@fortawesome/free-solid-svg-icons'
const ProductList = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/product");
    }
    const data = [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
    ]
    return (
        <>
            {
                data.map(() => {
                    return (
                    <Col md="3" className="mt-1 p-1">
                            <Card className="product" onClick={() => handleClick()} style={{ cursor: "pointer" }}>
                                <CardImg top width="100%" src={process.env.PUBLIC_URL + '/asset/img/ip.png'} alt="Card image cap" />
                                <CardBody>
                                <CardSubtitle style={{ fontSize: "10pt" }} >[ Card subtitle ]</CardSubtitle>
                                {/* <CardText style={{ fontSize: "10pt" }}>Some quick example text to build on the card title </CardText> */}
                                <span style={{ border: "1px solid #FF5C00", fontSize: "7pt" }}>โปรโมชั่นพิเศษ</span>
                                <div style={{ color: "#FF5C00" }}>109฿</div>
                                
                                <div style={{ color: "#FFE512" , fontSize: "7pt" }}>
                                    <span style={{float: "left" , color: "none"}}>
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </span>
                                    <span style={{ float: "right"  }}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        &nbsp;
                                        <span style={{ color: "#8A8A8A" }}>ขายแล้ว 3 ชิ้น</span>
                                    </span>
                                        
                                </div>
                                
                                </CardBody>
                            </Card>
                    </Col>
                    )
                })
            }
            
        </>
    );
}

export default ProductList;
