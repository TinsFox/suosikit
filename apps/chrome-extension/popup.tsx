import { useState } from 'react';

function IndexPopup() {
  const [data, setData] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
      }}
    >
      <h2>
        Welcome to your Web Clipper of
        <a href="https://affine.pro/" target="_blank">
          AFFiNE
        </a>{' '}
        Extension!
      </h2>
    </div>
  );
}

export default IndexPopup;
