import React from "react";
import { Accordion } from "react-bootstrap";

const Content = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          style={{
            width: "650px",
            fontSize: "16px",
            fontFamily: "Tinos, sans-serif",
          }}
        >
          <div className="mx-auto">
            <p>
              <img
                style={{ width: "100%" }}
                src="//file.hstatic.net/200000592359/file/faq_1a70e478fb944f37b40b095167c27419.jpg"
              />
            </p>
            <p className="mx-auto">
              <strong>
                Bạn có thắc mắc về việc mua hàng từ Mode Fashion? Bạn có thể
                tham khảo các trường hợp hay gặp dưới đây:
              </strong>
            </p>
            <p>
              Trải qua thời gian hình thành và phát triển Mode đã trở thành một
              thương hiệu thời trang giày dép, túi xách và phụ kiện, nhiều
              người&nbsp;yêu thích và chọn lựa. Hiện nay, thương hiệu Mode đã
              phát triển mạnh mẽ với hàng chục cửa hàng trải dài trên toàn quốc
              và website bán hàng trực tuyến thân thiện, chuyên nghiệp hàng đầu
              Việt Nam. Không dừng lại ở đó, dịch vụ của Mode luôn mang đến sự
              hài lòng và quyền lợi của khách hàng luôn được đáp ứng, thoả mãn…
            </p>
          </div>
          <div
            style={{
              fontSize: "16px",
              fontFamily: "Tinos, sans-serif",
            }}
          >
            <Accordion>
              <div className="text-start fw-bold">CÂU HỎI THƯỜNG GẶP</div>
              <Accordion.Item className="border-0" eventKey="0">
                <Accordion.Header>
                  <strong style={{ marginTop: "10px" }}>
                    Làm thế nào để tôi đặt hàng online?
                  </strong>
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  The swan rất vui lòng hỗ trợ khách hàng đặt hàng online bằng
                  một trong những cách đặt hàng sau:
                  <br />
                  - Truy cập trang web: The swan
                  <br />
                  - Gửi email đặt hàng về địa chỉ: hi@theswan.com
                  <br />
                  - Liên hệ số hotline: 1900.636.000 để đặt sản phẩm
                  <br />- Chat với tư vấn viên trên fanpage của The swan
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="1">
                <Accordion.Header>
                  <strong>
                    Nếu tôi đặt hàng trực tuyến có những rủi ro gì không?
                  </strong>
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Với The swan, khách hàng không phải lo lắng, vì chúng tôi cam
                  kết cung cấp sản phẩm chất lượng tốt, giá cả phải chăng. Đặc
                  biệt, khách hàng sẽ nhận được sản phẩm và thanh toán cùng một
                  thời điểm.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="2">
                <Accordion.Header>
                  <strong>
                    Nếu tôi mua sản phẩm với số lượng nhiều thì giá có được giảm
                    không?
                  </strong>
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Khi mua hàng với số lượng nhiều khách hàng sẽ được hưởng chế
                  độ ưu đãi, giảm giá ngay tại thời điểm mua hàng. Khách hàng
                  vui lòng liên hệ Mode để được hỗ trợ trực tiếp qua số điện
                  thoại: 1900.636.000
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="3">
                <Accordion.Header>
                  <strong>
                    Quy đinh hoàn trả và đổi sản phẩm của Mode như thế nào?
                  </strong>
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Khách hàng vui lòng tham khảo chính sách đổi trả sản phẩm của
                  The swan để được cung cấp thông tin đầy đủ và chi tiết nhất.
                  Lưu ý: Đối với dòng sản phẩm túi và giày điều kiện đổi trả
                  được thực hiện trong vòng 30 ngày kể từ ngày nhận hàng và hàng
                  hoá đảm bảo còn giữ nguyên tem nhãn sản phẩm. (chưa qua sử
                  dụng)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="border-0" eventKey="4">
                <Accordion.Header>
                  <strong>
                    Tôi mua hàng rồi, không vừa ý có thể đổi lại hay không?{" "}
                  </strong>
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  Khi mua hàng nếu khách hàng không vừa ý với sản phẩm, hãy cho
                  The swan được biết, chúng tôi sẽ đổi ngay sản phẩm cho khách
                  hàng. Chỉ cần đảm bảo sản phẩm chưa qua sử dụng, còn nguyên
                  tem nhãn. Chúng tôi sẽ hỗ trợ đổi (size, màu, sản phẩm khác)
                  cho khách hàng.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
