import React from 'react'

export default function EpisodeShowcase(props) {
    return (
        <div>
<div class="columns has-text-centered" id="blog-card">
    <div class="column is-marginless is-paddingless is-one-third-desktop is-one-third-fullhd is-one-third-tablet">
        <div class="image is-16by9"></div>
        {/* <div class="image is-16by9" style="background-image: url({{post.post-image}});"></div> */}
    </div>
    <a href="#">
        <div class="column has-text-left-desktop has-text-left-tablet">
            <h1 class="title is-size-4-touch">Title</h1>
            <div class="content has-text-grey">
                newsLine descriptions
                {/* <hr class="has-background-grey"> </hr> */}
                <span class="has-text-grey">Published on <span class="has-text-weight-semibold">date</span></span> | <i class="fas fa-clock"></i> <span class="has-text-weight-semibold">text min</span> read
            </div>
        </div>
    </a>
</div>
{/* <section class="hero is-fullheight has-text-centered" id="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-white is-size-1 is-uppercase has-text-weight-bold">
      Title
      </h1>
      <h3 class="subtitle has-text-white-bis is-uppercase has-text-weight-medium is-marginless">
        Description
      </h3>
      <hr></hr>
      <a href="#"
        class="button is-white is-rounded is-outlined is-uppercase has-text-weight-normal">Read More</a>
    </div>
  </div>
</section> */}
            
        </div>
    )
}
