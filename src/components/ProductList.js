import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService';
import $ from 'jquery';
import '/node_modules/datatables.net-dt/js/dataTables.dataTables';
import '/node_modules/datatables.net-dt/css/jquery.dataTables.min.css';

function ProductList() {
    const[list,setList]=useState([]);
    useEffect(()=>{
        ProductService.getAllProdct().then(res=>{
            setList(res)
        })
        $(document).ready(function(){
            $("#example").DataTable();
        })
    },[])
  return (
    <div className="container">
        <div className='card'>
            <div className="card-header">
                <h1>Product List</h1>
            </div>
            <div className='card-body'>
                <table className='table table-striped' id="example">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((p,i)=>{
                                return <tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                     </tr>
                            })
                        }
                    </tbody>

                </table>

            </div>
        </div>
      
    </div>
  )
}

export default ProductList
