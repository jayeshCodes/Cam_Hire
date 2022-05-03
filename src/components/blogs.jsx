import Card from "./Card-2";


export const Blogs = (props) => {
  return (
    <div id='blogs' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" data-aos-duration="1000">Blogs</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className="col-md-6" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title='Card Title'
              imageUrl='https://images.pexels.com/photos/7598232/pexels-photo-7598232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              body='Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
            />
          </div>
          <div className="col-md-6" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title='Card Title'
              imageUrl='https://images.pexels.com/photos/7598232/pexels-photo-7598232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              body='Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
            />
          </div>
        </div>
      </div>
    </div>
  )
}
