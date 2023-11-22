import React from "react";

const Card=(props)=>{
    return(
        <> 
            <div className="col-sm-5 col-md-5 col-lg-5 margi_self">
              <div className="food-card food-card--vertical">
                <div className="food-card_img">
                  <img src={props.imageSrc} alt="image" />
                  <a href="#!">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="food-card_content">
                  <div className="food-card_title-section">
                    <a href="#!" className="food-card_title">
                      {props.Name}
                    </a>
                    <a href="#!" className="food-card_author">
                      {props.Tag}
                    </a>
                  </div>
                  <div className="food-card_bottom-section">
                    <div className="space-between">
                      <div>
                        <span className="fa fa-fire" /> 220 - 280 Kcal
                      </div>
                      <div className="pull-right">
                        <span className="badge badge-success">Veg</span>
                      </div>
                    </div>
                    <hr />
                    <div className="space-between">
                      <div className="food-card_price">
                        <span>{props.Price}</span>
                      </div>
                      <div className="food-card_order-count">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-secondary minus-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control input-manulator"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            defaultValue={0}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary add-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}
export default Card;