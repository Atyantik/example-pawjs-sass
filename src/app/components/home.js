import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Custom CSS
import * as styles from './home.scss';

const Home = () => (
  <div>
    <nav className={classNames(styles['site-header'], 'sticky-top py-1')}>
      <div className={classNames(styles.container, 'container d-flex flex-column flex-md-row justify-content-between')}>
        <Link to="/" className="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="d-block mx-auto"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
            <line x1="9.69" y1="8" x2="21.17" y2="8" />
            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
            <line x1="14.31" y1="16" x2="2.83" y2="16" />
            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
          </svg>
        </Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Tour</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Product</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Features</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Enterprise</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Support</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Pricing</Link>
        <Link to="/" className="py-2 d-none d-md-inline-block">Cart</Link>
      </div>
    </nav>

    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">
          SASS + ReactPWA
        </h1>
        <p className="lead font-weight-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple&#39;s marketing pages.
        </p>
        <a href="https://github.com/Atyantik/example-pawjs-sass" className="btn btn-outline-secondary">View source code</a>
      </div>
      <div className={classNames(styles['product-device'], 'shadow-sm d-none d-md-block')} />
      <div className={classNames(styles['product-device'], styles['product-device-2'], 'shadow-sm d-none d-md-block')} />
    </div>

    <div className={classNames(styles['flex-md-equal'], 'd-md-flex w-100 my-md-3 pl-md-3')}>
      <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">
            ReactPWA
          </h2>
          <p className="lead">
            An awesome boilerplate built on top of pluggable&nbsp;
            <a href="https://github.com/atyantik/pawjs" target="_blank" rel="noreferrer nofollow noopener">PawJS</a>
          </p>
          <p>
            <a href="https://www.reactpwa.com" target="_blank" rel="noreferrer nofollow noopener">#ReactPWA</a>
          </p>
        </div>
        <div
          className="bg-light shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-dark shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
    </div>

    <div className={classNames(styles['flex-md-equal'], 'd-md-flex w-100 my-md-3 pl-md-3')}>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
        <div id="codefund_ad" />
      </div>
      <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-light shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
    </div>

    <div className={classNames(styles['flex-md-equal'], 'd-md-flex w-100 my-md-3 pl-md-3')}>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-white shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-white shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
    </div>

    <div className={classNames(styles['flex-md-equal'], 'd-md-flex w-100 my-md-3 pl-md-3')}>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-white shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-white shadow-sm mx-auto"
          style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        />
      </div>
    </div>

    <footer className="container py-5">
      <div className="row">
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7586505628408924"
          data-ad-slot="5652642939"
          data-ad-format="auto"
        />
        <div className="col-12 col-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="d-block mb-2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
            <line x1="9.69" y1="8" x2="21.17" y2="8" />
            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
            <line x1="14.31" y1="16" x2="2.83" y2="16" />
            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
          </svg>
          <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><Link to="/" className="text-muted">Cool stuff</Link></li>
            <li><Link to="/" className="text-muted">Random feature</Link></li>
            <li><Link to="/" className="text-muted">Team feature</Link></li>
            <li><Link to="/" className="text-muted">Stuff for developers</Link></li>
            <li><Link to="/" className="text-muted">Another one</Link></li>
            <li><Link to="/" className="text-muted">Last time</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link to="/" className="text-muted">Resource</Link></li>
            <li><Link to="/" className="text-muted">Resource name</Link></li>
            <li><Link to="/" className="text-muted">Another resource</Link></li>
            <li><Link to="/" className="text-muted">Final resource</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link to="/" className="text-muted">Business</Link></li>
            <li><Link to="/" className="text-muted">Education</Link></li>
            <li><Link to="/" className="text-muted">Government</Link></li>
            <li><Link to="/" className="text-muted">Gaming</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><Link to="/" className="text-muted">Team</Link></li>
            <li><Link to="/" className="text-muted">Locations</Link></li>
            <li><Link to="/" className="text-muted">Privacy</Link></li>
            <li><Link to="/" className="text-muted">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;
