import { FC } from "react";
import { createPortal } from "react-dom";
import { downloadSingleImage, handleImageError } from "./../utils/imageUtils";

interface Props {
  imageUrl: string;
  index: number;
  lastIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onDelete: () => void;
}

const GalleryDetail: FC<Props> = ({
  imageUrl,
  index,
  lastIndex,
  onClose,
  onPrev,
  onNext,
  onDelete,
}) => {
  // 이미지 다운로드
  const handleDownload = () => {
    downloadSingleImage(imageUrl);
  };

  return createPortal(
    <div className="modal-wrapper">
      <div className="modal-header-wrapper">
        <div className="header-section">
          <div className="header-button" onClick={onClose}>
            X
          </div>
        </div>
        <div className="header-section">
          <div className="header-button" onClick={handleDownload}>
            <span>다운로드</span>
          </div>
          <div className="header-button" onClick={onDelete}>
            <span>삭제</span>
          </div>
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
