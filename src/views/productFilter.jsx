import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faShoppingBag , faFilter } from '@fortawesome/free-solid-svg-icons'
const ProductFilter = () => {
    return (
        <>
        <FontAwesomeIcon icon={faFilter} /> <b> ค้นหาแบบละเอียด</b>
        <br/>
        <br/>
        <div style={{ color: "#505050" }}>
            ค้นหาตามหมวดหมู่ 
            <br/>
            <input type="checkbox" name="" id=""/> รายการที่ 1 <br/>
            <input type="checkbox" name="" id=""/> รายการที่ 2 <br/>
            <input type="checkbox" name="" id=""/> รายการที่ 3 <br/>
            <input type="checkbox" name="" id=""/> รายการที่ 4 <br/>
        </div>
        
        </>
    );
}

export default ProductFilter;
