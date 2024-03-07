import { FC } from "react";

const GalleryDetail: FC = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal-header-wrapper">
        <div className="header-section">
          <div className="header-button">X</div>
        </div>
        <div className="header-section">
          <div className="header-button">
            <span>다운로드</span>
          </div>
          <div className="header-button"></div>
        </div>
      </div>
      <div className="modal-content">
        <img src="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png" />
        <div className="modal-next-button" style={{ left: "24px" }}>
          {"<"}
        </div>
        <div className="modal-next-button" style={{ right: "24px" }}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
