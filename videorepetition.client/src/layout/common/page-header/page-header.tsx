import { Fragment, FunctionComponent } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { PageHeaderProp } from './page-header.def';

const PageHeader: FunctionComponent<PageHeaderProp> = ({title, active, heading}) => {
  return (
    <Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1 txt-upper">{title}</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb>
            <Breadcrumb.Item className=" tx-15" href="#">
              {heading}
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              {active}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </Fragment>
  );
};

export default PageHeader;
