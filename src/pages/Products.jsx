import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/products-list.json'

const customerTableHead = [
    '',
    'name',
    'image',
    'quantity',
    'price',

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <img style={{ width: '70px' }} src={item.image} alt="" />
        <td>{item.quantity}</td>
        <td>{item.price}</td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
