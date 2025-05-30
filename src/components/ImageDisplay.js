export default function ImageDisplay({ imageUrl, status }) {
  if (status === 'loading') {
    return <p>Image generation in progress...</p>;
  }
  if (status === 'error') {
    return <p>Image generation failed. Please try again.</p>;
  }
  if (!imageUrl) {
    return null;
  }
  return <img src={imageUrl} alt="Generated Image" className="generated-image" />;
}