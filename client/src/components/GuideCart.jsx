import React from 'react';


class GuideCart extends React.Component{
    render(){
    const { article, shortArticle, image, ...others } = this.props;
    return (
      <>
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt=""
          />
        </div>
        <div className="info-article" style={{color:"#333333"}}>
          <div className="my-4">
            <h4 className="title-article" style={{color:"#333333",fontSize:"25px"}}>
              <a
                className="text-decoration-none text-body"
                href="/blogs/news/huong-dan-cach-tao-muc-luc-bai-viet"
                
              >
                {article}
              </a>
            </h4>
          </div>
          <div className="short-article" style={{color:"#333333",fontSize:"16px"}}>
            {shortArticle}
          </div>
          <div className="view-article my-4">
            <a
              className="text-body"
              href="/blogs/news/huong-dan-cach-tao-muc-luc-bai-viet"
              style={{color:"#333333",fontSize:"20px"}}
            >
              <span>Xem thêm</span>
            </a>
          </div>
        </div>
      </>
    );
}
}

export default GuideCart;