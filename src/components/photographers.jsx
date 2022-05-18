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
      <div class="content_detail__pagination cdp" actpage="1">
			<a href="#!-1" class="cdp_i">prev</a>
      {props.data
            ? props.data.map((d, i) => (
			<a href={"#!"+i} class="cdp_i">{i}</a>
      ))
: 'loading'}
			<a href="#!+1" class="cdp_i">next</a>
		</div>
    </div>
  )
}