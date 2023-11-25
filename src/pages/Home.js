import React from 'react';
import headerImg from "../images/home-header.png"
import Common from '../components/Common';

export default function Home() {
  return (
    <Common
      title="Nhanh Chóng & Tiện Lợi"
      coloredText1="mọi nơi 🍲"
      bodyText="Việc của chúng tôi là lắp đầy cái bụng của bạn bằng nhữn món ăn ngon và giao hàng một cách nhanh chóng."
      btnText="Xem Thực Đơn 🍔"
      btnLink="/menu"
      img={headerImg}
    />
  )
}