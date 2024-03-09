import JSZip from "jszip";
import { saveAs } from "file-saver";

// 이미지 예외 처리
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = "./imageError.jpg";
};

// 이미지 blob 변환
export const toImageBlob = (url: string) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Image not found ${url}`);
      }
      return res.blob();
    })
    .catch((err) => {
      console.error(err);
      alert(`해당 이미지 로드 중 오류가 발생하였습니다.
${url}`);
    });
};

// 이미지 단일 다운로드
export const downloadSingleImage = async (imageUrl: string) => {
  const blob = await toImageBlob(imageUrl);
  if (blob === undefined) return;
  saveAs(blob, `${imageUrl.split("/").pop()}`);
};

// 이미지 다중 다운로드
export const downloadMultipleImages = async (imageUrls: string[]) => {
  const zip = new JSZip();
  for (let i = 0; i < imageUrls.length; i++) {
    const blob = await toImageBlob(imageUrls[i]);
    if (blob !== undefined) zip.file(`${imageUrls[i].split("/").pop()}`, blob);
  }

  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "images.zip");
    return null;
  });
};
