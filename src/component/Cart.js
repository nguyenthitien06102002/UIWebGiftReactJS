import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import { MdDelete } from "react-icons/md";
import FooterComponent from './FooterComponent';

const Cart = () => {
    const [quantities, setQuantities] = useState({ 1: 1, 2: 1 }); // Số lượng cho từng sản phẩm

    const handleIncreaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1 // Tăng số lượng của sản phẩm có id là productId
        }));
    };

    const handleDecreaseQuantity = (productId) => {
        if (quantities[productId] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1 // Giảm số lượng của sản phẩm có id là productId
            }));
        }
    };

    return (
        <div>
            <Header />
            <Menu />
            <div className='container' style={styles.container}>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th className="col-4">Sản phẩm</th>
                            <th className="col-4 col-lg-2">Đơn giá</th>
                            <th className="col-4 col-lg-2">Số lượng</th>
                            <th className="col-4 col-lg-2">Tổng</th>
                            <th className="col-4 col-lg-2">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-4">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://i.pinimg.com/564x/45/58/f0/4558f0018fdb3eea1bb01e227655279b.jpg" alt="Mô tả ảnh" style={{ maxWidth: '100px' }} />
                                    <p style={{ marginLeft: '10px' }}> Kính ngủ MJ Hải ly Loopy cosplay Sanrio family face cục bông boppng  </p>
                                </div>
                            </td>
                            <td className="col-4 col-lg-2">
                                <p>230000 đ</p>
                            </td>
                            <td className="col-4 col-lg-2">
                                <div style={styles.quantityContainer}>
                                    <button style={styles.quantityButton} onClick={() => handleDecreaseQuantity(1)}>-</button>
                                    <span style={styles.quantityNumber}>{quantities[1]}</span>
                                    <button style={styles.quantityButton} onClick={() => handleIncreaseQuantity(1)}>+</button>
                                </div>
                            </td>
                            <td className="col-4 col-lg-2"> </td>
                            <td className="col-4 col-lg-2"><MdDelete style={{ fontSize: '30px' }} /></td>
                        </tr>
                        {/* Sản phẩm thứ 2 */}
                        <tr>
                            <td className="col-4">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://i.pinimg.com/564x/45/58/f0/4558f0018fdb3eea1bb01e227655279b.jpg" alt="Mô tả ảnh" style={{ maxWidth: '100px' }} />
                                    <p style={{ marginLeft: '10px' }}> Kính ngủ MJ Hải ly Loopy cosplay Sanrio family face cục bông boppng  </p>
                                </div>
                            </td>
                            <td className="col-4 col-lg-2">
                                <p>430000 đ</p>
                            </td>
                            <td className="col-4 col-lg-2">
                                <div style={styles.quantityContainer}>
                                    <button style={styles.quantityButton} onClick={() => handleDecreaseQuantity(2)}>-</button>
                                    <span style={styles.quantityNumber}>{quantities[2]}</span>
                                    <button style={styles.quantityButton} onClick={() => handleIncreaseQuantity(2)}>+</button>
                                </div>
                            </td>
                            <td className="col-4 col-lg-2"> </td>
                            <td className="col-4 col-lg-2"><MdDelete style={{ fontSize: '30px' }} /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h6>Lưu ý:

                        Đơn hàng trên website được xử lý trong giờ hành chính</h6>
                </div>
                <div style={{ textAlign: 'right' , ...styles.total}}>
                    <div style={{ display: 'inline-block' }}>
                        Tổng : 1130000 đ
                    </div>
                   
                </div>
                <div style={{ textAlign: 'right',}}>
                    <button type="button" className="btn " style={styles.button}>Thanh Toán</button>
                </div>

            </div>
            <FooterComponent/>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Montserrat',
        paddingTop: '30px'
    },
    quantityButton: {
        background: '#FEAFA2',
        color: 'white',
        border: '2px solid #FEAFA2',
        borderRadius: '5px',
        width: '25px',
        cursor: 'pointer',
    },
    quantityNumber: {
        fontSize: '18px',
        padding: '10px 10px',
        margin: '0 5px',
    },
    total: {
        fontSize: '25px',
        fontWeight : 'bold',
        paddingBottom: '10px',
    },
    button: {
        backgroundColor: '#FEAFA2',
        borderRadius: '20px',
        fontSize: '25px',
        color:'white',
        fontWeight : 'bold',

    }
};

export default Cart;
