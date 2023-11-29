import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { imagesData } from '../../common/commonimages';
import Pageheader from '../../layout/common/pageheader';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Pageheader title="DASHBOARD" heading="Dashboard" active="Sales" />
      <Row>
        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Header className="pb-1">
                  <h3 className="card-title mb-2">Browser Usage</h3>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="browser-stats">
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img src={imagesData('chrome')} alt="img" className="ht-30 wd-30 me-2" />
                        <div className="">
                          <h6 className="">Chrome</h6>
                          <span className="text-muted tx-12">Google, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">35,502</span>
                          <span className="text-success fs-13 my-auto">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            12.75%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img src={imagesData('edge')} alt="img" className="ht-30 wd-30 me-2" />
                        <div className="">
                          <h6 className="">Edge</h6>
                          <span className="text-muted tx-12">Microsoft Corporation, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">25,364</span>
                          <span className="text-success">
                            <i className="fe fe-trending-down text-danger mx-2 my-auto"></i>
                            24.37%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img src={imagesData('firefox')} alt="img" className="ht-30 wd-30 me-2" />
                        <div className="">
                          <h6 className="">Firefox</h6>
                          <span className="text-muted tx-12">Mozilla Foundation, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">14,635</span>
                          <span className="text-success">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            15,63%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item  border-bottom my-2">
                      <div className="d-flex">
                        <img src={imagesData('safari')} alt="img" className="ht-30 wd-30 me-2" />
                        <div className="">
                          <h6 className="">Safari</h6>
                          <span className="text-muted tx-12">Apple Corporation, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">35,657</span>
                          <span className="text-danger">
                            <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            12.54%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center item my-2">
                      <div className="d-flex">
                        <img src={imagesData('opera')} alt="img" className="ht-30 wd-30 me-2" />
                        <div className="">
                          <h6 className="">Opera</h6>
                          <span className="text-muted tx-12">Opera, Inc.</span>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <div className="d-flex">
                          <span className="me-3 mt-1 font-weight-semibold tx-16">12,563</span>
                          <span className="text-danger">
                            <i className="fe fe-trending-down text-danger mx-2 my-auto"></i>
                            15.12%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={7} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col sm={12} lg={12} xl={6}>
              <Card className="card overflow-hidden">
                <Card.Header className=" pb-1">
                  <h3 className="card-title mb-2">Recent Customers</h3>
                </Card.Header>
                <Card.Body className="p-0 customers mt-1">
                  <div className="list-group list-lg-group list-group-flush">
                    <Link to="#" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={imagesData('female2')}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-0">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">Samantha Melon</h5>
                                <p className="mb-0 tx-12 text-muted">User ID: #1234</p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent">
                                  <span className="op-7 text-success font-weight-semibold">paid</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={imagesData('female1')}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">Allie Grater</h5>
                                <p className="mb-0 tx-12 text-muted">User ID: #1234</p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-danger-transparent ">
                                  <span className="op-7 text-danger font-weight-semibold">Pending</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={imagesData('female5')}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">Gabe Lackmen</h5>
                                <p className="mb-0 tx-12 text-muted">User ID: #1234</p>
                              </div>
                              <span className="ms-auto wd-45p  tx-14">
                                <span className="float-end badge badge-danger-transparent ">
                                  <span className="op-7 text-danger font-weight-semibold">Pending</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={imagesData('female7')}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">Manuel Labor</h5>
                                <p className="mb-0 tx-12 text-muted">User ID: #1234</p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent ">
                                  <span className="op-7 text-success font-weight-semibold">Paid</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="border-0">
                      <div className="list-group-item list-group-item-action border-0">
                        <div className="media mt-0">
                          <img
                            className="avatar-lg rounded-circle me-3 my-auto shadow"
                            src={imagesData('female9')}
                            alt=""
                          />
                          <div className="media-body">
                            <div className="d-flex align-items-center">
                              <div className="mt-1">
                                <h5 className="mb-1 tx-13 font-weight-sembold text-dark">Hercules Bing</h5>
                                <p className="mb-0 tx-12 text-muted">User ID: #1754</p>
                              </div>
                              <span className="ms-auto wd-45p tx-14">
                                <span className="float-end badge badge-success-transparent ">
                                  <span className="op-7 text-success font-weight-semibold">Paid</span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} xl={6}>
              <Card>
                <Card.Header className="pb-3">
                  <h3 className="card-title mb-2">MAIN TASKS</h3>
                </Card.Header>
                <Card.Body className="p-0 customers mt-1">
                  <div className="">
                    <label className="p-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">accurate information at any given point.</span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          Today
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">sharing the information with clients or stakeholders.</span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          Today
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">Hearing the information and responding .</span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2 float-end">
                          22 hrs
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">Setting up and customizing your own sales.</span>
                      <span className="ms-auto">
                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          1 Day
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        To have a complete 360° overview of sales information, having.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          2 Days
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input defaultChecked type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="mx-3 my-auto">
                        To have a complete 360° overview of sales information, having.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          2 Days
                        </span>
                      </span>
                    </label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
