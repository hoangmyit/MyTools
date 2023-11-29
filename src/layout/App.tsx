import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/header';
import Sidebar from './common/sidebar';
import Footer from './common/footer';
import Switcher from './common/switcher';
import RightSidebar from './common/rightsidebar';
import TabToTop from './common/tabtotop';
export default function App() {
  //The created store
  document.querySelector('body')?.classList.add('ltr', 'main-body', 'app', 'sidebar-mini');
  document.querySelector('body')?.classList.remove('error-page1', 'bg-primary');

  const responsiveSidebarclose = () => {
    //leftsidemenu

    document.querySelector('.app')?.classList.remove('sidenav-toggled');

    //rightsidebar
    document.querySelector('.sidebar-right')?.classList.remove('sidebar-open');
  };

  function Sidebargone(gone: any) {
    if (gone.matches) {
      // If media query matches
      document.querySelector('body')?.classList.add('sidebar-gone');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-gone');
      document.querySelector('body')?.classList.remove('sidenav-toggled');
    }
  }

  const gone = window.matchMedia('(max-width: 1024px)');
  Sidebargone(gone); // Call listener function at run time
  gone.addListener(Sidebargone);
  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <TabToTop />
        <div className="page">
          <div className="open">
            <Header />
            <Sidebar />
          </div>
          <div
            className="main-content app-content"
            onClick={() => {
              responsiveSidebarclose();
            }}
          >
            <div className="side-app">
              <div className="main-container container-fluid">
                <Outlet />
              </div>
            </div>
          </div>
          <RightSidebar />
          <Switcher />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
