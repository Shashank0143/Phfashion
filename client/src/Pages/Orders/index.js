import React, { useContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../utils/api';
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../../App";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [products, setproducts] = useState([]);
    // const [page, setPage] = useState(1);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isLogin,setIsLogin]  = useState(false);

    const [isCustomMeasurementModalOpen, setIsCustomMeasurementModalOpen] = useState(false);
    const [customMeasurements, setCustomMeasurements] = useState(null); // For storing selected custom measurements

    const context = useContext(MyContext);

    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        const token = localStorage.getItem("token");
        if(token!=="" && token!==undefined  && token!==null){
          setIsLogin(true);
        }
        else{
          history("/signIn");
        }

        const user = JSON.parse(localStorage.getItem("user"));
        fetchDataFromApi(`/api/orders?userid=${user?.userId}`).then((res) => {
            setOrders(res);
        })

        
    context.setEnableFilterTab(false);

    }, []);




    const showProducts = (id) => {
        fetchDataFromApi(`/api/orders/${id}`).then((res) => {

            // console.log("Order products: ", res.products);
            setIsOpenModal(true);
            setproducts(res.products);
        })            
        .catch((err) => {
            console.error("Error fetching products:", err); // Log errors if any
        });
    }

    const openCustomMeasurementModal = (measurements) => {
        setCustomMeasurements(measurements);
        setIsCustomMeasurementModalOpen(true);
    };

    const closeCustomMeasurementModal = () => {
        setIsCustomMeasurementModalOpen(false);
        setCustomMeasurements(null);
    };

    return (
        <>
            <section className="section">
                <div className='container'>
                    <h2 className='hd'>Orders</h2>

                    <div className='table-responsive orderTable'>
                        <table className='table table-striped table-bordered'>
                            <thead className='thead-light'>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Paymant Id</th>
                                    <th>Products</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Pincode</th>
                                    <th>Total Amount</th>
                                    <th>Email</th>
                                    <th>User Id</th>
                                    <th>Order Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    orders?.length !== 0 && orders?.map((order, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                 <td><span className='text-blue fonmt-weight-bold'>{order?.id}</span></td>
                                                    <td><span className='text-blue fonmt-weight-bold'>{order?.paymentId}</span></td>
                                                    <td><span className='text-blue fonmt-weight-bold cursor' onClick={() => showProducts(order?._id)}>Click here to view</span>
                                                    </td>
                                                    <td>{order?.name}</td>
                                                    <td>{order?.phoneNumber}</td>
                                                    <td>{order?.address}</td>
                                                    <td>{order?.pincode}</td>
                                                    <td>{order?.amount}</td>
                                                    <td>{order?.email}</td>
                                                    <td>{order?.userid}</td>
                                                    <td>
                                                        {order?.status === "pending" ?
                                                            <span className='badge badge-danger'>{order?.status}</span> :
                                                            <span className='badge badge-success'>{order?.status}</span>
                                                        }
                                                    </td>
                                                    <td>{new Date(order?.date).toLocaleDateString()}</td>
                                                </tr>

                                            </>

                                        )
                                    })
                                }

                            </tbody>


                        </table>
                    </div>


                   

                </div>
            </section>


            <Dialog open={isOpenModal} className="productModal" >
                <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>
                <h4 class="mb-1 font-weight-bold pr-5 mb-4">Products</h4>

                <div className='table-responsive orderTable'>
                    <table className='table table-striped table-bordered'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Title</th>
                                <th>Image</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>SubTotal</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products?.length !== 0 && products?.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{item?.productId}</td>
                                            <td  style={{whiteSpace:"inherit"}}><span>
                                                {item?.productTitle?.substr(0,100)+'...'}
                                          </span></td>
                                            <td>
                                                <div className='img'>
                                                    <img src={item?.image} alt='' />
                                                </div>
                                            </td>
                                            <td>
                                            {item?.customMeasurements 
                                                    ? <Button className='btn-blue' onClick={() => openCustomMeasurementModal(item.customMeasurements)}>View Custom Measurements</Button>
                                                    : item?.size
                                                }
                                            </td>
                                            <td>{item?.quantity}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.subTotal}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </Dialog>

            <Dialog open={isCustomMeasurementModalOpen} onClose={closeCustomMeasurementModal}>
                <Button className='close_' onClick={closeCustomMeasurementModal}><MdClose /></Button>
                <h4 className="mb-1 font-weight-bold pr-5 mb-4">Custom Measurements</h4>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Measurement</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customMeasurements && Object.keys(customMeasurements).map((key, index) => (
                                <tr key={index}>
                                    <td>{key}</td>
                                    <td>{customMeasurements[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Dialog>

        </>
    )
}

export default Orders;