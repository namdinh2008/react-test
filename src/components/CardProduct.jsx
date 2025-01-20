import React from "react";

const CardProduct = () => {
  const productData = {
    id: 2,
    name: "Bàn trang điểm Bali kiểu dáng Bắc Âu",
    price: 3500000,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvppy59x7ywp8d",
    description:
      "✅ Chất liệu: Ván sợi mật độ trung bình (MDF) \n✅ Kích thước thùng carton: 108x46x15cm \n✅ Quy cách đóng gói: 14kg",
  };

  const discountPrice = (price) => {
    return price - price*(30/100);
  }

  return (
    <div className="container" style={{ width: "50%" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="card">
        <img src={productData.image} className="card-img-top rounded-top" alt="card-product" />
        <div className="card-body">
          <h5 className="card-title">{productData.name}</h5>
          <p className="card-text fs-6">
            {productData.description.split("\n").map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    <br/>
                </React.Fragment>
            ))}
          </p>
          <div className="d-flex justify-content-between mb-3 w-50">
            <h6>{discountPrice(productData.price)}</h6>
            <small className="text-decoration-line-through">{productData.price}</small>
          </div>
          <div className="d-flex justify-content-end">
          <button href="#" className="btn btn-primary">
            Buy Now
          </button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
