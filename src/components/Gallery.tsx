import { FC, useEffect, useState } from "react";
import GalleryDetail from "./GalleryDetail";
import { handleImageError } from "./../utils/imageUtils";

interface Image {
  _id: string;
  isSelected: boolean;
}

const Gallery: FC = () => {
  // 이미지 데이터
  const [images, setImages] = useState<Image[]>([]);
  // 데이터 파싱 상태
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 현재 클릭한 이미지 Index(모달창 표시용)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 선택모드 상태
  const [isSelectMode, setIsSelectMode] = useState<boolean>(false);

  // 데이터 로드
  useEffect(() => {
    fetch("./test.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setImages(
          data.renderings.map((item: { _id: string }) => ({
            ...item,
            isSelected: false,
          }))
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("데이터 로드 중 오류가 발생하였습니다");
      });
  }, []);

  // 현재 인덱스 설정
  const handleCurrentIndex = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  // 현재 인덱스에 해당하는 이미지 URL
  const imageUrl = currentIndex !== null ? images[currentIndex]._id : "";

  // 이미지 선택 (개별) 상태 변경
  const handleImageToggle = (index: number) => {
    setImages((prev) => {
      const tempArr = [...prev];
      tempArr[index].isSelected = !tempArr[index].isSelected;
      setIsSelectMode(tempArr.some((item) => item.isSelected));
      return tempArr;
    });
  };

  // 이미지 선택 (전체) 상태 변경
  const handleImageToggleAll = () => {
    setImages((prev) => {
      const isAllSelected = !prev.every((item) => item.isSelected);
      const tempArr = [...prev].map((item) => ({
        ...item,
        isSelected: isAllSelected,
      }));
      setIsSelectMode(isAllSelected);
      return tempArr;
    });
  };

  return (
    <div className="gallery-wrapper">
      <div className="header-wrapper">
        <div className="header-left">
          {!isSelectMode ? (
            <span>{images.length} 개의 렌더샷</span>
          ) : (
            <>
              <span>
                {images.filter((item) => item.isSelected).length} 개의 렌더
                이미지 선택됨
              </span>
              <input
                type="checkbox"
                checked={
                  images.length > 0 && images.every((item) => item.isSelected)
                }
                onChange={handleImageToggleAll}
              />
            </>
          )}
        </div>
        <div className="header-middle">갤러리</div>
        <div className="header-right">
          {isSelectMode && (
            <>
              <div className="header-button">다운로드</div>
              <div className="header-button">삭제</div>
              <div
                className="header-button"
                onClick={() => {
                  setImages((prev) =>
                    prev.map((item) => ({ ...item, isSelected: false }))
                  );
                  setIsSelectMode(false);
                }}
              >
                선택 해제
              </div>
            </>
          )}
        </div>
      </div>
      <div className="card-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          images.map((image, i) => (
            <div
              key={i}
              className="card-item"
              onClick={() => handleCurrentIndex(i)}
            >
              <input
                type="checkbox"
                className="card-checkbox"
                style={{
                  position: "fixed",
                  margin: "12px",
                  width: "16px",
                  height: "16px",
                  zIndex: 1,
                }}
                checked={image.isSelected}
                onChange={() => handleImageToggle(i)}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
              <img src={image._id} onError={handleImageError} />
            </div>
          ))
        )}
      </div>
      {imageUrl && (
        <GalleryDetail
          imageUrl={imageUrl}
          index={currentIndex!}
          lastIndex={images.length - 1}
          onClose={() => setCurrentIndex(null)}
          onPrev={() => handleCurrentIndex(currentIndex! - 1)}
          onNext={() => handleCurrentIndex(currentIndex! + 1)}
        />
      )}
    </div>
  );
};

export default Gallery;
