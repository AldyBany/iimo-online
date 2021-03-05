const Banner = () => {
  return ( 
      <>
           <section id="hero-banner">
              <div class="container">
                  <div class="row">
                  <div class="col-md-5 my-auto mr-auto banner-text">
                      <h1 class="h1 h1-responsive">
                          Learn a New Skill from Online course.
                      </h1>
                      <p>
                      In expecting display, thought. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Ipsa quod, quaerat sapiente dolores
                      error atque voluptates harum accusantium corrupti quo!
                      </p>
                      <button class="btn btn-theme-2">View Courses</button>
                      <button class="btn btn-play ml-3">
                      <i class="fas fa-play"></i>
                      </button>
                  </div>

                  <div class="col-lg-5 col-md-6 ml-auto my-md-auto my-5 banner-img">
                      <div class="image">
                      <img
                          src="./images/img-1.jpg"
                          alt=""
                      />
                      </div>
                  </div>
                  </div>
              </div>
          </section>
      </>
   );
}

export default Banner;