import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Col , Row
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus , faShoppingBag , faHeart , faStar , faTruckMoving} from '@fortawesome/free-solid-svg-icons'
import 'react-slideshow-image/dist/styles.css';
import { Zoom  } from 'react-slideshow-image';
const Product = () => {
    const data = [
        {
            id: 1 ,
            name: "1.jpg"
        },
        {
            id: 2 ,
            name: "2.jpg"
        },
        {
            id: 3 ,
            name: "3.png"
        },
    ]
    const [countProduct , setCountProduct] = useState(1)
    const zoomOutProperties = {
        indicators: true,
        scale: 0.4
      }
    
    const plusProduct = () => {
        setCountProduct(countProduct+1)
    }
    const minusProduct = () => {
        if(countProduct > 1){
            setCountProduct(countProduct-1)
        }
    }
    return (
        <div>
            <div className="container mt-4 pt-3" style={{ backgroundColor : "white" }}>
                <Row>
                    <Col md="5">
                    <Zoom  {...zoomOutProperties}>
                    {
                        data.map((item , idx) => {
                            return (
                                <div key={idx} style={{width: "100%"}}>
                                    <img style={{ objectFit: "cover", width: "100%" }} src={process.env.PUBLIC_URL + '/asset/img/ListImg/' + item.name} />
                                </div>
                                
                            )
                        })
                    }
                    </Zoom >
                    </Col>
                    <Col md="7">
                        <div style={{   fontSize : "16pt" , 
                                        // fontWeight : "bold" 
                                    }}>
                            My product title ชื่อ สินค้าของฉัน
                        </div>
                        <div style={{ fontSize : "12pt" }}>
                            <span style={{ color : "#FF5C00" }}>
                                 4.3 
                                 <FontAwesomeIcon icon={faStar}/>
                                 <FontAwesomeIcon icon={faStar}/>
                                 <FontAwesomeIcon icon={faStar}/>
                                 <FontAwesomeIcon icon={faStar}/>
                            </span>
                            &nbsp;
                            |
                            &nbsp;
                            <span style={{ }}>
                                 3.5 พัน Ratings 
                            </span>
                            &nbsp;
                            |
                            &nbsp;
                            <span style={{  }}>
                                 10.3 พัน ขายแล้ว
                            </span>
                        </div>
                        <div className="mt-3" style={{ backgroundColor : "white" , padding : "10px" }} >
                            <span style={{ fontSize : "12pt" }}>
                                 100฿ - 200฿ 
                            </span>
                            &nbsp;
                            <span style={{ fontSize : "16pt" , color : "#FF5C00" }}>
                                 40฿ - 80฿ 
                            </span>
                        </div>
                        <div className="mt-3">
                            โค้ดส่วนลดจากร้านค้า 
                            &nbsp;
                            <span style={{ fontSize : "12pt" , backgroundColor : "#FF5C00" , padding : "5px" }}>
                                 ลด 10%
                            </span>
                            &nbsp;
                            &nbsp;
                            <span style={{ fontSize : "12pt" , backgroundColor : "#FF5C00" , padding : "5px" }}>
                                 ลด 10%
                            </span>
                            &nbsp;
                        </div>
                        <div className="mt-3">
                            การจัดส่ง
                            &nbsp;
                            <span style={{ fontSize : "12pt"  , padding : "5px" }}>
                                 <FontAwesomeIcon icon={faTruckMoving}/>
                                 &nbsp; การจัดส่งถึง
                            </span>
                            &nbsp;
                            <span style={{ fontSize : "12pt"  , padding : "5px" }}>
                                 กรุงเทพฯ
                            </span>
                            &nbsp;
                            <span style={{ fontSize : "12pt"  , padding : "5px" }}>
                                 ค่าจัดส่ง
                            </span>
                            &nbsp;
                        </div>
                        <div className="mt-5">
                            การจัดส่ง
                            &nbsp;
                            <span className="mt-2" style={{ fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                                 Iphone11 pro
                            </span>
                            &nbsp;
                            <span className="mt-2" style={{ fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                                 Iphone11 pro
                            </span>
                            &nbsp;
                            <span className="mt-2" style={{ fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                                 Iphone11 pro
                            </span>
                        </div>
                        <div className="mt-5">
                            จำนวนทั้งหมด
                            &nbsp;
                            <button onClick={() => minusProduct()} className="mt-2" style={{cursor : "pointer"  , fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                            &nbsp;-&nbsp;
                            </button>
                            <span className="mt-2" style={{ fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                            &nbsp;{countProduct}&nbsp;
                            </span>
                            <button onClick={() => plusProduct()} className="mt-2" style={{cursor : "pointer"  , fontSize : "12pt"  , padding : "5px" , border: "1px solid #AEAEAE" }}>
                            &nbsp;+&nbsp;
                            </button>
                        </div>
                        <div className="mt-5">
                            <button 
                            type="button" 
                            style={{ padding : "15px" , backgroundColor : "#FFD7C7" , border : "1px solid #FF5C00" }}
                            ><FontAwesomeIcon icon={faCartPlus}/> เพิ่มไปยังรถเข็น</button>
                            &nbsp;
                            <button 
                            type="button" 
                            style={{ padding : "15px" , backgroundColor : "#FF5C00" , border : "1px solid #FF5C00" }}
                            >ซื้อสินค้า</button>
                        </div>
                        <hr/>
                    </Col>
                    
                </Row>
                {/* <Row>
                    <Col md="12">

                    </Col>
                </Row> */}
            </div>
            <div className="container mt-4 pt-3" style={{ backgroundColor : "white" }}>
                <Row>
                    <Col className="mt-3 mb-3" md="12">
                        <Row>
                            <Col className="mt-3" md="2" align="center">
                                <img  
                                    style={{ objectFit : "cover" , width : "100px" , height : "100px" , borderRadius : "50px" }}
                                    src={process.env.PUBLIC_URL + '/asset/img/ListImg/1.jpg'} 
                                    alt=""
                                />
                            </Col>
                            <Col className="mt-3" md="4">
                                <span  style={{ fontSize : "14pt"}}>ชื่อร้าน ABC</span>
                                <br/>
                                <span  style={{ fontSize : "12pt" , color : "#B4B4B4"}}>ออนไลน์เมื่อ 13 นาที ที่ผ่านมา</span>
                                <br/>
                                <button 
                                type="button" 
                                style={{ padding : "5px" , backgroundColor : "#FFD7C7" , border : "1px solid #FF5C00" }}
                                ><FontAwesomeIcon icon={faCartPlus}/> แชทเลย</button>
                                &nbsp;
                                <button 
                                type="button" 
                                style={{ padding : "5px" , backgroundColor : "white" , border : "1px solid #D7D7D7" }}
                                ><FontAwesomeIcon icon={faCartPlus}/> ดูร้านค้า</button>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </div>
            <div className="container mt-4 pt-3 p-3" style={{ backgroundColor : "white" }}>
                <Row>
                <Col className="mt-3 p-3" md="1" >

                </Col>
                    <Col className="mt-3 p-3" md="10" >
                        <Row>
                            <Col className="p-2" md="12" style={{ backgroundColor : "whitesmoke" }}>
                            <h5>ข้อมูลจำเพาะสินค้า</h5>

                            </Col>
                        </Row>
                        <Row>
                            {/* <Col className="mt-3" md="2">
                                <img  
                                    style={{ objectFit : "cover" , width : "100px" , height : "100px" , borderRadius : "50px" }}
                                    src={process.env.PUBLIC_URL + '/asset/img/ListImg/1.jpg'} 
                                    alt=""
                                />
                            </Col>
                            <Col className="mt-3" md="4">
                                <span  style={{ fontSize : "14pt"}}>ชื่อร้าน ABC</span>
                                <br/>
                                <span  style={{ fontSize : "12pt" , color : "#B4B4B4"}}>ออนไลน์เมื่อ 13 นาที ที่ผ่านมา</span>
                                <br/>
                                <button 
                                type="button" 
                                style={{ padding : "5px" , backgroundColor : "#FFD7C7" , border : "1px solid #FF5C00" }}
                                ><FontAwesomeIcon icon={faCartPlus}/> แชทเลย</button>
                                &nbsp;
                                <button 
                                type="button" 
                                style={{ padding : "5px" , backgroundColor : "white" , border : "1px solid #D7D7D7" }}
                                ><FontAwesomeIcon icon={faCartPlus}/> ดูร้านค้า</button>
                            </Col> */}
                        </Row>
                        
                    </Col>
                    <Col className="mt-3 p-3" md="1" >

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Product;
