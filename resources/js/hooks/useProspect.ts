// Dependncias
import { useState } from 'react';

// Servicios
import { createNewProspect, type CreateProspect } from '@/services/prospects.service';

/**
 * 
 * @returns 
 */
export function useProspect() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   *
   * @param newProspect
   */
  async function createProspect(newProspect: CreateProspect) {
    try {
      setLoading(true);
      await createNewProspect(newProspect);
    } catch  {
      setError('Error al procesar tu solicitud');
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    createProspect
  };
}

export { type CreateProspect } from '@/services/prospects.service';