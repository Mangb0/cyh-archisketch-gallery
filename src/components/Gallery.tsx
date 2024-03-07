import { FC } from "react";

const Gallery: FC = () => {
  return (
    <div className="gallery-wrapper">
      <div className="header-wrapper">
        <div className="header_left">13 개의 렌더샷</div>
        <div className="header-middle">갤러리</div>
        <div className="header-right"></div>
      </div>
      <div className="card-wrapper">
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
        <div className="card-item">
          <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
