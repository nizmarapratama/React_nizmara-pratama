import React from "react";

class ContactUs extends React.Component {
    render () {
        return (
        <div>
          <title>Contact Us</title>
          <section id="kontak" className="kontak pt-5 pb-5">
            <div className="container">
              <h1 className="mb-4">Contact Us</h1>
              <div className="row">
                <div className="col-md-10 col-xl-8">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nama" className="form-label">Nama Depan</label>
                      <input type="text" className="form-control" id="nama" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="nama" className="form-label">Nama Belakang</label>
                      <input type="text" className="form-control" id="nama" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="email anda" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pesan" className="form-label">Pesan</label>
                      <textarea className="form-control" id="pesan" rows={5} defaultValue={""} />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  };

  export default ContactUs;