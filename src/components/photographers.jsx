import { Photographers_card } from "./photographers-card"
import { Photographers_card_2 } from "./photographers-card-2"
import Card from "./Card";
import '../scss_files/photographer.scss'

export const Photographers = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" data-aos-duration="1000">Our Photographers</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {/* <Photographers_card_2 /> */}
          {/* <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div>
              <div className="col-md-4"><Photographers_card /></div> */}
          <div className='row'> 
          {props.data
            ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`} className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title={d.title}
              imageUrl={d.imageUrl}
              body={d.body}
              />
          </div>
))
: 'loading'}
          </div>
        </div>
      </div>
      <div class="content_detail__pagination cdp" actpage="1">
			<a href="#!-1" class="cdp_i">prev</a>
			<a href="#!1" class="cdp_i">1</a>
			<a href="#!2" class="cdp_i">2</a>
			<a href="#!3" class="cdp_i">3</a>
			<a href="#!4" class="cdp_i">4</a>
			<a href="#!5" class="cdp_i">5</a>
			<a href="#!6" class="cdp_i">6</a>
			<a href="#!7" class="cdp_i">7</a>
			<a href="#!8" class="cdp_i">8</a>
			<a href="#!9" class="cdp_i">9</a>
			<a href="#!10" class="cdp_i">10</a>
			<a href="#!11" class="cdp_i">11</a>
			<a href="#!12" class="cdp_i">12</a>
			<a href="#!13" class="cdp_i">13</a>
			<a href="#!14" class="cdp_i">14</a>
			<a href="#!15" class="cdp_i">15</a>
      <a href="#!16" class="cdp_i">16</a>
			<a href="#!17" class="cdp_i">17</a>
			<a href="#!18" class="cdp_i">18</a>
			<a href="#!19" class="cdp_i">19</a>
			<a href="#!+1" class="cdp_i">next</a>
		</div>
    </div>
  )
}