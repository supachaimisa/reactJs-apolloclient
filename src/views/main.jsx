import React from 'react';
import { Row , Col , Navbar , Card , CardBody  } from 'reactstrap';
import ProductFilter from './productFilter';
import ProductList from './productList';
import Select from 'react-select'
const Main = () => {
    
    const data = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="container mt-4" >
            <Row>
                <Col md="2" >
                    <ProductFilter/>
                </Col>
                <Col md="10" >
                    <Row>
                        <Col className="p-1" md="12">
                            <Navbar color="light" light expand="md">
                                เรียงโดย 
                                &nbsp; 
                                <Card>
                                    <CardBody className="p-2" >
                                        เกี่ยวข้อง
                                    </CardBody> 
                                </Card>
                                &nbsp;
                                <Card>
                                    <CardBody className="p-2">
                                        ล่าสุด
                                    </CardBody> 
                                </Card>
                                &nbsp;
                                <Card>
                                    <CardBody className="p-2">
                                        สินค้าขายดี
                                    </CardBody> 
                                </Card>
                                &nbsp;
                                {/* <Card>
                                    <CardBody className="p-2">
                                        
                                    </CardBody> 
                                </Card> */}
                                <Select options={data} width='200px'></Select>
                            
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <ProductList/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Main;
