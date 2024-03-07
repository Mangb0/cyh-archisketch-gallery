import { FC, SyntheticEvent, useEffect, useState } from "react";

interface Image {
  _id: string;
}

const Gallery: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 데이터 로드
  useEffect(() => {
    fetch("./test.json")
      .then((response) => {
        if (!response.ok) console.log(response.ok);
        console.log(response);
        console.log(response.ok);
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

  return (
    <div className="gallery-wrapper">
      <div className="header-wrapper">
        <div className="header_left">{images.length} 개의 렌더샷</div>
        <div className="header-middle">갤러리</div>
        <div className="header-right"></div>
      </div>
      <div className="card-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          images.map((image, i) => (
            <div key={i} className="card-item">
              <img src={image._id} onError={handleImageError} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
