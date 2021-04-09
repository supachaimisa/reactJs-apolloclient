import React from 'react';
import { Row , Col } from 'reactstrap';
import ProductFilter from './productFilter';
import ProductList from './productList';
const Main = () => {
    return (
        <div className="container mt-4" >
            <Row>
                <Col md="2" >
                    <ProductFilter/>
                </Col>
                <Col md="10" >
                    <Row>
                        <ProductList/>
                    </Row>
                    
                </Col>
                
                

            </Row>
        </div>
    );
}

export default Main;
