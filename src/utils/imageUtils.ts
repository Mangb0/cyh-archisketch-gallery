// 이미지 예외 처리
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = "./imageError.jpg";
};
