import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useState } from 'react';

export default function useGithubLogin() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const provider = new GithubAuthProvider();

  const githubLogin = async() => {
    setError(null);
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      if (!result) {
        throw new Error('Não foi possível entrar');
      }
      const user = result.user;
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return { githubLogin, error, loading };
}
