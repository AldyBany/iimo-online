const Contact = () => {
  return ( 
      <>
          <section id="mail-section">
              <div class="container">
                  <h1 class="h1 h1-responsive mb-">Have a Question in mind?<br/>Let us help you</h1>

                  <div class="col-md-8 col-md-11 mx-auto form shadow mt-3">
                  <div class="row">
                      <div class="col-md-9 my-auto">
                      <input type="text" class="form-control" placeholder="Your Email"/>
                      </div>
                      <div class="col-md-3 text-right">
                      <button class="btn btn-theme">Send</button>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
      </>
   );
}

export default Contact;