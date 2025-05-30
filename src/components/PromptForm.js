import { useState } from 'react';

export default function PromptForm({ setImageUrl, setStatus }) {
  const [prompt, setPrompt] = useState('');
  const [queueInfo, setQueueInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus('loading');
    setImageUrl(null);
    setQueueInfo(null);

    try {
      const response = await fetch('https://image-gen-server-gpwb.onrender.com/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 429) {
          setQueueInfo({
            message: errorData.message,
            queuePosition: errorData.queue_position,
            retryAfter: errorData.retryAfter,
          });
          setStatus('queued');
          return;
        }
        throw new Error(errorData.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
      setStatus('success');
    } catch (error) {
      console.error('Image generation error:', error);
      setStatus('error');
      setImageUrl(null);
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
      {status === 'loading' && <p>Generating image...</p>}
      {status === 'error' && <p>Image generation failed: {error?.message || 'Unknown error'}</p>}
      {status === 'queued' && queueInfo && (
        <p>
          {queueInfo.message}. Queue position: {queueInfo.queuePosition}. Retry after {queueInfo.retryAfter} seconds.
        </p>
      )}
    </form>
  );
}
