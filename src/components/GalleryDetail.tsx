import { FC } from "react";
import { createPortal } from "react-dom";
import { handleImageError } from "./../utils/imageUtils";

interface Props {
  imageUrl: string;
  index: number;
  lastIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryDetail: FC<Props> = ({
  imageUrl,
  index,
  lastIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  return createPortal(
    <div className="modal-wrapper">
      <div className="modal-header-wrapper">
        <div className="header-section">
          <div className="header-button" onClick={onClose}>
            X
          </div>
        </div>
        <div className="header-section">
          <div className="header-button">
            <span>다운로드</span>
          </div>
          <div className="header-button"></div>
        </div>
      </div>
      <div className="modal-content">
        <img src={imageUrl} onError={handleImageError} />
        {index > 0 && (
          <div
            className="modal-next-button"
            style={{ left: "24px" }}
            onClick={onPrev}
          >
            {"<"}
          </div>
        )}
        {index < lastIndex && (
          <div
            className="modal-next-button"
            style={{ right: "24px" }}
            onClick={onNext}
          >
            {">"}
          </div>
        )}
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default GalleryDetail;
