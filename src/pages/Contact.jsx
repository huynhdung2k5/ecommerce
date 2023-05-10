const Contact = () => {
    return (
        <>
        <div>
  <div className="breadcrumbs_area">
    <div className="row">
      <div className="col-12">
        <div className="breadcrumb_content">
          <ul>
            <li><a href="index.html">Trang chủ</a></li>
            <li><i className="fa fa-angle-right" /></li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*breadcrumbs area end*/}
  {/*contact area start*/}
  <div className="contact_area">
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <div className="contact_message">
          <h3>Gửi cho chúng tôi đóng góp và ý kiến của bạn</h3>   
          <form id="contact-form" method="POST" action="assets/mail.php">
            <div className="row">
              <div className="col-lg-6">
                <input name="name" placeholder="Tên *" type="text" />    
              </div>
              <div className="col-lg-6">
                <input name="email" placeholder="Email *" type="email" />    
              </div>
              <div className="col-lg-6">
                <input name="subject" placeholder="Tiêu đề *" type="text" />   
              </div>
              <div className="col-lg-6">
                <input name="phone" placeholder="SĐT *" type="text" />   
              </div>
              <div className="col-12">
                <div className="contact_textarea">
                  <textarea placeholder="Message *" name="message" className="form-control2" defaultValue={""} />     
                </div>   
                <button type="submit"> Gửi </button>  
              </div> 
              <div className="col-12">
                <p className="form-messege">
                </p></div>
            </div>
          </form>    
        </div> 
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="contact_message contact_info">
          <h3>Liên hệ với chúng tôi</h3>    
          <p>Beauty Outfits cho thuê trang phục, phụ kiện chuyên nghiệp với giá cả tốt và nhiệt tình nhất.</p>
          <ul>
            <li><i className="fa fa-fax" />   Địa chỉ : Phan Hành Sơn, phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng, Việt Nam</li>
            <li><i className="fa fa-phone" /> <a href="#">uyentran99899@gmail.com</a></li>
            <li><i className="fa fa-envelope-o" /> 096 717 7830</li>
          </ul>        
          <h3><strong>Thời gian làm việc</strong></h3>
          <p>Thứ 2 – Thứ 6: 8h – 22h</p>       
        </div> 
      </div>
    </div>
  </div>
</div>
<div className="contact_map">
  <div className="row">
    <div className="col-12">
      <iframe src="https://www.google.com/maps/embed?pb" width={500} height={450} style={{border: 0}} allowFullScreen />
    </div>
  </div>
</div>

        </>
    )
}

export default Contact;