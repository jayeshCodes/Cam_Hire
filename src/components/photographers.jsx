import Card from "./Card";


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
          <div className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title='Card Title'
              imageUrl='https://media.istockphoto.com/photos/in-the-photo-studio-with-professional-equipment-portrait-of-the-picture-id1196172395?k=20&m=1196172395&s=612x612&w=0&h=6kybVfbh-bULCkoLbTIJhfohoUdsjC88vZMLWX28cOQ='
              body='Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
            />
          </div>
          <div className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title='Card Title'
              imageUrl='https://media.istockphoto.com/photos/in-the-photo-studio-with-professional-equipment-portrait-of-the-picture-id1196172395?k=20&m=1196172395&s=612x612&w=0&h=6kybVfbh-bULCkoLbTIJhfohoUdsjC88vZMLWX28cOQ='
              body='Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
            />
          </div>
          <div className="col-md-4" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title='Card Title'
              imageUrl='https://media.istockphoto.com/photos/in-the-photo-studio-with-professional-equipment-portrait-of-the-picture-id1196172395?k=20&m=1196172395&s=612x612&w=0&h=6kybVfbh-bULCkoLbTIJhfohoUdsjC88vZMLWX28cOQ='
              body='Sed enim turpis, tempor sit amet libero quis, molestie sagittis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
            />
          </div>
        </div>
      </div>
    </div>
  )
}
