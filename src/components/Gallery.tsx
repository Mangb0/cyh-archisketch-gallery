import { FC, SyntheticEvent, useEffect, useState } from "react";
import GalleryDetail from "./GalleryDetail";

interface Image {
  _id: string;
}

const Gallery: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 데이터 로드
  useEffect(() => {
    fetch("./test.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setImages(data.renderings);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("데이터 로드 중 오류가 발생하였습니다");
      });
  }, []);

  // 이미지 예외 처리
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "./imageError.jpg";
  };

  // 현재 인덱스 설정
  const handleCurrentIndex = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  // 현재 인덱스에 해당하는 이미지 URL
  const imageUrl = currentIndex !== null ? images[currentIndex]._id : "";

  return (
    <div className="gallery-wrapper">
      <div className="header-wrapper">
        <div className="header-left">{images.length} 개의 렌더샷</div>
        <div className="header-middle">갤러리</div>
        <div className="header-right"></div>
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
