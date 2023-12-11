import { render } from '@testing-library/react';
import Sidebar from './sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar test suites', () => {
  test('render normally when body has class horizontal', () => {
    const { asFragment } = render(
      <body className='horizontal'>
        <div className='main-content'>
          Hello
        </div>
        <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' }]}>
          <Sidebar />
        </MemoryRouter>
      </body>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('render normally when body has not class horizontal', () => {
    const { asFragment } = render(
      <body>
        <div className='main-content'>
          Hello
        </div>
        <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' }]}>
          <Sidebar />
        </MemoryRouter>
      </body>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
