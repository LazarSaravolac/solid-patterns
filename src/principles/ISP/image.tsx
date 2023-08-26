export interface IImage {
  imageUrl?: string;
}

export function Image(props: IImage) {
  const { imageUrl } = props;

  return (
    <img
      src={imageUrl}
      alt="wedding image"
    />
  );
}
