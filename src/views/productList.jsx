import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Col
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faShoppingBag , faFilter , faStar } from '@fortawesome/free-solid-svg-icons'
const ProductList = () => {
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
                        <Card className="product">
                            <CardImg top width="100%" src={process.env.PUBLIC_URL + '/asset/img/ip.png'} alt="Card image cap" />
                            <CardBody>
                            <CardSubtitle style={{ fontSize: "10pt" }} >[ Card subtitle ]</CardSubtitle>
                            {/* <CardText style={{ fontSize: "10pt" }}>Some quick example text to build on the card title </CardText> */}
                            <span style={{ border: "1px solid #FF5C00", fontSize: "7pt" }}>โปรโมชั่นพิเศษ</span>
                            <div style={{ color: "#FF5C00" }}>109฿</div>
                            
                            <div style={{ color: "#FF3600" , fontSize: "7pt" }}>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
