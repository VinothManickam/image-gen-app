import { useSession, signIn, signOut } from 'next-auth/react';
import PromptForm from '../components/PromptForm';
import ImageDisplay from '../components/ImageDisplay';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState(null);

  if (!session) {
    return (
      <div className="container">
        <h1>AI Image Generator</h1>
        <button onClick={() => signIn('auth0')}>Sign in with Auth0</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>AI Image Generator</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      <PromptForm setImageUrl={setImageUrl} setStatus={setStatus} />
      <ImageDisplay imageUrl={imageUrl} status={status} />
    </div>
  );
}