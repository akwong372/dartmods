import React from 'react';

const footer = () => {
  const linkGrp1 = ['link', 'link', 'link'];
  const linkGrp2 = ['link', 'link', 'link'];
  const linkGrp3 = ['link', 'link', 'link'];

  const linkGrp1Mapped = linkGrp1.map((link, i) => {
    return <li key={'grp1id' + i}>{link}</li>
  });

  const linkGrp2Mapped = linkGrp2.map((link, i) => {
    return <li key={'grp2id' + i}>{link}</li>
  });

  const linkGrp3Mapped = linkGrp3.map((link, i) => {
    return <li key={'grp3id' + i}>{link}</li>
  });

  return (
    <div className='container-fluid bg-light mt-1 py-2' id='footer'>
      <div className="row">
        <div className="col-md-3">
          <h6>Link Section</h6>
          <ul className='list-unstyled'>
            {linkGrp1Mapped}
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Link Section</h6>
          <ul className='list-unstyled'>
            {linkGrp2Mapped}
          </ul>
        </div>
        <div className="col-md-3">
          <h6>Link Section</h6>
          <ul className='list-unstyled'>
            {linkGrp3Mapped}
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-center font-weight-light">
        <a className='badge badge-pill badge-light' href='#'>© 2019 placeholder</a>
      </div>
    </div>
  );
}

export default footer;