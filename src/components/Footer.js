import React from "react";

export default function Footer(props) {
  return (
    <>
      <div
        className="container color-footer text-muted"
        sticky="bottom"
      >
        <div className="row">
          <div className="col justify-content-center">
          <q>
            As an unremitting scholar, I am perpetually in search of ways to
            acquire and implement novel technologies..
          </q>
          <div className="col justify-content-right">
            <span className="text-shadow-light-font-light-small">Phone: (303)880-9518</span>
          <br />
          <span className="text-shadow-light-font-light-small">Email: ssjones.code@gmail.com</span>
          </div>
          <div className="text-muted">&copy; Steven Jones 2020</div>
          </div>
        </div>
      </div>
    </>
  );
}
