import { useState } from 'react';

export default function PromptForm({ setImageUrl, setStatus }) {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus('loading');
    setImageUrl(null);
    setError(null);

    try {
      const response = await fetch('https://image-gen-server-gpwb.onrender.com/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        }
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
      setStatus('success');
    } catch (error) {
      console.error('Image generation error:', error);
      setStatus('error');
      setImageUrl(null);
      setError(error.message);
    }
  };

  return (
    <form className="prompt-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt for image generation"
      />
      <button type="submit">Generate Image</button>
      {status === 'loading' && <p>Generating image... This may take a few minutes due to high demand.</p>}
      {status === 'error' && <p>Image generation failed: {error}</p>}
    </form>
  );
}
