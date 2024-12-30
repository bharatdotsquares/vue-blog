<template>
  <section class="comments-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h5>Leave a Comment</h5>
          <form action="#">
            <div class="row g-3">
              <div class="col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your email"
                />
              </div>
            </div>
            <textarea
              class="form-control"
              placeholder="Your Comments"
            ></textarea>
            <div class="d-flex justify-content-lg-end">
              <button type="submit" class="btn-default">Post Commnent</button>
            </div>
          </form>
          <div class="comments-area-content">
            <h5>Comments <span>(02)</span></h5>
            <div class="comments">
              <div class="comments-owner">
                <div class="comments-owner-image">
                  <a href="#" class="d-block">
                    <img :src="'images/cowner.png'" alt="Image" />
                  </a>
                </div>
                <div class="comments-owner-text">
                  <p><a href="#">Kevin</a></p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <p>
                Donec pellentesque luctus tortor finibus blandit. Fusce
                tincidunt lectus augue, quis commodo justo tincidunt eget.
                Praesent at elit diam.
              </p>
            </div>
          </div>
          <
        </div>
      </div>
    </div>
  </section>
</template>
