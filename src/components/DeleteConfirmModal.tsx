import { createPortal } from "react-dom";

interface Props {
  onDelete: () => void;
  onClose: () => void;
}

const DeleteConfirmModal: React.FC<Props> = ({ onClose, onDelete }) => {
  return createPortal(
    <div
      className="modal-wrapper"
      style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
    >
      <div className="delete-confirm-modal-content">
        <div className="delete-confirm-modal-header">
          <h2>확인</h2>
        </div>
        <div className="delete-confirm-modal-body">
          <span>정말로 삭제하시겠습니까?</span>
        </div>
        <div className="delete-confirm-modal-footer">
          <button className="delete-confirm-modal-button" onClick={onDelete}>
            삭제
          </button>
          <button className="delete-confirm-modal-button" onClick={onClose}>
            돌아가기
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default DeleteConfirmModal;
