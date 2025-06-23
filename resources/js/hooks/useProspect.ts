import { useEffect, useState } from 'react';

export function useProspect() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createProspect() {
    
  }

  return {
    loading,
    error
  };
}